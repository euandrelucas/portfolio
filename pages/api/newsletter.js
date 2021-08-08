import axios from 'axios'

function getRequstParams(email) {
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const LIST_ID = process.env.MAILCHIMP_LIST_ID

    const DATACENTER = process.env.MAILCHIMP_API_KEY.split('-')[1]

    const url = `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`

    const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString('base64')
    const headers = {
        'Content-Type': 'application/json',
        Authorization: `Basic ${base64ApiKey}`
    }

    const data = {
        email_address: email,
        status: 'subscribed'
    }

    return {
        url,
        data,
        headers
    }
}

export default async (req, res) => {
    const {email} = req.body

    if (!email || !email.length) {
        return res.status(400).json({
            error: 'Forgot to add your email?'
        })
    }

    try {
        const { url, data, headers } = getRequstParams(email)
        const response = axios.post(url, data, {headers})

        // Success
        return res.status(201).json({
            error: null
        })
    } catch (e) {
        return res.status(400).json({
            error: 'Oops, something went wrong...'
        })
    }
}
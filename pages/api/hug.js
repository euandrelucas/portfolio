import axios from 'axios'

export default async (req, res) => {
    const response = await axios.get('https://nekos.life/api/hug')
    const image = response.data
    return res.status(200).json({
        link: image.url
    })
}
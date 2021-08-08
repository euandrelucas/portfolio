import { useState } from "react";
import axios from "axios"

export default () => {
    const [email, setEmail] = useState('')
    const [state, setState] = useState('IDLE')
    const [errorMessage, setErrorMessage] = useState(null)

    const subscribe = async () => {
        setState('LOADING')
        setErrorMessage(null)
        try {
            const response = axios.post('/api/newsletter', { email })
            setState('SUCCESS')
        } catch (e) {
            setErrorMessage(e.response.data.error)
            setState('ERROR')
        }
    }

    return (
        <center>
            <br></br>
            <input type='text' class='text-center' placeholder='Insira o Email' value={email} onChange={(e)=> setEmail(e.target.value)}
            ></input>
            <br></br>
            <button disabled={state==='LOADING' } onClick={subscribe}>
                Inscreva-se
            </button>
            {state === 'ERROR' && (
            <p>{errorMessage}</p>
            )}
            {state === 'SUCCESS' && (
            <p>Sucesso!</p>
            )}
        </center>
    )
}
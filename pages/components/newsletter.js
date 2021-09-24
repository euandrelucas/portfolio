import { useState } from "react";
import axios from "axios"

export default () => {
    const [email, setEmail] = useState('')
    const [state, setState] = useState('IDLE')
    const [errorMessage, setErrorMessage] = useState(null)

    const subscribe = async () => {
        if (!email) return alert("Faltou adicionar o email.")
        setState('LOADING')
        setErrorMessage(null)
        try {
            const response = await axios.post('/api/newsletter', { email })
            setState('SUCCESS')
        } catch (e) {
            setErrorMessage(e.response.data.error)
            setState('ERROR')
        }
    }

    return (
        <center>
            <br></br>
            <input type='text' className='dash text-center' placeholder='Insira o Email' value={email} onChange={(e)=> setEmail(e.target.value)}
            ></input>
            <br></br>
            <button className="button" disabled={ state==='LOADING' } onClick={subscribe}>
                Inscreva-se
            </button>
            {state === 'ERROR' && (
                <p>{errorMessage}</p>
            )}
            {state === 'SUCCESS' && (
                <p>Você foi adicionado a minha Newletter!</p>
            )}
        </center>
    )
}
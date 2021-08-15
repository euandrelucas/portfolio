export default (req, res) => {
    const diciojs = require('dicionario.js')
    const joke = diciojs.piada()
    return res.status(200).json({
        pergunta: joke.properties.pergunta,
        resposta: joke.properties.resposta
    })
}
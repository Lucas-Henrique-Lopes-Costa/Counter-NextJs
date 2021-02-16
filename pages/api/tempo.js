function tempo(request, response) { // pedido e requisição do site, essa requisição dica lá até que ela serja repondida(termiinada)
    const dynamicData = new Date();

    response.json({
        date: dynamicData.toGMTString(),
    })
}

// fazendo o next.js entender esse arquivo
export default tempo;
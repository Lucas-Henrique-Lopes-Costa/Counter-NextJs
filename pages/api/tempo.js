function tempo(request, response) { // pedido e requisição do site, essa requisição dica lá até que ela serja repondida(termiinada)
    const apiSecrect = proces.env.CONVERTKIT_API_SECRECT; // variável local
    const dynamicData = new Date();

    const subscriptionResponse = await fetch(`${apiSecrect}`);
    const subscriptionReponseJson = await subscriptionResponse.json();
    const inscritos = subscriptionReponseJson.total_subscriptions;

    response.setHeader('Cach-Control', 's-mazage=10', 'stale-while-revalidate')
    // tempo de request para cada mudança
    
    response.json({
        date: dynamicData.toGTMTString(),
        inscritos: inscritos
    })
}

// fazendo o next.js entender esse arquivo
export default tempo;
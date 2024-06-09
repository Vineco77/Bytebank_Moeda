addEventListener("message", event => {
    conectaAPI();
    setInterval(() => conectaAPI(), 8000)
})

async function conectaAPI() {
    const conectaAPI = await fetch('https://economia.awesomeapi.com.br/last/JPY-BRL')
    const conectaAPITraduzida = await conectaAPI.json()
    postMessage(conectaAPITraduzida.JPYBRL)
}
addEventListener("message", event => {
    conectaAPI()
    setInterval(() => conectaAPI(), 8000)
})

async function conectaAPI() {
    const conectaAPI = await fetch("https://economia.awesomeapi.com.br/json/last/EUR-BRL");
    const conectaAPITraduzido = await conectaAPI.json();
    postMessage(conectaAPITraduzido.EURBRL)
  }
   
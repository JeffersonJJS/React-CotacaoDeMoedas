/* retornar os objetos como uma array e depois fazer um loop para cada array
  poder funcionar  */
  const translate = {
    code: "Moeda coversora",
    codein: "Moeda covertida",
    name: "Nome",
    high: "Máximo",
    low: "Mínimo",
    varBid: "Variação",
    pctChange: "Porcentagem de variação",
    bid: "Compra",
    ask: "Venda",
    timestamp:"Data e hora",
    create_date:"Data de criação"
  }
  /* Declarar todas as moedas em um array que quero pegar cotação */
  const blendCoins = [ 
    "BRL-USD",
    "BRL-CAD",
    "BRL-CHF",
    "BRL-EUR",
    "BRL-CNY",
    "BRL-JPY",
    "BRL-GBP",
    "BRL-JOD",
    "BRL-OMR",
    "BRL-BHD"
  ]
  
  
  blendCoins.forEach(element => {
    /* const que trata os blends de moedas para pegar os dados da API  */
    const e = element.replace("-","")
    /* Aqui é a hora em que a gente consulta de fato a API com tudo preparado */
    const url = 'http://economia.awesomeapi.com.br/json/last/'+element
    fetch(url).then(response => 
      {return response.json()}).then(data =>{  
        console.log(data)
        console.log(data[e].codein)
        console.log(1/data[e].ask)
      })
      
  });
  function Script(){
    return(
      <h1 defaultValue={data[e]}></h1>
    ) 
  }

export default Script
  
  
  
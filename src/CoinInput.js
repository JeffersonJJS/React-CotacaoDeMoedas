import React, { useEffect, useState } from "react";

function CoinInput(props) {
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
    timestamp: "Data e hora",
    create_date: "Data de criação"
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
  /* Hook para pegar valor nas option do select */
  const [valueState, setValueState] = useState(blendCoins[0])
  var [result, setResult] = useState(transform)

   /* const que trata os blends de moedas para pegar os dados da API */
  var transform = []
  const url = "https://economia.awesomeapi.com.br/json/last/"
  for(let i=0;i<blendCoins.length;++i){
    var t = blendCoins[i].replace("-","")/* Aqui é a hora em que a gente consulta de fato a API com tudo preparado  */
    transform.push(t)
  }

    useEffect (()=> { 
    fetch(url+valueState)
    .then(res=> res.json())
    .then(data=> {
      setResult(1/data[valueState.replace("-","")].ask)
    }) 
  },[valueState])
  
  console.log(result)
  return (
    <div>
      <form>
        <label>Moedas: </label>
          <select name="coins" value={valueState} onChange={coin => setValueState(coin.target.value)}>
            <option value={blendCoins[0]}>{blendCoins[0]}</option>
            <option value={blendCoins[1]}>{blendCoins[1]}</option>
            <option value={blendCoins[2]}>{blendCoins[2]}</option>
            <option value={blendCoins[3]}>{blendCoins[3]}</option>
            <option value={blendCoins[4]}>{blendCoins[4]}</option>
            <option value={blendCoins[5]}>{blendCoins[5]}</option>
            <option value={blendCoins[6]}>{blendCoins[6]}</option>
            <option value={blendCoins[7]}>{blendCoins[7]}</option>
            <option value={blendCoins[8]}>{blendCoins[8]}</option>
            <option value={blendCoins[9]}>{blendCoins[9]}</option>
          </select>
      </form>
      <button type="button">cotar</button>
        <h1>{result}</h1>
    </div>
  )
}


export default CoinInput;
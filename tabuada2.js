async function carregar(){

   let tabd = window.document.getElementById("tab");
   let tabd2 = window.document.getElementById("tab2");
   let selec = window.document.getElementById("sele");
   let selec2 = window.document.getElementById("SeleMath");
   let res3 = window.document.getElementById("resultado");
   let imgCalculator = window.document.getElementById("resultado2");
   const resultadoIMC = window.document.getElementById("resultadoIMC");
   let DadosOperacao = selec2.options[selec2.selectedIndex].text;
   
   const url = `https://economia.awesomeapi.com.br/json/last/USD-BRL`
   const url2 = `https://economia.awesomeapi.com.br/json/last/EUR-BRL`
   
  
    if(tabd.value.length === "" || Number(tabd.value <= 0 )){
  
      /// window.alert("Por favor digite  um valor válido , qualquer número maior que zero");
  
    }else if(tabd2.value.length === "" || tabd2.value <= 0){
  
      window.alert("Digite um outro número válido para concluir a operação matematica");
  
    }else{
     
      caixaNum = Number(tabd.value);
      caixaQTD = Number(tabd2.value);
  
      selec.innerHTML = ""
  
     
        if(DadosOperacao === "Tabuada"){
     
        res3.style.display ="block" 
        imgCalculator.style.display ="none"
        resultadoIMC.style.display ="none"
  
        for(let i = 0 ; i <= caixaQTD ; i++){
  
        let lista = document.createElement(`option`)
        lista.text =`${caixaNum} x ${i} = ${caixaNum * i}`
        lista.value = ``
        selec.appendChild(lista)
        }
  
     }else if(DadosOperacao === "Multiplicação"){
  
        res3.style.display ="block" 
        imgCalculator.style.display ="none"
        resultadoIMC.style.display ="none"
    
        let lista = document.createElement(`option`)
        lista.text =`${caixaNum} x ${caixaQTD} = ${caixaNum * caixaQTD}`
        lista.value = ``
        selec.appendChild(lista)
  
     }else if(DadosOperacao === "Subtração"){
  
        res3.style.display ="block" 
        imgCalculator.style.display ="none"
        resultadoIMC.style.display ="none"
       
        let lista = document.createElement(`option`)
        lista.text =`${caixaNum} - ${caixaQTD} = ${caixaNum - caixaQTD}`
        lista.value = ``
        selec.appendChild(lista)
  
     }else if (DadosOperacao === "Soma"){
  
        res3.style.display ="block" 
        imgCalculator.style.display ="none"
        resultadoIMC.style.display ="none"
  
        let lista = document.createElement(`option`)
        lista.text =`${caixaNum} + ${caixaQTD} = ${caixaNum + caixaQTD}`
        lista.value = ``
        selec.appendChild(lista)
  
     }else if (DadosOperacao === "Divisão"){
  
        res3.style.display ="block" 
        imgCalculator.style.display ="none"
        resultadoIMC.style.display ="none"
       
        let lista = document.createElement(`option`)
        lista.text =`${caixaNum} / ${caixaQTD} = ${caixaNum / caixaQTD}`
        lista.value = ``
        selec.appendChild(lista)
  
     }else if(DadosOperacao === "Porcentagem"){
  
        res3.style.display ="block" 
        imgCalculator.style.display ="none"
        resultadoIMC.style.display ="none"
       
        let lista = document.createElement(`option`)
        lista.text =`${caixaNum} % ${caixaQTD} = ${Math.round(caixaNum / caixaQTD*100)} % `
        lista.value = ``
        selec.appendChild(lista)
  
     }else if(DadosOperacao === "IMC") {

        res3.style.display ="none" 
        imgCalculator.style.display ="none"
        resultadoIMC.style.display ="block"
  
       const valorIMC = (caixaQTD / (caixaNum * caixaNum)).toFixed(1);
  
        let classificacao = "" ;
  
        if(valorIMC < 18.5){
           classificacao = "abaixo do peso.";
        }else if(valorIMC < 25){
           classificacao = "com o peso no padrão normal.";   
        }else if(valorIMC < 30){
           classificacao = "levemente acima do peso.";   
        }else if(valorIMC < 35){
           classificacao = "com obesidade grau 1.";   
        }else if(valorIMC < 40){
           classificacao = "com obesidade severa.";   
        }else{
           classificacao = "com obesidade grau 3 (obesidade mórbida).";  
        }
  
        resultadoIMC.innerHTML = `
              <p>Seu IMC é ${valorIMC} , você está ${classificacao}</p> 
              <a id="link" target="_blank" href="https://www.prefeitura.sp.gov.br/cidade/secretarias/saude/noticias/?p=332991">
                 <p> Para saber mais clique aqui</p>
              </a>
           `
       }else if(DadosOperacao === "Raiz") {

         res3.style.display ="none" 
         imgCalculator.style.display ="none"
         resultadoIMC.style.display ="block"

         if(caixaQTD !== 2 && caixaQTD !== 3) {
            window.alert("O campo só recebe a raiz  2 ou 3 ");

         }else if(caixaQTD == 2){

            resultadoIMC.innerHTML = `
            <p> A raiz quadrada de ${caixaNum} é ${Math.sqrt(caixaNum)}</p> 
            `

         }else if(caixaQTD == 3){

            resultadoIMC.innerHTML = `
            <p> A raiz cúbica de ${caixaNum} é ${Math.cbrt(caixaNum)}</p> 
            `

         }
         
       }else if(DadosOperacao === "Dollar") {

         const response = await fetch(url);
         const data = await response.json()
         const real = await data.USDBRL.ask
         const NumberReal = Number(real)
         console.log(data)
         

         res3.style.display ="none" 
         imgCalculator.style.display ="none"
         resultadoIMC.style.display ="block"

         resultadoIMC.innerHTML = `
         <p> 1 dólar esta valendo ${(NumberReal).toFixed(2).replace(".",",")} em reais ,
         ${caixaNum} em dólar  esta valendo <strong>${(caixaNum * NumberReal).toFixed(2).replace(".",",")}</strong> em reais 
         </p> 
         <p class="moedaOBS">OBS: Para obter resultados em tempo real recarregue a página antes da consulta </p>
         `
      }else if(DadosOperacao === "Euro") {

         const response2 = await fetch(url2);
         const data2 = await response2.json()
         const real2 = await data2.EURBRL.ask
         const NumberReal =  Number(real2)
         console.log(data2)
         

         res3.style.display ="none" 
         imgCalculator.style.display ="none"
         resultadoIMC.style.display ="block"

         resultadoIMC.innerHTML = `
         <p> 1 Euro esta valendo ${(NumberReal).toFixed(2).replace(".",",")} em reais ,
         ${caixaNum} em Euro esta valendo ${(caixaNum * NumberReal).toFixed(2).replace(".",",")} em reais 
         </p> 
         <p class="moedaOBS">OBS: Para obter resultados em tempo real recarregue a página antes da consulta </p>
         `
      }
  
    }
  }

  let tabd = window.document.getElementById("tab");
  let tabd2 = window.document.getElementById("tab2");
  let selec2 = window.document.getElementById("SeleMath");
  let labelFirst = window.document.querySelector("#labelFirst");
  let labelSecond = window.document.querySelector("#labelSecond");
  let firstDiv = window.document.querySelector("#firstDiv");
  let secondDiv = window.document.querySelector("#secondDiv");

  

  selec2.addEventListener("change",function(){

   firstDiv.style.animation = "none";
   secondDiv.style.animation = "none";

   setTimeout(function(){
      firstDiv.style.animation = "";
      secondDiv.style.animation = ""
   },4000);

   const DadosOperacao2 = selec2.value
   
   if(DadosOperacao2 === "IMC"){

      firstDiv.style.animation = "go-back 5s"
      secondDiv.style.animation = "go-back 5s"

      labelFirst.textContent = "Altura"
      labelSecond.textContent = "Peso"
      tabd.placeholder = "Ponto ou virgula EX:(1,87)"
      tabd.value =""
      tabd2.value = ""
      tabd2.style.display ="block"
       
     
   }else if(DadosOperacao2 === "Tabuada" ||
   DadosOperacao2 === "Multiplicação" ||
   DadosOperacao2 === "Subtração" ||
   DadosOperacao2 === "Soma"||
   DadosOperacao2 === "Divisão" ||
   DadosOperacao2 === "Porcentagem" ||
   DadosOperacao2 === "Raiz") {
   
      labelFirst.textContent = "Digite um número"
      labelSecond.textContent = "Digite outro número"
      tabd.placeholder = ""
      tabd2.style.display ="block"
      tabd.value =""
      tabd2.value = ""
   }

   if(DadosOperacao2 === "Raiz") {

      firstDiv.style.animation = "go-back 5s"
      secondDiv.style.animation = "go-back 5s"

      labelFirst.textContent = "Número"
      labelSecond.textContent = "Quadrada(2)/cúbica(3)"
      tabd.value =""
      tabd2.value = ""
      tabd2.style.display ="block"

   }
   
   if(DadosOperacao2 === "Dollar") {

  
      firstDiv.style.animation = "go-back 5s"
      secondDiv.style.animation = "go-back 5s"

      labelFirst.textContent = "Moeda(dólar)"
      labelSecond.textContent = "Conversor de moeda"
      secondDiv.style.height = "85px"
      tabd.value =""
      tabd.placeholder = ""
      tabd2.style.display ="none"
      tabd2.value = 1

   }

   if(DadosOperacao2 === "Euro") {

      
      firstDiv.style.animation = "go-back 5s"
      secondDiv.style.animation = "go-back 5s"

      labelFirst.textContent = "Moeda(euro)"
      labelSecond.textContent = "Conversor de moeda"
      secondDiv.style.height = "85px"
      tabd.value =""
      tabd.placeholder = ""
      tabd2.style.display ="none"
      tabd2.value = 1

   }

   console.log(selec2.value)

})


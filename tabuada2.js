function carregar(){

   let tabd = window.document.getElementById("tab");
   let tabd2 = window.document.getElementById("tab2");
   let selec = window.document.getElementById("sele");
   let selec2 = window.document.getElementById("SeleMath");
   let res3 = window.document.getElementById("resultado");
   let imgCalculator = window.document.getElementById("resultado2");
   const resultadoIMC = window.document.getElementById("resultadoIMC");
   let DadosOperacao = selec2.options[selec2.selectedIndex].text;
  
  
    if(tabd.value.length === "" || Number(tabd.value <= 0 )){
  
      window.alert("Por favor digite  um valor válido , qualquer número maior que zero");
  
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
         console.log("testando")

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

   const DadosOperacao2 = selec2.value
   
   if(DadosOperacao2 === "IMC"){
      labelFirst.textContent = "Altura"
      labelSecond.textContent = "Peso"
      tabd.placeholder = "Ponto ou virgula EX:(1,87)"
      tabd.value =""
      tabd2.value = ""

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
      
   }

   if(DadosOperacao2 === "Raiz") {

      labelFirst.textContent = "Número"
      labelSecond.textContent = "Quadrada(2)/cúbica(3)"
      tabd.value =""
      tabd2.value = ""

   }


   console.log(selec2.value)

})


function carregar2(){

 let tabd = window.document.getElementById("tab");
 let tabd2 = window.document.getElementById("tab2");
 let selec = window.document.getElementById("sele");
 let selec2 = window.document.getElementById("SeleMath");
 let res3 = window.document.getElementById("resultado");
 let imgCalculator = window.document.getElementById("resultado2")
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

      for(let i = 0 ; i <= caixaQTD ; i++){

      let lista = document.createElement(`option`)
      lista.text =`${caixaNum} x ${i} = ${caixaNum * i}`
      lista.value = ``
      selec.appendChild(lista)
      }

   }else if(DadosOperacao === "Multiplicação"){

      res3.style.display ="block" 
      imgCalculator.style.display ="none"
  
      let lista = document.createElement(`option`)
      lista.text =`${caixaNum} x ${caixaQTD} = ${caixaNum * caixaQTD}`
      lista.value = ``
      selec.appendChild(lista)

   }else if(DadosOperacao === "Subtração"){

      res3.style.display ="block" 
      imgCalculator.style.display ="none"
     
      let lista = document.createElement(`option`)
      lista.text =`${caixaNum} - ${caixaQTD} = ${caixaNum - caixaQTD}`
      lista.value = ``
      selec.appendChild(lista)

   }else if (DadosOperacao === "Soma"){

      res3.style.display ="block" 
      imgCalculator.style.display ="none"

      let lista = document.createElement(`option`)
      lista.text =`${caixaNum} + ${caixaQTD} = ${caixaNum + caixaQTD}`
      lista.value = ``
      selec.appendChild(lista)

   }else if (DadosOperacao === "Divisão"){

      res3.style.display ="block" 
      imgCalculator.style.display ="none"
     
      let lista = document.createElement(`option`)
      lista.text =`${caixaNum} / ${caixaQTD} = ${caixaNum / caixaQTD}`
      lista.value = ``
      selec.appendChild(lista)

   }else if(DadosOperacao === "Porcentagem"){

      res3.style.display ="block" 
      imgCalculator.style.display ="none"
     
      let lista = document.createElement(`option`)
      lista.text =`${caixaNum} % ${caixaQTD} = ${Math.round(caixaNum / caixaQTD*100)} % `
      lista.value = ``
      selec.appendChild(lista)


   }


  }


}
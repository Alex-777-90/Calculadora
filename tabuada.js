function tabuada(numtabuada,quantidadeDeVezesAmultiplicar){

 let resultado= 0

  for (i= 0 ; i <= quantidadeDeVezesAmultiplicar; i++ ){
    
    resultado += console.log(`${numtabuada} x ${i} = ${numtabuada * i}`) ;
   
  }
}
(tabuada(8,20));


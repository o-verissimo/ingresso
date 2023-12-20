
function comprar(){

    //recuperar os tipos de ingresso e quantidade
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    //subtrair da quantidade restante e mostrar mensagem caso a quantidade desejada seja maior que os ingressos desejados
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);

    console.log(quantidade, qtdPista)  
    
    switch (ingresso){

        case 'inferior':
            if (quantidade > qtdInferior){
                alert(`quantidade indisponível para Cadeira Inferior!`); 
            }else{
                  qtdInferior = qtdInferior - quantidade;
                  document.getElementById('qtd-inferior').textContent = qtdInferior;
                  alert(`Compra realziada com sucesso!`);
                }  
                        
        break;
       
        case 'superior':
            if (quantidade > qtdSuperior){
                alert(`quantidade indisponível para Cadeira Superior!`); 
            }else{
                qtdSuperior = qtdSuperior - quantidade;
                document.getElementById('qtd-superior').textContent = qtdSuperior;
                alert(`Compra realziada com sucesso!`);
            }       

        break;   
               
        case 'pista':

            if (quantidade > qtdPista){
                alert(`quantidade indisponível para Cadeira Superior!`); 
            }else{
                qtdPista = (qtdPista - quantidade);
                document.getElementById('qtd-pista').textContent = qtdPista;
                alert(`Compra realziada com sucesso!`);
            } 

        break;                      
            
    

    }  
}
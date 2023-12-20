
function comprar(){

    //recuperar os tipos de ingresso e quantidade
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = parseInt(document.getElementById('qtd').value);
    //subtrair da quantidade restante e mostrar mensagem caso a quantidade desejada seja maior que os ingressos desejados
    let qtdPista = parseInt(document.getElementById('qtd-pista').textContent);
    let qtdSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    let qtdInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    
    switch (ingresso){
        case 'inferior':
            if (qtdInferior > quantidade){
                qtdInferior = qtdInferior - quantidade;
                qtdInferior.document.getElementById('qtd-inferior').textContent = qtdInferior;
            }else{
                  alert(`quantidade indisponível para Pista!`); 
            }  
                        
        break;
       
        case 'superior':
            if (qtdSuperior > quantidade){
                qtdSuperior = qtdSuperior - quantidade;
                qtdSuperior.document.getElementById('qtd-superior').textContent = qtdSuperior;
            }else{
                  alert(`quantidade indisponível para Pista!`); 
        break;   

        case 'pista':
            if (qtdPista > quantidade){
                qtdPista = qtdPista - quantidade;
                qtdPista.document.getElementById('qtd-pista').textContent = qtdPista;
            }else{
                alert(`quantidade indisponível para Pista!`); 
            }  
        break;                      
            
    }  

}

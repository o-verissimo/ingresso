
function comprar(){

    //recuperar os tipos de ingresso e quantidade
    let ingresso = document.getElementById('tipo-ingresso').value;
    let quantidade = document.getElementById('qtd').value;
    //subtrair da quantidade restante e mostrar mensagem caso a quantidade desejada seja maior que os ingressos desejados
    let lista = document.querySelector('.lista');
    let qtdPista = document.getElementById('qtd-pista').textContent;
    let qtdSuperior = document.getElementById('qtd-superior').textContent;
    let qtdInferior = document.getElementById('qtd-inferior').textContent;
    
    switch (ingresso){
        case 'inferior':
            if (qtdInferior - quantidade >= 0){
                qtdInferior = qtdInferior - quantidade;
                lista.innerHTML = `<li>Pista<span id="qtd-pista">${qtdPista}</span></li>
                                   <li>Cadeira superior<span id="qtd-superior">${qtdSuperior}</span></li>
                                   <li>Cadeira inferior<span id="qtd-inferior">${qtdInferior}</span></li>`;
            }else{
                alert(`quantidade indisponível para Cadeira Inferior!`); 
            }  
        break;
        
        case 'superior':
            if (qtdSuperior - quantidade >= 0){
                qtdSuperior = qtdSuperior - quantidade;
                lista.innerHTML = `<li>Pista<span id="qtd-pista">${qtdPista}</span></li>
                                   <li>Cadeira superior<span id="qtd-superior">${qtdSuperior}</span></li>
                                   <li>Cadeira inferior<span id="qtd-inferior">${qtdInferior}</span></li>`;
            }else{
                alert(`quantidade indisponível para Cadeira Superior!`); 
            }  
        break;   

        case 'pista':
            if (qtdPista - quantidade >= 0){
                qtdPista = qtdPista - quantidade;
                lista.innerHTML = `<li>Pista<span id="qtd-pista">${qtdPista}</span></li>
                                   <li>Cadeira superior<span id="qtd-superior">${qtdSuperior}</span></li>
                                   <li>Cadeira inferior<span id="qtd-inferior">${qtdInferior}</span></li>`;
            }else{
                alert(`quantidade indisponível para Pista!`); 
            }  
        break;                      
            
    }  

}

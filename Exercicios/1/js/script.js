document.querySelectorAll("#botaoDeEnviar").addEventListener("click", function armazenarDados(event) {
 event.preventDefault();

 let nome = document.getElementById('nomeDaPessoa');

 let exibeResposta = Document.getElementById('resposta');
 
 
 if (nome value === '') {
    
    console.log(nome.value);
   exibeResposta.innerText 'Por favor, digite o seu nome';  
 } else {
    exibirResposta.innerHTML = (`${pegaNome, value}, dados salvos com sucesso!`);
 } 
})
let pedro = {
    nome: 'Pedro',
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
}
let rafa = {
    nome: 'Rafa',
    vitoria: 0, 
    empate: 0,
    derrota: 0,
    pontos: 0
}

exibirTela()

function exibirTela(){
   
    let elementoTabela = document.querySelector('#tabelaJogadores') 
    elementoTabela.innerHTML = `
        <tr>
            <td>${pedro.nome}</td>
            <td>${pedro.vitoria}</td>
            <td>${pedro.empate}</td>
            <td>${pedro.derrota}</td>
            <td>${pedro.pontos}</td>
            <td><button onClick="adicionarVitoria(pedro)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(pedro)">Empate</button></td>
            <td><button onClick="adicionarDerrota(pedro)">Derrota</button></td>
        </tr>`

}


function adicionarVitoria(jogador){

    jogador.vitoria++
    jogador.pontos = jogador.pontos + 3
    exibirTela()

}
function adicionarEmpate(jogador){
    
    jogador.empate++
    jogador.pontos++
    exibirTela()

}
function adicionarDerrota(jogador){
    
    jogador.derrota++
    exibirTela()

}

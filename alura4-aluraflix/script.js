function addFilme(){
    let filme = document.querySelector('#filme').value
    let listaFilme = document.querySelector('#listaFilmes')

    listaFilme.innerHTML = listaFilme.innerHTML + '<img src='+filme+'>'

    document.querySelector('#filme').value = ''
}


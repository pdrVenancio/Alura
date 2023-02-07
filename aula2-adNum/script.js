var numSecreto = parseInt(Math.random() * 1001)
var cont = 0

if(numSecreto != 0){
    while(chute != numSecreto ){

        cont=cont+1
    
        alert('tentativa numero: '+ cont)

        var chute = prompt('chute entre 0 e 1000')

        if(chute == numSecreto){
            alert('voce acertou! o numero era'+ numSecreto)
        }
        else{
            if(chute > numSecreto){
                alert('Tente de novo! Dica o número é menor')
            }else{
                alert('Tente de novo! Dica o número é maior')
            }
            
        }
        
    }
}


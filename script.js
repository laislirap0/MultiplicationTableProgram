function tabuada() {

    // variáveis

    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')

    // condições de acordo com o formulário
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número.')
    } else {
        let n = Number(num.value)
        
        // criando option de forma dinâmica
        let contador = 1 
        // limpando o select para uma nova operação ser realizada
        tab.innerHTML = ''

        while (contador <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${contador} = ${n*contador}`

            // adicionando um elemento filho a variável tab
            tab.appendChild(item)
            contador++
        }
    }
}
function verificar() {
    var num1 = Number(window.document.querySelector('input#txtnum1').value)
    var num2 = Number(window.document.querySelector('input#txtnum2').value)
    var passo = Number(window.document.querySelector('input#txtpasso').value)
    var res = window.document.querySelector('div#res')
    if (!num1 || !num2) {
        res.innerHTML = 'Impossível contar!'
        return
    }
    if (passo == 0) {
        passo = 1
    }
    res.innerHTML = '<p>Contando: </p>'
    for (var c = num1; c <= num2; c += passo) {
        res.innerHTML += `${c} 👉 `
    }
    res.innerHTML = res.innerHTML += '🏁';
}

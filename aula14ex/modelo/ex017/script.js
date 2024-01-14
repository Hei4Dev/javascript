function verificar() {
    var num = window.document.querySelector('input#txtnum').value.trim()
    var res = window.document.querySelector('div#res')
    if (num === '') {
        alert('Por favor, digite um número!')
        return
    }
    res.innerHTML = 'Tabuada: <br>'
    for (var c = 1; c <= 10; c++) {
        res.innerHTML += `${num} x ${c} = ${num * c} <br>`
    }
}
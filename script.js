let tela = ''

function capturarTeclado(event) {
    const tecla = event.key;
    
    if (/[0-9+\-*/.=]/.test(tecla)) {
        mostrarNaTela(tecla);
    }
    
    if (tecla === 'Enter') {
        resultado();
    }
    if (tecla === 'Escape') {
        limparTela();
    }
}

document.addEventListener('keydown', capturarTeclado);
function mostrarNaTela(value) {
    tela += value
    document.getElementById('tela').value = tela
}

function limparTela() {
    tela = ''
    document.getElementById('tela').value = tela
}

function resultado() {
    try {
        tela = eval(tela)
        document.getElementById('tela').value = tela
    } catch (Erro) {
        document.getElementById('tela').value = tela
    }
}
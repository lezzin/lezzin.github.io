'use strict'

const cidade = document.querySelector("#cidade")
const estado = document.querySelector("#estado")

const limparFormulario = (endereco) => {
    cidade.value = "";
    estado.value = "";
}

const preencherFormulario = (endereco) => {
    limparFormulario();
    cidade.value = endereco.localidade;
    estado.value = endereco.uf;
}

const eNumero = (numero) => /^[0-9]+$/.test(numero);
const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisaCep = async () => {
    limparFormulario();
    const cep = document.querySelector("#cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if (cepValido(cep)) {
        const dados = await fetch(url);
        const endereco = await dados.json();
        if (endereco.hasOwnProperty('error')) {
            cidade.value = 'CEP não encontrado';
        } else {
            preencherFormulario(endereco);
        };
    } else {
        cidade.value = 'CEP incorreto';
    };
};
cep.addEventListener("focusout", pesquisaCep);
cep.addEventListener("keydown", function (e) {
    if (e.which == 13) {
        pesquisaCep();
    }
});
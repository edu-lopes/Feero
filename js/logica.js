const iptItem = document.getElementById('iptItem');
const iptPeso = document.getElementById('iptPeso');
const listaItens = document.getElementById('listaItens');

function listaCard() {
    const nome = iptItem.value.trim();
    const peso = Number(iptPeso.value.trim());

    // Evita adicionar cartões vazios
    if (nome === '' || peso === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    if(peso < 0) {
        alert('Por favor, digite um valor positivo')
        return
    }

    const estilizacao = getComputedStyle(document.documentElement);
    let corCondicao = '';

    if(peso >= 0 && peso <= 1) {
        corCondicao = estilizacao.getPropertyValue('--verdeClaroFamily');
    }
    else if(peso >= 2 && peso <= 3) {
        corCondicao = estilizacao.getPropertyValue('--verdeNeonFamily');
    }
    else if(peso >= 4 && peso <= 5) {
        corCondicao = estilizacao.getPropertyValue('--azulClaroFamily');
    }
    else if(peso >= 6 && peso <= 7) {
        corCondicao = estilizacao.getPropertyValue('--azulBrains');
    }
    else if(peso >= 8 && peso <= 9) {
        corCondicao = estilizacao.getPropertyValue('--laranjaPersonal');
    }
    else if(peso >= 10 && peso <= 11) {
        corCondicao = estilizacao.getPropertyValue('--laranjaBrains');
    }
    else if(peso >= 12 && peso <= 13) {
        corCondicao = estilizacao.getPropertyValue('--coralLovers');
    }
    else if(peso >= 14) {
        corCondicao = estilizacao.getPropertyValue('--vinhoLovers');
    }

    // Cria o card
    const card = document.createElement('div');
    card.classList.add('cardItem');
    card.style.backgroundColor = corCondicao;

    card.innerHTML = `
        <h1>Item: ${nome}</h1>
        <h1>Peso: ${peso}</h1>
    `;

    listaItens.appendChild(card);

    iptItem.value = '';
    iptPeso.value = '';
}

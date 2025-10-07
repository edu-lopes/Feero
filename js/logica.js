const iptItem = document.getElementById('iptItem');
const iptPeso = document.getElementById('iptPeso');
const listaItens = document.getElementById('listaItens');

function listaCard() {
    const nome = iptItem.value.trim();
    const peso = iptPeso.value.trim();

    // Evita adicionar cartões vazios
    if (nome === '' || peso === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    const estilizacao = getComputedStyle(document.documentElement);
    const varCores = [
        '--azulBrains',
        '--laranjaBrains',
        '--brancoBrains',
        '--pretoBrains',
        '--roxoBrains',
        '--rosaBrains',

        '--verdeClaroFamily',
        '--azulClaroFamily',
        '--brancoFamily',
        '--cinzaFamily',
        '--cinzaFamilEscuro',
        '--amareloFamily',
        '--verdeNeonFamily',

        '--rosaClaroLovers',
        '--lavandaLovers',
        '--brancoLovers',
        '--cinzaClaroLovers',
        '--coralLovers',
        '--turquesaLovers',
        '--vinhoLovers',
        '--roxoLovers',

        '--azulPersonal',
        '--cinzaPersonal',
        '--brancoPersonal',
        '--verdePersonal',
        '--laranjaPersonal',
        '--vermelhoPersonal'
    ]

    const corAleatoriaVar = varCores[Math.floor(Math.random() * varCores.length)];
    const corAleatoria = estilizacao.getPropertyValue(corAleatoriaVar).trim();

    // Cria o card
    const card = document.createElement('div');
    card.classList.add('cardItem');
    card.style.backgroundColor = corAleatoria;

    card.innerHTML = `
        <h1>Item: ${nome}</h1>
        <h1>Peso: ${peso}</h1>
    `;

    listaItens.appendChild(card);

    iptItem.value = '';
    iptPeso.value = '';
}

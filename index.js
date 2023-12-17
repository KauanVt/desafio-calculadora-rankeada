function calcularMaestria(vitorias, derrotas) {
    const quantidadeDeVitorias = vitorias - derrotas;
    let maestria = '';


    const maestrias = [
        {limite: 10, nome: 'Ferro'},
        {limite: 20, nome: 'Bronze'},
        {limite: 50, nome: 'Prata'},
        {limite: 80, nome: 'Ouro'},
        {limite: 90, nome: 'Diamante'},
        {limite: 100, nome: 'Lendário'},
        {limite: Infinity, nome: 'Imortal'}
    ];


    for (let i = 0; i < maestrias.length; i++) {
        if (quantidadeDeVitorias <= maestrias[i].limite) {
            maestria = maestrias[i].nome;
            break;
        }
    };

    return `O Herói tem o saldo de ${quantidadeDeVitorias} pontos e está no Ranking ${maestria} de maestria!`;
}

console.log(calcularMaestria(102, 13));

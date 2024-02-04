

//var global -> tag imagem de visualizacao
const imagemVisualizacao = document.getElementById('imagem-visualizacao');
//var global -> titulo do produto
const tituloProduto = document.getElementById('titulo-produto');
//var global -> nome da cor do produto
const nomeCor = document.getElementById('nome-cor-selecionada');
//var global ->trocar imagem miniatura
const miniaturaImagem0 = document.getElementById('0-imagem-miniatura');
const miniaturaImagem1 = document.getElementById('1-imagem-miniatura');
const miniaturaImagem2 = document.getElementById('2-imagem-miniatura');

/*informações das imagens  obj*/
const verdeCipreste = {
  nome : 'Verde-cipreste',
  pasta: 'imagens-verde-cipreste'

};


const azulInverno = {
     nome : 'Azul-inverno',
     pasta: 'imagens-azul-inverno'

};


const meiaNoite = {
  nome : 'Meia-noite',
  pasta: 'imagens-meia-noite'

};


const estelar = {
  nome : 'Estelar',
  pasta: 'imagens-estelar'

};


const rosaClaro = {
  nome : 'Rosa-claro',
  pasta: 'imagens-rosa-claro'

};


/*Array(lista) lista cores------------------------------ */
const opcoesCores = [verdeCipreste, azulInverno,meiaNoite,estelar, rosaClaro];
/*Array(lista) opcoes tamanho------------------------------ */
const opcoesTamanho = ['41 mm', '45 mm'];



//var controle trocar imagem do relogio  
let imagemSelecionada = 1;
//var controle de tamanho caixa
let tamanhoSelecionado = 1;//começa na opcao 1
//var controle de trocar cor selecionada
let corSelecionada = 1;

function trocarImagem() {
  const idOpcaoSelecionada = document.querySelector('[name="opcao-imagem"]:checked').id;
  imagemSelecionada = idOpcaoSelecionada.charAt(0);
  imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'

}

function trocarTamanho() {
  //atualizar var de controle de tamanho da caixa
  const idOpcaoSelecionada = document.querySelector('[name="opcao-tamanho"]:checked').id;
  tamanhoSelecionado = idOpcaoSelecionada.charAt(0);
  //mudar o titulo do produto
  tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " azul-inverno para caixa de " + opcoesTamanho[tamanhoSelecionado];
   //mudar tamanho da imagem de acordo com a opcao
   if (opcoesTamanho[tamanhoSelecionado] === '41 mm') {

    imagemVisualizacao.classList.add('caixa-pequena');

   }else {
    imagemVisualizacao.classList.remove('caixa-pequena');

   }
}

function trocarCor () {
  //atualizar cor selecionada
  const idOpcaoSelecionada = document.querySelector('[name="opcao-cor"]:checked').id;
  corSelecionada = idOpcaoSelecionada.charAt(0);
  //trocar titulo da pagina
  tituloProduto.innerText = "Pulseira loop esportiva " + opcoesCores[corSelecionada].nome + " para caixa de " + opcoesTamanho[tamanhoSelecionado];
  //trocar nome da cor
  nomeCor.innerText = 'Cor - ' + opcoesCores[corSelecionada].nome
  //trocar imagens de minaturas exibidas
  miniaturaImagem0.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-0.jpeg';
  miniaturaImagem1.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-1.jpeg';
  miniaturaImagem2.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-2.jpeg';
  //trocar imagem de visualizacao
  imagemVisualizacao.src = './imagens/opcoes-cores/' + opcoesCores[corSelecionada].pasta + '/imagem-' + imagemSelecionada + '.jpeg'

  //

}
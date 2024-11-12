const prompt = require('prompt-sync')();
const {VeiculoController} = require('../controllers/VeiculoController');
const controller = new VeiculoController();

function iniciarSistema(){
    let opcao;
    do{
        console.log('=== Sistema de Gerenciamentos de Veículos ===');
        console.log('1. Adicionar Veículo');
        console.log('2. Listar Veículos');
        console.log('3. Editar');
        console.log('4. Excluir Veículo')
        console.log('0. Sair');
        opcao = prompt('Escolha uma opção (0 a 4):  ');
        switch(opcao){
            case '0':
                console.log('Saindo do sistema...');
                break;
            case '1':
                adicionarVeiculo();
                break;
            case '2':
                controller.listarVeiculos();
                break;
            case '3': 
                editarVeiculo();
                break;
            case '4': 
                excluirVeiculo();
                break;
            default:
                console.log('Opção Inválida');    
        }
    }while(opcao!=='0');
}

function adicionarVeiculo(){
    const tipo = prompt('Digite o tipo de veículo (Carro/Moto/Veiculo): ');
    const marca = prompt('Digite a marca do veículo: ');
    const ano = parseInt(prompt('Digite o ano do veículo: '));
    const cor = prompt('Digite a cor do veículo: ');
    const modelo = prompt('Digite o modelo do veículo: ');
    controller.criarVeiculo(tipo,marca,ano,modelo,cor);
}

function editarVeiculo(){
  controller.listarVeiculos();
  const indice = parseInt(prompt('Digite o indice que você deseja editar: '))
  const result = controller.buscarId(indice);
  console.log(result)
  if(result){
    console.log('Informe os novos dados (pressione Enter para manter o valor atual):');
    const marca = prompt('Nova marca: ');
    const ano = parseInt(prompt('Novo ano: '));
    const modelo = prompt('Novo modelo: ');
    const cor = prompt('Nova cor: ');
    const novosDados = {};
    if(marca) novosDados.marca = marca;
    if(ano) novosDados.ano = ano;
    if(modelo) novosDados.modelo = modelo;
    if(cor) novosDados.cor = cor;
    controller.editarVeiculo(indice, novosDados);
  }else{
    console.log('Informe um índice válido!');
    return
  }

}



iniciarSistema();
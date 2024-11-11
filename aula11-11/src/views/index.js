const prompt = require('prompt-sync')();
const {VeiculoController} = require('../controllers/VeiculoController');
const controller = new VeiculoController();

function iniciarSistema(){
    let opcao;
    do{
        console.log('=== Sistema de Gerenciamentos de Veículos ===');
        console.log('1. Adicionar Veículo');
        console.log('2. Listar Veículos');
        console.log('3. Sair');
        opcao = prompt('Escolha uma opção:');
        switch(opcao){
            case '1':
                adicionarVeiculo();
                break;
            case '2':
                controller.listarVeiculos();
                break;
            case '3':
                console.log('Saindo do sistema...');
                break;
            default:
                console.log('Opção Inválida');    
        }
    }while(opcao!=='3');
}

function adicionarVeiculo(){
    const tipo = prompt('Digite o tipo de veículo (Carro/Moto/Veiculo)');
    const marca = prompt('Digite a marca do veículo:');
    const ano = parseInt(prompt('Digite o ano do veículo:'));
    const cor = prompt('Digite a cor do veículo:');
    const modelo = prompt('Digite o modelo do veículo:');
    controller.criarVeiculo(tipo,marca,ano,modelo,cor);
}

iniciarSistema();
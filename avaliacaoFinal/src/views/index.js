const {TarefaController} = require('../controllers/TarefaController');

const tarefaController = new TarefaController();

let dadosTarefa = {descricao: 'Caminhar', data: '19-11-2024', prioridade: 'alta'};
tarefaController.adicionarTarefa(dadosTarefa,'pessoal');
tarefaController.adicionarTarefa(dadosTarefa, 'comum');
dadosTarefa = {descricao: 'Fazer relatório', data: '19-11-2024', prioridade: 'alta'};
tarefaController.adicionarTarefa(dadosTarefa, 'profissional')


tarefaController.listarTarefas();
tarefaController.listarTarefasPessoais();
tarefaController.listarTarefasProfissionais();
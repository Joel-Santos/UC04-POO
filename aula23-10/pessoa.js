// Definição da classe Pessoa
class Pessoa {
    // Atributos comentados que não precisam ser declarados fora do constructor em JavaScript moderno
    // nome;
    // rg;
    // cpf
    // idade
    // sexo;
    // nacionalidade;
    // estadoCivil;

    // O construtor é um método especial que é chamado quando criamos uma nova instância da classe
    // Ele recebe os parâmetros nome, rg, cpf, idade, sexo, nacionalidade, estadoCivil
    constructor(nome, rg, cpf, idade, sexo, nacionalidade, estadoCivil) {
        // Inicializa os atributos da classe com os valores passados no momento da criação do objeto
        this.nome = nome;
        this.rg = rg;
        this.cpf = cpf;
        this.idade = idade;
        this.sexo = sexo;
        this.nacionalidade = nacionalidade;
        this.estadoCivil = estadoCivil;
    }

    // Métodos "getters" para acessar os atributos da classe

    // Retorna o nome da pessoa
    getNome() {
        return this.nome;
    }

    // Retorna o RG da pessoa
    getRg() {
        return this.rg;
    }

    // Retorna o CPF da pessoa
    getCpf() {
        return this.cpf;
    }

    // Retorna a idade da pessoa
    getIdade() {
        return this.idade;
    }

    // Retorna o sexo da pessoa
    getSexo() {
        return this.sexo;
    }

    // Retorna a nacionalidade da pessoa
    getNacionalidade() {
        return this.nacionalidade;
    }

    // Retorna o estado civil da pessoa
    getEstadoCivil() {
        return this.estadoCivil;
    }

    // Método "setter" para alterar o nome da pessoa
    // Recebe um novo valor para o nome e atualiza o atributo 'nome' com esse valor
    setNome(nome) {
        this.nome = nome;
    }

    // Método para exibir os dados da pessoa no console
    // Ele formata todos os atributos da pessoa em um bloco organizado
    exibirDados() {
        console.log(
            `
                Dados Pessoais:
                Nome: ${this.nome},  // Exibe o nome
                RG: ${this.rg},      // Exibe o RG
                CPF: ${this.cpf},    // Exibe o CPF
                Idade: ${this.idade},  // Exibe a idade
                Sexo: ${this.sexo},   // Exibe o sexo
                Nacionalidade: ${this.nacionalidade},  // Exibe a nacionalidade
                Estado Civil: ${this.estadoCivil}  // Exibe o estado civil
            `
        );
    }

}

// Criação de uma instância (objeto) da classe Pessoa
// Passa os valores para os atributos: nome "Joel", rg "8855", cpf "559847", idade "18", sexo "Indefinido", nacionalidade "Brasileira", estadoCivil "Sei lá"
let pessoa01 = new Pessoa("Joel", 8855, 559847, 18, "Indefinido", "Brasileira", "Sei lá");

// Exibe o nome da pessoa usando o método getNome()
console.log(pessoa01.getNome());  // Exibe: Joel

// Altera o nome da pessoa para "Joelma" usando o método setNome()
pessoa01.setNome("Joelma");

// Exibe todos os dados da pessoa no formato organizado, chamando o método exibirDados()
pessoa01.exibirDados();

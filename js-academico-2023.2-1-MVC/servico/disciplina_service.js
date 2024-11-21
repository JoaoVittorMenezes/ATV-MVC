class DisciplinaService{


    constructor() {
        this._repositorioDisciplina = new DisciplinaRepository();
    }

    inserirDisciplina(codigo, nome) {
        let pesquisados= this.pesquisarPorCodigo(codigo).length;
        if ( pesquisados > 0) {
            throw new Error('Código já utilizado')
        }
        const novaDisciplina = new disciplina(codigo, nome);
        this._repositorioDisciplina.inserir(novaDisciplina);
        return novaDisciplina;
    }

    pesquisarPorCodigo(codigo) {
        let num = this._repositorioDisciplina.listar().filter((disciplina) => disciplina.codigo === codigo);
        console.log(num)
        return num
    }

    pesquisarPorNome(nome) {
        return this._repositorioDisciplina.listar().filter((disciplina) => disciplina.nome === nome);
    }


    removerDisciplina(codigo) {
        if (!this.pesquisarPorCodigo(codigo)) {
            throw new Error('Disciplina inexistente')
        }

        this._repositorioDisciplina.removerDisciplina(codigo);
    }


    adicionarAlunoDisciplina(codigo, matricula) {
        const disciplina = this._repositorioDisciplina.listar().find((disciplina) => disciplina.codigo === codigo);

        if (!disciplina) {
            throw new Error(`Disciplina com código ${codigo} não encontrada`);
        }

        disciplina.alunos.push(matricula);
        return this._repositorioDisciplina.listar();
    }
    

}



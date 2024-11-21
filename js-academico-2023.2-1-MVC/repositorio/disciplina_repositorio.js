class DisciplinaRepository {

    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        console.log("cheguei")
        this.disciplinas.push(disciplina);
    }

    removerDisciplina(codigo){
        const indxDisciplinaARemover = this._disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplinaARemover > -1) {
            this.disciplinas.splice(indxDisciplinaARemover, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }


}
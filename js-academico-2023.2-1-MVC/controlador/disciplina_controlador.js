class DisciplinaControlador{
    constructor() {
        this.servico = new DisciplinaService();
    }

    inserirDisciplina() {
        const nomeDisciplinaElemento = document.querySelector("#nome_disciplina").value;
        const codigoElemento = document.querySelector("#codigo").value;
        const DisciplinaInserida = this.servico.inserirDisciplina(codigoElemento, nomeDisciplinaElemento);


        const listaDisciplinasElemento = document.querySelector("#listarDisciplinas");
        if (DisciplinaInserida) {
            this.inserirDisciplinaNoHtml(DisciplinaInserida, listaDisciplinasElemento);

        }
    }

    inserirAluno(){
        const codigo = document.querySelector("#codigo_inserir").value;
        const matricula = document.querySelector("#matricula").value;

        const AlunoInserido = this.servico.adicionarAlunoDisciplina(codigo, matricula);

        if(AlunoInserido){
            this.inserirAlunoNoHtml(AlunoInserido);
        }

    }

    inserirAlunoNoHtml(AlunoInserido){
        const lista = document.querySelector("#listarDisciplinas");
        lista.innerHTML = '';

        AlunoInserido.forEach(disciplina => {
            const li = document.createElement('li');
            li.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome} - Alunos: ${disciplina.alunos}`
            lista.appendChild(li);
        })

    }

   
    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome} - Alunos: ${disciplina.alunos}`;
        elementoDestino.appendChild(disciplinaElemento);
  }
}
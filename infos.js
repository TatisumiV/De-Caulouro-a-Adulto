function pesquisar() {

let section = document.getElementById("resultados-pesquisa");

let campoPesquisa = document.getElementById ("campo-pesquisa").value 

if (!campoPesquisa) {
    section.innerHTML = "<p class='mensagem-erro'>⌞Nada foi digitado... Tente escrever algo primeiro!⌝</p>";
        return 
    };
    

campoPesquisa = campoPesquisa.toLowerCase();

let resultados = "";
let titulo = "";
let descricao = "";
let tags = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLowerCase()
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        resultados += `
        <div class="infos">
            <h2 class="titulos">${dado.titulo}</h2>
            <p class="descricao">${dado.descricao}</p>
            <a href=${dado.link}target="_blank" class="links">「 ✦ Site oficial ✦ 」</a>
        </div>
        `
    ;
    }
}

if (!resultados) {
    resultados = "<p class='nao-encontrado'>⌞Nada relacionado a essa pesquisa foi encontrado⌝</p>"
}

section.innerHTML = resultados
}
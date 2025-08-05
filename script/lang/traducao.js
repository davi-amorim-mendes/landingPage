const bandeira = document.querySelector('.bandeira');
const linkSobre = document.getElementById('linkSobre');
const linkProjetos = document.getElementById('linkProjetos');
const linkContato = document.getElementById('linkContato');
const headT = document.getElementById('headT');
const footT = document.getElementById('footT');
const tituloSobre = document.getElementById('tituloSobre');
const pSobre = document.getElementById('pSobre');
const tituloHabilidade = document.getElementById('tituloHabilidade');
const tituloOutros = document.getElementById('tituloOutros');

function br()
{
    document.documentElement.lang = "pt-BR";
    bandeira.src = "icons/country/br.ico";

    // LINKS DE NAVEGACAO
    linkSobre.textContent = "Sobre mim";
    linkProjetos.textContent = "Projetos";
    linkContato.textContent = "CONTATO";

    // TITULO DAVI AMORIM
    headT.textContent = "Isso é";
    footT.textContent = "Desenvolvedor Fullstack";

    // TITULO SOBRE
    tituloSobre.textContent = "Sobre mim";

    // PARAGRAFO SOBRE
    pSobre.textContent = "Sou um desenvolvedor web apaixonado por tecnologia e por criar soluções funcionais e intuitivas. Atualmente, estou cursando Engenharia da Computação e me especializando em desenvolvimento Full Stack.";

    // TITULO HABILIDADES
    tituloHabilidade.textContent = "Habilidades";

    // TITULO OUTROS
    tituloOutros.textContent = "Outras";
}

function en()
{
    document.documentElement.lang = "en";
    bandeira.src = "icons/country/eua.ico";

    // LINKS DE NAVEGACAO
    linkSobre.textContent = "About me";
    linkProjetos.textContent = "Projects";
    linkContato.textContent = "CONTACT";

    // TITULO DAVI AMORIM
    headT.textContent = "This is";
    footT.textContent = "Fullstack Developer";

    // TITULO SOBRE
    tituloSobre.textContent = "About me";

    // PARAGRAFO SOBRE
    pSobre.textContent = "I'm a web developer passionate about technology and creating functional and intuitive solutions. I'm currently studying Computer Engineering and specializing in Full Stack development.";

    // TITULO HABILIDADES
    tituloHabilidade.textContent = "Skills";

    // TITULO OUTROS
    tituloOutros.textContent = "Others";
}

function traduzir()
{
    switch(document.documentElement.lang)
    {
        case "en":
            br();
            break
        case "pt-BR":
            en();
            break
    }
}

document.addEventListener("DOMContentLoaded", () => 
{
    const navegadorLang = navigator.language || navigator.userLanguage;

    if(navegadorLang.startsWith("pt"))
    {
        br();
    }
    else
    {
        en();
    }
})
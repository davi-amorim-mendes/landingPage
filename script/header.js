window.addEventListener('scroll', function()
{
    const header = document.querySelector('.header')
    const larguraTela = window.innerWidth;
    
    var scrollV = window.scrollY;

    if(larguraTela <= 820)
    {
        header.id = "headerBack";
    }
    else
    {
        if(scrollV > 90)
        {
            header.id = "headerBack";
        }
        else
        {
            header.id = "headerNoBack";
        }
    }
})

// const lang = document.documentElement.lang; 
// PEGA O IDIOMA DA PÁGINA
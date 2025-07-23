window.addEventListener('scroll', function()
{
    const headerNoBack = document.getElementById('headerNoBack');
    const headerBack = document.getElementById('headerBack');
    const larguraTela = window.innerWidth;
    
    var scrollV = window.scrollY;

    if(larguraTela <= 820)
    {
        headerNoBack.id = "headerBack";
    }
    else
    {
        if(scrollV > 90)
        {
            headerNoBack.id = "headerBack";
        }
        else
        {
            headerBack.id = "headerNoBack";
        }
    }
})

window.addEventListener('scroll', function()
{
    const header = document.getElementsByTagName('header')[0];
    const larguraTela = window.innerWidth;
    
    var scrollV = window.scrollY;

    header.classList.remove('headerBack', 'headerNoBack');

    if(larguraTela <= 820)
    {
        header.classList.add('headerBack');
    }
    else
    {
        if(scrollV > 90)
        {
            header.classList.add('headerBack');
        }
        else
        {
            header.classList.add('headerNoBack');
        }
    }
});
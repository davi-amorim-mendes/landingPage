window.addEventListener('scroll', function()
{
    const headerNoBack = document.getElementById('headerNoBack');
    const headerBack = document.getElementById('headerBack');
    
    var scrollV = window.scrollY;

    if(scrollV > 10)
    {
        headerNoBack.id = "headerBack";
    }
    else
    {
        headerBack.id = "headerNoBack";
    }
})

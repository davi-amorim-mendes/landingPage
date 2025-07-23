window.addEventListener('scroll', function()
{
    console.log(window.scrollY);

    const headerNoBack = document.getElementById('headerNoBack');
    const headerBack = document.getElementById('headerBack');
    
    var scrollV = window.scrollY;

    if(scrollV > 0)
    {
        headerNoBack.id = "headerBack";
    }
    else
    {
        headerBack.id = "headerNoBack";
    }
})

function next()
{
    const images = document.querySelectorAll('.image-slider > img');
    const buttons = document.querySelectorAll('.navigation > button')

    for(let i = 0; i < images.length; i++)
    {
        if(!images[i].classList.contains('hidden'))
        {
            images[i].classList.add('hidden')
            
            const nextIndex = (i + 1) % images.length;
            images[nextIndex].classList.remove('hidden');
            buttons.forEach(button => button.style.backgroundColor = "")
            buttons[nextIndex].style.backgroundColor = "black"
            break;
        }
    }
    
}

function previous()
{
    const images = document.querySelectorAll('.image-slider > img');
    const buttons = document.querySelectorAll('.navigation > button')

    for(let i = 0; i < images.length; i++)
    {
        if(!images[i].classList.contains('hidden'))
        {
            images[i].classList.add('hidden')
            
            const prevIndex = (i - 1 + images.length) % images.length;
            images[prevIndex].classList.remove('hidden');
            buttons.forEach(button => button.style.backgroundColor = "")
            buttons[prevIndex].style.backgroundColor = "black"
            break;
        }
    }
}

function navigation()
{
    const images = document.querySelectorAll('.image-slider > img');
    const buttons = document.querySelectorAll('.navigation > button')


    buttons.forEach(function(button, index)
        {
            if(index === 0)
            {
                button.style.backgroundColor = "black";
            }

            button.addEventListener('click', function(e)
            {
                e.preventDefault();

                buttons.forEach(button => button.style.backgroundColor = "")
              
                e.target.style.backgroundColor = "black";

                images.forEach(image => image.classList.add('hidden'))

                images[index].classList.remove('hidden');

            })
        })
    

}
document.querySelector('#next').addEventListener('click', next)
document.querySelector('#prev').addEventListener('click', previous)
setInterval(next, 5000)
navigation();
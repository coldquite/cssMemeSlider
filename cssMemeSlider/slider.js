function changeButtonDivActive(prev, activeButtonDiv) {
    if (prev !== null) {
        prev.style.cursor = '';
        prev.querySelector('button').classList.remove('button-active');
    }
    activeButtonDiv.querySelector('button').classList.add('button-active');
    activeButtonDiv.style.cursor = 'auto';
}

function updateSlider(pic, text, obj) {
    pic.style.opacity = '0';
    text.style.opacity = '0';

    setTimeout(() => {
        pic.src = obj.img;
        text.innerHTML = obj.text;

        pic.style.opacity = '1';
        text.style.opacity = '1';
    }, 500);
}

window.addEventListener('DOMContentLoaded', () => {
    let pagination = document.querySelector('.slider-pagination');
    let pic = document.querySelector('.slider img');
    let text = document.querySelector('.slider-title');


    let paginationHTML = '';
    for (let i = 0; i < db.length; i++)
        paginationHTML += '<div class="button-body"><button class="slider-button"></button></div>';
    pagination.innerHTML = paginationHTML;


    let buttonDivs = Array.from(document.querySelectorAll('.button-body'));
    let activeButtonDiv = buttonDivs[0];
    changeButtonDivActive(null, activeButtonDiv);

    buttonDivs.forEach((buttonDiv) => {
        buttonDiv.addEventListener('mouseover', () => {
            buttonDiv.querySelector('button').classList.add('button-hover');
        })
    })

    buttonDivs.forEach((buttonDiv) => {
        buttonDiv.addEventListener('mouseout', () => {
            buttonDiv.querySelector('button').classList.remove('button-hover');
        })
    })

    buttonDivs.forEach((buttonDiv) => {
        buttonDiv.addEventListener('click', () => {
            if (buttonDiv !== activeButtonDiv) {
                changeButtonDivActive(activeButtonDiv, buttonDiv)
                activeButtonDiv = buttonDiv;

                let obj = db[buttonDivs.indexOf(activeButtonDiv)];
                updateSlider(pic, text, obj);
            }
        })
    })
})

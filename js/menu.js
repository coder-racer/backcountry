let menublock = document.querySelector('.main-menu');
let elem = document.querySelector('.menu-item').querySelectorAll('a');
let logo = menublock.querySelector('.logo');
menublock.innerHTML = '';
menublock.insertAdjacentElement('beforeend', logo);

for (let i = 0; i < elem.length; i++)
{
    if (i === Math.ceil(elem.length/2 - 1)){
        menublock.insertAdjacentElement('beforeend', elem[i]);
        menublock.insertAdjacentElement('beforeend', logo);
    } else{
        menublock.insertAdjacentElement('beforeend', elem[i]);
    }
}


let button = document.querySelector('.mobile-area-button');
let menu_list = document.querySelector('.menu-items ul');
var oppen = false;
button.onclick = () => {
    if (oppen === false) {
        menu_list.style.display = 'flex';
        oppen = true;
        button.style.marginLeft = '57px';
    } else {
        menu_list.style.display = 'none';
        oppen = false;
    }

}
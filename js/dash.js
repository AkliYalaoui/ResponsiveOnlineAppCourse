var isOpen = false;

function OpenSlider(e) {
    if (isOpen) {
        document.querySelector(".nav-list").classList.add('open-nav-list');
        e.classList.add('slider-opened');
        isOpen = false;
    } else {
        document.querySelector(".nav-list").classList.remove('open-nav-list');
        e.classList.remove('slider-opened');
        isOpen = true;
    }

}

function expandContact() {
    document.querySelector('form').classList.add('form-expanded');
    window.screenY += 300 + 'px';
}

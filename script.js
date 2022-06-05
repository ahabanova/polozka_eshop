const priKliknuti = (e) => {
    const element = e;

    let aktivni = document.querySelectorAll('.vybrana-velikost');

    for (let elem of aktivni) {
        elem.classList.remove('vybrana-velikost');
    }

    element.classList.add('vybrana-velikost');
}
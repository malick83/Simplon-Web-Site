const indicator = document.querySelector('.nav-indicator');

const items = document.querySelectorAll('.item-text');

function handleIndicator(el){
    items.forEach(item => {
        item.classList.remove('is-active');
        item.removeAttribute('style');
    })
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.backgroundColor = '#ce0033';
    indicator.style.left = `${el.offsetLeft}px`;

    el.classList.add('is-active');
    el.style.color = '#ce0033';
}

items.forEach((item, index) => {
    item.addEventListener('click', e => {
        handleIndicator(e.target)
    });
    item.classList.contains('is-active') && handleIndicator(item);
});
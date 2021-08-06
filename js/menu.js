
document.addEventListener('scroll', () => {
    const menubar = document.getElementById('menubar')

    const heighthBanner = document.getElementById('banner').clientHeight
    let scrollTop = document.documentElement.scrollTop

    if (scrollTop > (heighthBanner - 200) ) {
        menubar.classList.add('scroll')
    } else {
        menubar.classList.remove('scroll')
    }
})
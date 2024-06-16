let nav = document.querySelector('.nav')

document.addEventListener('scroll', () => {
    if(-document.body.getBoundingClientRect().top >= 700) {
        nav.style.backgroundColor = 'black'
        nav.style.opacity = 0.7
    }
    else {
        nav.style.backgroundColor = ''
        nav.style.opacity = 1
    }
})

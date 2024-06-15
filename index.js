// window.addEventListener('scroll', () => {
//     document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight));
// }, false)

// alert(document.body.offsetHeight)
// alert(-document.body.getBoundingClientRect().top)

let nav = document.querySelector('.nav')

document.addEventListener('scroll', () => {
    if(-document.body.getBoundingClientRect().top >= 800) {
        nav.style.backgroundColor = 'black'
        nav.style.opacity = 0.7
    }
    else {
        nav.style.backgroundColor = ''
        nav.style.opacity = 1
    }
})

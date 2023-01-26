const open = document.getElementById('open')
const close = document.getElementById('close')
const circle = document.querySelector('.circle')
const compound = document.querySelector('.compound')
const nav = document.querySelector('.nav')


open.addEventListener('click', () => {
    circle.classList.add("show-nav")
    nav.classList.add('show-nav')
    compound.classList.add("show-nav")
})

close.addEventListener('click', () => {
    circle.classList.remove("show-nav")
    nav.classList.remove('show-nav')
    compound.classList.remove('show-nav')
})

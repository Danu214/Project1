const patrat = document.querySelector('.patrat')
const h1 = document.querySelector('h1')
patrat.addEventListener('click', (ev) => {
    h1.style.color = 'red'
})

const body = document.body
const adauga = document.querySelector('.createbutton')
const element = document.createElement('div')
element.classList.add('patrat')

adauga.addEventListener('click', (ev)=>{
    if (ev.target) {body.parentNode.appendChild(element).after(patrat)}
})
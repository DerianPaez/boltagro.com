const menu = document.getElementById('menu')
const menuOpen = document.getElementById('menu-icon-open')
const menuClose = document.getElementById('menu-icon-close')
const links = document.querySelectorAll('#menu a')


menuOpen.addEventListener('click', () => {
  menu.classList.toggle('active')
})

menuClose.addEventListener('click', () => {
  menu.classList.remove('active')
})

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.toggle('active')
  })
})

const accordionItems = document.querySelectorAll('.accordion .accordion-item')

accordionItems.forEach(item => {
  let button = item.querySelector('button')
  let text = item.querySelector('.answer')
  button.addEventListener('click', () => {
    deactiveAccordionItem()
    text.classList.add('active')
    button.classList.add('active')
  })
})

function deactiveAccordionItem() {
  accordionItems.forEach(item => {
    let tagText = item.querySelector('.answer')
    let button = item.querySelector('button')
    tagText.classList.remove('active')
    button.classList.remove('active')
  })


}


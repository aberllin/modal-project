const closeBtn = document.querySelector('.close-btn')
const openBtn = document.querySelector('.btn')
const modal = document.querySelector('.modal-close')

openBtn.addEventListener('click', function() {
    modal.classList.add('modal-open')
})

closeBtn.addEventListener('click', function() {
    modal.classList.remove('modal-open')
})
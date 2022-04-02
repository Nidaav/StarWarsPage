const slides = {
  1: document.querySelectorAll('[data-slide="1"]'),
  2: document.querySelectorAll('[data-slide="2"]'),
  3: document.querySelectorAll('[data-slide="3"]'),

}

let currentSlide = 1

// const nextButton = document.querySelector('.right-arrow')

// function init() {
//   updateSlide()
// }

function init() {
  slides[currentSlide].forEach(e => {
    e.classList.add('active')
  })
}

init()

// nextButton.addEventListener('click', function() {
//   currentSlide++
//   updateSlide()
// })

export {slides}

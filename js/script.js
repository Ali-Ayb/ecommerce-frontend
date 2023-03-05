const slide = document.querySelectorAll('slide');
const scrol = document.getElementById('scroll')

console.log(slide[0])

scrol.addEventListener('click', () => {
    slide.forEach((s) => {
            removeActiveClasses()
            s.classList.add('active')
    })
})



function removeActiveClasses() {
    slide.forEach((s) => {
        s.classList.remove('active')
    })
}
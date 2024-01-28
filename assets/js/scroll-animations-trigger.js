const selector = '.position-animation';
let elements = document.querySelectorAll(selector)
elements = Array.from(elements)
elements.forEach(el => {
    addObserver(el)
})


function addObserver (element) {
    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('slide-up-animation');
                observer.unobserve(entry.target);
            }
        })
    })

    observer.observe(element);
}
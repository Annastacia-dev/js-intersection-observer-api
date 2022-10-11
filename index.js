const sections = document.querySelectorAll('.content-section');
const titleEl = document.getElementById("title")
const priceEl = document.getElementById("price")

const callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
        titleEl.textContent = entry.target.dataset.title;
        priceEl.textContent = entry.target.dataset.price;
        }
    });
    }
 
const options ={
    threshold: 0.5
}

let observer = new IntersectionObserver(callback, options)

sections.forEach(section => { observer.observe(section) } )

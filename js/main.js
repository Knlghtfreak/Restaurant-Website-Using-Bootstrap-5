
// action navbar

document.addEventListener("DOMContentLoaded", function () {
    let nav = document.querySelector(".navigation-wrap");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 20) {
            nav.classList.add("scroll-on");
        } else {
            nav.classList.remove("scroll-on");
        }
    });
});


// nav hide

let navBar = document.querySelectorAll('nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

// counter design

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        time = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(time);
            }
        }, step);

    }
    counter("counter1", 0, 87, 1000);
    counter("counter2", 0, 55, 1000);
    counter("counter3", 0, 47, 1000);
    counter("counter4", 0, 97, 1000);
});

// action navbar


// nav hide


// counter design

document.addEventListener("DOMContentLoaded", () => {
    function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = math.abs(Math.floor(duration / range)),
        time = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(time);
            }
        }, step);

    }
    counter("counter1", 0, 487, 3000);
    counter("counter2", 0, 287, 3000);
    counter("counter3", 0, 387, 3000);
    counter("counter4", 0, 187, 3000);
});
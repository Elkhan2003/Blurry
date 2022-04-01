let loadText = document.querySelector(".loading_text");
let bg = document.querySelector(".bg");
let load = 0;
let int = setInterval(blurring, 40)

function blurring() {
    load++
    if (load > 99) {
        clearInterval(int)
    }
    loadText.innerHTML = `${load}%`
    loadText.style.opacity = scale(load, 0, 100, 30, 0)
    bg.style.filter = `blur(${scale(load,0,100,30,0)}px)`

    console.log(load)
}
const scale = (number, inMin, inMax, outMin, outMax) => {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
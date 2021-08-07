let autoStart = true
let toggleMenu = document.querySelector(".open")
let menu = document.querySelector(".menu")
let menuChilds = document.querySelectorAll(".menu nav ul li a")
let delay = 4500
const container = document.querySelector("div.container")
const endText = document.querySelector('.end-inner')
const endContainer = document.querySelector('.content.end')
let minTop = 0

let stop = false
console.log("started")

if(autoStart){
    delay = 0
}

setTimeout(function(){
    container.style.display = "flex"
    minTop = endContainer.offsetTop
    endText.style = `top: ${minTop}px`

    let position = document.documentElement.clientHeight / 4 * 3
    endText.style.top = `${clamp(window.pageYOffset + position,minTop,document.body.offsetHeight + 1000)}px`
    endText.style.display = 'flex'
}, delay)

document.addEventListener('scroll', () => {
    let position = document.documentElement.clientHeight / 4 * 3
    endText.style.top = `${clamp(window.pageYOffset + position,minTop,document.body.offsetHeight + 1000)}px`
})

toggleMenu.onclick = function(){
    menu.classList.toggle("show")
}

for(let i = 0; i < menuChilds.length; i++){
    menuChilds[i].onclick = function(){
        menu.classList.remove("show")
    }
}

document.onscroll = () => {
    let y = window.pageYOffset
    updateProgressBar()
    if(y < 70){
        document.querySelector("a.top").style = ""
    }else{
        document.querySelector("a.top").style.display = "block"
    }

    
}

function clamp(value, min, max){
    return Math.max(min, Math.min(max, value))
}

function updateProgressBar(){
    var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;
    document.querySelector("progress.scrollprogress").value = window.pageYOffset
    document.querySelector("progress.scrollprogress").max = limit
}

updateProgressBar()

window.onresize = () => {
    showImgs()
    appHeight()
}

showImgs()

function showImgs(){
    if(document.body.offsetWidth < 1260 || window.innerHeight < 380){
        document.querySelector(".achess").style.display = "flex"
        document.querySelector(".asnake").style.display = "flex"
        document.querySelector(".content.chess iframe").style.display = "none"
        document.querySelector(".content.snake iframe").style.display = "none"
    }else{
        document.querySelector(".achess").style = ""
        document.querySelector(".asnake").style = ""
        document.querySelector(".content.chess iframe").style.display = "flex"
        document.querySelector(".content.snake iframe").style.display = "flex"
    }
}


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.chess .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer.observe(document.querySelector('.content.chess .inner p'))

const observer2 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.snake .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer2.observe(document.querySelector('.content.snake .inner p'))

const observer3 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.tictactoe .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer3.observe(document.querySelector('.content.tictactoe .inner p'))

const observer4 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.calc .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer4.observe(document.querySelector('.content.calc .inner p'))

const observer5 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.player .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer5.observe(document.querySelector('.content.player .inner p'))

const observer6 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.about .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer6.observe(document.querySelector('.content.about .inner p'))

const observer7 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.skills .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer7.observe(document.querySelector('.content.skills .inner p'))

const observer8 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.css .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer8.observe(document.querySelector('.content.css .inner a'))


const observer9 = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector('.content.dino .inner').style.animation = "floatfromright 2s ease forwards"
        }
    })
})
observer9.observe(document.querySelector('.content.dino .inner p'))


function appHeight() {
    document.documentElement.style.setProperty('--vh', (window.innerHeight*.01) + 'px')
}

appHeight()
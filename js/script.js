const btnHome = document.querySelector('.home')
const btnAbout = document.querySelector('.about')

function centralizeScroll(contentElement) {
    let elementRect = contentElement.getBoundingClientRect()
    let elementHeight = elementRect.height
    let containerHeight = contentElement.clientHeight
    let scrollPosition =
        elementRect.top - (containerHeight / 2 - elementHeight / 2)
    window.scrollBy({
        top: scrollPosition - 180,
        behavior: 'smooth',
    })
}

btnHome.onclick = () => {
    centralizeScroll(document.querySelector('#home'))
}

btnAbout.onclick = () => {
    centralizeScroll(document.querySelector('#about-me'))
}

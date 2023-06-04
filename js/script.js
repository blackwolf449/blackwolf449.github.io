const btnHome = document.querySelector('.home')
const btnAbout = document.querySelector('.about')
const btnProjects = document.querySelector('.projects')
const btnTech = document.querySelector('.technologies')

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

btnProjects.onclick = () => {
    centralizeScroll(document.querySelector('#projects'))
}

btnTech.onclick = () => {
    centralizeScroll(document.querySelector('#technologies'))
}

function createSkills(skills, elementToInsertClass) {
    let skillElements = ``
    for (let i = 0; i < skills.length; i++) {
        if (i + 1 == skills.length) {
            skillElements += `
            <div class="skills last-skill">
                <h3>${skills[i].name}</h3>
                <img width="70vw" src="${skills[i].svg}"/>
            </div>`
        } else {
            skillElements += `
                <div class="skills">
                    <h3>${skills[i].name}</h3>
                    <img width="70vw" src="${skills[i].svg}"/>
                </div>`
        }
    }
    document.querySelector(elementToInsertClass).innerHTML = skillElements
}
createSkills(
    [
        { name: 'HTML', svg: '../assets/html.svg' },
        { name: 'CSS', svg: '../assets/css.svg' },
        { name: 'JavaScript (JS)', svg: '../assets/js.svg' },
        { name: 'VueJS', svg: '../assets/vue.svg' },
        { name: 'Flutter', svg: '../assets/flutter.svg' },
    ],
    '.skill-front'
)
createSkills(
    [
        { name: 'NodeJS', svg: '../assets/node.svg' },
        { name: 'Express', svg: '../assets/express.svg' },
        { name: 'Python', svg: '../assets/python.svg' },
        { name: 'Postgres', svg: '../assets/postgres.svg' },
        { name: 'MongoDB', svg: '../assets/mongodb.svg' },
    ],
    '.skill-back'
)

function createProjects(projects, elementToInsertClass) {
    let projectElements = ``
    for (let i = 0; i < projects.length; i++) {
        if (i + 1 == projects.length) {
            projectElements += `
            <div class="skills last-skill">
                <h3>${projects[i].name}</h3>
                <img width="70vw" src="${projects[i].svg}"/>
            </div>`
        } else {
            projectElements += `
                <div class="skills">
                    <h3>${projects[i].name}</h3>
                    <img width="70vw" src="${projects[i].svg}"/>
                </div>`
        }
    }
    document.querySelector(elementToInsertClass).innerHTML = projectElements
}

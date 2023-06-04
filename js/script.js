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
            <div class="project last-project">
            <h1>${projects[i].name}</h1>
            <iframe
                src="${projects[i].link}"
                frameborder="0"
            ></iframe>
                <div>
                    <a
                        href="${projects[i].github}"
                        ><img
                            width="50vw"
                            src="../assets/github.svg"
                            alt=""
                    /></a>
                    <div>
                        <h3>Technologies:</h3>
                        <p>${projects[i].techs.join(', ')}</p>
                    </div>
                </div>
            </div>`
        } else {
            projectElements += `
            <div class="project">
            <h1>${projects[i].name}</h1>
            <iframe
                src="${projects[i].link}"
                frameborder="0"
            ></iframe>
                <div>
                    <a
                        href="${projects[i].github}"
                        ><img
                            width="50vw"
                            src="../assets/github.svg"
                            alt=""
                    /></a>
                    <div>
                        <h3>Technologies:</h3>
                        <p>${projects[i].techs.join(', ')}</p>
                    </div>
                </div>
            </div>`
        }
    }
    document.querySelector(elementToInsertClass).innerHTML = projectElements
}

createProjects(
    [
        {
            name: 'Social Time',
            link: 'https://socialtime.netlify.app',
            github: 'https://github.com/blackwolf449/rede_social_front',
            techs: ['JS', 'VueJS', 'NodeJS', 'Express'],
        },
        {
            name: 'Code Editor',
            link: 'https://bw449-code-editor.netlify.app',
            github: 'https://github.com/blackwolf449/code-editor-angular',
            techs: ['TS', 'Angular'],
        },
        {
            name: 'T-Rex',
            link: 'https://blackwolf449.github.io/T-Rex',
            github: 'https://github.com/blackwolf449/T-Rex',
            techs: ['JS'],
        },
        {
            name: 'Pokedex',
            link: 'https://blackwolf449.github.io/PokeDex_JS',
            github: 'https://github.com/blackwolf449/PokeDex_JS',
            techs: ['JS'],
        },
    ],
    '.proj'
)

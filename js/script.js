const btnHome = document.querySelector('.home')
const btnAbout = document.querySelector('.about')
const btnProjects = document.querySelector('.projects')
const btnTech = document.querySelector('.technologies')
const btnContact = document.querySelector('.contact')
const btnDropdown = document.querySelector('.dropdown')
const nav = document.querySelector('nav')

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
    if (nav.classList.contains('nav-show')) dropdown()
}

function dropdown() {
    if (nav.classList.contains('nav-show')) {
        btnDropdown.classList.remove('dropdown-rotate')
        return nav.classList.remove('nav-show')
    }
    btnDropdown.classList.add('dropdown-rotate')
    nav.classList.add('nav-show')
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

btnContact.onclick = () => {
    centralizeScroll(document.querySelector('#contact'))
}
btnDropdown.onclick = () => {
    dropdown()
}

function createElements(
    elementsList,
    keywords,
    elementToInsertClass,
    htmlElement
) {
    let contactsElement = ``
    for (let j = 0; j < elementsList.length; j++) {
        let element = htmlElement
        for (let i = 0; i < keywords.length; i++) {
            if (Array.isArray(elementsList[j][keywords[i]])) {
                element = element.replace(
                    keywords[i],
                    elementsList[j][keywords[i]].join(', ')
                )
            } else {
                element = element.replace(
                    keywords[i],
                    elementsList[j][keywords[i]]
                )
            }
        }
        contactsElement += element
    }
    document.querySelector(elementToInsertClass).innerHTML = contactsElement
}

createElements(
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
    ['name', 'link', 'githubImage', 'techs'],
    '.proj',
    `
<div class="project">
<h1>name</h1>
<iframe
    src="link"
    frameborder="0"
></iframe>
    <div>
        <a
            href="githubImage"
            ><img
                width="50vw"
                src="../assets/github.svg"
                alt=""
        /></a>
        <div>
            <h3>Technologies:</h3>
            <p>techs</p>
        </div>
    </div>
</div>`
)

createElements(
    [
        { link: '', svg: './assets/instagram.svg', name: '@vini_nequiz01' },
        { link: '', svg: './assets/facebook.svg', name: 'Vini Nequiz' },
        {
            link: '',
            svg: './assets/linkedin.svg',
            name: 'Vinicius Oliveira<br> de Deus Nequiz',
        },
        { link: '', svg: './assets/gmail.svg', name: 'Tacvini@gmail.com' },
        {
            link: '',
            svg: './assets/outlook.svg',
            name: 'viniciusnequiz@outlook.com',
        },
        {
            link: '',
            svg: './assets/brazil.svg',
            name: '+55 (19) 984326-8049',
        },
        { link: '', svg: './assets/australia.svg', name: 'Undefined' },
    ],
    ['link', 'svg', 'name'],
    'ul',
    `
    <li>
        <a href="link"
        ><img src="svg" />
        name</a>
    </li>`
)

createElements(
    [
        { name: 'HTML', svg: './assets/html.svg' },
        { name: 'CSS', svg: './assets/css.svg' },
        { name: 'JavaScript (JS)', svg: './assets/js.svg' },
        { name: 'VueJS', svg: './assets/vue.svg' },
        { name: 'Flutter', svg: './assets/flutter.svg' },
    ],
    ['name', 'svg'],
    '.skill-front',
    `<div class="skills">
    <h3>name</h3>
    <img width="70vw" src="svg"/>
    </div>`
)

createElements(
    [
        { name: 'NodeJS', svg: './assets/node.svg' },
        { name: 'Express', svg: './assets/express.svg' },
        { name: 'Python', svg: './assets/python.svg' },
    ],
    ['name', 'svg'],
    '.skill-back',
    `<div class="skills">
    <h3>name</h3>
    <img width="70vw" src="svg"/>
    </div>`
)

createElements(
    [
        { name: 'Mysql', svg: './assets/mysql.svg' },
        { name: 'Postgres', svg: './assets/postgres.svg' },
        { name: 'MongoDB', svg: './assets/mongodb.svg' },
    ],
    ['name', 'svg'],
    '.skill-data',
    `<div class="skills">
    <h3>name</h3>
    <img width="70vw" src="svg"/>
    </div>`
)

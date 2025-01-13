const mobileMenu = document.querySelector('#mobile-menu')

const features = [
  {
    label: 'Desenvolvimento Websites',
    description:
      'Criação de sites responsivos, otimizados e com foco na experiência do usuário.',
    icon: 'assets/images/icons8-local-na-rede-internet-100.png',
  },
  {
    label: 'Manutenção de Websites',
    description:
      'Suporte contínuo para manter seu site atualizado, seguro e eficiente.',
    icon: 'assets/images/icons8-smartphone-100.png',
  },
  {
    label: 'Sistemas Personalizados',
    description:
      'Soluções sob medida para otimizar processos e agregar valor ao seu negócio.',
    icon: 'assets/images/icons8-api-100.png',
  },
  {
    label: 'Criação de Aplicativos',
    description:
      'Desenvolvimento de aplicativos intuitivos e funcionais para a interação do usuário.',
    icon: 'assets/images/icons8-e-commerce-100.png',
  },
  {
    label: 'Integrações de Sistemas',
    description:
      'Conexão eficiente entre plataformas, garantindo uma comunicação sem falhas.',
    icon: 'assets/images/icons8-seo-100.png',
  },
  {
    label: 'Design UX/UI',
    description:
      'Criação de interfaces intuitivas e atraentes para melhorar a experiência do usuário.',
    icon: 'assets/images/icons8-conteúdo-100.png',
  },
]

const skills = [
  { label: 'HTML5', icon: 'fab fa-html5' },
  { label: 'CSS3', icon: 'fab fa-css3-alt' },
  { label: 'JavaScript', icon: 'fab fa-js' },
  { label: 'PHP', icon: 'fab fa-php' },
  { label: 'React', icon: 'fab fa-react' },
  { label: 'Angular', icon: 'fab fa-angular' },
  { label: 'Vue.js', icon: 'fab fa-vuejs' },
  { label: 'Express', icon: 'fab fa-node-js' },
  { label: 'Laravel', icon: 'fab fa-laravel' },
  { label: 'MongoDB', icon: 'fas fa-database' },
  { label: 'Git', icon: 'fab fa-git' },
  { label: 'Figma', icon: 'fab fa-figma' },
]

const generateCardsService = () => {
  const containerServices = document.querySelector('#services')

  if (containerServices && features.length > 0) {
    features.forEach((item) => {
      containerServices.innerHTML += `
        <article class='card-service'>
          <div>
						<img src='${item.icon}' height='100px' alt='ícone layers' />
          </div>
          <h3>${item.label}</h3>
          <p>${item.description}</p>
        </article>
      `
    })
  }
}

const generateCardsSkill = () => {
  const containerServices = document.querySelector('#skills')

  if (containerServices && skills.length > 0) {
    skills.forEach((item) => {
      containerServices.innerHTML += `
        <article class='card-skill'>
				  <i class='${item.icon} icon'></i>
        </article>
      `
    })
  }
}

const generateCarousel = () => {
  const containerCarousels = document.querySelector('#carousels')

  if (containerCarousels && skills.length > 0) {
    skills.forEach((item) => {
      containerCarousels.innerHTML += `
        <li class="carousel-slide">
          <div class="card">
            <img src="assets/images/digital-environment-scene.webp" alt="Projeto 1">
            <div class="card-content">
              <span class="category">ESCOLA</span>
              <h3>Espaço para o título bem aqui</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
            </div>
          </div>
        </li>
      `
    })
  }
}

const footerCopyRight = () => {
  const containerServices = document.querySelector('#skills')

  if (containerServices && skills.length > 0) {
    skills.forEach((item) => {
      containerServices.innerHTML += `
        <article class='card-skill'>
				  <i class='${item.icon} icon'></i>
        </article>
      `
    })
  }
}

const openMenu = () => {
  const navList = document.querySelector('#nav-list')
  if (!navList) return

  mobileMenu.classList.toggle('active')
  navList.classList.toggle('active')
}

const closeMenu = () => {
  const navList = document.querySelector('#nav-list')
  if (navList && navList.classList.contains('active')) {
    mobileMenu.classList.remove('active')
    navList.classList.remove('active')
  }
}

// Open menu mobile
mobileMenu.addEventListener('click', openMenu)

// Projects
const projects = [
  {
    title: 'Layout de Relatório Anual - Promon S.A',
    description: `
      Desenvolvimento de layout para o Relatório Anual 
      2024 da Promon S.A., com base no design fornecido 
      no Figma.
    `,
    image: 'assets/images/page-promon.png',
    color: '#e04403',
  },
  {
    title: 'Plataforma Online de Cardápio',
    description: `
      Desenvolvimento de uma plataforma online para cardápios, 
      com cálculo de frete automático, integração Pix e design 
      atrativo.
    `,
    image: 'assets/images/site-menu.png',
    color: '#d61f1f',
  },
  {
    title: 'Website para Advogado Criminal',
    description: `
      Site responsivo destacando atuação em direito penal, 
      com design profissional e navegação otimizada.
    `,
    image: 'assets/images/site-nerio.png',
    color: '#fdce8d',
  },
  {
    title: 'Landing Page - Agência Pira',
    description: `
      Desenvolvimento de uma landing page visualmente 
      impactante, com o propósito de transmitir a mensagem 
      da Agência Pira.
    `,
    image: 'assets/images/site-pira.png',
    color: '#fb3d3d',
  },
  {
    title: 'Landing Page - Jaktour',
    description: `
      Desenvolvimento de uma landing page para a Jaktour, 
      destacando sua história e compromisso com viagens 
      memoráveis e destinos únicos.
    `,
    image: 'assets/images/site-jaktour.webp',
    color: '#fc970f',
  },
  {
    title: 'Plataforma MW',
    description: `
      Desenvolvimento de protótipo no Figma focado em UI/UX para 
      vendas de licenças de software, com implementação do layout.
    `,
    image: 'assets/images/site-mw.png',
    color: '#d61f1f',
  },
]

const generateCardsProjects = () => {
  const containerProjects = document.querySelector('#projects')

  if (containerProjects) {
    projects.forEach((item, index) => {
      containerProjects.innerHTML += `
        <div class="project-item" id="project-item-${index}">
          <h3>${item.title}</h3>
          <p>${item.description}</p>
          <div class="project-item-wrapper">
            <img src="${item.image}" alt="${item.title}" />
          </div>
          <style>
            #project-item-${index} .project-item-wrapper::-webkit-scrollbar-thumb {
              background-color: ${item.color};
            }
          </style>
        </div>
      `
    })
  }
}

// Scroll Button Functionality
const projectsCarousel = document.querySelector('#projects')
const prevBtn = document.querySelector('#prev-btn')
const nextBtn = document.querySelector('#next-btn')

prevBtn.addEventListener('click', () => {
  const projectItemWidth =
    document?.querySelector('.project-item')?.offsetWidth || 300
  projectsCarousel.scrollBy({ left: projectItemWidth * -1, behavior: 'smooth' })
})

nextBtn.addEventListener('click', () => {
  const projectItemWidth =
    document?.querySelector('.project-item')?.offsetWidth || 300
  projectsCarousel.scrollBy({ left: projectItemWidth, behavior: 'smooth' })
})

// Scrool animation
function isSectionInView(section) {
  const rect = section.getBoundingClientRect()
  const offset = 100
  return rect.bottom > 0 && rect.top < window.innerHeight - offset
}

function handleScroll() {
  const sections = document.querySelectorAll(
    `.section-about .grid-layout > div #creator-photo, .section-about h2, .section-about h3, .section-about h4, .section-about .button, .section-about p, .section-services h2, .section-services .card-service, .section-projects h2, .project-item, .section-skills h2, .section-skills .content p, .section-skills #skillsection-text, .section-skills .content .card-skill`,
  )
  sections.forEach((section) => {
    if (isSectionInView(section)) {
      section.classList.add('visible')
    } else {
      section.classList.remove('visible')
    }
  })
}

// Typing animation
const text = 'Ideias se transformam em experiências digitais únicas. Desenvolvimento de websites, sistemas e aplicativos que fortalecem sua presença online e impulsionam seu crescimento.'
const typewriterElement = document.getElementById('typewriter-text')
let index = 0

function typeLetterByLetter() {
  if (index < text.length) {
    typewriterElement.textContent += text[index]
    index++
    setTimeout(typeLetterByLetter, 50)
  }
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  typeLetterByLetter()
  generateCardsService()
  generateCardsProjects()
  generateCardsSkill()
  generateCarousel()
  handleScroll()

  document.querySelectorAll('#nav-list a').forEach((link) => {
    link.addEventListener('click', closeMenu)
  })

  window.addEventListener('scroll', handleScroll)
})

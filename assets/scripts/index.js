const mobileMenu = document.querySelector("#mobile-menu");

const features = [
  {
    label: 'Desenvolvimento de Sites e Sistemas Web',
    description: 'Criamos soluções web responsivas e otimizadas, focadas em proporcionar uma experiência excepcional ao usuário.',
    icon: 'assets/images/icons8-local-na-rede-internet-100.png'
  },
  {
    label: 'Desenvolvimento de Aplicações Móveis',
    description: 'Desenvolvemos aplicativos para iOS e Android, ajudando você a alcançar usuários em qualquer lugar e a qualquer hora.',
		icon: 'assets/images/icons8-smartphone-100.png'
  },
  {
    label: 'Integração de Sistemas',
    description: 'Conecte suas plataformas e sistemas, melhorando a comunicação e a eficiência operacional do seu negócio.',
		icon: 'assets/images/icons8-api-100.png'
  },
  {
    label: 'Desenvolvimento de eCommerce',
    description: 'Desenvolvemos lojas online com foco em experiência do usuário e estratégias de conversão para maximizar suas vendas.',
    icon: 'assets/images/icons8-e-commerce-100.png'
  },
  {
    label: 'SEO e Marketing Digital',
    description: 'Estratégias otimizadas para aumentar sua visibilidade online, atrair mais visitantes e converter leads em clientes.',
    icon: 'assets/images/icons8-seo-100.png'
  },
  {
    label: 'Design UX/UI',
    description: 'Criamos interfaces intuitivas e atraentes, proporcionando uma experiência de usuário que encanta e retém clientes.',
    icon: 'assets/images/icons8-conteúdo-100.png'
  }
];

const skills = [
  { label: 'HTML5', icon: 'fab fa-html5' },
  { label: 'CSS3', icon: 'fab fa-css3-alt' },
  { label: 'JavaScript', icon: 'fab fa-js' },
  { label: 'PHP', icon: 'fab fa-php' },
  { label: 'React', icon: 'fab fa-react' },
  { label: 'Angular', icon: 'fab fa-angular' },
  { label: 'Vue.js', icon: 'fab fa-vuejs' },
  { label: 'Next.js', icon: 'fab fa-nextjs' },
  { label: 'Express', icon: 'fab fa-node-js' },
  { label: 'NestJS', icon: 'fab fa-node-js' },
  { label: 'Figma', icon: 'fab fa-figma' },
  { label: 'MongoDB', icon: 'fas fa-database' }
];

const generateCardsService = () => {
  const containerServices = document.querySelector('#services');

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
};

const generateCardsSkill = () => {
  const containerServices = document.querySelector('#skills');

  if (containerServices && skills.length > 0) {
    skills.forEach((item) => {
      containerServices.innerHTML += `
        <article class='card-skill'>
				  <i class='${item.icon} icon'></i>
        </article>
      ` 
    })
  }
};

const generateCarousel = () => {
  const containerCarousels = document.querySelector('#carousels');

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
    });
  }
};

const footerCopyRight = () => {
  const containerServices = document.querySelector('#skills');

  if (containerServices && skills.length > 0) {
    skills.forEach((item) => {
      containerServices.innerHTML += `
        <article class='card-skill'>
				  <i class='${item.icon} icon'></i>
        </article>
      ` 
    })
  }
};

const openMenu = () => {
  const navList = document.querySelector('#nav-list');
	if (!navList) return;

	mobileMenu.classList.toggle('active');
	navList.classList.toggle('active');
};

// Init
document.addEventListener('DOMContentLoaded', () => {
  generateCardsService();
	generateCardsSkill();
  generateCarousel();
});

// Open menu mobile
mobileMenu.addEventListener('click', openMenu);

function scrollCarousel(direction) {
  const trackContainer = document.getElementById("carouselTrackContainer");
  const scrollAmount = 300; // quantidade de pixels para cada scroll

  if (direction === "right") {
    trackContainer.scrollBy({ left: scrollAmount, behavior: "smooth" });
  } else if (direction === "left") {
    trackContainer.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }
}

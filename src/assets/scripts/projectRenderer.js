import projectsData from './projectsData.js';

class ProjectRenderer {
  constructor(containerId, projectsData) {
    this.container = document.getElementById(containerId);
    this.projectsData = projectsData;
  }

  generateTechChip(tech) {
    return `<span><i class="${tech.icon}"></i> ${tech.name}</span>`;
  }

  generateButton(link) {
    return `<a href="${link.url}" target="_blank" rel="noopener noreferrer"><i class="${link.icon}"></i> ${link.text}</a>`;
  }

  generateProjectHTML(project) {
    const techHTML = project.technologies
      .map(tech => this.generateTechChip(tech))
      .join('');

    const buttonsHTML = project.links
      .map(link => this.generateButton(link))
      .join('');

    return `
      <article class="project-card">
        <div class="project-card__image">
          <img src="${project.imagePath}" alt="${project.title} screenshot">
        </div>
        <div class="project-card__body">
          <div class="project-card__header">
            <img src="${project.logoPath}" alt="" class="project-card__logo">
            <div>
              <h3 class="project-card__title">${project.title}</h3>
              <span class="project-card__type">${project.type}</span>
            </div>
          </div>
          <p class="project-card__desc">${project.description}</p>
          <div class="project-card__techs">${techHTML}</div>
          <div class="project-card__links">${buttonsHTML}</div>
        </div>
      </article>
    `;
  }

  render() {
    if (!this.container) return;

    const designs = `
      <span class="designAspect"><img src="/src/assets/imgs/design2.png" alt=""></span>
      <span class="designAspect"><img src="/src/assets/imgs/design2.png" alt=""></span>
    `;
    const header = `<h1 class="section-header">PROJECTS</h1>`;
    const grid = `<div class="projects-grid">${
      this.projectsData.map(p => this.generateProjectHTML(p)).join('')
    }</div>`;

    this.container.innerHTML = designs + header + grid;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const renderer = new ProjectRenderer('projects', projectsData);
  renderer.render();
});

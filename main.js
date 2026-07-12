const NAV_SECTION_IDS = ['publications', 'education', 'experience', 'awards', 'services'];

/* ============================================
 * Data Rendering
 * ============================================ */

function renderPublications() {
  const selectedContainer = document.getElementById('selected-publications-container');
  const otherContainer = document.getElementById('other-publications-container');

  publications.forEach(pub => {
    const article = document.createElement('article');
    article.className = 'card';

    const authorsHTML = pub.authors.map(author => {
      if (author.isSelf) {
        return `<strong>${author.name}</strong>${author.equal ? '<sup>*</sup>' : ''}`;
      } else if (author.url) {
        return `<a href="${author.url}">${author.name}</a>${author.equal ? '<sup>*</sup>' : ''}`;
      } else {
        return `${author.name}${author.equal ? '<sup>*</sup>' : ''}`;
      }
    }).join(', ');

    const linksHTML = pub.links.map(link =>
      `<a href="${link.url}" class="pub-link">${link.text}</a>`
    ).join(' / ');

    article.innerHTML = `
      <div class="card-content">
        <h3 class="card-title">
          <a href="${pub.links[0].url}">${pub.title}</a>
        </h3>
        <div class="card-authors">
          ${authorsHTML}
        </div>
        <div class="card-venue">
          ${pub.venue} / ${linksHTML}
        </div>
      </div>
    `;

    if (pub.highlighted) {
      selectedContainer.appendChild(article);
    } else {
      otherContainer.appendChild(article);
    }
  });
}

function renderEducation() {
  const container = document.getElementById('education-container');

  education.forEach(edu => {
    const card = document.createElement('div');
    card.className = 'card';

    card.innerHTML = `
      <div class="card-content">
        <div class="exp-header">
          <h3>${edu.school}</h3>
          <span class="exp-date">${edu.date}</span>
        </div>
        <div class="exp-role">${edu.degree}</div>
        <div class="text-secondary-sm">
          ${edu.location} | ${edu.detail}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderExperience() {
  const container = document.getElementById('experience-container');

  experiences.forEach(exp => {
    const card = document.createElement('div');
    card.className = 'card experience-card';

    card.innerHTML = `
      <div class="card-content">
        <div class="exp-header">
          <h3>${exp.organization}</h3>
          <span class="exp-date">${exp.date}</span>
        </div>
        <div class="text-secondary-sm">
          ${exp.location} | ${exp.description}
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderAwards() {
  const container = document.getElementById('awards-container');

  awards.forEach(award => {
    const li = document.createElement('li');
    li.className = 'news-item';
    const nameHTML = award.isStrong
      ? `<em><strong>${award.text}</strong></em>`
      : `<em>${award.text}</em>`;
    li.innerHTML = `
      <span class="news-date">${award.year}</span>
      <span>${nameHTML}${award.detail ? ', ' + award.detail : ''}</span>
    `;
    container.appendChild(li);
  });
}

function renderServices() {
  const container = document.getElementById('services-container');

  services.forEach(service => {
    const li = document.createElement('li');
    li.className = 'news-item';
    li.innerHTML = `
      <span class="news-date services-date">${service.role}</span>
      <span>${service.detail}</span>
    `;
    container.appendChild(li);
  });
}

/* ============================================
 * UI Initialization
 * ============================================ */

function initTheme() {
  const themeButtons = document.querySelectorAll('.theme-btn');
  const html = document.documentElement;

  function getEffectiveTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    return 'light';
  }

  function applyTheme(theme) {
    html.setAttribute('data-theme', theme);
  }

  function updateActiveButton() {
    const effectiveTheme = getEffectiveTheme();
    themeButtons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === effectiveTheme);
    });
  }

  applyTheme(getEffectiveTheme());
  updateActiveButton();

  themeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const theme = btn.dataset.theme;
      localStorage.setItem('theme', theme);
      applyTheme(theme);
      updateActiveButton();
    });
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const savedTheme = localStorage.getItem('theme');
    if (!savedTheme || (savedTheme !== 'light' && savedTheme !== 'dark')) {
      applyTheme(getEffectiveTheme());
      updateActiveButton();
    }
  });
}

function initNavHighlighting() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = NAV_SECTION_IDS
    .map(id => document.getElementById(id))
    .filter(Boolean);

  if (!('IntersectionObserver' in window) || sections.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.dataset.target === id);
        });
      }
    });
  }, {
    rootMargin: '-52px 0px -40% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));
}

function initNavSmoothScroll() {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.dataset.target;
      const target = document.getElementById(targetId);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + targetId);
    });
  });
}

/* ============================================
 * App Entry Point
 * ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  renderPublications();
  renderEducation();
  renderExperience();
  renderAwards();
  renderServices();
  initTheme();
  initNavHighlighting();
  initNavSmoothScroll();
});

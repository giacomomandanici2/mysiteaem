export default function decorate(block) {
  const rows = [...block.children];

  const [
    greetingText,
    title,
    subtitle,
    buttonText
  ] = rows.map((row) => row.textContent.trim());

  block.innerHTML = `
    <div class="greeting-container">
      <p class="greeting-text">${greetingText || ''}</p>

      <h2 class="greeting-title">${title || ''}</h2>

      <p class="greeting-subtitle">${subtitle || ''}</p>

      <button class="greeting-btn">
        ${buttonText || 'Click'}
      </button>
    </div>
  `;

  const btn = block.querySelector('.greeting-btn');

  if (btn) {
    btn.addEventListener('click', () => {
      block.querySelector('.greeting-title').textContent = 'Clicked 🎉';
    });
  }
}
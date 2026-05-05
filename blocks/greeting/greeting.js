export default function decorate(block) {
  const message = block.textContent.trim() || 'Hello from AEM Edge Delivery!';
  block.innerHTML = `
    <h2>${message}</h2>
    <p>This block was created at ${new Date().toLocaleTimeString()}.</p>
    <button class="greeting-btn">Click me</button>
  `;

  block.querySelector('.greeting-btn').addEventListener('click', () => {
    block.querySelector('h2').textContent = 'Button clicked! 🎉';
  });
}

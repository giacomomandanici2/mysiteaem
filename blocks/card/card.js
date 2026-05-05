import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  const [imageDiv, textDiv] = block.children;

  if (imageDiv) {
    const picture = imageDiv.querySelector('picture');
    if (picture) {
      const img = picture.querySelector('img');
      if (img) {
        picture.replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '400' }]));
      }
      imageDiv.className = 'card-image';
    }
  }

  if (textDiv) {
    textDiv.className = 'card-body';
    const link = textDiv.querySelector('a');
    if (link) {
      link.className = 'card-cta';
    }
  }
}

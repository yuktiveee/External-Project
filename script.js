function detectImage() {
      const imageInput = document.getElementById('imageInput');
      const resultBox = document.getElementById('result');

      if (!imageInput.files || imageInput.files.length === 0) {
        resultBox.textContent = 'Please upload at least one image!';
        return;
      }

      resultBox.innerHTML = ''; // Clear previous results
      const files = Array.from(imageInput.files);

      files.forEach((file, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `Processing Image ${index + 1}...`;
        resultBox.appendChild(listItem);

        // Mock AI Detection for each file
        setTimeout(() => {
          const isReal = (index === 2 || index === 4); // 3rd and 5th images
          listItem.textContent = `Image ${index + 1}: ${isReal ? 'REAL' : 'DEEPFAKE'}`;
        }, 2000 * (index + 1)); // Stagger processing times for clarity
      });
    }

  // GSAP Animation on Load
  document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#main h1", { y: -50, opacity: 0, duration: 1, stagger: 0.3 });
    gsap.from(".img1, .img2, .img3, .img4, .img5", { x: 100, opacity: 0, duration: 1, stagger: 0.2 });
  });

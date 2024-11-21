let uploadCount = 0; // Counter to track uploads

function detectImage() {
    const imageInput = document.getElementById('imageInput');
    const resultBox = document.getElementById('result');

    if (!imageInput.files || !imageInput.files[0]) {
        resultBox.textContent = 'Please upload an image!';
        return;
    }

    // Increment the upload count
    uploadCount++;

    // Display processing message
    resultBox.textContent = 'Processing...';

    // Simulate AI Detection with a delay
    setTimeout(() => {
        if (uploadCount % 2 === 1) {
            // Odd upload - DEEPFAKE
            resultBox.textContent = 'AI Result: Image is DEEPFAKE.';
        } else {
            // Even upload - REAL
            resultBox.textContent = 'AI Result: Image is REAL.';
        }
    }, 2000);
}

  
  // GSAP Animation on Load
  document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#main h1", { y: -50, opacity: 0, duration: 1, stagger: 0.3 });
    gsap.from(".img1, .img2, .img3, .img4, .img5", { x: 100, opacity: 0, duration: 1, stagger: 0.2 });
  });

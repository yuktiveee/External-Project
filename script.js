// Detect Image Function
function detectImage() {
    const imageInput = document.getElementById('imageInput');
    const resultBox = document.getElementById('result');
  
    if (!imageInput.files || !imageInput.files[0]) {
      resultBox.textContent = 'Please upload an image!';
      return;
    }
  
    // Mock AI Detection
    resultBox.textContent = 'Processing...';
  
    setTimeout(() => {
      resultBox.textContent = 'AI Result: Image is classified as Real/Fake (mocked response).';
    }, 2000);
  }
  
  // GSAP Animation on Load
  document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#main h1", { y: -50, opacity: 0, duration: 1, stagger: 0.3 });
    gsap.from(".img1, .img2, .img3, .img4, .img5", { x: 100, opacity: 0, duration: 1, stagger: 0.2 });
  });
  
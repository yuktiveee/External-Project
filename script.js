// Detect Image Function
function detectImage() {
    const imageInput = document.getElementById('imageInput');
    const resultBox1 = document.getElementById('result1');
    const resultBox2 = document.getElementById('result2');
  
    if (!imageInput.files || !imageInput.files[0]) {
        resultBox1.textContent = 'Please upload an image!';
        resultBox2.textContent = '';
        return;
    }
  
    // Mock AI Detection
    resultBox1.textContent = 'Processing...';
    resultBox2.textContent = 'Processing...';
  
    setTimeout(() => {
        resultBox1.textContent = 'AI Result 1: Image is classified as Deep Fake (mocked response).';
    }, 2000);

    setTimeout(() => {
        resultBox2.textContent = 'AI Result 2: Image is classified as Real (mocked response).';
    }, 2000);
}
  
// GSAP Animation on Load
document.addEventListener('DOMContentLoaded', () => {
    gsap.from("#main h1", { y: -50, opacity: 0, duration: 1, stagger: 0.3 });
    gsap.from(".img1, .img2, .img3, .img4, .img5", { x: 100, opacity: 0, duration: 1, stagger: 0.2 });
});

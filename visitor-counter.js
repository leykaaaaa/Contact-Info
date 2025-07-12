// Visitor Counter
document.addEventListener('DOMContentLoaded', () => {
  const counterElement = document.getElementById('visitor-counter');
  
  // Get current count or initialize
  let count = localStorage.getItem('visitorCount') || 0;
  
  // Increment count
  count++;
  
  // Update storage and display
  localStorage.setItem('visitorCount', count);
  counterElement.textContent = count;
});
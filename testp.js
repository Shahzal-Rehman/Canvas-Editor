// Get current timestamp
const getCurrentTimestamp = () => {
  return new Date().getTime();
};


// Store last active timestamp in LocalStorage
const storeLastActive = () => {
  const lastActive = getCurrentTimestamp();
  localStorage.setItem('lastActive', lastActive);
};


// Get last active timestamp from LocalStorage
const getLastActive = () => {
  return localStorage.getItem('lastActive');

};


// Update last active timestamp on page load and interaction
document.addEventListener('DOMContentLoaded', storeLastActive);
document.addEventListener('click', storeLastActive);
document.addEventListener('scroll', storeLastActive);
document.addEventListener('keydown', storeLastActive);


// Example usage:
const displayLastActive = () => {
  const lastActive = getLastActive();
  if (lastActive) {
      const formattedTime = new Date(parseInt(lastActive)).toLocaleString();
      document.getElementById('last-active').innerHTML = `Last active: ${formattedTime}`;  // Corrected string interpolation
  }
};




// Display the last active time on page load
document.addEventListener('DOMContentLoaded', displayLastActive);


// Coordinates for the cursor
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

// Colors for the circles
const colors = [
    "#ffb56b", "#fdaf69", "#f89d63", "#f59761", "#ef865e", "#ec805d",
    "#e36e5c", "#df685c", "#d5585c", "#d1525c", "#c5415d", "#c03b5d",
    "#b22c5e", "#ac265e", "#9c155f", "#950f5f", "#830060", "#7c0060",
    "#680060", "#60005f", "#48005f", "#3d005e"
];

// Assign colors and initial position to each circle
circles.forEach(function (circle, index) {
    circle.x = 0;
    circle.y = 0;
    circle.style.backgroundColor = colors[index % colors.length];
});

// Update the coordinates when the mouse moves
window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
});

// Animation function to move the circles
function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
        // Update the position and scale of each circle
        circle.style.left = x - 12 + "px";
        circle.style.top = y - 12 + "px";
        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        // Get the next circle in the sequence
        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.3;
        y += (nextCircle.y - y) * 0.3;
    });

    // Repeat the animation
    requestAnimationFrame(animateCircles);
}

// Start the animation
animateCircles();
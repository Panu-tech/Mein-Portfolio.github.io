const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Load the image
const img = new Image();
img.src = "maps_future.jpg"; // Replace with the path to your image

img.onload = () => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};

// Waldo's coordinates (example)
const waldo = {
    x: 244,
    y: 382,
    width: 50,
    height: 50
};

// Event listener for clicks
canvas.addEventListener('click', (event) => {
    const rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    alert("X= " + x)
    alert("Y= "+y)
    if (x >= waldo.x && x <= waldo.x + waldo.width && y >= waldo.y && y <= waldo.y + waldo.height) {
        alert('You found Waldo!');
    } else {
        alert('Keep looking!');
    }
});

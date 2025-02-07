
const video = document.getElementById("rosevideo");
const link = document.getElementById("surpriseLink");
const surprise = document.getElementById("surprise");
const heart = document.getElementById("heart");

video.onended = function() {
    link.style.display = "block"; 
};

link.onclick = function() {
    document.body.innerHTML = '';  
    document.body.appendChild(heart);  
    document.getElementById('heart').style.display = "block";
    bloomRoses();
};

function bloomRoses() {
    const numRoses = 50; 
    const centerX = window.innerWidth / 2; 
    const centerY = window.innerHeight / 2; 
    const scaleFactor = 20;

    for (let i = 0; i < numRoses; i++) {
        let rose = document.createElement("img");
        rose.src = "rose-removebg-preview.png"; 
        rose.className = "blooming-rose";

        let t = (i / numRoses) * Math.PI * 2; 
        let x = 16 * Math.pow(Math.sin(t), 3); 
        let y = - (13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t));

        rose.style.left = centerX + x * scaleFactor + "px"; 
        rose.style.top = centerY + y * scaleFactor + "px";

        document.body.appendChild(rose);

        setTimeout(() => {
            rose.style.transform = "scale(1)";
            rose.style.opacity = "1";
        }, 100 * i);
    }
}
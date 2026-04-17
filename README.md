<img width="1916" height="896" alt="Screenshot 2026-04-17 105347" src="https://github.com/user-attachments/assets/2cf9df36-eeb1-4d1e-8018-694e62415e7a" />

🖼️ Image Slider (Auto + Next/Previous)
📌 Project Overview

This project is a simple JavaScript Image Slider that supports:

⏱️ Auto sliding (every 3 seconds)
⬅️ Previous button
➡️ Next button
🔄 Auto restart after manual interaction

🚀 Features
Automatic image change using setInterval
Manual navigation with Next and Previous
Prevents multiple timers (bug-free logic)
Smooth looping (last → first, first → last)

🧠 How It Works
index → tracks current image
showImage() → updates image source
setInterval() → runs auto slider
next() / previous() → manual controls
stopSlider() → clears old timer
startSlider() → restarts timer

📂 Code Explanation
🔹 Image Array

Stores all image URLs:

const images = [ "img1.jpg", "img2.jpg", ... ];
🔹 Show Image

Updates <img> tag:

function showImage(){
    slider.src = images[index];
}
🔹 Auto Slider

Runs every 3 seconds:

function startSlider() {
  interval = setInterval(next, 3000);
}
🔹 Stop Slider

Prevents multiple intervals:

function stopSlider() {
  clearInterval(interval);
}
🔹 Next Function
function next(){
    stopSlider();
    index++;

    if(index >= images.length){
        index = 0;
    }

    showImage();
    startSlider();
}
🔹 Previous Function
function previous(){
    stopSlider();
    index--;

    if(index < 0){
        index = images.length - 1;
    }

    showImage();
    startSlider();
}
🖥️ HTML Structure
<img id="slider" width="400">

<br>

<button onclick="previous()">Previous</button>
<button onclick="next()">Next</button>

▶️ How to Run
Create an index.html file
Add <img> and buttons
Add JavaScript code
Open in browser

✅ Output
Images change automatically every 3 seconds
Buttons work smoothly
No timer conflicts
🔥 Future Improvements
⏸️ Pause on hover
🔘 Dots indicator
🎞️ Fade / slide animation
📱 Responsive design
👨‍💻 Author

Created as a simple JavaScript project.


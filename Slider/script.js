// const images = [
//   "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
//   "https://images.pexels.com/photos/34950/pexels-photo.jpg",
//   "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
//   "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
//   "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg",
//   "https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg",
//   "https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg",
//   "https://images.pexels.com/photos/247676/pexels-photo-247676.jpeg",
//   "https://images.pexels.com/photos/158607/cairn-fog-mystical-background-158607.jpeg",
//   "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg"
// ];

// let index = 0;

// const image = document.getElementById("slider");


// function showImage(){
//     slider.src = images[index];
// }

// function startSlider() {
//   interval = setInterval(next, 3000);
// }

// function previous(){
//     index--;
//     if(index<0){
//         index = images.length-1;
//     }
//     showImage();
// }

// function next(){
//     index++;
//     if(index>=images.length){
//         index = 0;
//     }
//     showImage();
// }
// startSlider();
// showImage();

const images = [
  "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg",
  "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg",
  "https://images.pexels.com/photos/355465/pexels-photo-355465.jpeg",
  "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg"
];

let index = 0;

const slider = document.getElementById("slider");

let interval; 

function showImage(){
    slider.src = images[index]; 
}

function startSlider() {
  interval = setInterval(next, 3000);
}

function stopSlider() {
  clearInterval(interval);
}


function next(){
    stopSlider(); 
    index++;

    if(index >= images.length){
        index = 0;
    }

    showImage();
    startSlider(); 
}

function previous(){
    stopSlider(); 
    index--;

    if(index < 0){
        index = images.length - 1;
    }

    showImage();
    startSlider(); 
}


showImage();
startSlider();
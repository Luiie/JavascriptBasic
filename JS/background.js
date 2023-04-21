const images = [
    "1.jpg",
    "2.jpeg",
    "3.jpg",
    "4.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `image/${chosenImage}`;
bgImage = `image/${chosenImage}`;
document.body.style.backgroundImage = `url(${bgImage})`;
// console.log()
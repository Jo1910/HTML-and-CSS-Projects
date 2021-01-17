const ltb = document.createElement("div"); // creating a div element and assigning it to the variable
ltb.id = "ltbImage"; // creating an id for our element
document.getElementById("gallery").appendChild(ltb); // appending 'ltb' to the DOM element with the 'gallery' id

const images = document.querySelectorAll("img"); // selecting all of the images
images.forEach((image) => { // looping through the images with forEach method
    image.addEventListener("click", (e) => { // setting up click event listener
        ltb.classList.add("active"); // adding 'active' class to the 'ltb' and making sure our lightbox is showing every time we click on an image
        const img = document.createElement("img"); // creating 'img' element inside our div
        img.src = image.src; // new image is our current image
        while (ltb.firstChild) {
            ltb.removeChild(ltb.firstChild); // removing children from the 'ltb' element and adding a new one
        }
        ltb.appendChild(img); // appending 'img' to the 'ltb'
    });
});

ltb.addEventListener("click", (e) => {
    ltb.classList.remove("active"); // removing the 'active' class, it will hide the lightbox once clicked again
});
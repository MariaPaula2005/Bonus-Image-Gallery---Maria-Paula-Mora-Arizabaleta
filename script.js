var arrayImages = ["img1.avif", "img2.avif", "img3.avif"];
var currentImage = 0;

document.getElementById('Previous').addEventListener("click", changeImage);
document.getElementById('Next').addEventListener("click", changeImage);
window.addEventListener("load", function() {
    changeImage(0);
});

    function changeImage(offset) {
        currentImage = (currentImage + offset + arrayImages.length) % arrayImages.length;
        var imageShowing = arrayImages[currentImage];
        document.getElementById('image').src = 'Images/' + imageShowing;
    }

function changeImage() {
    var button = this.id;
    if (button === 'Next') {
        currentImage = (currentImage + 1) % arrayImages.length;
    } else if (button === 'Previous') {
        currentImage = (currentImage - 1 + arrayImages.length) % arrayImages.length;
    }

    var imageShowing = arrayImages[currentImage];
    document.getElementById('image').src = 'Images/' + imageShowing;
}
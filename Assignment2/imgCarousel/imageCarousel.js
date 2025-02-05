const images = [
    'https://picsum.photos/id/30/200/300',
    'https://picsum.photos/id/20/200/300',
    'https://picsum.photos/id/10/200/300',
    'https://picsum.photos/id/11/200/300',
    'https://picsum.photos/id/13/200/300',
    'https://picsum.photos/id/15/200/300',
    'https://picsum.photos/id/19/200/300'

];

let currentIndex = 0;
const imgElement = document.getElementById('carousel-image');
imgElement.src = images[currentIndex];

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imgElement.src = images[currentIndex];
}
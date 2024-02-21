const galleryImage = document.getElementById('gallery-image');

const galleryPhotos = {
    0: './galleryPhotos/bmx.jpg',
    1: './galleryPhotos/community.jpg',
    2: './galleryPhotos/devikiyo.jpg',
    3: './galleryPhotos/kf_indy.jpg',
    4: './galleryPhotos/learning.jpg',
    5: './galleryPhotos/roller.jpg',
};

let currentIndex = 0;

galleryImage.setAttribute("src", galleryPhotos[currentIndex]);

setInterval(() => {
    currentIndex += 1;
    currentIndex = currentIndex % Object.keys(galleryPhotos).length;
    galleryImage.setAttribute('src', galleryPhotos[currentIndex]);
}, 4000);
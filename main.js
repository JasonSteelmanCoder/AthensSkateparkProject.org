const galleryImage = document.getElementById('gallery-image');

const galleryPhotos = {
    0: './galleryPhotos/learning.jpg',
    1: './galleryPhotos/roller.jpg',
    2: './galleryPhotos/community.jpg',
    3: './galleryPhotos/devikiyo.jpg',
    4: './galleryPhotos/kf_indy.jpg',
    5: './galleryPhotos/bmx.jpg',
};

let currentIndex = 0;

galleryImage.setAttribute("src", galleryPhotos[currentIndex]);

setInterval(() => {
    currentIndex += 1;
    currentIndex = currentIndex % Object.keys(galleryPhotos).length;
    galleryImage.setAttribute('src', galleryPhotos[currentIndex]);
}, 4000);
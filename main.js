const galleryImage = document.getElementById('gallery-image');

const galleryPhotos = {
    0: {"src": './galleryPhotos/learning.jpg', "alt": "boy learning to skateboard"},
    1: {"src": './galleryPhotos/roller.jpg', "alt": "female roller skater doing trick with long hair died pink"},
    2: {"src": './galleryPhotos/community.jpg', "alt": "group of people laughing together, gathered on top of a ramp"},
    3: {"src": './galleryPhotos/devikiyo.jpg', "alt": "man flipping a skateboard at the top of a ramp"},
    4: {"src": './galleryPhotos/kf_indy.jpg', "alt": "man soaring above the skatepark flipping his skateboard under him"},
    5: {"src": './galleryPhotos/bmx.jpg', "alt": "man precariously balancing on a bmx bike"},
};

let currentIndex = 0;

galleryImage.setAttribute("src", galleryPhotos[currentIndex]["src"]);
galleryImage.setAttribute("alt", galleryPhotos[currentIndex]["alt"]);

setInterval(() => {
    currentIndex += 1;
    currentIndex = currentIndex % Object.keys(galleryPhotos).length;
    galleryImage.setAttribute('src', galleryPhotos[currentIndex]["src"]);
    galleryImage.setAttribute('alt', galleryPhotos[currentIndex]["alt"]);
}, 4000);
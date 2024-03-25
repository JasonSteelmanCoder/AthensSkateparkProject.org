// rotating gallery
const galleryImage = document.getElementById('gallery-image');

const galleryPhotos = {
    0: {"src": './mainImages/galleryPhotos/learning.jpg', "alt": "boy learning to skateboard"},
    1: {"src": './mainImages/galleryPhotos/roller.jpg', "alt": "female roller skater doing trick with long hair died pink"},
    2: {"src": './mainImages/galleryPhotos/community.jpg', "alt": "group of people laughing together, gathered on top of a ramp"},
    3: {"src": './mainImages/galleryPhotos/devikiyo.jpg', "alt": "man flipping a skateboard at the top of a ramp"},
    4: {"src": './mainImages/galleryPhotos/kf_indy.jpg', "alt": "man soaring above the skatepark flipping his skateboard under him"},
    5: {"src": './mainImages/galleryPhotos/bmx.jpg', "alt": "man precariously balancing on a bmx bike"},
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

// find date of next public meeting:
function getNextThirdSunday() {
    const today = new Date();
    const year = today.getFullYear();
    let month = today.getMonth(); 
  
    const findThirdSunday = (isNextMonth = false) => {
      let firstDayOfMonth;
      if (!isNextMonth) {
        firstDayOfMonth = new Date(year, month, 1);
      } else {
        if (month !== 11) {
          firstDayOfMonth = new Date(year, month + 1, 1);
        } else {
          firstDayOfMonth = new Date(year + 1, 0, 1);
        }
        month += 1;
      }
        const dayOfWeek = firstDayOfMonth.getDay();
        const daysToAdd = (dayOfWeek === 0) ? 0 : (7 - dayOfWeek);
        const thirdSunday = new Date(year, month, 1 + daysToAdd + 14);
        return thirdSunday;
    };
  
    const options = { month: 'long', day: 'numeric' };
  
    const preliminaryResults = findThirdSunday();
    if (preliminaryResults > today) {
      return preliminaryResults.toLocaleDateString('en-US', options);
    } else {
      return findThirdSunday(true).toLocaleDateString('en-US', options);
    }
}

const standardEventText = document.getElementById('standard-event-text');
standardEventText.innerHTML += ` ${getNextThirdSunday()}`
const photo = document.getElementById('photo');
    const newPhotoButton = document.getElementById('new-photo');
    
    function getRandomPhoto() {
      const width = Math.floor(Math.random() * 1000) + 500;
      const height = Math.floor(Math.random() * 1000) + 500;
      const url = `https://picsum.photos/${width}/${height}`;
      
      photo.src = url;
    }
    
    newPhotoButton.addEventListener('click', getRandomPhoto);
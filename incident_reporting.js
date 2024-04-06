document.getElementById('image').addEventListener('change', function (event) {
    var imageFiles = event.target.files;

    displayImages(imageFiles);
});

function displayImages(imageFiles) {
    var imageContainer = document.getElementById('imageContainer');
    imageContainer.innerHTML = ''; // Clear previous images
  
    for (var i = 0; i < imageFiles.length; i++) {
      var reader = new FileReader();
  
      reader.onload = (function (file) {
        return function (e) {
          var imgElement = document.createElement('img');
          imgElement.src = e.target.result;
          imgElement.alt = 'Uploaded Image ' + (i + 1); // Change alt text to include image number
          imgElement.classList.add('uploadedImage');
  
          // You can adjust these styles as needed
          imgElement.style.width = '200px';
          imgElement.style.height = '150px';
          imgElement.style.margin = '5px'; // Add spacing between images
  
          imageContainer.appendChild(imgElement);
        };
      })(imageFiles[i]);
  
      reader.readAsDataURL(imageFiles[i]);
    }
  }
  

function resetForm() {
    var form = document.getElementById('incidentForm');
    form.reset();

    var imageInput = document.getElementById('image');
    var imageContainer = document.getElementById('imageContainer');

    imageInput.value = '';
    imageContainer.innerHTML = ''; // Clear the image container
}

document.getElementById('resetButton').addEventListener('click', function (event) {
    event.preventDefault(); // Prevent the default reset behavior
    resetForm();
});

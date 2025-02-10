 const imageInput = document.getElementById('imageFile');
 const imagepreview = document.getElementById('imagepreview');
 
 imageInput.addEventListener('change', () => {
	 if(imageInput.files[0]) {
		 let fileReader = new FileReader();
		 fileReader.onload = () => {
			 imagePreview.innerHTML = `<img src="${fileReader.result}" class="mb-3">`;
		 }
		 fileReader.readAsDataURL(imageInput.files[0]);
		 
	 } else {
		 imagePreview.innerHTML = '';
	 }
 })
 const imageInput = document.getElementById('imageFile');
 const imagePreview = document.getElementById('imagepreview');
 
 imageInput.addEventListener('change', () => {
	 if(imageInput.files[0]) {
		 let fileReader = new FileReader();
		 fileReader.onload = () => {
			 imagePreview.innerHTML = `<img src="${fileReader.result}" class="mb-3">`;
		 }
		 fileReader.resAsDreadAsDataURL(imageInput.files[0]);
		 
	 } else {
		 imagePreview.innerHTML = '';
	 }
 })
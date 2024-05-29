// script.js
document.addEventListener('DOMContentLoaded', () => {
    const color1Input = document.getElementById('color1');
    const color2Input = document.getElementById('color2');
    const gradientTypeSelect = document.getElementById('gradientType');
    const preview = document.getElementById('preview');
    const selectImageButton = document.getElementById('selectImageButton');
    const fileInput = document.getElementById('fileInput');
    const imageContainer = document.getElementById('imageContainer');

    function updateBackground() {
        const color1 = color1Input.value;
        const color2 = color2Input.value;
        const gradientType = gradientTypeSelect.value;
        const file = fileInput.files[0];

        let gradient;

        selectImageButton.addEventListener('click', () => {
        fileInput.click();
    });

        if (gradientType === 'linear') {
            gradient = `linear-gradient(to right, ${color1}, ${color2})`;
        } else if (gradientType === 'radial') {
            gradient = `radial-gradient(circle, ${color1}, ${color2})`;
        }else if(file){
            const reader=new FileReader();
            
            reader.onload = (e) => {
                const img = document.createElement('img');
                img.src = e.target.result;
                imageContainer.innerHTML = '';
                imageContainer.appendChild(img);
            };

            reader.readAsDataURL(file);

        }

        preview.style.background = gradient;
    }

    color1Input.addEventListener('input', updateBackground);
    color2Input.addEventListener('input', updateBackground);
    gradientTypeSelect.addEventListener('change', updateBackground);
    updateBackground();
    
});

const heightSlider = document.getElementById('heightSlider');
const widthSlider = document.getElementById('widthSlider'); 

heightSlider.addEventListener('input', () => {
    const heightValue = heightSlider.value;
    changeElementSize(heightValue, null);
});

widthSlider.addEventListener('input', () => {
    const widthValue = widthSlider.value;
    changeElementSize(null, widthValue);
});

function changeElementSize(newHeight, newWidth) {
    const elements = document.querySelectorAll('.flex-container > div');
    elements.forEach((element) => {
        if (newHeight) {
            element.style.height = `${newHeight}px`;
        }
        if (newWidth) {
            element.style.width = `${newWidth}%`;
        }
    });
}
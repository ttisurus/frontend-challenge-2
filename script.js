const slider_1 = document.getElementById('first_slider')
const slider_2 = document.getElementById('second_slider')
var i = 0;
var sliders = [];

sliders[0] = slider_1.style.display = 'block';
sliders[1] = slider_2.style.display = 'none';

function initSlider() {
  if (i < sliders.length - 1) {
    sliders[0] = slider_1.style.display = 'none';
    sliders[1] = slider_2.style.display = 'block';

    i++;
  }else {
    sliders[0] = slider_1.style.display = 'block';
    sliders[1] = slider_2.style.display = 'none';

    i = 0;

  }
};

initSlider();
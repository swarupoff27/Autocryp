function navtoggle() {
  document.getElementById('ham').classList.toggle('hide');
  document.body.classList.toggle('no-scroll');
}

document.getElementById('hamburger-icon').addEventListener('click', navtoggle);
document.getElementById('benefit-id').addEventListener('click', navtoggle);
document.getElementById('pricing-id').addEventListener('click', navtoggle);
document.getElementById('testimonials-id').addEventListener('click', navtoggle);
document.getElementById('client-id').addEventListener('click', navtoggle);


const slider = document.querySelector('.testimonials__right__cards');
const indicators = document.querySelectorAll('.card__indicator span');


indicators.forEach((indicator, x) => {
  indicator.addEventListener('click', () => {
    slider.style.transform = 'translateX(' + x * -460 + 'px)';
    slider.style.transition = '1s ease';
  });
});


//=========================================================================================
const ind1 = document.getElementById('ind-1');
const ind2 = document.getElementById('ind-2');
const ind3 = document.getElementById('ind-3');
const ind4 = document.getElementById('ind-4');
const ind5 = document.getElementById('ind-5');


function select_ind(indx, ind_a, ind_b, ind_c, ind_d) {
  document.getElementById(indx).classList.add('white');

  document.getElementById(ind_a).classList.remove('white');
  document.getElementById(ind_b).classList.remove('white');
  document.getElementById(ind_c).classList.remove('white');
  document.getElementById(ind_d).classList.remove('white');
}

function select_card_color(testx, test_a, test_b, test_c, test_d) {
  document.querySelector(testx).classList.add('green');
  document.querySelector(testx).classList.remove('white');

  document.querySelector(test_a).classList.remove('green');
  document.querySelector(test_a).classList.add('white');
  document.querySelector(test_b).classList.remove('green');
  document.querySelector(test_b).classList.add('white');
  document.querySelector(test_c).classList.remove('green');
  document.querySelector(test_c).classList.add('white');
  document.querySelector(test_d).classList.remove('green');
  document.querySelector(test_d).classList.add('white');

}

function select_text_color(testx, test_a, test_b, test_c, test_d) {
  document.querySelector(testx + ' img').src = 'images/whitequotes.png'
  document.querySelector(testx + ' p').style.color = 'white';
  document.querySelector(testx + ' :last-child').style.color = 'white';

  document.querySelector(test_a +' img').src = 'images/greenquotes.png'
  document.querySelector(test_a +' p').style.color = '#031d5b';
  document.querySelector(test_a +' :last-child').style.color = '#031d5b';
  document.querySelector(test_b +' img').src = 'images/greenquotes.png'
  document.querySelector(test_b +' p').style.color = '#031d5b';
  document.querySelector(test_b +' :last-child').style.color = '#031d5b';
  document.querySelector(test_c +' img').src = 'images/greenquotes.png'
  document.querySelector(test_c +' p').style.color = '#031d5b';
  document.querySelector(test_c +' :last-child').style.color = '#031d5b';
  document.querySelector(test_d +' img').src = 'images/greenquotes.png'
  document.querySelector(test_d +' p').style.color = '#031d5b';
  document.querySelector(test_d +' :last-child').style.color = '#031d5b';
}
//================================================================================

ind1.addEventListener('click', function () {
  select_ind('ind-1', 'ind-2', 'ind-3', 'ind-4', 'ind-5');
  select_card_color('.test-1', '.test-2', '.test-3', '.test-4', '.test-5');
  select_text_color('.test-1','.test-2', '.test-3', '.test-4', '.test-5');
});


ind2.addEventListener('click', function () {
  select_ind('ind-2', 'ind-1', 'ind-3', 'ind-4', 'ind-5');
  select_card_color('.test-2', '.test-1', '.test-3', '.test-4', '.test-5');
  select_text_color('.test-2','.test-1', '.test-3', '.test-4', '.test-5');
});

ind3.addEventListener('click', function () {
  select_ind('ind-3', 'ind-1', 'ind-2', 'ind-4', 'ind-5');
  select_card_color('.test-3', '.test-1', '.test-2', '.test-4', '.test-5');
  select_text_color('.test-3','.test-1', '.test-2', '.test-4', '.test-5');
});

ind4.addEventListener('click', function () {
  select_ind('ind-4', 'ind-1', 'ind-2', 'ind-3', 'ind-5');
  select_card_color('.test-4', '.test-1', '.test-2', '.test-3', '.test-5');
  select_text_color('.test-4','.test-1', '.test-2', '.test-3', '.test-5');
});

ind5.addEventListener('click', function () {
  select_ind('ind-5', 'ind-1', 'ind-2', 'ind-3', 'ind-4');
  select_card_color('.test-5', '.test-1', '.test-2', '.test-3', '.test-4');
  select_text_color('.test-5', '.test-1', '.test-2', '.test-3', '.test-4');
});
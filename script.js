

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

// function select_ind(indx,color){
//   document.getElementById(indx).classList.add(color);
// }

// function unselect_ind(ind1,ind2,ind3,ind4,color){
//   document.getElementById(ind1).classList.remove(color);
//   document.getElementById(ind2).classList.remove(color);
//   document.getElementById(ind3).classList.remove(color);
//   document.getElementById(ind4).classList.remove(color);
// }


const ind1 = document.getElementById('ind-1');
const ind2 = document.getElementById('ind-2');
const ind3 = document.getElementById('ind-3');
const ind4 = document.getElementById('ind-4');
const ind5 = document.getElementById('ind-5');

ind1.addEventListener('click', function(){
//ind
  // select_ind('ind-1','white');
  // unselect_ind('ind-2','ind-3','ind-4','ind-4','white');
  document.getElementById('ind-1').classList.add('white');
  document.getElementById('ind-2').classList.remove('white');
  document.getElementById('ind-3').classList.remove('white');
  document.getElementById('ind-4').classList.remove('white');
  document.getElementById('ind-5').classList.remove('white');
//ind
//******************

document.querySelector('.test-1').classList.remove('white');
document.querySelector('.test-1').classList.add('green');

document.querySelector('.test-2').classList.remove('green');
document.querySelector('.test-2').classList.add('white');

document.querySelector('.test-3').classList.remove('green');
document.querySelector('.test-3').classList.add('white');

document.querySelector('.test-4').classList.remove('green');
document.querySelector('.test-4').classList.add('white');

document.querySelector('.test-5').classList.remove('green');
document.querySelector('.test-5').classList.add('white');
//*******************

document.querySelector('.test-1 img').src = 'images/whitequotes.png'
document.querySelector('.test-1 p').style.color = 'white';
document.querySelector('.test-1 :last-child').style.color = 'white';

document.querySelector('.test-2 img').src = 'images/greenquotes.png'
document.querySelector('.test-2 p').style.color = '#031d5b';
document.querySelector('.test-2 :last-child').style.color = '#031d5b';

document.querySelector('.test-3 img').src = 'images/greenquotes.png'
document.querySelector('.test-3 p').style.color = '#031d5b';
document.querySelector('.test-3 :last-child').style.color = '#031d5b';

document.querySelector('.test-4 img').src = 'images/greenquotes.png'
document.querySelector('.test-4 p').style.color = '#031d5b';
document.querySelector('.test-4 :last-child').style.color = '#031d5b';

document.querySelector('.test-5 img').src = 'images/greenquotes.png'
document.querySelector('.test-5 p').style.color = '#031d5b';
document.querySelector('.test-5 :last-child').style.color = '#031d5b';


});


ind2.addEventListener('click', function(){
//ind
  document.getElementById('ind-1').classList.remove('white');
  document.getElementById('ind-2').classList.add('white');
  document.getElementById('ind-3').classList.remove('white');
  document.getElementById('ind-4').classList.remove('white');
  document.getElementById('ind-5').classList.remove('white');
//ind
//******************

  document.querySelector('.test-2').classList.remove('white');
  document.querySelector('.test-2').classList.add('green');

  document.querySelector('.test-1').classList.remove('green');
  document.querySelector('.test-1').classList.add('white');

  document.querySelector('.test-3').classList.remove('green');
  document.querySelector('.test-3').classList.add('white');

  document.querySelector('.test-4').classList.remove('green');
  document.querySelector('.test-4').classList.add('white');

  document.querySelector('.test-5').classList.remove('green');
  document.querySelector('.test-5').classList.add('white');

//******************


document.querySelector('.test-1 img').src = 'images/greenquotes.png'
document.querySelector('.test-1 p').style.color = '#031d5b';
document.querySelector('.test-1 :last-child').style.color = '#031d5b';

document.querySelector('.test-2 img').src = 'images/whitequotes.png'
document.querySelector('.test-2 p').style.color = 'white';
document.querySelector('.test-2 :last-child').style.color = 'white';

document.querySelector('.test-3 img').src = 'images/greenquotes.png'
document.querySelector('.test-3 p').style.color = '#031d5b';
document.querySelector('.test-3 :last-child').style.color = '#031d5b';

document.querySelector('.test-4 img').src = 'images/greenquotes.png'
document.querySelector('.test-4 p').style.color = '#031d5b';
document.querySelector('.test-4 :last-child').style.color = '#031d5b';

document.querySelector('.test-5 img').src = 'images/greenquotes.png'
document.querySelector('.test-5 p').style.color = '#031d5b';
document.querySelector('.test-5 :last-child').style.color = '#031d5b';


 
});

ind3.addEventListener('click', function(){
//ind
document.getElementById('ind-1').classList.remove('white');
document.getElementById('ind-2').classList.remove('white');
document.getElementById('ind-3').classList.add('white');
document.getElementById('ind-4').classList.remove('white');
document.getElementById('ind-5').classList.remove('white');
//ind 
//******************

document.querySelector('.test-1').classList.remove('green');
document.querySelector('.test-1').classList.add('white');

document.querySelector('.test-2').classList.remove('green');
document.querySelector('.test-2').classList.add('white');

document.querySelector('.test-3').classList.remove('white');
document.querySelector('.test-3').classList.add('green');

document.querySelector('.test-4').classList.remove('green');
document.querySelector('.test-4').classList.add('white');

document.querySelector('.test-5').classList.remove('green');
document.querySelector('.test-5').classList.add('white');

//******************

document.querySelector('.test-1 img').src = 'images/greenquotes.png'
document.querySelector('.test-1 p').style.color = '#031d5b';
document.querySelector('.test-1 :last-child').style.color = '#031d5b';

document.querySelector('.test-2 img').src = 'images/greenquotes.png'
document.querySelector('.test-2 p').style.color = '#031d5b';
document.querySelector('.test-2 :last-child').style.color = '#031d5b';

document.querySelector('.test-3 img').src = 'images/whitequotes.png'
document.querySelector('.test-3 p').style.color = 'white';
document.querySelector('.test-3 :last-child').style.color = 'white';

document.querySelector('.test-4 img').src = 'images/greenquotes.png'
document.querySelector('.test-4 p').style.color = '#031d5b';
document.querySelector('.test-4 :last-child').style.color = '#031d5b';

document.querySelector('.test-5 img').src = 'images/greenquotes.png'
document.querySelector('.test-5 p').style.color = '#031d5b';
document.querySelector('.test-5 :last-child').style.color = '#031d5b';


});

ind4.addEventListener('click', function(){
//ind
document.getElementById('ind-1').classList.remove('white');
document.getElementById('ind-2').classList.remove('white');
document.getElementById('ind-3').classList.remove('white');
document.getElementById('ind-4').classList.add('white');
document.getElementById('ind-5').classList.remove('white');
//ind
//******************

document.querySelector('.test-1').classList.remove('green');
document.querySelector('.test-1').classList.add('white');

document.querySelector('.test-2').classList.remove('green');
document.querySelector('.test-2').classList.add('white');

document.querySelector('.test-3').classList.remove('green');
document.querySelector('.test-3').classList.add('white');

document.querySelector('.test-4').classList.remove('white');
document.querySelector('.test-4').classList.add('green');

document.querySelector('.test-5').classList.remove('green');
document.querySelector('.test-5').classList.add('white');
//******************

document.querySelector('.test-1 img').src = 'images/greenquotes.png'
document.querySelector('.test-1 p').style.color = '#031d5b';
document.querySelector('.test-1 :last-child').style.color = '#031d5b';

document.querySelector('.test-2 img').src = 'images/greenquotes.png'
document.querySelector('.test-2 p').style.color = '#031d5b';
document.querySelector('.test-2 :last-child').style.color = '#031d5b';

document.querySelector('.test-3 img').src = 'images/greenquotes.png'
document.querySelector('.test-3 p').style.color = '#031d5b';
document.querySelector('.test-3 :last-child').style.color = '#031d5b';

document.querySelector('.test-4 img').src = 'images/whitequotes.png'
document.querySelector('.test-4 p').style.color = 'white';
document.querySelector('.test-4 :last-child').style.color = 'white';

document.querySelector('.test-5 img').src = 'images/greenquotes.png'
document.querySelector('.test-5 p').style.color = '#031d5b';
document.querySelector('.test-5 :last-child').style.color = '#031d5b';

});

ind5.addEventListener('click', function(){
//ind
document.getElementById('ind-1').classList.remove('white');
document.getElementById('ind-2').classList.remove('white');
document.getElementById('ind-3').classList.remove('white');
document.getElementById('ind-4').classList.remove('white');
document.getElementById('ind-5').classList.add('white');
//ind
//******************

document.querySelector('.test-1').classList.remove('green');
document.querySelector('.test-1').classList.add('white');

document.querySelector('.test-2').classList.remove('green');
document.querySelector('.test-2').classList.add('white');

document.querySelector('.test-3').classList.remove('green');
document.querySelector('.test-3').classList.add('white');

document.querySelector('.test-4').classList.remove('green');
document.querySelector('.test-4').classList.add('white');

document.querySelector('.test-5').classList.remove('white');
document.querySelector('.test-5').classList.add('green');
//******************

document.querySelector('.test-1 img').src = 'images/greenquotes.png'
document.querySelector('.test-1 p').style.color = '#031d5b';
document.querySelector('.test-1 :last-child').style.color = '#031d5b';

document.querySelector('.test-2 img').src = 'images/greenquotes.png'
document.querySelector('.test-2 p').style.color = '#031d5b';
document.querySelector('.test-2 :last-child').style.color = '#031d5b';

document.querySelector('.test-3 img').src = 'images/greenquotes.png'
document.querySelector('.test-3 p').style.color = '#031d5b';
document.querySelector('.test-3 :last-child').style.color = '#031d5b';

document.querySelector('.test-4 img').src = 'images/greenquotes.png'
document.querySelector('.test-4 p').style.color = '#031d5b';
document.querySelector('.test-4 :last-child').style.color = '#031d5b';

document.querySelector('.test-5 img').src = 'images/whitequotes.png'
document.querySelector('.test-5 p').style.color = 'white';
document.querySelector('.test-5 :last-child').style.color = 'white';



});
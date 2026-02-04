let btn = document.querySelectorAll('button');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('mouseover', function () {
        btn[i].style.backgroundColor = 'red';
        btn[i].style.color = 'white';
    });
    btn[i].addEventListener('mouseout', function () {
        btn[i].style.backgroundColor = 'white';
        btn[i].style.color = 'black';
    });
    
}


const container = document.getElementById('container');

container.addEventListener('click', (e) => {
  // 1) Image click par alert
  if (e.target.matches('img')) {
    alert('You clicked on the image: ' + e.target.alt);
    return;
  }

  // 2) "Add to cart" button click par alert
  if (e.target.matches('button')) {
    alert('Added to cart Successfully!');
    return;
  }
});
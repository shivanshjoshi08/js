# Projects Related to DOM

## Project Link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

## project 1

```javascript


const buttons = document.querySelectorAll('.button');
// console.log(buttons);
const body = document.querySelector('body');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
    
  });
});

```
## Project 2
 
 ```javascript

const form = document.querySelector('form');

// const height = parseInt(document.querySelector('#height').value);
// This UseCase Will Give You Empty Value

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give A Valid Height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give A Valid Weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 1000)).toFixed(2);
    //Show The Results
    results.innerHTML = `<span>${BMI}</span>`;
  }
});
```
// const wt = document.getElementById('weightinkg').addEventListener('input', () => { });
// const ht = document.getElementById('heightinm').addEventListener('input', () => { });

// function getInput() {
//     const wt = document.getElementById("weightinkg").value;
//     const ht = document.getElementById("heightinm").value;
// }

// console.log('wt');
// console.log('ht');



const beforeclickelement = document.querySelector('.container2')
const afterclickelement = document.querySelector('#afterelement')

const outputbox1 = document.querySelector('.box2');
const outputbox2 = document.querySelector('.box3');



const btn = document.querySelector('#submit-btn')

btn.addEventListener('click', function (e) {
    const wt = document.getElementById("weightinkg").value;
    const ht = document.getElementById("heightinm").value;
    const bmi = Number((wt / (ht * ht)).toFixed(2));
    beforeclickelement.style.display = 'none';
    afterclickelement.style.display = 'flex';
    outputbox1.innerHTML = bmi;

    if(bmi < 18.5){
        outputbox2.innerHTML = '<h2>You are Underweight. This means you may need to gain weight to achieve a healthier balance.</h2>';
    }
    else if(bmi>=18.5 && bmi<=24.9){
        outputbox2.innerHTML = '<h2>You are Healthy Weight. You are within the healthy range! Keep up the great work.</h2>';
    }
    else if(bmi>=25 && bmi<=29.9){
        outputbox2.innerHTML = '<h2>You are Overweight. You might need to adopt healthier habits to reduce weight.</h2>';
    }
    else if(bmi>=30){
        outputbox2.innerHTML = '<h2>You are Obese. It is important to seek advice on weight management for better health.</h2>';
    }
})

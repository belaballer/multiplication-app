const num1 = Math.ceil(10*(Math.random()));
const num2 = Math.ceil(10*(Math.random())); 

document.getElementById('question').innerText=`What is ${num1} multiplied by ${num2}?`;



const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');

let score = parseInt(localStorage.getItem('score'))||0;
document.getElementById('score').innerText=`score: ${score}`;

const result = num1*num2;



formEl.addEventListener('submit',function(){
    if(result==parseInt(inputEl.value)){
        score = score + 1;
        localStorage.setItem('score', score);
        document.getElementById('score').innerText=`score: ${score}`;
    }else{
        score = score - 1;
        alert('Try again');
        localStorage.setItem('score', score);
        document.getElementById('score').innerText=`score: ${score}`;

    }
    if (score < 0) {
        localStorage.setItem('score', 0);
        document.getElementById('score').innerText = `score: 0`;
        score = 0;
    }
    

        
});










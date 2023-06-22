const castle = document.querySelector('img')

const welcome = evt =>{
    alert('Welcome to my castle! It is better than yours!')
}

castle.addEventListener('click', welcome)
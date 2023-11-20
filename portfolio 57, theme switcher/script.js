let content = document.querySelector('.content');
let checkbox = document.querySelector('.checkbox');

checkbox.onclick = function(){
    content.classList.toggle('dark');
}

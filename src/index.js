

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#create-task-form').addEventListener('submit', (event) =>{
    event.preventDefault()
    addToList(event.target.elements['new-task-description'].value)
  })
})

function addToList(todo){
  let p = document.createElement('p');
  p.textContent = todo;

  let bttn = document.createElement('button');
  bttn.textContent = 'X'
  bttn.addEventListener('click', handleDelete);
  function handleDelete(){
    p.remove();
  }
  p.appendChild(bttn);
  document.querySelector('#tasks').appendChild(p);
}
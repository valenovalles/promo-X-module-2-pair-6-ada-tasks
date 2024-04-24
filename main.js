'use strict';
const tasks = [
    { name: 'Recoger setas en el campo', completed:true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
  ];

  const list = document.querySelector('.js_list_task');

  function renderTask (){
    for (const eachTask of tasks){
      if (eachTask.completed === true){
        list.innerHTML += `<li class= "task tachado"> <input type="checkbox" checked>
    ${eachTask.name}</li>`;
    } else {
        list.innerHTML += `<li class= "task"> <input type="checkbox">
    ${eachTask.name}</li>`;
      }    
  }
};

  
  const tareas = renderTask();

  const cadaTarea = document.querySelector('.task')
  console.log(cadaTarea);

 

  // Hay que hacer que esta función modifique el array y su propiedad completed. 
  function handleClick(event){

    console.log(event.target);
    const clicked = event.target;
    console.log(clicked);

    if (list === clicked){
      list.classList.remove('tachado');
    }
  };
  
  list.addEventListener('click', handleClick);
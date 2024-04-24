'use strict';
const tasks = [
    { name: 'Recoger setas en el campo', completed:true},
    { name: 'Comprar pilas', completed: true},
    { name: 'Poner una lavadora de blancos', completed: true},
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false, 
    },
  ];

  let list = document.querySelector('.js_list_task');

  function renderTask (){ //pintar en html
  
    for (const item of tasks){
      
      if (item.completed === true){
        list.innerHTML += `<li class= "task tachado"> <input type="checkbox" checked>
    ${item.name}</li>`;
    } else {
        list.innerHTML += `<li class= "task"> <input type="checkbox">
    ${item.name}</li>`;
      }    
  }
};

  
  renderTask();

 
  // Hay que hacer que esta función modifique el array y su propiedad completed. 
  function handleClick(event){
    const clicked = event.target;
    const selectTask = tasks.completed.map((tarea) => tarea===clicked);
    console.log(selectTask);
   if (selectTask === clicked){
    selectTask.completed = false;
     
   }else{
    selectTask.completed = true;
   } //pedir soporte para ver como solucionar el tachado (map)
   ;
    /* const tachado = tasks.map((listado) => listado.renderTask(clicked)); 
    console.log(tachado); */

    // if (list === clicked){
    //   list.classList.remove('tachado');
    // }
  };
  
  list.addEventListener('click', handleClick);
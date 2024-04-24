'use strict';
const tasks = [
    { name: 'Recoger setas en el campo', completed:true, id: '1',},
    { name: 'Comprar pilas', completed: true, id: '2',},
    { name: 'Poner una lavadora de blancos', completed: true, id: '3',},
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false, id: '4',
    },
  ];

  let list = document.querySelector('.js_list_task');

  function renderTask (){ //pintar en html
  list.innerHTML= " ";
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

  
  renderTask(tasks);

 
  // Hay que hacer que esta función modifique el array y su propiedad completed. 
  function handleClick(event){
    let clicked = event.target;
    let selectTask = tasks.find((tarea) => tarea.name === clicked.textContent.trim());
    // console.log(selectTask);
   if ( selectTask && selectTask.completed === true){
    console.log(selectTask.completed);
    selectTask.completed = false;
     
   }else{
    console.log('es false');
    selectTask.completed = true;
   }
  
  //pedir soporte para ver como solucionar el tachado (map)
   ;
   renderTask(selectTask);
    /* const tachado = tasks.map((listado) => listado.renderTask(clicked)); 
    console.log(tachado); */

    // if (list === clicked){
    //   list.classList.remove('tachado');
    // }
  };
  
  list.addEventListener('click', handleClick);
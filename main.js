'use strict';

const tasks = [
    { name: 'Recoger setas en el campo', completed:true, id:1},
    { name: 'Comprar pilas', completed: true, id:2},
    { name: 'Poner una lavadora de blancos', completed: true, id:3},
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false, id:4
    },
  ];

  let list = document.querySelector('.js_list_task'); //mi ul donde voy a pintar las tareas


  function renderTask (){ //pintar en html
    list.innerHTML=""; //debe estar vacia para que no se esten suscribiendo todo el rato
    for (const item of tasks){
      if (item.completed === true){
        list.innerHTML += `<li class= "task tachado"> <input  id=${item.id} class="js_checkBox" type="checkbox" checked>
    ${item.name}</li>`;
    } else {
        list.innerHTML += `<li class= "task"> <input id=${item.id} class="js_checkBox" type="checkbox">
    ${item.name}</li>`;
      };    
  };
  const checkBoxes = document.querySelectorAll('.js_checkBox'); 

  /* function handleClick(event){
    const clickedId = event.target.id;
    const taskSelected = tasks.find(tarea => tarea.id ===clickedId);
 

    if (taskSelected){
      taskSelected.completed = !taskSelected.completed;
      
     }
    
    };
    for (const checkbox of checkBoxes){
      checkbox.addEventListener('click', handleClick);
    }; */
  
};

  
  renderTask();

  function completedTask(tasks, taskName) {
    const task = tasks.find(task => task.name === taskName);
    if (task) {
      task.completed = !task.completed;
      console.log(tasks);
      renderName(tasks);
    }
  }
  
  // Hay que hacer que esta función modifique el array y su propiedad completed. 
  
   
   
//pedir soporte para ver como solucionar el tachado (map)
   ;
    /* const tachado = tasks.map((listado) => listado.renderTask(clicked)); 
    console.log(tachado); */

    // if (list === clicked){
    //   list.classList.remove('tachado');
    // }


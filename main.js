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
        list.innerHTML += `<li class= "task tachado"> <input type="checkbox" class="js_input"  id=${item.id} checked>
      ${item.name}</li>`;
      } else {
        list.innerHTML += `<li class= "task"> <input type="checkbox" class="js_input" id=${item.id}>
      ${item.name}</li>`;
      }    
  }
  

};

  renderTask(tasks);

  const checkBox = document.querySelectorAll('.js_input');

  function handleClick(event){
    let clicked = event.target.id;
    console.log(clicked)
    if(clicked){
  tasks.completed !== tasks.completed;
  }
    
  renderTask(tasks);
    //cuando recojas la tarea clicada, me tienes que cambiar el completed. Si es true ponerlo false y si es false ponerlo true
     
     /* if(clickedTask.completed===true ){
        task.completed = false;
    }else{
      task.completed = true;
    } */
    };
  

  
    console.log(checkBox);

  
    list.addEventListener('click', handleClick);



/* const task = checkBox.findIndex((task)=> task.id === parseInt(value))
checkBox[task].completed !==  checkBox[task].completed */


 
 /*    let selectTask = tasks.find((tarea) => tarea.id === clicked.id);
    // console.log(selectTask);
   if ( selectTask && selectTask.completed === true){
    console.log(selectTask.completed);
    selectTask.completed = false;
     
   }else{
    console.log('es false');
    selectTask.completed = true;
   }*/




  // Hay que hacer que esta función modifique el array y su propiedad completed. 

  
  //pedir soporte para ver como solucionar el tachado (map)
 
    /* const tachado = tasks.map((listado) => listado.renderTask(clicked)); 
    console.log(tachado); */

    // if (list === clicked){
    //   list.classList.remove('tachado');
    // }
 
 
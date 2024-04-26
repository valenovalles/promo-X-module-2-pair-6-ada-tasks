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
        list.innerHTML += `<li class= "task tachado"> <input id=${item.id} class= "js_checkBox" type="checkbox" checked>
    ${item.name}</li>`;
    } else {
        list.innerHTML += `<li class= "task"> <input id=${item.id} class= "js_checkBox" type="checkbox">
    ${item.name}</li>`;
      }    
  }

//tengo que poner el evento sobre elinput, pero solamente funciona dentro de la funcion render
  
  };


  renderTask(tasks);

  const checkBox = document.querySelectorAll('.js_checkBox');

  function handleClick(event){
    let clicked = event.target.id;
    let selectTask = tasks.find(tarea => tarea.id === clicked);
    // console.log(selectTask);
   if ( selectTask && selectTask.completed === true){
    console.log(selectTask.completed);
    selectTask.completed = false;
     
   }else{
    console.log('es false');
    selectTask.completed = true;
   }
 
  };

  checkBox.addEventListener('click', handleClick);


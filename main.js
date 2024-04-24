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

  let list = document.querySelector('.js_list_task');

  function renderTask (listado){
    for (const listado of tasks){
      if (listado.completed === true){
        list.innerHTML += `<li class= "task tachado"> <input type="checkbox" checked>
    ${listado.name}</li>`;
    } else {
        list.innerHTML += `<li class= "task"> <input type="checkbox">
    ${listado.name}</li>`;
      }    
  }
};

  
  renderTask(tasks);

  const cadaTarea = document.querySelector('.task')
  console.log(cadaTarea);

 

  // Hay que hacer que esta función modifique el array y su propiedad completed. 
  function handleClick(event){
    let clicked = event.target;
    list = " ";
    console.log(list);
    const tachado = tasks.map((listado) => listado.renderTask(clicked)); 
    console.log(tachado);

    // if (list === clicked){
    //   list.classList.remove('tachado');
    // }
  };
  
  list.addEventListener('click', handleClick);
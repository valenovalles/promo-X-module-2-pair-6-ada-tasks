'use strict';
const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    {
      name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
      completed: false,
    },
  ];

  const list = document.querySelector('.js_list_task');

  for (const eachTask of tasks){
    list.innerHTML += `<li> 
  ${eachTask.name}</li>`;
  console.log(eachTask);
  }
import React from 'react';
import ReactDOM from 'react-dom';

const todoTitle = " Meeting Day ";
const todoDesc = " Lets have a meeting today ";
const date = new Date();
const currentYear = date.getFullYear();
const dateName = date.getDate();
const getmonth = date.getMonth();

ReactDOM.render(
 <div>
   <h1>Todo App</h1>
   <h3>{todoTitle}</h3>
   <p>{todoDesc}</p>
   <p>{dateName +"/" + getmonth + "/" + currentYear}</p>
 </div>,
  document.getElementById('root')
);


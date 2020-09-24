import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// const link = React.createElement(
//   'a',
//   {
//     href: 'https://reactjs.org/',
//     target: '_blank',
//     rel: 'noreferrer noopener',
//   },
//   'Ссылка на reactjs.org',
// );
//
// const test = "Test text";
//
// const linkWithJSX = (
//   <a href="https://reactjs.org/" target="_blank" rel="noreferrer noopener">
//     Ссылка на reactjs.org
//   </a>
// );

// const title = React.createElement('h2', null, 'Tacos With Lime');

// const productWithChildrenInProps = React.createElement('div', {
//   children: [title, link],
// });



// ReactDOM.render(linkWithJSX, document.getElementById('root'));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);


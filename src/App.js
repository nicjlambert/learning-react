import * as React from 'react';

// ie definte title only once and not
// everytime the function is called
// a variable declared with const cannot be re-assigned

const list = [
{
title:'React',
url: 'https://reactjs.org/',
author: 'Jordan Walke',
num_comments: 3,
points: 4,
objectID: 0,
},
{
title: 'Redux',
url: 'https://redux.js.org/',
author: 'Dan Abramov, Andrew Clark',
num_comments: 2,
points: 5,
objectID: 1,
}
];

// App component (parent)
function App(){ 
// you can do somethig here between
// the function signature and the return
// statement


  return(
    <div>
     <h1>My Hacker Stories</h1>

     <Search/>

     <hr/>

     <List/>
     
    </div>
  );
}


function List(){
// List component (child)
  return(
<ul>
       {list.map(function(item){
         return (
         <li key={item.objectID}>
           <span>
            <a href={item.url}>{item.title}</a>
           </span>
           <span>, {item.author}, </span>
           <span>{item.num_comments}</span>
           <span>{item.points}</span>
         </li>
         );
       })}
     </ul>
  );
}


const Search = () =>{
// Search component (child)

// do something in between
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return(
    <div>

      <label htmlFor="search">Search:</label>
      <input id="search" type="text"
      onChange={handleChange}/>

    </div>

  );
};



export default App;

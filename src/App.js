import * as React from 'react';

// ie definte title only once and not
// everytime the function is called
// a variable declared with const cannot be re-assigned


// App component (parent)
const App =()=> { 
// you can do somethig here between
// the function signature and the return
// statement
const stories = [
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

  return(
    <div>
     <h1>My Hacker Stories</h1>

     <Search/>

     <hr/>

     <List list={stories}/>
     
    </div>
  );
};


const List =(props)=> (
  // List component (child)
  <ul>
         {props.list.map((item)=>(
           <Item key={item.objectID} item={item}/>
         ))}
       </ul>
);


const Item =(props)=>(
  <li>
    <span>
      <a href={props.item.url}> {props.item.title}</a>
    </span>
    <span>
       , {props.item.author}   
    </span>
    <span>
      , {props.item.num_comments}
    </span>
    <span>
    , {props.item.points}
    </span>
  </li>
);

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
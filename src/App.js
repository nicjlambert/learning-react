import * as React from 'react';

// ie definte title only once and not
// everytime the function is called
// a variable declared with const cannot be re-assigned

const welcome = {
greeting:'Hey',
title:'React'

};

function App(){ 
// you can do somethig here between
// the function signature and the return
// statement



  return(
    <div>
     <h1>{welcome.greeting} {welcome.title}!</h1>

     <label htmlFor="search">Search:</label>
     <input id="search" type="text"/>

    </div>
  );
}

export default App;

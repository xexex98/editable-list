import './App.css';
import { data } from './data';
import { Post } from './Post';
import React from 'react';

function App() {
  const [list, setList] = React.useState(data);

  return (
    <div>
      {list.map((item, id) => (
        <Post key={id} item={item} setList={setList} />
      ))}
    </div>
  );
}

export default App;

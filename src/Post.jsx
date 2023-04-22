import React from 'react';
import { EditPostItem } from './EditPostItem';

export const Post = (props) => {
  const { name, age, id } = props.item;
  const { setList } = props;

  return (
    <div
      style={{ border: '1px solid red', marginBottom: '5px', padding: '5px' }}
    >
      <EditPostItem id={id} field={'name'} value={name} setList={setList} />
      <EditPostItem id={id} field={'age'} value={age} setList={setList} />
    </div>
  );
};

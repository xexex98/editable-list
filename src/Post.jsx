import React from 'react';
import { EditPostItem } from './EditPostItem';

export const Post = (props) => {
  const { id } = props.item;
  const { setList } = props;
  return (
    <div
      style={{ border: '1px solid red', marginBottom: '5px', padding: '5px' }}
    >
      {Object.keys(props.item).map((key, index) => {
        if (key === 'id') {
          return null;
        }
        return (
          <EditPostItem
            key={index}
            id={id}
            field={key}
            value={props.item[key]}
            setList={setList}
          />
        );
      })}
    </div>
  );
};

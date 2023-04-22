import React from 'react';

export const EditPostItem = (props) => {
  const { value, setList, id, field } = props;

  const [edit, setEdit] = React.useState(false);
  const [text, setText] = React.useState(value);

  const handleEdit = (e) => {
    setEdit((prev) => !prev);
    setList((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, ...{ [field]: text } };
        }
        return item;
      }),
    );
  };
  return (
    <>
      <div style={{ display: 'flex' }}>
        <span style={{ display: edit ? 'none' : 'block' }}>{value}</span>

        <input
          style={{ display: !edit ? 'none' : 'block' }}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button type="button" onClick={(e) => handleEdit(e)}>
          Edit
        </button>
      </div>
    </>
  );
};

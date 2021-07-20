import React from 'react';
import {useDrag} from 'react-dnd';

export const Picture = (props) => {
  const {url, id} = props;
  const [{isDragging}, drag] = useDrag(() => ({
    type: "image",
    item: {id},
    collect: (monitor) => ({
      isDragging: Boolean(monitor.isDragging()),
    })
  }));
  console.log('isDragging', isDragging);
  return(
    <>
      <img key={id} ref={drag} src={url} alt={url} width="200" height="200" style={{border: isDragging ? "5px solid blue" : "0px"}} />
    </>
  );
};
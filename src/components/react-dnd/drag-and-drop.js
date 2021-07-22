import React, {useEffect, useState} from 'react'
import {Picture} from './picture';
import {useDrop} from 'react-dnd';

export const DragAndDrop = () => {
  const pictures = [
    {
      "id": 1,
      "thumbnailUrl": "https://via.placeholder.com/150/92c952",
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952"},
    {
      "id": 2,
      "thumbnailUrl": "https://via.placeholder.com/150/771796",
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796"},
  ];
  const [photos, setPhotos] = useState(pictures);
  const [board, setBoard] = useState([]);

  const [{isOver}, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => {
      console.log('id', item.id);
      removeImageFromList(item.id);
      addImageToBoard(item.id);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver,
    }),
  }));

  const addImageToBoard = (id) => {
    if(photos.length) {
      const pictureList = photos.filter((picture) => picture.id === id);
      console.log('add list', pictureList);
      setBoard((board) => [...board, pictureList[0]]);
    }
    
  };

  const removeImageFromList = (id) => {
    console.log('remaining photos', photos);
    const pictureList = photos.filter((picture) => picture.id !== id);
    console.log('remove list', pictureList);
    setPhotos(pictureList);
  };


  return (
    <>
      <div className="pictures">
        {photos.map((picture) => {
          return <Picture key={picture.url} url={picture.url} id={picture.id} />
        })}
      </div>
      <div ref={drop} className="board" style={{border: "5px solid #000"}} width="500" height="500">
        <h1>Board</h1>
        {board.map((picture) => {
          return <Picture key={picture.url} url={picture.url} id={picture.id} />;
        })}
      </div>
    </>
  )
}

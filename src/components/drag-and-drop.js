import React, {useEffect, useState} from 'react'
import axios from 'axios';

function DragAndDrop() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const photosRes = await axios.get('https://jsonplaceholder.typicode.com/photos');
        const slicedPhotos = photosRes.data.slice(0,5).map((photo) => photo);
        console.log('slicedPhotos', slicedPhotos);
        setPhotos(slicedPhotos);
      } catch (error) {
        console.error(error);
      }
    })();
    return () => {
      
    }
  }, [])
  return (
    <>
      <div className="pictures">
      </div>
      <div className="board">
      </div>
    </>
  )
}

export default DragAndDrop;

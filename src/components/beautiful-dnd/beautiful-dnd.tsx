import React, { useState } from 'react';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import {v4 as uuidv4} from 'uuid';

const itemsFromBackend = [
  {
    id: uuidv4(),
    content: "First task"
  },
  {
    id: uuidv4(),
    content: "Second task"
  },
]

const columnsFromBackend = [
  {
    [uuidv4()]: {
      name: 'Todo',
      items: [itemsFromBackend]
    }
  }
];

export const BeautifulDnd = () => {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
    <>
      <h1>Beatiful Dnd</h1>
      <div className="droppable-container">
      <DragDropContext onDragEnd={result => console.log(result)}>
        <h1>Board</h1>
        {Object.entries(columns).map(([id, column]) => {
          {console.log('columns', columns)}
          <Droppable droppableId={id}>
            {(provided, snapshot) => {
              return(
                <div {...provided.droppableProps} ref={provided.innerRef} 
                style={{background: snapshot.isDraggingOver ? 'lightblue': 'lightgray', padding: 4, minHeight: 500 + 'px', width: 250 + 'px'}}
                >
                  {column[id].items.map((item: any, index: number) => {
                    console.log('item', item);
                    return (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => {
                          return(
                            <div className="draggable-item" ref={provided.innerRef} 
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            style={{backgroundColor: snapshot.isDragging ? 'blue' : 'green'}}
                            >
                              
                            </div>
                          )
                        }}
                      </Draggable>
                    );
                  })}
                </div>
              )
            }}
          </Droppable>
        })}
      </DragDropContext>
      </div>
      
    </>
  );
};
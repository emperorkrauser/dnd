import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import './App.css';
import DragAndDrop from './components/drag-and-drop';

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <h1>Drag and Drop</h1>
        <DragAndDrop />
      </div>
    </DndProvider>
    
  );
}

export default App;

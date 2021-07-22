
import './App.css';
import {BeautifulDnd} from './components/beautiful-dnd';
import {DragAndDropMain} from './components/react-dnd';

function App() {
  return (
    <>
      <div>
        <DragAndDropMain />      
      </div>
      <br/>
      <div>
        <BeautifulDnd />
      </div>
    </>
  );
}

export default App;

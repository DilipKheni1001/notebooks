import "./assets/css/style.css"
import "./assets/css/treeView.css"
import LibraryContainer from "./Component/library/LibraryContainer";
import NoteContainer from './Component/notebooks/NoteContainer';

function App() {
  return (
    <div className="mainContainer">
      <LibraryContainer />
      <NoteContainer />
    </div>
  );
}

export default App;

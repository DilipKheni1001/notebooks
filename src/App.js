import { Provider } from "react-redux";
import "./assets/css/style.css"
import "./assets/css/treeView.css"
import LibraryContainer from "./Component/library/LibraryContainer";
import NoteContainer from './Component/notebooks/NoteContainer';
import store from "./appRedux/store";

function App() {
  return (
    <Provider store={store}>
    <div className="mainContainer">
      <LibraryContainer />
      <NoteContainer />
    </div>
    </Provider>
  );
}

export default App;

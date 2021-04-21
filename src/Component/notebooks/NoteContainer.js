import { useDispatch, useSelector } from "react-redux";
import TreeView from "react-treeview";

const NoteContainer = () => {
    const dispatch = useDispatch();
    const {notebooks} = useSelector(({appReducer})=>appReducer)

    const updateNotebookContent = (e,book) => {
        dispatch({type:"UPDATE_NOTEBOOK",payload:{...book,content:e.target.value}})
    }
    const updateNotebookName = (e,book) => {
        dispatch({type:"UPDATE_NOTEBOOK",payload:{...book,name:e.target.value}})
    }
    
    const deleteNotebook = (book) => {
        dispatch({type:"DELETE_NOTEBOOK",payload:book});
    }

    return(
        <div className="containers noteContainer">
            <h1 className="mainTitle">Notebooks</h1>
            <div>
                {
                    notebooks.map(book=>{
                           return (
                                <>
                                    <div className="notebook-heading">{"#"}<input text="text" className="node" value={book.name} onChange={(e)=>updateNotebookName(e,book)}/><span onClick={() => deleteNotebook(book)} className="crossIcon">&#10005;</span></div>
                                    <textarea rows="10" onChange={(e)=>updateNotebookContent(e,book)} value={book.content}></textarea>        
                                
                                </>
                           );
                    })
                }
            </div>
        </div>
    );
}
export default NoteContainer;
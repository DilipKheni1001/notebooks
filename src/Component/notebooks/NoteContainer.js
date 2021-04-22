import { useDispatch, useSelector } from "react-redux";
import TreeView from "react-treeview";

const NoteContainer = () => {
    const dispatch = useDispatch();
    const {notebooks} = useSelector(({appReducer})=>appReducer)

    const updateNotebookContent = (e,book) => {
        dispatch({type:"UPDATE_NOTEBOOK",payload:{...book,content:e.target.value}})
    }
    const updateNotebookName = (e,book) => {
        dispatch({type:"UPDATE_NOTEBOOK",payload:{...book,value:e.target.value}})
    }
    
    const deleteNotebook = (book) => {
        dispatch({type:"DELETE_NOTEBOOK",payload:book});
    }

    return(
        <div className="containers noteContainer">
            <h1 className="mainTitle">Notebooks</h1>
            <button className="btn-box">+ New Notebook</button>
                {
                    notebooks.map(book=>{
                           return (
                               <div className="main-div">
                                <button className="addnode-btn">+</button>
                                <div className="main-box">
                                    <div className="notebook-heading">
                                        <button className="notebook-btn">+ note</button>
                                        <button className="notebook-btn">+ image</button>
                                        <span onClick={() => deleteNotebook(book)} className="crossIcon">&#10005;</span>
                                    </div>
                                    <div className="notebook-heading">
                                        {"#"}<input text="text" className="input-box" value={book.value} onChange={(e)=>updateNotebookName(e,book)}/>
                                    </div>
                                    <textarea className="text-content" rows="10" onChange={(e)=>updateNotebookContent(e,book)} value={book.content}></textarea>        
                                
                                </div>
                                </div>
                           );
                    })
                }
                <div className="notebook-footer">
                    <button className="btn-box">Share Notebook</button>
                    <button className="btn-box">Export to PDF</button>
                </div>
                
        </div>
    );
}
export default NoteContainer;
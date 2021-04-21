import Accordion from "./Accordion";

const LibraryContainer = () => {
    return (
        <div className="containers libraryContainer rBorder">
            <h1 className="mainTitle">Library</h1>
            <div className="contents urlContent">
                <input className="input" type="text" placeholder="URL here" />
                <a href="#" className="urlText">add to library</a>
            </div>
            <div className="contents searchContent">
                <input className="input" type="text" placeholder="search term or topic name" />
                <button className="btn">search</button>
            </div>
            <Accordion />
        </div>
    );
}
export default LibraryContainer;
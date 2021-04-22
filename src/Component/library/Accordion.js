import TreeView from "react-treeview";
import DataSource from "./search_results_sample.json";
import {useDispatch,useSelector} from "react-redux";

const Accordion = () => {

    const dispatch = useDispatch();
    const {notebooks} = useSelector(({appReducer})=>appReducer)

    const copyContent = (node) => {
        dispatch({type:"ADD_NOTEBOOK",payload:node});
    }

    return (
        <div id="style-1" className="accordionContent scrollbar">
            <div className="force-overflow"></div>
            {DataSource.nodes.map((node, i) => {
                const value = node.value;
                const label = <p className="node">{value}<span onClick={() => alert(node.id)} className="crossIcon">&#10005;</span><span onClick={() => copyContent(node)} className="arrowIcon">&#x22B3;</span></p>;
                return (
                    <TreeView nodeLabel={label} key={node.name} defaultCollapsed={true}>
                        <div className="info">{node.content}</div>
                    </TreeView>
                );
            })}
        </div>

    );
}
export default Accordion;



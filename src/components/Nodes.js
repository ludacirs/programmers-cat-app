import Component from "../lib/Component";
import Node from "./Node";

class Nodes extends Component {
    constructor() {
        super(...arguments);
        const {data} = this.state;
        data.forEach(({id, name, type, filePath, parent},i)=>{
            const state = {
                name : name,
                type: type,
                id: id
            }
            const node = new Node(this.$elem, state);
        });
    }
}
export default Nodes;


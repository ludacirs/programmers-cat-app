import Component from "../lib/Component";
import Node from "./Node";

class Nodes extends Component {
    constructor() {
        super(...arguments);
        const {data} = this.state.state;

        data.forEach(({id, name, type, filePath, parent},i)=>{
            const state = {
                name : name,
                type: type,
                id: id
            }
            new Node(this.$elem, state);
        });
    }

    setEvent() {
        const {handleClick} = this.state;
        this.addEvent('click','img',handleClick);
    }
}
export default Nodes;


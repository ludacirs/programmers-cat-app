import Component from "../lib/Component";
import Node from "./Node";

class Nodes extends Component {
    render() {
        super.render();
        const {data,root} = this.state;

        if(root){
            const prev = new Node(this.$elem,{
                name:'',
                type:'PREV',
                id: ''
            });
        }
        data.forEach(({id, name, type, filePath})=>{
            const state = {
                name : name,
                type: type,
                id: id,
                filePath: filePath,
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


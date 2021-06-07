import Component from "../lib/Component";

class Node extends Component{

    setup() {
        super.setup();
    }

    template() {
        const {name, type,id} = this.state;
        const fileType = this.getType(type);
        console.log(this.state);
        return`
         <img data-id="${id}" data-name="${name}" data-type="${type}" src="./assets/${fileType}">
         ${name ? `<div>${name}</div>` : ''}
`;
    }
    getType(type){
        const map = new Map()
            .set('DIRECTORY','directory.png')
            .set('FILE','file.png')
            .set('PREV','prev.png');

        return map.get(type);
    }
}

export default Node;

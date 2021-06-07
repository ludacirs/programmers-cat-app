import Component from "../lib/Component";

class Node extends Component{
    template() {
        const {name, type, id, filePath} = this.state;
        const fileType = this.getType(type);
        return`
         <img data-id="${id}" data-name="${name}" data-filePath="${filePath}" data-type="${type}" src="./assets/${fileType}">
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

import Component from "../lib/Component";

class Node extends Component{

    template() {
        const {name, type,id} = this.state;
        const fileType = this.getType(type);
        return`
         <img dataset-id="${id}" dataset-name="${name}" src="./assets/${fileType}">
         ${name ? `<div>${name}</div>` : ''}
`;
    }
    getType(type){
        const map = new Map()
            .set('DIRECTORY','directory.png')
            .set('FILE','file.png')

        return map.get(type);
    }
}

export default Node;


// </main>
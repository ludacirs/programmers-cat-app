import Component from "../lib/Component";

class Breadcrumb extends Component{
    setup() {
        this.$elem = document.createElement('nav');
        super.setup();
    }

    template() {
        const {path} = this.state;
        return '<div>root</div>'+path.map(({name,id})=>`<div data-id='${id}'>${name}</div>`).join('');
    }

}

export default Breadcrumb;
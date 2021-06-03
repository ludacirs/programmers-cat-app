import Component from "../lib/Component";

class Breadcrumb extends Component{
    setup() {
        this.$elem = document.createElement('nav');
        super.setup();
    }

    template() {
        const {path} = this.state;
        return path.map(v=>`<div>${v}</div>`).join('');
    }

}

export default Breadcrumb;
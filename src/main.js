import Breadcrumb from "./components/Breadcrumb";
import Nodes from "./components/Nodes";
import Node from "./components/Node";
import {data} from "./mockup/mockup";

class App{
    $target;
    state = {
        path: ['root',],
    };

    constructor($target) {
        this.init($target);
    }
    async init($target){
        // this.state.data = await api.getRoot();
        this.state.data = data;
        this.$target = $target;
        const breadcrumb = new Breadcrumb(this.$target,this.state);
        const nodes = new Nodes(this.$target,this.state);
    };
}


new App(document.querySelector('.App'));
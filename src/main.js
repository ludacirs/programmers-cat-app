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
        this.breadcrumb = new Breadcrumb(this.$target,this.state);
        this.nodes = new Nodes(this.$target, {
            state: this.state,
            handleClick: this.handleClick
        });
    };


    handleClick = ({target}) => {
        const nextState = {...this.state};
        nextState.path.push(target.dataset.name);
        this.setState(nextState);
    };

    setState(nextState){
        this.state = {...nextState};
        // this.breadcrumb.setState(this.state);
    }
}


new App(document.querySelector('.App'));
import Breadcrumb from "./components/Breadcrumb";
import {api} from "./lib/api/api";

class App{
    $target;
    state = {
        path: ['root',]
    };

    constructor($target) {
        this.init($target);
    }
    async init($target){
        this.state.data = await api.getRoot();
        this.$target = $target;
        const breadcrumb = new Breadcrumb(this.$target,this.state);
    };
}


new App(document.querySelector('.App'));
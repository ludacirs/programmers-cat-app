import Breadcrumb from "./components/Breadcrumb";
import Nodes from "./components/Nodes";
import {data, dataId1} from "./mockup/mockup";
import {api} from "./lib/api/api";

class App{
    $target;
    state = {
        path: [],
        root: true,
    };

    constructor($target) {
        this.init($target);
    }
    async init($target){
        //mockup
        // this.state.data = data;
        this.state.data = await api.getRoot();

        this.$target = $target;

        this.breadcrumb = new Breadcrumb(this.$target, {
            path: this.state.path,
        });
        this.nodes = new Nodes(this.$target, {
            data: this.state.data,
            handleClick: this.handleClick
        });
    };


    handleClick = async ({target}) => {
        const nextState = {...this.state};

        if(target.dataset.type==='FILE'){
            this.onFileClick(target,nextState);
            return;
        }


        if(target.dataset.type==='DIRECTORY'){
            await this.onDirectoryClick(target,nextState);
        } else if(target.dataset.type==='PREV'){
            await this.onPrevClick(target,nextState);
        }
        this.setState(nextState);
    };

    onDirectoryClick= async (target,nextState) =>{
        const {id,name} = target.dataset;
        nextState.path.push({name, id});
        nextState.data = await this.searchDir(id);
        nextState.root = this.isRoot(this.state.path);
    }

    onFileClick= (target,nextState) =>{

    }

    onPrevClick= async (target,nextState) =>{
        nextState.path.pop();
        nextState.root = this.isRoot(this.state.path);
        const lastPath = nextState.path[nextState.path.length-1] || false;
        nextState.data = await this.searchDir(lastPath.id|| '');
    }

    async searchDir(id){
        // //mockup
        // return id ? dataId1 : data;
        return await api.getById(id);
    }

    setState(nextState){
        this.state = {...nextState};
        const {path,data,root} = this.state;
        this.breadcrumb.setState({path});
        this.nodes.setState({data,root});
    }
    isRoot(path){
        return !!path.length;
    }
}


new App(document.querySelector('.App'));
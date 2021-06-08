import Breadcrumb from "./components/Breadcrumb";
import Nodes from "./components/Nodes";
import {data, dataId1} from "./mockup/mockup";
import {api} from "./lib/api/api";
import ImageViewer from "./components/ImageViewer";
import Loading from "./components/Loading";
import {cache} from "./lib/cache";

class App{
    $target;
    state = {
        path: [],
        root: true,
        filepath: '',
    };
    load = false;

    constructor($target) {
        this.init($target);

    }
    async init($target){
        this.$target = $target;
        this.loading = new Loading(this.$target,{
            load : this.load
        });
        this.loading.setState({load:true});
        try{
            cache.set('',await api.getRoot());
            this.state.data = cache.get('');
        }catch (e){
            this.loading.setState({load:false});
            console.log(e);
        }
        this.breadcrumb = new Breadcrumb(this.$target, {
            path: this.state.path,
        });
        this.nodes = new Nodes(this.$target, {
            data: this.state.data,
            handleClick: this.handleClick
        });
        this.modal = new ImageViewer(this.$target, {
            filepath : this.state.filepath,
            offModal : this.offModal,
        });

    };


    handleClick = async ({target}) => {
        const nextState = {...this.state};
        this.loading.setState({load:true});
        try {
            if (target.dataset.type === 'FILE') {
                this.onFileClick(target, nextState);
            } else if (target.dataset.type === 'DIRECTORY') {
                await this.onDirectoryClick(target, nextState);
            } else if (target.dataset.type === 'PREV') {
                await this.onPrevClick(target, nextState);
            }
            this.setState(nextState);
            this.loading.setState({load:false});
        }catch (e){
            console.log(e);
            this.loading.setState({load:false});
        }
    };

    onDirectoryClick= async (target,nextState) =>{
        const {id,name} = target.dataset;
        nextState.path.push({name, id});
        nextState.data = await this.searchDir(id);
        nextState.root = this.isRoot(this.state.path);
    }

    onFileClick= (target,nextState) =>{
        const {filepath} = target.dataset;
        nextState.filepath = filepath;
    }

    onPrevClick= async (target,nextState) =>{
        nextState.path.pop();
        nextState.root = this.isRoot(this.state.path);
        const lastPath = nextState.path[nextState.path.length-1] || false;
        nextState.data = await this.searchDir(lastPath.id|| '');
    }

    async searchDir(id){
        if(cache.has(id)) return cache.get(id);
        cache.set(id,await api.getById(id));
        return cache.get(id);
    }
    setState(nextState){
        this.state = {...nextState};
        const {path,data,root,filepath} = this.state;
        this.breadcrumb.setState({path});
        this.nodes.setState({data,root});
        this.modal.setState({filepath});
    }
    isRoot(path){
        return !!path.length;
    }

    offModal=(e)=>{
        if((e.type==='keydown' && e.key==='Escape')|| (e.type==='click'&&e.target.classList.contains('Modal'))){
            const nextState = {...this.state};
            nextState.filepath = '';
            this.setState(nextState);
        }
    }
}


new App(document.querySelector('.App'));
class Component {
    $target;
    $elem;
    state;
    constructor($target,state) {
        this.$target = $target;
        this.state = state;
        this.$elem = document.createElement('div');
        this.setup();
        this.setEvent();
        this.$target.appendChild(this.$elem);
        this.render();
    }

    setup(){
        this.$elem.classList.add(this.constructor.name);
    }

    template(){
        return '';
    }

    setEvent(){

    }

    addEvent(type, selector, callback){
        function isTarget({target}){
            return target.closest(selector) || false;
        }
        this.$elem.addEventListener(type,(e)=>{
            if(!isTarget(e)) return ;
            callback(e);
        });
    }
    setState(nextState){
        console.log('past',this.state);
        this.state = {...this.state, ...nextState};
        console.log('changed',this.state);
        this.render();
    }
    render(){
        this.$elem.innerHTML = this.template();
    }

}

export default Component;
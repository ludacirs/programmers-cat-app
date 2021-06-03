class Component {
    $target;
    $elem;
    state;
    constructor($target,state) {
        this.$target = $target;
        this.$elem = document.createElement('div');
        this.state = state;
        this.setup();
        this.render();
    }

    setup(){
        this.$elem.classList.add(this.constructor.name);
    }

    template(){
        return '';
    }

    render(){
        this.$elem.innerHTML = this.template();
        this.$target.appendChild(this.$elem);
    }

}

export default Component;
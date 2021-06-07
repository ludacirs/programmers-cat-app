import Component from "../lib/Component";

class Loading extends Component{

    setup() {
        super.setup();
        this.$elem.style.display = 'none';
    }

    template() {
        return `<div class="Modal Loading">
                  <div class="content">
                    <img src="./assets/nyan-cat.gif">
                  </div>
                </div>`
    }

    render() {
        const {load} = this.state;
        this.$elem.style.display = load ? 'block' : 'none';

        super.render();
    }
}

export default Loading;
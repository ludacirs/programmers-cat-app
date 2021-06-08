import Component from "../lib/Component";

const FILE_PATH = `https://fe-dev-matching-2021-03-serverlessdeploymentbuck-t3kpj3way537.s3.ap-northeast-2.amazonaws.com/public`;
class ImageViewer extends Component{
    setup() {
        super.setup();
        this.$elem.classList.add('Modal');
        this.$elem.tabIndex = "0";
    }

    template() {
        return this.state.filepath ? `
        <div class="content">
            <img src="${FILE_PATH}${this.state.filepath}" alt="고냥이">
        </div>
`: "";
    }

    setEvent() {
        const {offModal} = this.state;
        this.addEvent('click','.Modal',offModal);
        this.addEvent("keydown",'.Modal', offModal);
    }

    setState(nextState) {
        this.state= {...nextState};
        this.render();
    }

    render() {
        this.$elem.style.display = this.state.filepath ? 'block': 'none';
        this.$elem.innerHTML = this.template();
        this.$elem.focus();
    }
}
        
export default ImageViewer;
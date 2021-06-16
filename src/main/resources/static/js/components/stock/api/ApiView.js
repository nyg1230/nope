import Component from '../../../core/Component.js'
import OverSeasAPI from './OverseasAPI.js';

export default class ApiView extends Component {
    template() {
        return `
            <div>
                <input type='text' class='ticker'>
                <button class='api'>call</button>
            </div>
        `
    }

    setEvent() {
        this.addEvent('keydown', 'input[type="text"].ticker', (e) => {
            if(e.keyCode == 13) {
                this.apiCall(e.target.value.trim());
            }
        })

        this.addEvent('click', 'button.api', () => {
            let $ticker = this.$target.querySelector('input[type="text"].ticker');
            this.apiCall($ticker.value.trim());
        })
    }

    apiCall(ticker) {
        let api     = new OverSeasAPI;
        let result  = api.promise(ticker);
        result
            .then((res) => {
                let currStockInfo   = JSON.parse(res.replace(/(^"|"$|\\)/g, ''));
                console.log(res.replace(/(^"|"$|\\)/g, ''))
                
                console.log(typeof res);
                console.log(res);
                console.log(typeof currStockInfo)
                console.log(currStockInfo)
            })
    }
}
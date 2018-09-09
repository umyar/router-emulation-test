import Page from "../TeamplatePage";
import data from '../content/items.json'

class ItemsPage extends Page {
    constructor() {
        super();
        this.title = 'Товары'
    }

    renderContent() {
        super.renderContent();

        let itemsMarkup = '';
        let items = data.items;
        for (let key in items) {
            itemsMarkup +=
                `<div class="item">
                    <ul>
                        <li>Наименование товара: ${items[key].name}</li>
                        <li>Количество: ${items[key].quantity}</li>
                        <li>Цена: ${items[key].price}</li>
                    </ul>
                </div>`;
        }

        const main = document.createElement('main');
        main.innerHTML = '<div class="items-container">' + itemsMarkup + '</div>' +
            `<div class="total">всего товаров: ${data.total}</div>`;
        this.app.appendChild(main);

    }

}

export default new ItemsPage()
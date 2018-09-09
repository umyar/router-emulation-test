import Page from "./TeamplatePage";

class MenuPage extends Page {
    constructor() {
        super();
        this.title = 'Главное меню'
    }

    renderContent() {
        super.renderContent();

        const main = document.createElement('main');
        main.innerHTML = '<ul class="nav"><li><a href="#/about">О нас</a></li><li><a href="#/items">Товары</a></li></ul>';

        this.app.appendChild(main);

    }
}

export default new MenuPage()
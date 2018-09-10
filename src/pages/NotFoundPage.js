import Page from './pageHeader';

class NotFoundPage extends Page {
    constructor() {
        super();
        this.title = 'Error 404'
    }

    renderContent() {
        super.renderContent();

        const main = document.createElement('main');
        main.innerHTML = `<p align="center">Страница не найдена . . .</p><a href="#/menu">Перейти на главную</a>`;
        this.app.appendChild(main);
    }
}

export default new NotFoundPage()
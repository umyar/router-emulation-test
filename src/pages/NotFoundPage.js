import Page from './pageTeamplate';

class NotFoundPage extends Page {
    constructor() {
        super();
        this.title = 'Error 404'
    }

    renderContent() {
        super.renderContent();

        const main = document.createElement('main');
        main.innerHTML = `<p align="center">Страница не найдена . . .</p>`;
        this.app.appendChild(main);

    }
}

export default new NotFoundPage()
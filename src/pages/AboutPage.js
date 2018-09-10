import Page from './pageHeader';
import data from '../content/aboutUs.json';

class AboutPage extends Page {
    constructor() {
        super();
        this.title = 'О нас'
    }

    renderContent() {
        super.renderContent();

        const main = document.createElement('main');
        main.innerHTML = `<p align="center">${data.text}</p>`;
        this.app.appendChild(main);
    }
}

export default new AboutPage()
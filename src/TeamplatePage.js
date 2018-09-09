class Page {
    constructor() {
        this.title = '';
        this.app = document.getElementById('app');
    }

    static goBack() {

    }

    renderContent() {
        const header = document.createElement('header');
        const pageTitle = document.createElement('h1');
        const hash = document.createElement('div');
        hash.className = 'current-hash';
        hash.innerHTML = `ТЕКУЩИЙ ХЭШ: <span>${location.hash.split('#/')[1]}</span>`;
        pageTitle.innerHTML = this.title;

        header.appendChild(hash);
        header.appendChild(pageTitle);
        this.app.appendChild(header)

    }

}

export default Page

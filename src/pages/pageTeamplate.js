class Page {
    constructor() {
        this.title = '';
        this.app = document.getElementById('app');
    }

    renderContent() {
        const header = document.createElement('header');
        const historyItemsMarkup = window._history &&
            window._history.map(i => `<li><a class=history-link href=#/${i}>${i}</a></li>`)
            .reduce((prev,current) => prev + current, '');
        const goBack = document.createElement('button');
        goBack.innerHTML = '⟸ назад';
        goBack.onclick = () => window.history.back();

        header.innerHTML =
            `<div class='current-hash'>
                ТЕКУЩИЙ ХЭШ: <span>${location.hash.split('#/')[1]}</span>
            </div>
            <h1>${this.title}</h1>
            <div class="history-container">
                ${historyItemsMarkup? `История: <ul class="history">${historyItemsMarkup}</ul>` : ''}
            </div>`;
        header.appendChild(goBack);

        this.app.appendChild(header)
    }

}

export default Page

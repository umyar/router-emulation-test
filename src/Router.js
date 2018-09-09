export default class Router {
    constructor(routes) {
        this.routes = routes;
        this.routeParams = Object.keys(this.routes);
        this.history = [];
    }

    onHashChange(e) {
        const history = this.history;
        const param = e.newURL.split('#/')[1];
        if (this.routeParams.some(i => i === param)) {
            history.length < 10? history.push(param) : history.shift() && history.push(param);
            window._history = this.history;
            this.renderPage(param)
        }
        /*else {
            location.hash = '/menu';
            alert('К сожалению, по этому адресу нет контента, поэтому мы вернули Вас на главную.')
        }*/
    }

    renderPage(param) {
        const app = document.getElementById('app');
        app.innerHTML = '';
        this.routes[param].renderContent();
    }
}
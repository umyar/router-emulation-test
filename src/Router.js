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
        else this.renderPage('not-found')
    }

    renderPage(param) {
        const app = document.getElementById('app');
        app.innerHTML = '';
        this.routes[param].renderContent();
    }
}
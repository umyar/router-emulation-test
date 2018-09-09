export default class Router {
    constructor(routes) {
        this.routes = routes;
        this.routeParams = Object.keys(this.routes);
        this.history = [];
    }

    onHashChange(e) {
        const param = e.newURL.split('#/')[1];
        if (this.routeParams.some(i => i === param)) {
            this.history.push(param);
            this.renderPage(param)
        }
    }

    renderPage(param) {
        const app = document.getElementById('app');
        app.innerHTML = '';
        this.routes[param].renderContent();
    }
}
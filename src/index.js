import Router from './Router'
import routes from './routes'
import './styles.css'

const router = new Router(routes);

window.addEventListener('hashchange', e => {
    router.onHashChange(e);
});

window.onload = (e) => {
    if (location.hash === '') {
        location.hash = '/menu';
    }
    e.newURL = location.href;
    router.onHashChange(e);
}

import Router from './Router'
import routes from './routes'
import './styles.css'

const router = new Router(routes);

window.addEventListener('hashchange', e => {
    router.onHashChange(e);
});

//инициализирующее значение
location.hash = '/menu';

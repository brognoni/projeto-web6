// const { routes } = require('./config/server');
const app = require('./config/server');
const routes = require('./app/routes/routes');

routes.home(app);
routes.pagina1(app);
routes.pagina2(app);
routes.pagina3(app);
routes.pagina4(app);





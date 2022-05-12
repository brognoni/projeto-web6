const { homeListar } = require('../controllers/home');
const { pagina1Listar } = require('../controllers/pagina1');
const { pagina2Listar } = require('../controllers/pagina2');
const { pagina3Listar } = require('../controllers/pagina3');
const { pagina4Listar } = require('../controllers/pagina4');


module.exports = {
    home: function (app) {
        app.get('/', function (req, res) {
            homeListar(app, req, res);
        });
    },
    pagina1: function (app) {
        app.get('/pagina1', function (req, res) {
            pagina1Listar(app, req, res);
        });
    },
    pagina2: function (app) {
        app.get('/pagina2', function (req, res) {
            pagina2Listar(app, req, res);
        });
    },
    pagina3: function (app) {
        app.get('/pagina3', function (req, res) {
            pagina3Listar(app, req, res);
        });
    },	
    pagina4: function (app) {
        app.get('/pagina4', function (req, res) {
            pagina4Listar(app, req, res);
        });
    },	

}
var express = require('express');
var router = express.Router();
var tasks = [
	{
		"nom":"Diseño wireframe",
		"etiquetes": [ "wireframe","app","hibrida"],
		"realització":"36"
	},
	{
		"nom":"Reunión",
		"etiquetes": ["app","hibrida"],
		"realització":"36"
	},
	{
		"nom":"Desarrollo Layout",
		"etiquetes": [ "layout","app","hibrida"],
		"realització":"36"
	},
	{
		"nom":"Reunión cliente",
		"etiquetes": [ "reunión","app","hibrida"],
		"realització":"36"
	}
]

router.get('/', function(req, res, next) {
    res.render('tasks', { title: 'Express', tareas:tasks });
});

router.get('/new', function(req, res, next) {
    res.render('newTask', { title: 'Express' });
});




module.exports = router;

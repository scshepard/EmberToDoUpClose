/*
	Module: Modeling your data
	Cereates new class 'Todo'
	Each todo has two attributes: title and isCompleted
*/

Todos.Todo = DS.Model.extend({
		title: DS.attr('string'),
		isCompleted: DS.attr('boolean')
});

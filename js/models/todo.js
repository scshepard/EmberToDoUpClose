/*
	Modeling your data
*/
Todos.Todo = DS.Model.extend({
		title: DS.attr('string'),
		isCompleted: DS.attr('boolean')
});

/*
	Module: Using fixtures
	Fixtures place sample data into an application
*/
Todos.Todo.FIXTURES = [
	{
		id: 1,
		title: 'Learn ember.js',
		isCompleted: true
	},
	{
		id: 2,
		title: "xxxx",
		isCompleted: false
	},
	{
		id: 3,
		title: 'profit',
		isCompleted: false
	}	
]
;

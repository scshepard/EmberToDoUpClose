/*
	Module: Adding the first route and template
*/
Todos.Router.map(function(){
		this.resource('todos', {path: '/'}, function() {
				// additional child routes
				/*
					Module: Transitioning to show only incomplete todos
				*/
				this.route('active');
				/*
					Module: Transitioning to show only complete todos
				*/
				this.route('completed');
		});
});

/*
	Module: Displaying model data
	Previously used a Route with default behavoir
	Ties into <ul id="todo-list">
	{{#each controller}}
	...
	{{/each}}
	
	Create custom behavior: return specific set of models; acts as a contrainer for 'our' models
*/

Todos.TodosRoute = Ember.Route.extend({
		model: function(){
			return Todos.Todo.find();
		}
});

/*
	Moduel: Adding child routes
	Notes: When the url '/' loads, Emberjs will enter the todos route and render the todos template as before
*/
		
Todos.TodosIndexRoute = Ember.Route.extend({
		model: function() {
			return Todos.Todo.find();
		}
});

/*
	Module: Transitioning to show only incomplete todos
*/

Todos.TodosActiveRoute = Ember.Route.extend({
		// collection of todos whose isCompleted property is false
		/*
			Model data for this route: collection of todos whose isCompleted property is false
		*/
		model: function() {
			return Todos.Todo.filter(function(todo){
					if (!todo.get('isCompleted')) { return true; }
			});
		},
		
		/*
			Normally transitioning into a new route changes the template rendered into the parent outlet,
			but in this case we'd like to resue the existing todos/index template by implementing the
			renderTemplate method and calling render ourselves with the specific template and controller options
		*/
		renderTemplate: function(controller){
			this.render('todos/index', {controller: controller});
		}
});

/*
	Module: Transitioning to show only completed todos
	Notes: Model data for this route is the collection of todos whose isCompleted property is true.
	Normalling transitioning into a new route changes the template rendered into the parent outlet, but
	in this case we'd like to reuse the existing todos/index template
	Method: renderTemplate
*/

Todos.TodosCompletedRoute = Ember.Route.extend({
		// model data for this route is the collection of todos whose isCompleted property is true
		model: function() {
			return Todos.Todo.filter(function (todo) {
					if (todo.get('isCompleted')) {return true;}
			});
		},
		
		renderTemplate: function(controller){
			this.render('todos/index', {controller: controller});
		}
});









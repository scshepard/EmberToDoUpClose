/*
	Module: Creating new model instance
	
	<h1>todos</h1>
	{{view Ember.TextField id="new-todo" placeholder="what nees" valueBinding="newTitle" action="createTodo"}}
	
	To handle new behavior, implement the controller class with our custom behavior.
	Class controller automatically associated with this template for us
	Controller now responds to user interaction by using its newTitle property as the title of the new todo
*/

Todos.TodosController = Ember.ArrayController.extend({
		createTodo: function() {
			// get the todo title set by the 'new todo' text field
			var title=this.get('newTitle');
			if (!title.trim()) {return;}
			
			//create the new todo model
			var todo = Todos.Todo.createRecord({
					title: title,
					isCompleted: fase
			});
			
			//clear the 'new todo' text field
			this.set('newTitle','');
			
			//save the new model
			todo.save();
		},

		/*
			Displaying the number of incomplete todos
			Update to reflect the actual number of completed todos
		*/

		remaining: function() {
			return this.filterProperty('isCompleted', false).get('length');
		}.property('@each.isCompleted'),
		
		inflection: function() {
			var remaining = this.get('remainning');
			return remaining === 1 ? 'item' : 'itemx';
		}.property('remaining'),
		
		/*
			Module: Displaying a button to remove all completed todos
			Notes: Implemented the matching properties and method that will
			clear completed todos and persist these changes when the button
			is clicked
		*/
		
		hasCompleted: function() {
			return this.get('completed') > 0;
		}.property('completed'),
		
		completed: function() {
			return this.filterProperty('isCompleted', true).get('length');
		}.property('@each.isCompleted'),
		
		clearCompleted: function() {
			var completed = this.filterProperty('isCompleted',true);
			completed.invoke('deleteRecord');
			
			this.get('store').commit();
		},
		
		/*
			Module: Indicating when all todos are complete
		*/
		
		allAreDone: function(key,value) {
			if (value === undefined) {
			return !!this.get('length') && this.everyProperty('isCompleted',true);
			/*
				Module: Toggling all todos between complete and incomplete
				Handle both getting and setting
			*/
			} else {
				this.setEach('isCompleted',value);
				this.get('store').save();
				return value;
			}
		}.property('@each.isCompleted')
});

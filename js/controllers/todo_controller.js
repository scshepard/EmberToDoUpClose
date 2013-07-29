/*
	Module: Marking a model as complete or incomplete
	
	#each controller itemController="todo"
	wrap each todo in its own controller
	Implement by matching the name used as the itemController value
	to a class in Todos.TodoController
	
	When called from the emplate to display the current isCompleted state of the todo, theis
	property will proxy that question to its underlying model.
*/

Todos.TodoController = Ember.ObjectController.extend({
		/*
			Module: Toggling between showing and editing states
			Notes: Three new behaviors: applies CSS class editing when the
				controller's isEditing property is true; removes when false.
				Add action so double-clicks will call editTodo on controller (Todos.TodoController)
				Wrap todo in if helper so text will display when we are editing and todos title when
				we are not editing
		*/
		
		isEditing: false,
		
		editTodo: function() {
			this.set('isEditing',true);
		},
		
		/*
			Module: Accepting Edits
			Default behavior of proxying all requests of title to its model
		*/
		
		acceptChanges: function() {
			this.set('isEditing',false);
			this.get('model').save();
		},
		
		/*
			Module: Deleting a model
			Method will delete to todo locally and then persist this data change
		*/

		removeTodo: function() {
			var todo = this.get('model');
			alert("todo.title : " + todo.title);
			todo.deleteRecord();
			todo.save();
		},

		/*
			Module: Marking a model as complete or incomplete
		*/
		
		isCompleted: function(key,value) {
			var model = this.get('model');
			
			if (value === undefined) {
				// property being used as a getter
				return model.get('isCompleted')
			} else {
				// property being used as a setter
				model.set('isCompleted', value);
				model.save();
				return value;
			}
		}.property('model.isCompleted')
});

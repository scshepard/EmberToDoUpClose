/*
	Module: Accepting edits
	Behavior that immediately focus the input when it appears, accepts user input,
	ahd when enter key or focus away, persists these changes
	This views implements the behavior
*/

Todos.EditTodoView = Ember.TextField.extend({
		classNames: ['edit'],
		
		insertNewLine: function(){
			this.get('controller').acceptChanges();
		},
		
		focusOut: function() {
			this.get('controller').acceptChanges();
		},
		
		didInsertElement: function() {
			this.$().focus();
		}
});

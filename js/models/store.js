/*
	Module: Modeling your data
	Create new class Store
	Store tracks local instances of Todos.Todo
*/

Todos.Store = DS.Store.extend({
		revision: 12,
		adapter: 'DS.FixtureAdapter'
});

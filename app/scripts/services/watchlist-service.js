'use strict';

angular.module('stockDogApp')
  .service('WatchlistService', function WatchlistService() {
    // AngularJS will instantiate a singleton by calling "new" on this function

    // [1] Helper: load watchlists from localStorage
	var loadModel = function() {
		var model = {
			watchlists: localStorage['StockDog.watchlists'] ?
			  JSON.parse(localStorage['StockDog.watchlists']) : [],
			nextId: localStorage['StockDog.nextId'] ?
			  parseInt(localStorage['StockDog.nextId']) : 0
		};
		return model;
	};

	//[2] Helper: save watchlists to localStorage
	var saveModel = function() {
		localStorage['StockDog.watchlists'] = JSON.stringify(Model.watchlists);
		localStorage['StockDog.nextId'] = Model.nextId;
	};

	//[3] Helper: use lodash to find a watchlist with a given ID
	var findById = function(listId) {
		return _.find(Model.watchlists, function(watchlist) {
			return watchlist.id === parseInt(listId);
		});
	};

	//[4] Return all watchlists or find by given ID
	this.query = function(listId) {
		if (listId) {
			return findById(listId);
		} else {
			return Model.watchlists;
		};
	};
});

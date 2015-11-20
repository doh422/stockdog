'use strict';

angular.module('stockDogApp')
	.service('QuoteService', function QuoteService($http, $interval) {
  		var stocks = [];
  		var BASE = 'http://query.yahooapis.com/v1/public/yql';

  		// Handles updating stock model with appropriate data from quote
  		var update = function(quotes) {
  			console.log(quotes);
  			if (quotes.length === stocks.length) {
  				_.each(quotes, function(quote, idx) {
  					var stock = stocks[idx];
  					stock.lastPrice = parseFloat(quote.LastTradePriceOnly);
  					stock.change = quote.Change;
  					stock.percentChange = quote.ChangeinPercent;
  					stock.marketValue = stock.shares * stock.lastPrice;
  					stock.dayChange = stock.shares * parseFloat(stock.change);
  					stock.save();
  				});
  			}
  		};
	});

var Dispatcher = require('../dispatcher/dispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/constants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var appState = {elements: null,
                inputPhrase: null};

var Store = assign({}, EventEmitter.prototype, {

  getAppState: function() {
    return appState;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

var getElements = function(data) {
  console.log("called");
  return data.PERIODIC_TABLE.ATOM.map( function(currentValue) {
    return currentValue["SYMBOL"];
  })
};

// Register callback to handle all updates
Dispatcher.register(function(action) {

  switch(action.actionType) {

    case Constants.RECEIVE_DATA:
      appState.elements = getElements(action.data);
      Store.emitChange();
      break;

    case Constants.UPDATE_PHRASE:
      appState.inputPhrase = action.phrase;
      Store.emitChange();
      break;

    // case Constants.UPDATE_DISPLAY:
    //   Store.emitChange();
    //   break;

    default:
  }
});

module.exports = Store;
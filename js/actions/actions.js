var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants/constants');

var Actions = {

  updatePhrase: function(phrase) {
    Dispatcher.dispatch({
      actionType: Constants.UPDATE_PHRASE,
      phrase: phrase
    });
  },

  receiveData: function(data) {
    Dispatcher.dispatch({
      actionType: Constants.RECEIVE_DATA,
      data: data
    });
  }
}

module.exports = Actions;
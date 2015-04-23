var React = require('react');

var Display = React.createClass({
	render: function() {
		var elementsArray = this.props.elements;
		var inputPhrase = this.props.inputPhrase;
		var outputArray = [];
		var i;
		var skipLoop = false;

		var matchesTwoChar;
		var matchesOneChar;

		if (inputPhrase) {
			for (i = 0; i < inputPhrase.length; i++) {
				if (skipLoop) {
					skipLoop = false;
					continue;
				}
				var character = inputPhrase[i];
				if (character === character.toUpperCase() && character !== " ") {
					if ( i + 1 < inputPhrase.length) {
						var characterPair = character + inputPhrase[i+1];
						if (elementsArray.indexOf(characterPair) > 0) {
							outputArray.push(<span className="highlight" key={i}>{characterPair}</span>);
							skipLoop = true;
							continue;
						} 
					}
					if (elementsArray.indexOf(character) > 0) {
						outputArray.push(<span className="highlight" key={i}>{character}</span>);
						continue;
					}
				}
				outputArray.push(character);
			}
		}
	return (
		<div id="display">
			<p>{outputArray}</p>
		</div>
	)
  }
});

module.exports = Display;

// outputArray.join
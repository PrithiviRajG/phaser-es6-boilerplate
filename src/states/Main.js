import ExampleObject from 'objects/ExampleObject';

class Main extends Phaser.State {

	create() {

		//Enable Arcade Physics
		//this.game.physics.startSystem(Phaser.Physics.ARCADE);

		//Set the games background colour
		this.game.stage.backgroundColor = '#cecece';

		//Example of including an object
		//let exampleObject = new ExampleObject(this.game);

		var word = "test"
		var me = this;
		new Cache(this.game);
		if(me.game.cache.getText('dictionary').indexOf(' ' + word + ' ') > -1){
			alert("exists");
		} else {
			alert("does not exist");
		}

		
	}

	update() {
		
	}

	

}

export default Main;
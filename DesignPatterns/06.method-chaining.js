var Dog = (function () {
	var Dog = function() {
		this._name = 'Fluffy';
		this._color = 'purple';
	}

	Dog.prototype.setName = function setDogName(name) { 
		this._name = name;
		return this
	}

	Dog.prototype.setColor = function setDogColor(color) { 
		this._color = color;
		return this;
	}

	Dog.prototype.setGender = function setDogGender(gender) {
	  	this._gender = gender;
		return this; 
	}

	return Dog;
}());

var doggy = new Dog().setName("Fluffy").setColor("purple").setGender("male");
console.log(doggy);
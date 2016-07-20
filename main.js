$(document).on('ready', function() {

//constructor
function foodItem(foodItem, name, calories, vegan, glutenFree, citrusFree){
	this.name       = name;
	this.calories   = calories;
	this.vegan      = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;
}

function drinksPlates(name, description, price, ingredients){
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;
}
//defining a method to call on the objects passed through the constructor
foodItem.prototype.stringify = function(){

	console.log('Food Menu: '+ this.name + ' Calories: ' + this.calories + ' Vegan: ' + this.vegan +
	 ' Gluten Free: ' + this.glutenFree + ' Citrus Free: ' + this.citrusFree);
}

drinksPlates.prototype.giveme = function(){
	var ingreeds = [];
	for(var i = 0; i <this.ingredients.length; i++){
		ingreeds.push(this.ingredients[i]);
	}

	console.log('Menu Item: ' + this.name + ' ' + this.description + ' ' + this.price + ' ' + ingreeds);
}

// making new instances of constructor (or object)
	var chickParm  = new foodItem('Chicken Parmesan', 500, 'no', 'no', 'yes');
	var chickAlfredo = new foodItem('Chicken Alfredo', 600, 'no', 'no', 'yes');
	var lobsterRavioli = new foodItem('Lobster & Raviolis', 500, 'no', 'no', 'yes');

	var pestoCavatappi = new drinksPlates('Cavatappi', 'amaze balls',"$20",['noodles', 'pesto', 'garlic']);


	var coke = new drinksPlates('Coca Cola', 'delicious & refreshing', '$2.00', ['sugar', 'water', 'cornsyrup', 'cancer']);
	var lemonade = new drinksPlates('Lemondae', 'yellow & refreshing', '$1.50', ['lemons', 'water', 'sugar']);


chickParm.stringify();
chickAlfredo.stringify();
lobsterRavioli.stringify();


coke.giveme();
lemonade.giveme();

pestoCavatappi.giveme();



});
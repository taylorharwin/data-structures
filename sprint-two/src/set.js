var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = undefined;
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
	this[item] = item;
};

setPrototype.contains = function(item){
	var found = false;
		for (var key in this){
			if (key === item){
			found = true; 
		}
	}
	return found;
};

setPrototype.remove = function(item){
	delete this[item];
	return item;
};

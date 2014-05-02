



//adds new object properties
var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var makeTree = function(value){
  newTree = {};
  newTree.value = value;
  newTree.children = [];
  extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value){
	var newChild = makeTree(value);

	this.children.push(newChild);

};

treeMethods.contains = function(target){

var found = false;

var searchAllChildren = function(node){
	if (node.value === target){
		found =  true;
		}

	if(node.children.length > 0){
		for (var i = 0; i < node.children.length; i++){
			searchAllChildren(node.children[i]);
		}
	}
};
	searchAllChildren(this);
	return found;
};



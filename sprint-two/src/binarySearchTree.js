var makeBinarySearchTree = function(value){
	var newTree = {};
	newTree.value = value;
	newTree.left = undefined;
	newTree.right = undefined;
	
newTree.insert = function(value){

	//value > root value, go right
  if(value > this.value) {
    if (this.right === undefined) {
      this.right = makeBinarySearchTree(value);
    } 
    else {
      this.right.insert(value);
    }
  }

//value < root value, go left
  else if(value < this.value) {
    if (this.left === undefined) {
      this.left = makeBinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }

};

newTree.contains = function(value){

	var result = false;


	var walkTheTree = function(node){
		if (node.value === value){
		result = true;
	}
		else if (value > node.value && node.right !== undefined){
			walkTheTree(node.right);
		}
		else if (value < node.value && node.left !== undefined){
			walkTheTree(node.left);
		}
	};
walkTheTree(this);
return result;

};

newTree.depthFirstLog = function(func){

	var walkTheTree = function(node, func){
		func(node.value);

		if (node.left !== undefined){
			walkTheTree(node.left, func);
		}

		if (node.right !== undefined){
			walkTheTree(node.right,func);
		}

};

walkTheTree(this, func);

};


return newTree;
};










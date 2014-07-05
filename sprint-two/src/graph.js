var Graph = function(){
  // this = Object.create(Graph.prototype);
  this._nodes = [];
  this._edges = [];

  // return this;
};

// Graph.prototype = {};

Graph.prototype.addNode = function(newNode, toNode){
  if (!this.contains(newNode)) {
    var numNodes = this._nodes.length;
    // 0 or 1 node: add the node
    if (numNodes <= 1) {
      this._nodes.push(newNode);
      if (numNodes === 1) {
        this.addEdge(this._nodes[0], newNode);
      }
    }
    else {
      this._nodes.push(newNode);
      this.addEdge(newNode, toNode);
    }
  }
};

Graph.prototype.contains = function(node){
  if (this._nodes.indexOf(node) === -1) {
    return false;
  } else {
    return true;
  }
};

Graph.prototype.removeNode = function(node){
  var nodeIndex = this._nodes.indexOf(node);
  if (nodeIndex !== -1) {
    this._nodes.splice(nodeIndex, 1);
    this.removeEdge(node);
  }
};

Graph.prototype.getEdge = function(fromNode, toNode){
  var i;
  var result = false;
  var edges = this._edges;
  for (i = edges.length-1; 0 <= i; i--) {
    if (edges[i][0] === fromNode && edges[i][1] === toNode || edges[i][1] === fromNode && edges[i][0] === toNode) {
      result = true;
    }
  }
  return result;
};

Graph.prototype.addEdge = function(fromNode, toNode){
  if (this.contains(fromNode) && this.contains(toNode)) {
    if (!this.getEdge(fromNode, toNode)) {
      this._edges.push([fromNode, toNode]);
    }
  }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  
  var edges = this._edges;
  var fromNodeExist = false;
  var toNodeExist = false;
  if (toNode === undefined) {
    for (var i = edges.length-1; 0 <= i; i--) {
      if (edges[i][0] === fromNode || edges[i][1] === fromNode) {
        edges.splice(i, 1);
      }
    }
  } else {
    for (i = edges.length-1; 0 <= i; i--) {
      if (edges[i][0] === fromNode && edges[i][1] === toNode || edges[i][1] === fromNode && edges[i][0] === toNode) {
        edges.splice(i, 1);
      }
    }
  }
  for (var j = 0; j < edges.length; j++) {
    if (edges[j].indexOf(fromNode) !== -1) {
      fromNodeExist = true;
    }
    if (edges[j].indexOf(toNode) !== -1) {
      toNodeExist = true;
    }
  }
  if (!fromNodeExist) {
    this.removeNode(fromNode);
  }
  if (!toNodeExist) {
    this.removeNode(toNode);
  }
};

Graph.prototype.forEachNode = function(func) {
  var i;
  for (i = 0; i < this._nodes.length; i++) {
    func(this._nodes[i]);
  }
};

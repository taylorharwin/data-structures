var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.makeNode = makeNode;

   list.addToTail = function(value){
    var newNode = makeNode(value);
    if(list.head === null) {
      list.head = newNode;
      list.tail = newNode;
      list.tail.parent = list.head;
    }
    else if(list.head){
      var parent = list.tail;
      list.tail.next = newNode;
      list.tail = newNode;
      newNode.parent = parent;
    }

  };

  list.removeHead = function(){
    list.head = list.head.next;

    return list.head.value;

  
  };

  list.addToHead = function(value){
    var newNode = makeNode(value);
    var currentHead = list.head;

    list.head = newNode;
    list.head.next = currentHead;
    currentHead.parent = newNode;

  };

  list.removeTail = function(){
    var toRemove = list.tail;
    list.tail = list.tail.parent;
    return toRemove.value;
  };


  list.contains = function(target, node){
    node = node || list.head;
    
    if (node.value === target){
        return true;
      }

    if (node.next === null){
      return false;
    }
      return list.contains(target, node.next);
    };
    

  return list;
};

var makeNode = function(value){
  var node = {};
  node.value = value;
  node.next = null;
  node.parent = null;

  return node;
};  
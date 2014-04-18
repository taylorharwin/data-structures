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
    }
    else if(list.head){
      list.tail.next = newNode;
      list.tail = newNode;
    }

  };

  list.removeHead = function(){
    list.head = list.head.next;

    return list.head.value;

  
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

  return node;
};  
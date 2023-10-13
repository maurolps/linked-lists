function Node (value = null, nextNode = null) {
  return {value, nextNode}
}

function LinkedList () {
  let listHead = null;
  let listTail = null;

  const append = (value) => {
    newNode = Node(value);
    if (listHead === null) {
      listHead = newNode;
      return;
    }
    let tempNode = listHead;
    while (tempNode.nextNode != null) {
      tempNode = tempNode.nextNode
    }
    tempNode.nextNode = newNode;
    listTail = newNode;
  }

  const prepend = (value) => {
    newNode = Node(value);
    newNode.nextNode = listHead;
    listHead = newNode;
  }

  const head = () => listHead;

  const tail = () => listTail;

  const size = () => {
    let tempNode = listHead;
    let listSize = 0;
    if (tempNode === null) { return 0 };
    if (tempNode.nextNode === null) { return 1 };
    while (tempNode != null) {
      listSize += 1;
      tempNode = tempNode.nextNode;
    }
    return listSize;
  }

  const at = (index) => {
    let tempNode = listHead;
    for (let i = 1; i < index; i++) {
      if (tempNode.nextNode === null) return 'Non exists.';
      tempNode = tempNode.nextNode;
    }
    return tempNode;
  }

  const toString = () => {
    if (listHead === null) {
      console.log('toString: Your list is empty');
      return;
    }
    let tempNode = listHead;
    let string = '';
    while (tempNode !== null) {
      string += ` ( ${tempNode.value} ) ->`;
      tempNode = tempNode.nextNode;
    }
    console.log(string, 'null');
  }

  const pop = () => {
    const listSize = size();
    if (listSize <= 1) return;
    let tempNode = at(listSize-1);
    tempNode.nextNode = null;
    listTail = tempNode;
  }

  const contains = (value) => {
    let tempNode = listHead;
    while (tempNode != null) {
      if (tempNode.value === value) return true;
      tempNode = tempNode.nextNode;
    }
    return false;
  }

  const find = (value) => {
    let tempNode = listHead;
    let index = 1;
    while (tempNode != null) {
      if (tempNode.value === value) return index;
      index += 1;
      tempNode = tempNode.nextNode;
    }
    return null;
  }

  return {append, head, size, toString, prepend, tail, at, pop, contains, find}
}

const list = LinkedList();
list.toString(); // Your list is empty
list.append('Node 1');
list.append('Node 2'); 
list.prepend('Node 3');
list.toString(); // ( Node 3 ) -> ( Node 1 ) -> ( Node 2 ) -> null
console.log(list.size()); // 3
console.log(list.tail()); // { value: 'Node 2', nextNode: null }
console.log(list.at(2)); // { value: 'Node 1', ... }
console.log(list.at(5)); // Non exists.
list.toString(); // ( Node 3 ) -> ( Node 1 ) -> ( Node 2 ) -> null
list.pop(); // remove the last Node
list.toString(); // ( Node 3 ) -> ( Node 1 ) -> null
console.log(list.contains('Node 1')); // true;
console.log(list.contains('Node 5')); // false;
console.log(list.find('Node 1')); // 2;
console.log(list.find('Node 2')); // null;

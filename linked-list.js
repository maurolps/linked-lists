function Node (value = null, nextNode = null) {
  return {value, nextNode}
}

function LinkedList () {
  let sizeCount = 0;
  let listHead = null;
  let lastNode = null;
  let listTail = null;

  const append = (value) => {
    sizeCount += 1;   
    newNode = Node(value);
    if (listHead === null) {
      listHead = newNode;
      lastNode = listHead;
      return;
    }
    if (lastNode !== null) {
      lastNode.nextNode = newNode;
      lastNode = newNode;
    }
    listTail = newNode;
  }

  const prepend = (value) => {
    sizeCount += 1;
    newNode = Node(value);
    newNode.nextNode = listHead;
    listHead = newNode;
  }

  const head = () => listHead;

  const tail = () => listTail;

  const size = () => {
    return sizeCount;
  }

  const at = (index) => {
    let tempNode = listHead;
    for (let i = 0; i < index; i++) {
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

  return {append, head, size, toString, prepend, tail, at}
}

const list = LinkedList();
list.toString(); // Your list is empty
list.append('Node 1');
list.append('Node 2'); 
list.prepend('Node 3');
list.toString(); // ( Node 3 ) -> ( Node 1 ) -> ( Node 2 ) -> null
console.log(list.size()); // 3
console.log(list.tail()); // { value: 'Node 2', nextNode: null }
console.log(list.at(2)); // { value: 'Node 2', nextNode: null }
console.log(list.at(5)); // Non exists.

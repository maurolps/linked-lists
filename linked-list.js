function Node (value = null, nextNode = null) {
  return {value, nextNode}
}

function LinkedList () {
  let sizeCount = 0;
  let listHead = null;
  let lastNode = null;

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
  }

  const head = () => listHead;

  const size = () => {
    return sizeCount;
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

  return {append, head, size, toString}
}

const list = LinkedList();
list.toString(); // Your list is empty
list.append('Node 1');
list.append('Node 2'); 
list.append('Node 3');
list.toString(); // ( Node 1 ) -> ( Node 2 ) -> ( Node 3 ) -> null
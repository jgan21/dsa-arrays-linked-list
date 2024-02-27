/** IndexError: raised when index not found. */

class IndexError extends Error {
}

/**
 * NodeStr: node for a singly-linked list of string.
 *
 * - val
 * - next: next NodeStr or null
 */

class NodeStr {
  val: string;
  next: NodeStr | null;

  constructor(val: string) {
    this.val = val;
    this.next = null;
  }
}

/**
 * Linked list of numbers.
 */

class LLStr {
  head: NodeStr | null;
  tail: NodeStr | null;
  length: number;

  constructor(vals: string[] = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (const val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val: string): void {
    //push the new node
    //redefine the next value to be new node
    //redefine the next of new node to be null

    const newNode = new NodeStr(val);

    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.length += 1;
    this.tail = newNode;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val: string): void {
    //create new node
    //new node's next will be the current head
    //redefine the head to be new node

    const newNode = new NodeStr(val);

    if (this.length === 0){
      this.head = newNode;
      this.tail = newNode;
    } else {
      const currHead = this.head
      newNode.next = currHead;
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item.
   *
   * Throws IndexError on empty list.
   **/

  pop(): string {

    if (this.length === 0) throw new IndexError;
    const returnValue = this.tail?.val;

    let currNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let counter = 1;
      while (counter < this.length - 1 && currNode!.next !== null) {
        counter += 1
        currNode = currNode!.next;
      }
    }

    this.length -= 1;
    this.tail = this.length === 0 ? null : currNode!;
    currNode!.next = null;
    return returnValue!;
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {

    if (this.length === 0) throw new IndexError;

    const returnValue = this.head!.val;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
    }
    this.length -= 1;
    return returnValue;

  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {
    let counter = 0;
    let currNode = this.head;
    if (idx >= this.length || idx < 0) throw new IndexError;

    while (counter <= this.length){
        if (counter === idx) {
          return currNode!.val;
        }
        counter += 1;
        currNode = currNode!.next;
    }
    return currNode!.val;
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {

    if (idx >= this.length || idx < 0) throw new IndexError;

    let counter = 0;
    let currNode = this.head;

    if (idx === 0) {
      this.head!.val = val;
      return;
    }

    while (counter <= this.length){
        if (counter === idx) {
          currNode!.val = val;
          return;
        }
        counter += 1;
        currNode = currNode!.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
    if (idx > this.length || idx < 0) throw new IndexError;

    const newNode = new NodeStr(val);

    let counter = 0;
    let currNode = this.head;

    // at idx 0 -> update head to be newNode
    //newNode's next = oldhead

    if (idx === 0){
      if (this.length === 0) this.tail = newNode;
      const oldHead = this.head;
      this.head = newNode;
      newNode.next = oldHead;
      this.length += 1;
      return;
    }

    if (idx === this.length){
      const currTail = this.tail;
      currTail!.next = newNode;
      this.tail = newNode;
      this.length += 1;
      return;
    }

    while (counter <= this.length){
      if (counter === idx - 1){
        newNode.next = currNode!.next;
        currNode!.next = newNode;
        this.length += 1;
        return;
      }
      counter += 1;
      currNode = currNode!.next;
    }
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    if (idx > this.length || idx < 0) throw new IndexError;

    let counter = 0;
    let currNode = this.head;

    if (idx === 0 && this.length === 1) {
      const returnValue = this.head!.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return returnValue;
    }

    if (idx === 0) {
      const returnValue = this.head!.val;
      this.head = this.head!.next;
      this.length -= 1;
      return returnValue;
    }

    while (counter <= this.length){
      if (counter === idx - 1){
        const returnValue = currNode!.next!.val;
        currNode!.next = currNode!.next!.next;
        console.log("currNode: ", currNode);
        this.length -= 1;
        return returnValue;
      }
      counter += 1;
      currNode = currNode!.next;
    }
  }

  /** toArray (useful for tests!) */

  toArray(): string[] {
    const out = [];
    let current = this.head;

    while (current) {
      out.push(current.val);
      current = current.next;
    }

    return out;
  }
}


export {
  IndexError,
  LLStr,
  NodeStr,
};
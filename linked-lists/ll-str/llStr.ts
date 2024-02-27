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

    if (this.length === 1) {
      const returnValue = this.head!.val;
      this.head = null;
      this.tail = null;
      this.length = 0;
      return returnValue;
    }

    let currNode = this.head;
    let counter = 1;
    while (counter < this.length - 1 && currNode!.next !== null) {
      counter += 1
      currNode = currNode!.next;
    }

    const returnValue = this.tail?.val;
    this.tail = currNode;
    currNode!.next = null;
    this.length -= 1;
    return returnValue!;
  }

  /** shift(): return & remove first item.
   *
   * Throws IndexError on empty list.
   **/

  shift(): string {
    return "x";
  }

  /** getAt(idx): get val at idx.
   *
   * Throws IndexError if not found.
   **/

  getAt(idx: number): string {
    return "x";
  }

  /** setAt(idx, val): set val at idx to val.
   *
   * Throws IndexError if not found.
   **/

  setAt(idx: number, val: string): void {
  }

  /** insertAt(idx, val): add node w/val before idx.
   *
   * Throws IndexError if not found.
   **/

  insertAt(idx: number, val: string): void {
  }

  /** removeAt(idx): return & remove item at idx,
   *
   * Throws IndexError if not found.
   **/

  removeAt(idx: number): string {
    return "x";
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
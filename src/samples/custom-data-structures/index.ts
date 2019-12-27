export interface Action {
    type: string;
}

export interface ListNode<T> {
    value: T,
    next: ListNode<T>,
    prev: ListNode<T>
}

export class ActionIterator implements IterableIterator<Action> {
    constructor(private _currentActionNode: ListNode<Action>) {}

    [Symbol.iterator](): IterableIterator<Action> {
        return this;
    }

    throw?(e?: any): IteratorResult<Action, any> {
        throw new Error("Method not implemented.");
    }

    next(): IteratorResult<Action> {
        //This method should:
        //1. move through each item in the list
        //2. return each item
        const curr = this._currentActionNode;
        if(!curr || !curr.value) 
            return { value: null, done: true };

        this._currentActionNode = curr.prev;
        return { value: curr.value, done: false }
    }
}
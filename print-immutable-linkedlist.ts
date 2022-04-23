function printLinkedListInReverse(head: ImmutableListNode) {
	reverse(head);
};

function reverse(node: ImmutableListNode): boolean {
    if (!node) {
        return true; // reached the end
    }
    
    if (reverse(node.getNext())) {
        node.printValue();
        return true;
    } else {
        return false;
    }
}

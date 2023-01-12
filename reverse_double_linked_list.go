package dsa_but_make_it_classy

import (
	"bufio"
	"fmt"
)

package main

import (
"bufio"
"fmt"
"io"
"os"
"strconv"
"strings"
)

type DoublyLinkedListNode struct {
	data int32
	next *DoublyLinkedListNode
	prev *DoublyLinkedListNode
}

type DoublyLinkedList struct {
	head *DoublyLinkedListNode
	tail *DoublyLinkedListNode
}

func (doublyLinkedList *DoublyLinkedList) insertNodeIntoDoublyLinkedList(nodeData int32) {
	node := &DoublyLinkedListNode {
		next: nil,
		prev: nil,
		data: nodeData,
	}

	if doublyLinkedList.head == nil {
		doublyLinkedList.head = node
	} else {
		doublyLinkedList.tail.next = node
		node.prev = doublyLinkedList.tail
	}

	doublyLinkedList.tail = node
}

func printDoublyLinkedList(node *DoublyLinkedListNode, sep string, writer *bufio.Writer) {
	for node != nil {
		fmt.Fprintf(writer, "%d", node.data)

		node = node.next

		if node != nil {
			fmt.Fprintf(writer, sep)
		}
	}
}

/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_DOUBLY_LINKED_LIST.
 * The function accepts INTEGER_DOUBLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     data int32
 *     next *DoublyLinkedListNode
 *     prev *DoublyLinkedListNode
 * }
 *
 */


/*
  -- >  -- >
N      O	P
 < --  < --
 */
func reverseDl(llist *DoublyLinkedListNode) *DoublyLinkedListNode {
	var prev *DoublyLinkedListNode = nil
	curr := llist
	for curr != nil {
		// swap curr pointers
		temp := curr.next
		curr.next = curr.prev
		curr.prev = temp
		prev = curr
		curr = temp
	}
	return prev
}


#include <assert.h>
#include <limits.h>
#include <math.h>
#include <stdbool.h>
#include <stddef.h>
#include <stdint.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* readline();

typedef struct SinglyLinkedListNode SinglyLinkedListNode;
typedef struct SinglyLinkedList SinglyLinkedList;

struct SinglyLinkedListNode {
    int data;
    SinglyLinkedListNode* next;
};

struct SinglyLinkedList {
    SinglyLinkedListNode* head;
    SinglyLinkedListNode* tail;
};

SinglyLinkedListNode* create_singly_linked_list_node(int node_data) {
    SinglyLinkedListNode* node = malloc(sizeof(SinglyLinkedListNode));

    node->data = node_data;
    node->next = NULL;

    return node;
}

void insert_node_into_singly_linked_list(SinglyLinkedList** singly_linked_list, int node_data) {
    SinglyLinkedListNode* node = create_singly_linked_list_node(node_data);

    if (!(*singly_linked_list)->head) {
        (*singly_linked_list)->head = node;
    } else {
        (*singly_linked_list)->tail->next = node;
    }

    (*singly_linked_list)->tail = node;
}

void print_singly_linked_list(SinglyLinkedListNode* node, char* sep, FILE* fptr) {
    while (node) {
        fprintf(fptr, "%d", node->data);

        node = node->next;

        if (node) {
            fprintf(fptr, "%s", sep);
        }
    }
}

void free_singly_linked_list(SinglyLinkedListNode* node) {
    while (node) {
        SinglyLinkedListNode* temp = node;
        node = node->next;

        free(temp);
    }
}

// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode* next;
 * };
 *
 */
SinglyLinkedListNode* mergeLists(SinglyLinkedListNode* head1, SinglyLinkedListNode* head2) {

struct SinglyLinkedListNode* l1 = head1;
struct SinglyLinkedListNode* l2 = head2;

struct SinglyLinkedListNode* newHead = malloc(sizeof(struct SinglyLinkedListNode));
struct SinglyLinkedListNode* currPtr = newHead;

while (l1 != NULL || l2 != NULL) {
      struct SinglyLinkedListNode* newNode = malloc(sizeof(struct SinglyLinkedListNode));
      if (l1 != NULL && l2 == NULL) {
          newNode->data = l1->data;
          newNode->next = NULL;
          currPtr->next = newNode;
          l1 = l1->next;
      }  else if (l2 != NULL && l1 == NULL) {
          newNode->data = l2->data;
          newNode->next = NULL;
          currPtr->next = newNode;
          l2 = l2->next;
      } else if (l1->data < l2->data) {
          newNode->data = l1->data;
          newNode->next = NULL;
          currPtr->next = newNode;
          l1 = l1->next;
      } else {
          newNode->data = l2->data;
          newNode->next = NULL;
          currPtr->next = newNode;
          l2 = l2->next;
      }
      currPtr = currPtr->next;
}

return newHead->next;
}

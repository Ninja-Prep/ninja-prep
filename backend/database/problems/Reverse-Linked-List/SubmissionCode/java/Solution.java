class Solution {
    public Node reverseLinkedList(Node head) {
        if (head == null) return head;
        Node prev = null;
        Node curr = head;
        Node next = head.next;
        while (curr != null) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }
}
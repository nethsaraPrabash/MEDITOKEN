package QUEUE;

public class Node {

    Node next;
    String[] patient;

    public Node(String[] patient)
    {
        this.next = null;
        this.patient = patient;
    }
}

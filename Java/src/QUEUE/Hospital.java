package QUEUE;

public class Hospital {

    Node front;
    Node rear;

    public Hospital()
    {
        this.front = null;
        this.rear = null;
    }

    public boolean isEmpty()
    {
        return front == null && rear == null;
    }

    public void addPatient(String[] patient)
    {
        Node newNode = new Node(patient);
        if(isEmpty())
        {
            front = rear = newNode;
        }
        else
        {
            rear.next = newNode;
        }
        rear = newNode;
    }

    public void removePatient()
    {
        if(isEmpty())
        {
            System.out.println("Queue is empty");
        }
        else
        {
            Node temp = front;
            front = front.next;
            if(front == null)
            {
                rear = null;
            }
        }
    }

    public void display()
    {
        if(isEmpty())
        {
            System.out.println("Queue is empty");
        }
        else
        {
            int count = 0;
            Node temp = front;
            while(temp != null)
            {
                System.out.println("Patient "+(++count));
                System.out.println("Name: "+temp.patient[0]);
                System.out.println("Age: "+temp.patient[1]);
                System.out.println("Address: "+temp.patient[2]);
                System.out.println("Email: "+temp.patient[3]);
                System.out.println("");
                temp = temp.next;
            }
        }
    }
}

package QUEUE;

public class Patient {

    private String name;
    private String age;
    private String address;
    private String email;

    private String[] patient;

    public Patient()
    {
        this.patient = new String[4];
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getName()
    {
        return name;
    }

    public String getAge() {
        return age;
    }

    public String getAddress() {
        return address;
    }

    public String getEmail() {
        return email;
    }

    public String[] getPatient() {
        return patient;
    }

    public void addPatient()
    {
        patient[0] = name;
        patient[1] = age;
        patient[2] = address;
        patient[3] = email;

    }

    public void print()
    {
        System.out.println("Name: " + patient[0]);
        System.out.println("Age: " + patient[1]);
        System.out.println("Address: " + patient[2]);
        System.out.println("Email: " + patient[3]);
    }







}

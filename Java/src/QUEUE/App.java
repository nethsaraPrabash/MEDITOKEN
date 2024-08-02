package QUEUE;

import java.util.Scanner;

public class App {
    public static void main(String[] args) {
        Scanner input = new Scanner(System.in);
        Hospital hospital = new Hospital();
        Patient patient = new Patient();
        String[] patientInfo = new String[4];
        int choice;
        do {
            System.out.println("1. Add Patient");
            System.out.println("2. Remove Patient");
            System.out.println("3. Display");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            choice = input.nextInt();
            switch (choice) {
                case 1:
                    System.out.print("Enter name: ");
                    patient.setName(input.next());
                    System.out.print("Enter age: ");
                    patient.setAge(input.next());
                    System.out.print("Enter address: ");
                    patient.setAddress(input.next());
                    System.out.print("Enter email: ");
                    patient.setEmail(input.next());
                    patient.addPatient();
                    hospital.addPatient(patient.getPatient());

                    break;
                case 2:
                    hospital.removePatient();
                    break;
                case 3:
                    hospital.display();
                    break;
                case 4:
                    System.out.println("Exiting...");
                    break;
                default:
                    System.out.println("Invalid choice");
            }
        } while (choice != 4);
    }
}

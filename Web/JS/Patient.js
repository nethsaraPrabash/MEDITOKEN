class Node {
    constructor(patient) {
        this.patient = patient;
        this.next = null;
    }
}

class Patient {
    constructor() {
        this.name = '';
        this.age = '';
        this.address = '';
        this.email = '';
    }

    setName(name) {
        this.name = name;
    }

    setAge(age) {
        this.age = age;
    }

    setAddress(address) {
        this.address = address;
    }

    setEmail(email) {
        this.email = email;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getAddress() {
        return this.address;
    }

    getEmail() {
        return this.email;
    }

    getPatient() {
        return [this.name, this.age, this.address, this.email];
    }
}

class Hospital {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        return this.front === null && this.rear === null;
    }

    addPatient(patient) {
        const newNode = new Node(patient);
        if (this.isEmpty()) {
            this.front = this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }
    }

    removePatient() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
        } else {
            this.front = this.front.next;
            if (this.front === null) {
                this.rear = null;
            }
        }
    }

    display() {
        const patientList = document.getElementById('patientList');
        patientList.innerHTML = '';

        if (this.isEmpty()) {
            patientList.innerHTML = '<p>Queue is empty</p>';
        } else {
            let count = 0;
            let temp = this.front;
            while (temp !== null) {
                const patientDiv = document.createElement('div');
                patientDiv.classList.add('mb-4', 'p-4', 'bg-gray-100', 'rounded', 'shadow');
                patientDiv.innerHTML = `
                    <h4 class="text-lg font-semibold">Patient ${++count}</h4>
                    <p><strong>Name:</strong> ${temp.patient[0]}</p>
                    <p><strong>Age:</strong> ${temp.patient[1]}</p>
                    <p><strong>Address:</strong> ${temp.patient[2]}</p>
                    <p><strong>Email:</strong> ${temp.patient[3]}</p>
                `;
                patientList.appendChild(patientDiv);
                temp = temp.next;
            }
        }
    }
}

const hospital = new Hospital();

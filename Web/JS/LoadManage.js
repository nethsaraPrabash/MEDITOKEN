document.addEventListener("DOMContentLoaded", function() {
  fetch("HTML/Manage.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;

      // Add event listeners after content is loaded
      document.getElementById('patientForm').addEventListener('submit', function(event) {
          event.preventDefault();

          const patient = new Patient();
          patient.setName(document.getElementById('name').value);
          patient.setAge(document.getElementById('age').value);
          patient.setAddress(document.getElementById('address').value);
          patient.setEmail(document.getElementById('email').value);

          hospital.addPatient(patient.getPatient());
          hospital.display();

          // Clear form fields
          document.getElementById('patientForm').reset();
      });

      document.getElementById('displayPatients').addEventListener('click', function(event) {
          event.preventDefault();
          hospital.display();
      });

      hospital.display();
    })
    .catch(error => console.error('Error loading Manage.html:', error));
});

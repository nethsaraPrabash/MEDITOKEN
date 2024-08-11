document.addEventListener("DOMContentLoaded", function() {
  loadPage("HTML/Manage.html", setupManagePage);
});

function loadPage(url, callback) {
  fetch(url)
      .then(response => response.text())
      .then(html => {
          document.getElementById("content").innerHTML = html;
          if (callback) callback();
      })
      .catch(error => console.error(`Error loading ${url}:`, error));
}


// function setupManagePage() {
//   document.getElementById('patientForm').addEventListener('submit', function(event) {
//       event.preventDefault();

//       const patient = new Patient();
//       patient.setName(document.getElementById('name').value);
//       patient.setAge(document.getElementById('age').value);
//       patient.setAddress(document.getElementById('address').value);
//       patient.setEmail(document.getElementById('email').value);

//       hospital.addPatient(patient.getPatient());
//       hospital.displayCount();

//       document.getElementById('patientForm').reset();
//   });

//   document.getElementById('displayPatients').addEventListener('click', function(event) {
//       event.preventDefault();

//       window.history.pushState({page: "DisplayPatients"}, "", "/display");

//       loadPage('HTML/Display.html', setupDisplayPage);
//   });

//   hospital.displayCount();
// }

function setupManagePage() {
  document.getElementById('patientForm').addEventListener('submit', function(event) {
      event.preventDefault();

      const patient = new Patient();
      patient.setName(document.getElementById('name').value);
      patient.setAge(document.getElementById('age').value);
      patient.setAddress(document.getElementById('address').value);
      patient.setEmail(document.getElementById('email').value);

      hospital.addPatient(patient.getPatient());
      hospital.displayCount();

      document.getElementById('patientForm').reset();
  });

  document.getElementById('displayPatients').addEventListener('click', function(event) {
      event.preventDefault();

      loadPage('HTML/Display.html', setupDisplayPage);
  });

  hospital.displayCount();
}


function setupDisplayPage() {
  hospital.display();
}


window.addEventListener('popstate', function(event) {
  if (event.state && event.state.page === "DisplayPatients") {
      loadPage('HTML/Display.html', setupDisplayPage);
  } else {
      loadPage("HTML/Manage.html", setupManagePage);
  }
});

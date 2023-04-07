const containerEl = document.querySelector(".container")

fetch(`/api/students`)
.then(response => response.json())
.then(students => (){
      students.forEach(student => {
          containerEl.innerHTML += `<h2>${student.name}</h2>`;
      })
 })

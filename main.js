document.addEventListener('DOMContentLoaded', function() {
  // Kontrola, zda jsme na stránce "Sestavit trénink"
  const planList = document.getElementById('plan-list');
  if (planList) {
    const addButtons = document.querySelectorAll('.add-btn');
    addButtons.forEach(function(button) {
      button.addEventListener('click', function() {
        const card = this.parentElement;
        const exerciseData = card.getAttribute('data-exercise');
        if (exerciseData) {
          const exercise = JSON.parse(exerciseData);
          addExerciseToPlan(exercise);
        }
      });
    });

    document.getElementById('clear-plan').addEventListener('click', function() {
      planList.innerHTML = '';
    });
  }

  function addExerciseToPlan(exercise) {
    const li = document.createElement('li');
    li.textContent = exercise.name + ' - ' + exercise.description;
    planList.appendChild(li);
  }

  // Jednoduchý zpracovatel kontaktního formuláře (jen demo)
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Děkuji za zprávu! Brzy se ozvu.');
      contactForm.reset();
    });
  }
});

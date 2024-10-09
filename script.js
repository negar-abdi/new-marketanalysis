// // Get the dropdown button
// var dropdownBtn = document.getElementById("dropdown-btn");

// // Get the dropdown content
// var dropdownContent = document.getElementById("dropdown-content");

// // Toggle the dropdown content when the button is clicked
// dropdownBtn.addEventListener("click", function() {
//   dropdownContent.classList.toggle("show");
// });

// // Close the dropdown if the user clicks outside of it
// window.addEventListener("click", function(event) {
//   if (!event.target.matches('.dropdown-btn')) {
//     if (dropdownContent.classList.contains('show')) {
//       dropdownContent.classList.remove('show');
//     }
//   }
// });


// Get the dropdown button
var languageBtn = document.getElementById("language-btn");

// Get the dropdown content
var languageContent = document.getElementById("language-content");

// Toggle the dropdown content when the button is clicked
languageBtn.addEventListener("click", function() {
  languageContent.classList.toggle("show");
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", function(event) {
  if (!event.target.matches('.language-btn')) {
    if (languageContent.classList.contains('show')) {
      languageContent.classList.remove('show');
    }
  }
});

// Change the language when a link is clicked
var faLang = document.querySelector('.fa-lang');
var enLang = document.querySelector('.en-lang');

faLang.addEventListener('click', function() {
  document.querySelector('.fa-content').style.display = 'block';
  document.querySelector('.en-content').style.display = 'none';
});

enLang.addEventListener('click', function() {
  document.querySelector('.en-content').style.display = 'block';
  document.querySelector('.fa-content').style.display = 'none';
});


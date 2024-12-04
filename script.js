const selectField = document.getElementById('selectField');
const selectText = document.getElementById('selectText');
const options = document.querySelectorAll('.options');
const list = document.getElementById('list');
const arrowIcon = document.getElementById('arrowIcon');

selectField.addEventListener('click', function () {
  list.classList.toggle('hide');
  arrowIcon.classList.toggle('rotate');
});

options.forEach(option => {
  option.addEventListener('click', function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle('hide');
    arrowIcon.classList.toggle('rotate');
  });
});

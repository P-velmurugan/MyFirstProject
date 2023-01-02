const tableEl = document.querySelector("table");

let selectedId;

tableEl.addEventListener("click", (e) => {
  const tarEl = e.target.closest("tr");
  if (e.target.tagName.toLowerCase() == "th") {
    return;
  }

  if (selectedId != undefined) {
    selectedId.classList.remove("active");
  }
  selectedId = tarEl;
  tarEl.classList.toggle("active");

  alert(tarEl.children[0].innerText);
});

document.addEventListener("click", (e) => {
  let id = e.target.dataset.toggleId;

  if (!id) return;

  const donateForm = document.getElementById(id);

  donateForm.hidden = !donateForm.hidden;
});

const donateForm = document.querySelector('#donate-form')
const donateFormInput = document.querySelector('#donate-form input')

donateForm.addEventListener('submit',(e) => {
    e.preventDefault()
    if(!donateFormInput.value) return;

    let displayValue = donateFormInput.value;

    donateFormInput.value = ''

    alert(`Thanks for Doante: ${displayValue}`)

})
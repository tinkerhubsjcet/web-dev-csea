const formData = document.forms['MyForm']

function formsfunc() {
  console.log(formData['Name'].value)
  console.log(formData['Mail'].value)
  console.log(formData['password'].value)
}
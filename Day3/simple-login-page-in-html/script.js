const formData = document.forms['MyForm']
const content = document.getElementById("table-content")

function formsfunc() {
  var name = formData['Name'].value
  var mail = formData['Mail'].value
  var pass = formData['password'].value
  
  content.innerHTML="<tr><td>"+name+"</td><td>"+mail+"</td><td>"+pass+"</td></tr>"
}
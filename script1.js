//Fetch
const btnRec1 = document.querySelector('#btnRec1');

function cargarJson() {

	fetch('./lista.json')
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {
			listaHTML = '';
			data.forEach(function (lista) {
				listaHTML += `<li><b>"${lista.nombre}"<b></li> <br>` 
				listaHTML += `<li>${lista.ingredientes}</li> <br>`
				listaHTML += `<li>${lista.preparacion}</li> <br>`
			})
			document.getElementById('btnRec1').innerHTML = listaHTML;

		})
		.catch(err => console.error(err));

}

btnRec1.addEventListener('click', cargarJson);
function registro(valor) {
	$("#div_table").html("");
	$("#lista").html("");
	var app = document.getElementById('div_form');
	var form = document.createElement('form');
	form.setAttribute("action", ""); 
	form.setAttribute("method", "post");
	form.setAttribute("name", "registro")
	form.setAttribute("id", "registro")
	app.appendChild(form)
	
	var line = document.createElement('hr');
	form.appendChild(line);

	var linebreak = document.createElement('br');
	form.appendChild(linebreak);
	var namelabel = document.createElement('label'); 
	namelabel.innerHTML = "Nombres: "; 
	form.appendChild(namelabel);
	var inputelement = document.createElement('input');
	inputelement.setAttribute("type", "text");
	inputelement.setAttribute("name", "nombres");
	inputelement.setAttribute("id", "nombres");
	inputelement.required = true;
	form.appendChild(inputelement);

	var linebreak = document.createElement('br');
	form.appendChild(linebreak);
	var namelabel = document.createElement('label'); 
	namelabel.innerHTML = "Apellidos: "; 
	form.appendChild(namelabel);
	var inputelement = document.createElement('input');
	inputelement.setAttribute("type", "text");
	inputelement.setAttribute("name", "apellidos");
	inputelement.required = true;
	form.appendChild(inputelement);

	var linebreak = document.createElement('br');
	form.appendChild(linebreak);
	var namelabel = document.createElement('label'); 
	namelabel.innerHTML = "Tipo de identificación: "; 
	form.appendChild(namelabel);
	var inputelement = document.createElement('select');
	inputelement.setAttribute("id", "tipoid");
	inputelement.required = true;
	form.appendChild(inputelement);

	var request = new XMLHttpRequest()
	request.open('GET', 'http://wefindyourreadthread.com/webapi/servicios/tidentificacion', true)

	request.onload = function() {
		var data = JSON.parse(this.response)

		let select = document.querySelector("#tipoid")

		if (request.status >= 200 && request.status < 400) {
			for (let i in data.response.datos){
			  let option = document.createElement("option");
			  option.text = i;
			  option.value = i;
			  select.appendChild(option);
			}
		}
		else{
			console.log('error')
		}

	}
	request.send()

	var linebreak = document.createElement('br');
	form.appendChild(linebreak);
	var namelabel = document.createElement('label'); 
	namelabel.innerHTML = "Número de identificación "; 
	form.appendChild(namelabel);
	var inputelement = document.createElement('input');
	inputelement.setAttribute("type", "number");
	inputelement.setAttribute("name", "identificacion");
	inputelement.required = true;
	form.appendChild(inputelement);	

	var linebreak = document.createElement('br');
	form.appendChild(linebreak);
	var namelabel = document.createElement('label'); 
	namelabel.innerHTML = "País de Nacimiento "; 
	form.appendChild(namelabel);
	var inputelement = document.createElement('select');
	inputelement.setAttribute("id", "pais_nace");
	inputelement.required = true;
	form.appendChild(inputelement);
	let s = document.querySelector("#pais_nace")
	var option = document.createElement("option");
	option.text = "Seleccionar país";
	option.value = "";
	s.appendChild(option);

	var request_2 = new XMLHttpRequest()
	request_2.open('GET', 'http://wefindyourreadthread.com/webapi/servicios/countries', true)

	request_2.onload = function() {
		var data_2 = JSON.parse(this.response)

		let select_2 = document.querySelector("#pais_nace")

		array = data_2.response.datos

		if (request_2.status >= 200 && request_2.status < 400) {
			array.forEach(elemento => {
				let option = document.createElement("option");
				option.text = elemento.name;
				option.value = elemento.id;
				select_2.appendChild(option);
				});
		} else {
			console.log('error')
		}
	}
	request_2.send()

	var linebreak = document.createElement('br');
	form.appendChild(linebreak);
	var namelabel = document.createElement('label'); 
	namelabel.innerHTML = "Departamento "; 
	form.appendChild(namelabel);
	var inputelement = document.createElement('select');
	inputelement.setAttribute("id", "depto_nace");
	inputelement.required = true;
	form.appendChild(inputelement);
	let o = document.querySelector("#depto_nace")
	var option = document.createElement("option");
	option.text = "Seleccionar una opcion";
	option.value = "";
	o.appendChild(option);

	$("#pais_nace").change(function () {
		reset('#depto_nace')
		reset('#ciu_nace')

		var url =  "http://wefindyourreadthread.com/webapi/servicios/states/";  
		var value = $(this).val();

		var request_3 = new XMLHttpRequest()
		request_3.open('GET', url+value, true)

		request_3.onload = function() {
			var data_3 = JSON.parse(this.response)

			let select_3 = document.querySelector("#depto_nace")

			array = data_3.response.datos

			if (request_3.status >= 200 && request_3.status < 400) {
				array.forEach(elemento => {
					let option = document.createElement("option");
					option.text = elemento.name;
					option.value = elemento.id;
					select_3.appendChild(option);
					});
			} else {
				console.log('error')
			}
		}
		request_3.send()

	});

	var linebreak = document.createElement('br');
	form.appendChild(linebreak);
	var namelabel = document.createElement('label'); 
	namelabel.innerHTML = "País de Nacimiento "; 
	form.appendChild(namelabel);
	var inputelement = document.createElement('select');
	inputelement.setAttribute("id", "ciu_nace");
	inputelement.required = true;
	form.appendChild(inputelement);
	let p = document.querySelector("#ciu_nace")
	var option = document.createElement("option");
	option.text = "Seleccionar una opcion";
	option.value = "";
	p.appendChild(option);

	$("#depto_nace").change(function () {
		reset('#ciu_nace')

		var url_2 =  "http://wefindyourreadthread.com/webapi/servicios/cities/";  
		var value_2 = $(this).val(); 

		var request_4 = new XMLHttpRequest()
		request_4.open('GET', url_2+value_2, true)

		request_4.onload = function() {
			var data_4 = JSON.parse(this.response)

			let select_4 = document.querySelector("#ciu_nace")

			array = data_4.response.datos

            if (typeof array != "undefined"  && array != null  && array.length != null  
                        && array.length > 0) {
				if (request_4.status >= 200 && request_4.status < 400) {
					array.forEach(elemento => {
						let option = document.createElement("option");
						option.text = elemento.name;
						option.value = elemento.id;
						select_4.appendChild(option);
						});
				} else {
					console.log('error')
				}
            }else {
            	alert("Error, seleccione otro departamento")
				$('#ciu_nace')
			    .find('option')
			    .remove()
			    .end()
			    .append('<option value="">Error, seleccione otro departamento</option>')
			    .val('')
				;
				return
            }
		}
		request_4.send()
	});

	var linebreak = document.createElement('br');
	form.appendChild(linebreak);
	var contactlabel = document.createElement('label');
	contactlabel.innerHTML = "Numero de teléfono: "; 
	form.appendChild(contactlabel);
	var inputelement = document.createElement('input'); 
	inputelement.setAttribute("type", "number");
	inputelement.setAttribute("name", "telefono");
	inputelement.required = true;
	form.appendChild(inputelement);

	var linebreak = document.createElement('br');
	form.appendChild(linebreak);
	var emaillabel = document.createElement('label'); 
	emaillabel.innerHTML = "Correo electrónico: ";
	form.appendChild(emaillabel);
	var emailelement = document.createElement('input'); 
	emailelement.setAttribute("type", "email");
	emailelement.setAttribute("name", "correo");
	emailelement.required = true;
	form.appendChild(emailelement);

	var messagebreak = document.createElement('br');
	form.appendChild(messagebreak);
	var submitelement = document.createElement('button');
	submitelement.innerText = "Enviar"; 
	submitelement.setAttribute("type", "submit");
	submitelement.setAttribute("name", "submit");
	submitelement.setAttribute("value", "Submit");
	submitelement.setAttribute("class", "btn btn-info");
	form.appendChild(submitelement);

    $("#registro").on("submit", function(e){

    	if (validacion()){
	    	var url = 'http://wefindyourreadthread.com/webapi/servicios/registration';
	        var request_1 = $.ajax({
	          url: url,
	          type: 'POST',
	          data: {'nombres': document.registro.nombres.value,
	          		 'apellidos': document.registro.apellidos.value,
	          		 'tipoid': document.registro.tipoid.value,
	          		 'identificacion': document.registro.identificacion.value,
	          		 'pais_nace': $('#pais_nace').val(),
	          		 'depto_nace': $('#depto_nace').val(),
	          		 'ciu_nace': $('#ciu_nace').val(),
	          		 'telefono': document.registro.telefono.value,
	          		 'correo': document.registro.correo.value},
	          dataType: 'json',
	         });

	        request_1.done(function(respuesta) {
	        	alert(respuesta.response.message);
	        	if (respuesta.response.status = 1){
	        		lista();
	        	}
			}); 
			return false;
	    }else{
	    	return false;
	    }
    });


	function reset(e){
		$(e)
	    .find('option')
	    .remove()
	    .end()
	    .append('<option value="">Seleccionar una opcion</option>')
	    .val('')
		;
	}

	function validacion(event){
		var nombre = document.registro.nombres;
		var apellido = document.registro.apellidos;
		if (check(nombre) && check(apellido)){
			return true;
		}else{
			return false;
		}

		function check(n) {
		    if( /[^a-zA-Z ]/.test( n.value ) ) {
		        alert('Solo mayúsculas y minúsculas, no caracteres especiales.');
		        n.focus();
		        return false;
		    } else {
		    	return true;     
			}
		}
	}
}

function lista(){
	$("#div_form").html("");
	var app2 = document.getElementById('div_form');
	var form2 = document.createElement('form');
	form2.setAttribute("action", ""); 
	form2.setAttribute("method", "post");
	form2.setAttribute("name", "lista");
	form2.setAttribute("id", "lista");
	app2.appendChild(form2)
	
	var linebreak = document.createElement('br');
	form2.appendChild(linebreak);
	var namelabel = document.createElement('label'); 
	namelabel.innerHTML = "Buscar "; 
	form2.appendChild(namelabel);
	var inputelement = document.createElement('input');
	inputelement.setAttribute("type", "text");
	inputelement.setAttribute("name", "buscar");
	inputelement.setAttribute("id", "buscar");
	form2.appendChild(inputelement);

	var linebreak = document.createElement('br');
	form2.appendChild(linebreak);
	var namelabel = document.createElement('label'); 
	namelabel.innerHTML = "Pagina: "; 
	form2.appendChild(namelabel);
	var inputelement = document.createElement('input');
	inputelement.setAttribute("type", "number");
	inputelement.setAttribute("name", "pagina");
	inputelement.setAttribute("id", "pagina");
	form2.appendChild(inputelement);

	var messagebreak = document.createElement('br');
	form2.appendChild(messagebreak);
	var submitelement = document.createElement('button');
	submitelement.innerText = "Buscar"; 
	submitelement.setAttribute("type", "submit");
	submitelement.setAttribute("name", "submit");
	submitelement.setAttribute("value", "Submit");
	submitelement.setAttribute("class", "btn btn-info");
	submitelement.setAttribute("href", "#table");
	form2.appendChild(submitelement);
	form2.onsubmit = submit;

	var linebreak = document.createElement('br');
	form2.appendChild(linebreak);

	function submit() {
		$("#div_table").html("");
		var app3 = document.getElementById('div_table');
		var table = document.createElement("table")
		table.setAttribute("id", "tabla");
		table.setAttribute("class", "table");
		app3.appendChild(table)
		var tr = document.createElement("tr");
		table.appendChild(tr);
		var th_nombre = document.createElement("th");
		th_nombre.innerHTML = "Nombre";
		tr.appendChild(th_nombre)
		var th_apellido = document.createElement("th");
		th_apellido.innerHTML = "Apellido";
		tr.appendChild(th_apellido)
		var th_ti = document.createElement("th");
		th_ti.innerHTML = "tipo de id";
		tr.appendChild(th_ti)
		var th_id = document.createElement("th");
		th_id.innerHTML = "Identificacion";
		tr.appendChild(th_id)

	    var url = 'http://wefindyourreadthread.com/webapi/servicios/listarclientes';
	    var request_2 = $.ajax({
	      url: url,
	      type: 'POST',
	      data: {busca: document.lista.buscar.value},
	      dataType: 'json',
	     });

		request_2.done(function(respuesta) {
			var array = respuesta.response.resultado;
			array.forEach(elemento => {
				let tr_1 = document.createElement("tr");
				table.appendChild(tr_1);
				let td_1 = document.createElement("td");
				//td_1.innerHTML = elemento.nombres;
				tr_1.appendChild(td_1);
				let ref = document.createElement("a");
				ref.setAttribute("id","a_tag")
				ref.setAttribute("name", elemento.identificacion)
				ref.innerHTML = elemento.nombres;
				td_1.appendChild(ref);
				let td_2 = document.createElement("td");
				td_2.innerHTML = elemento.apellidos;
				tr_1.appendChild(td_2);
				let td_3 = document.createElement("td");
				td_3.innerHTML = elemento.tipoid;
				tr_1.appendChild(td_3);
				let td_4 = document.createElement("td");
				td_4.innerHTML = elemento.identificacion;
				tr_1.appendChild(td_4);

			});
			$("a_tag").on('click', function(event) {
				let y = $(this).attr("name");
			    event.preventDefault();

			    var request_3 = $.ajax({
			      url: url,
			      type: 'POST',
			      data: {busca: y},
			      dataType: 'json',
			     });

			    request_3.done(function(respuesta){
			    	alert(JSON.stringify(respuesta.response.resultado));
			    });

			});
		});
	return false;
	}

}

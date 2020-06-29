var btnBuscar = document.querySelector('#btnBuscar');

function trataURL(urlValues) {
	var values = urlValues.split('//');
	if (values.length === 2) {
		return values[1];
	} else {
		return values[0];
	}
}

btnBuscar.addEventListener('click', buscarLocalizacao, false);

function buscarLocalizacao() {
	var ip_url = document.querySelector('#ip_url').value;
	ip_url = trataURL(ip_url);
	var url = `https://ip-api.com/json/${ip_url}`;

	fetch(url)
		.then((response) => response.json())
		.then((json) => {
			var template = Handlebars.compile($('#item-template').html());
			$('#items').html(template(json));

			var template = Handlebars.compile($('#item-template-map').html());
			$('#maps').html(template(json));
		})
		.catch((err) => {
			$('#items').html(
				"<div class='alert alert-warning alert-dismissible fade show' role='alert'>" +
					'<strong>Ocorreu algum erro na buscar!!! </strong> Tente novamente.' +
					"<button type='button' class='close' data-dismiss='alert' aria-label='Close'>" +
					"<span aria-hidden='true'>&times;</span>" +
					'</button>' +
					'</div>'
			);
		});
}

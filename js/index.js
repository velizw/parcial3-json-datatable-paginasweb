$(document).ready(function () {
	//función que se ejecuta cuando está listo y llena el dataTable
    $('#paises').DataTable({
    	ajax:{url:"https://restcountries.com/v3.1/all",dataSrc:""},
    	"columns": [
    	{ "data": "flags.png" },
    	{ "data": "name.common" },
    	{ "data": "translations.spa.official"},
    	{ "data": "capital[0]" },
    	{ "data": "region" },
    	{ "data": "continents" },
    	{ "data": "maps.googleMaps" },
    	{ "data": "cca2" }
    	],
    	"language": {
    		"url": "http://cdn.datatables.net/plug-ins/1.12.1/i18n/es-ES.json"
    	},
    	columnDefs: [
    	{
    		targets: 0,
    		orderable: false,
    		data: "flags.png",
    		render: function (data, type, row, meta) {
    			let fila = meta.row;
    			let botones = `
    			<img width="60px" src="`+data+`"/>`;
    			return botones;
    		}
    	},
    	{
    		targets: 6,
    		orderable: true,
    		data: "maps.googleMaps",
    		render: function (data, type, row, meta) {
    			let fila = meta.row;
    			let botones = `
    			<a class='btn btn-primary btn-circle' target="_blank" href="`+data+`">
    			<i class="fa fa-list" style="font-size:15px;">Mapa</i>
    			</a>`;
    			return botones;
    		}
    	}
    	],
    });
});
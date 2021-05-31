import App from './app/app.js'
import {Ajax} from './common/NopeUtil.js'

window.onload	= () => {
	let $main	= document.querySelector('#main');

	let ajax	= new Ajax();
	ajax.request({
		url		: '/check/language',
			data	: {

			},
			type	: 'get',
			success	: (response) => {
				Promise.all([
					import(response)
				])
				.then(([value]) => {
					window.languagePack	= value.languagePack;
					new App($main);
				})
			},
			error	: (status, statusText, responseText) => {
			}
	})
}
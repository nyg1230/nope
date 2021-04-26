import LoginBox from '../components/signin/LoginBox.js';
import GoSignup from '../components/signin/GoSignup.js';
import {Ajax, CreateDom} from '../common/NopeUtil.js';

window.onload	= () => {
	const lang	= localStorage.getItem('nopeLanguage');

	const ajax	= new Ajax();
	ajax.request({
		url		: `/check/language?lang=${(lang == null) ? '' : lang}`,
		data	: {},
		type	: 'get',
		success	: (langPackPath) => {
			Promise.all([
				import(langPackPath)
			]).then(([
				importLangPack
			]) => {
				window.nopeLanguagePack	= importLangPack.languagePack;
				
				let $targetDiv	= document.querySelector('#divIndex');
				$targetDiv.innerHTML	= `<login-box></login-box>`
			})
		},
		error	: (a,b,c) => {
			console.log(a)
			console.log(b)
			console.log(c)
		},
		async	: true
	});
}
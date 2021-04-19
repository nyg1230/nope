import LoginBox from '../components/signin/LoginBox.js';
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
				
				let $targetDiv	= document.querySelector('#divIndex')
				const $login	= new CreateDom('login-box');
				$targetDiv.innerHTML	= $login.outerHTML;
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
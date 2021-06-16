class Ajax {

	httpRequest;
	url;
	type;
	data;
	contentType;
	cbBeforeSend;
	cbSuccess;
	cbError;
	cbComplate;
	_async;

	contentTypeList;

	constructor() {
		if(window.XMLHttpRequest) {
			this.httpRequest	= new XMLHttpRequest();

			this.contentType		= 'application/x-www-form-urlencode';
			this.contentTypeList	= {
				'TEXT'			: 'text/plain',
				'HTML'			: 'text/html',
				'CSS'			: 'text/css',
				'JS'			: 'text/javascript',
				'JAVASCRIPT'	: 'text/javascript',
				'JSON'			: 'application/json',
				'MULTIPART'		: 'multipart/formed-data'
			}
		} else {
			return null;
		}
	}

	request(opt) {
		if(opt != null) this.setOption(opt);

		this.httpRequest.withCredentials	= !!opt.withCredentials;

		try {
			
			this.httpRequest.onreadystatechange	= () => {
				this.cbBeforeSend();
				if (this.httpRequest.readyState === XMLHttpRequest.DONE) {
					if (this.httpRequest.status === 200) {
						this.cbSuccess(this.httpRequest.responseText);
					} else {
						this.cbError(this.httpRequest.status, this.httpRequest.statusText, this.httpRequest.responseText);
					}
				}
				this.cbBeforeSend();
			}
			this.cbComplate();
		} catch(e) {
			console.error(e);
		}

		this.httpRequest.open(this.type, this.url, this._async);

		// 타임아웃 차후에
		let sendRequest	= null;
		if(this.type == 'GET') {

		} else {
			this.httpRequest.setRequestHeader('Content-Type', this.contentType);
			sendRequest	= this.data;
		}

		
		// header 세팅은 open 이후에
		if(this.header) {
			// Object.keys(this.header).forEach((headerKey) => {
			// 	let headerVal	= this.header[headerKey];
			// 	this.httpRequest.setRequestHeader(headerKey, headerVal);
			// })
			for(let key in this.header) {
				this.httpRequest.setRequestHeader(key, this.header[key]);
			}
		}
		
		
		this.httpRequest.send(sendRequest);
	}

	setOption(opt) {
		this.type			= (opt?.type == null) ? 'GET' : opt.type.toUpperCase();
		this.data			= (opt?.data == null) ? '' : this.getQueryString(opt.data);
		this.url			= (this.type == 'GET' && opt?.url.indexOf('?') == -1) ? `${opt.url}${this.data}` : opt.url;
		this.cbBeforeSend	= (typeof opt?.beforeSend == 'function') ? opt.beforeSend : function(){};
		this.cbSuccess		= (typeof opt?.success == 'function') ? opt.success : function(){};
		this.cbError		= (typeof opt?.error == 'function') ? opt.error : function(){};;
		this.cbComplate		= (typeof opt?.complate == 'function') ? opt.complate : function(){};;
		this._async			= (opt?.async == null) ? true : !!opt.async;
		
		let tmpContentType	= this.contentTypeList[opt?.contentType];
		this.contentType	= tmpContentType ?? this.contentType;
		this.header			= opt.header ?? null;

	}

	getQueryString(obj) {
		let queryString	= '';

		if(!Array.isArray(obj) && typeof obj == 'object') {
			queryString	= '?';
			for(let key	in obj) {
				queryString	+= `&${key}=${encodeURIComponent(obj[key])}`;
			}

		} else if(Array.isArray(obj)) {
			queryString	= obj.map((val) => `/${val}`).join('')
		} else {
			queryString	= encodeURIComponent(obj.toString());
		}

		return queryString;
	}
}

class CreateDom {
	constructor(type, attributes) {
		const $dom	= document.createElement(type);

		if(typeof attributes == 'object' && !Array.isArray(attributes)) {
			for(let attr in attributes) {
				$dom[attr]	= attributes[attr];
			}
		}

		return $dom;
	}
}

export {
	Ajax,
	CreateDom
};
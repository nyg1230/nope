import { Ajax } from "../../../common/NopeUtil.js";

export default class OverSeasAPI {
    constructor() {
        this.url    = 'https://realstonks.p.rapidapi.com';
    }

    promise(ticker) {
        return new Promise((res, req) => {
            new Ajax().request({
                url     : `${this.url}/${ticker}`,
                type    : 'get',
                header  : {
                    'Content-type'      : 'application/x-www-form-urlencoded',
                    'x-rapidapi-key'    : 'db2590591emsh3a05add30df2370p131dfdjsn9848c58cd6c8',
                    'x-rapidapi-host'   : 'realstonks.p.rapidapi.com'
                },
                success : (response) => {res(response)},
                error   : (status) => {req(status)}
            })
        });
    }
}
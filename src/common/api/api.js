
import 'whatwg-fetch'
import qs    from 'qs';

//请求ip地址
let base = 'http://localhost:8888/vue';
//设置跨域
let heads = {
				 headers: {
			                'Content-Type': 'application/x-www-form-urlencoded'
			              }
  
              }
// export const getusers = params => { return fetch.post(`${base}/users`,  qs.stringify(params),heads).then(res => res.data); };
export const Logins = params => {return 

 fetch('${base}/login',{method: 'POST', heads,body: qs.stringify(params)}).then(res => res.data)
};
            



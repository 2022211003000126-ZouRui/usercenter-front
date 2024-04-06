
import {extend} from 'umi-request'; //在原有的request基础上继承得到一个新的请求
import {stringify} from "querystring";
import{history} from "@@/core/history";
import {message} from "antd";


/**
 * 配置request请求时的默认参数
 */
const request = extend({

  credentials: 'include', // 默认请求是否带上cookie
  prefix:process.env.NODE_ENV==='production'?'http://user-backend.code-nav.cn':undefined
  // requestType: 'form',
});

/**
 * 请求拦截器
 */
request.interceptors.request.use((url, options): any => {
  console.log(`do request url= ${url}`)
  return {
    url,
    options: {
      ...options,
      headers: {
      },
    },
  };
});

/**
 * 所有响应拦截器,写了这个后端响应的数据就会先跑到这来进行处理
 */
request.interceptors.response.use(async (response, options): Promise<any> => {
  const res = await response.clone().json();
  if(res.code===0){
    return res.data;
  }
  if(res.code===40100){   //对应后端ErrorCode 的状态码40100 未登录
    message.error('请先登录');
    history.replace({
      pathname:'/user/login',
      search:stringify({
        redirect: location.pathname,
      })
    });
  }else{
    message.error(res.description);
  }
  return res.data;  //返回完整信息
});
export default request;

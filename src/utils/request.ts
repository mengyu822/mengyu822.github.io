//对于axios函数库进行二次封装?
//目的是啥?
//1,利用其自带的请求,拦截器功能
//2,请求拦截器,可以在请求头中携带公共参数:如token
//3,响应拦截器,可以简化服务器返回的谁,处理http网络错误
import axios from 'axios';
import { ElMessage } from 'element-plus';

// 利用axios.create方法创建一个axios实例:可以设置基础路径,超时的时间设置

const request = axios.create({
    baseURL:'/api',//请求的的基础路径的设置
    timeout:5000//超时时间的设置,超过5秒,请求失败
})
//请求拦截器
request.interceptors.request.use((config)=>{
    //config:请求拦截器回调注入的对象(配置对象)
    
    return config;
})

//对外暴露axios
export default request;

//响应拦截器
request.interceptors.response.use((response)=>{
    return response;
}, 
(error)=>{
    //处理http网络错误
    const status = error.response.status;
    switch(status){
        case 404:
            ElMessage({
                type:'error',
                message: '请求路径错误!'
            })
            break;
    }
    return Promise.reject(new Error(error.message))
})
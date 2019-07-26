import api from '@/axios'
import { message } from 'antd'
import { SET_TOKEN,SET_USERINFO,DELETE_TOKEN } from './type.js'
import global from '../../global'



const login = params => dispatch => {
  /**
   * 登录需要发送两次请求，第一次获取token
   * 第二次请求再把token传给后台，获取用户信息
   **/
   
  return new Promise(reslove => {
  	console.log(global.API.UserManageService.Login)


    /*api.post(global.API.UserManageService.Login, params)
    .then(res => {
      console.log(res);
    })*/
    /*api.get(global.API.UserManageService.Login, {
      params: params
    }).then(res => {
      console.log(res)
    })*/

    api.get(global.API.UserManageService.Login, {
      params: params
    }
    ).then(res => {
      // 账号密码正确，不发送第二次请求
      console.log(res);
      if (res.data.success == 1) {
        //设置全局token并缓存token
        dispatch({
          type: SET_TOKEN,
          playload: params.userName
        })
        localStorage.setItem('token', params.userName)
      }
      reslove(res.data)
    })

  })
}



const deleteToken = ()=> dispatch=>{
  localStorage.removeItem('token')
  dispatch({
    type: DELETE_TOKEN
  })
  message.success('已退出登录')
  window.location = '#/login'
}


export {
  login,
  deleteToken
}
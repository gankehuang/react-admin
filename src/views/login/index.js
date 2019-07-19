import React, {Component} from 'react'
import './index.less'
import {connect} from 'react-redux'
import {Button, Input, Icon, Form, Checkbox,Spin, message } from 'antd'
import {login} from '@/redux/actions'
import PropTypes from 'prop-types'
import Particles from 'react-particles-js'
import {particles} from './params'

import global from '../../global'

const FormItem = Form.Item

class Login extends Component {

  static contextTypes  = {
    router: PropTypes.object
  }

  state = {
    loading: false
  }

  componentDidMount(){
    //加载用户名密码
    const historyUser = localStorage.getExpire('user')
    if(historyUser){
      const {userName,password} = JSON.parse(historyUser)
      this.props.form.setFieldsValue({userName,password,remember:true})
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({loading:false})
    //const { getUserInfo} = this.props,{history} = this.context.router
    this.props.form.validateFields((err, values) => {
      if (!err) {
      	console.log(values);
        const {userName,password,remember} = values
        localStorage.setExpire('token',userName,5000);
        remember?localStorage.setExpire('user',JSON.stringify({userName,password}), 5000) : localStorage.removeItem('user')   //记住用户

        console.log(global.API.UserManageService.Login);
        this.login({userName,password})
      }
    })
  }

  login = formVal=> {
    const {handleLogin} = this.props
    // 登录完成后 发送请求 调用接口获取用户信息
    this.setState({loading:true})

    handleLogin(formVal).then(status => {
      console.log(status)
      if(status.success == 1){
          const { getUserInfo} = this.props,{history} = this.context.router
          history.replace('/new/workTrend')
          status
      }else {
          message.error(status.message)
      }
      this.setState({loading:false})
    })
  }

  /*getUserInfo = ()=> {
    this.setState({loading:true})
    const { getUserInfo} = this.props,{history} = this.context.router
    // 发送请求 调用接口获取用户信息
    history.replace('/dashboard')
    this.setState({loading:false})
    getUserInfo().then(status =>{
      this.setState({loading:false})
      status && history.replace('/dashboard')
    })
  }*/

  render() {
    const { getFieldDecorator } = this.props.form
    return (

        <div className='login-container'>
          <Particles
              params={{
                particles
              }}
              style={{width:'100%',height:'100%'}}
          />
          <Form
              className='content'
              onSubmit={this.handleSubmit}
          >
            <Spin
                spinning={this.state.loading}
                tip='加载中...'
            >
              <FormItem>
              {getFieldDecorator('userName', {
                rules: [{ required: true, message: '请输入账号!' }],
              })(
                <Input
                    placeholder="User"
                    prefix={
                      <Icon
                          style={{ color: 'rgba(0,0,0,.25)' }}
                          type="user"
                      />}

                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: '请输入密码!' }]
              })(
                <Input
                    placeholder="Password"
                    prefix={
                      <Icon
                          style={{ color: 'rgba(0,0,0,.25)' }}
                          type="lock"
                      />}
                    type="password"
                />
              )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked'
                })(
                  <Checkbox>记住密码</Checkbox>
                )}
                <a className='login-form-forgot'>忘记密码</a>
                <Button
                    className='login-form-button'
                    htmlType='submit'
                    type='primary'
                >
                  登录
                </Button>
            </FormItem>

          </Spin>

         </Form>
        </div>
    )
  }
}
const mapDispatchToProps = ({
  handleLogin: params => login(params)
})

export default connect(state => ({collapsed: state.UI.taglist}), mapDispatchToProps)(Form.create()(Login))

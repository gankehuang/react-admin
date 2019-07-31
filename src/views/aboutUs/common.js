/*eslint-disable*/

import React,{Component} from 'react'
import { Form, Input, Button, message } from 'antd'
import api from '@/axios'
import global from '../../global'

class common extends Component {
    constructor(props){
        super(props)
      }
    state = {
        Id: ''
    }
    componentDidMount() {
        this.getData()
        //this.props.form.validateFields()
        //表单设置初始值
        
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
            let value = values
            value.Type = this.props.type
            api({
                url: global.API.DataManageService.AddorEditData,
                params:  {"ID": this.state.Id, 'jsonStr': JSON.stringify(value)},
                method: 'get',
                type: 'json',
            }).then(data => {
                if(data.status == 200){
                    //console.log(data)
                    message.success(data.data.message)
                } 
            })

          }
        })
    }
    getData = () => {
        api({
            url: global.API.DataManageService.GetAllData,
            params:  { "draw": 0, 'start': 0, 'length': 10, 'retrievalInfo': JSON.stringify({'Type': this.props.type}) },
            method: 'get',
            type: 'json',
        }).then(data => {
            if(data.status == 200){
                let newData = JSON.parse(JSON.parse(data.data.resultData).data)
                this.setState({
                    Id: newData[0].Id
                })
                this.props.form.setFieldsValue({
                    Content: newData[0].Content,
                });
            } 
        })
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className='shadow-radius'>
                <Form layout="vertical" onSubmit={this.handleSubmit}>
                    <Form.Item label='关于我们' >
                    {getFieldDecorator('Content', {
                        rules: [{ required: true, message: '请输入内容' }],
                    })(
                        <Input.TextArea
                        placeholder="请输入内容..."
                        autosize={{ minRows: 5, maxRows: 6 }}
                        />
                    )}
                    </Form.Item>
                
                    <Form.Item>
                    <Button type="primary" htmlType="submit" >
                        立即创建
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}
const Common = Form.create({ name: 'common' })(common);
export default Common
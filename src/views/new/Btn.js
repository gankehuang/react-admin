/*eslint-disable*/
import React from 'react'
import { Input, Button, Modal } from 'antd'
import api from '@/axios'
import global from '../../global'
import SubmitForm from './SubmitForm'

const { TextArea } = Input
class Btn extends React.Component{
	constructor(props){
    	super(props)
  	}
  	state = {
  		visible: false,
  		int: ''
  	}

	edit = () => {
		//console.log(this.props)
		
		this.setState({
	      visible: true,
        })
        
		/*api({
	      url: global.API.DataManageService.GetAllData,
	      params: {'draw': 0, 
	            'start': 0, 
	            'length': 10, 
	            'retrievalInfo': JSON.stringify({'Type': this.props.newType })
	      },
	      method: 'get',
	      type: 'json',
	    }).then(data => {
	            console.log(data)
	      const pagination = { ...this.state.pagination }
	            const newData = JSON.parse(data.data.resultData)
	      pagination.total = newData.recordsTotal
	      this.setState({
	        loading: false,
	        data: JSON.parse(newData.data),
	        pagination,
	      })
	    })*/

	}
	del = () => {
		
	}
	handleCancel = e => {
		this.setState({
			visible: false,
		});
	};
	handleOk = e => {
		this.setState({
			visible: false,
		});
    }
    //表单提交触发函数
	onChangeVisible = (name) => {
		this.setState(name)
	}

	render(){
		return(
			<div>
				<Button icon="edit" size="small" onClick={this.edit}>编辑</Button>&nbsp;&nbsp;
				<Button icon="delete" size="small" type="danger" onClick={this.del}>删除</Button>

				<Modal
				  title="编辑"
                  footer={null}
                  width="800px"
				  visible={this.state.visible}
				  onCancel={this.handleCancel}
				  onOk={this.handleOk}
		        >
					<SubmitForm changeVisible={this.onChangeVisible.bind(this)} content={this.props.content}/>
		        </Modal>
			</div>
		)
	}
}


export default Btn
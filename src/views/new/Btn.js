/*eslint-disable*/
import React from 'react'
import { connect } from 'react-redux'
import { message, Button, Modal } from 'antd'
import api from '@/axios'
import global from '../../global'
import { chageModelState, changeDetail } from '@/redux/actions'
const { confirm } = Modal
class Btn extends React.Component{
	constructor(props){
    	super(props)
  	}
  	state = {
  		delId: '',
  		int: ''
	}
	componentDidMount(){
		this.props.onRef&&this.props.onRef(this)
	}
	//点击编辑
	edit = () => {
		const { chageModelState, changeDetail } = this.props
		changeDetail(this.props.content)
		chageModelState(true)
	}
	//点击删除显示删除询问框
	del = () => {
		const _this = this
		this.setState({
			delId: this.props.id
		})
		confirm({
		  title: '提示',
		  content: '确定要删除吗？',
		  okText: '确定',
		  okType: 'danger',
		  cancelText: '取消',
		  onOk() {
			_this.delData()
		  },
		  onCancel() {
			//console.log('Cancel');
		  },
		});
	}
	//删除数据
	delData = () => {
		//console.log(this.state.delId)
		api.get( global.API.DataManageService.DelData, {
			params: {"id": this.state.delId }
		}).then(res => {
			if(res.data.success == 1) {
				message.success(res.data.message)
				this.props.fetch()
			}
		}).catch(error => {
			message.error(error)
		})
	}
	//批量删除
	BatchDel = () => {
		const _this = this
		//console.log(this.props.selId)
		this.setState({
			delId: this.props.selId
		})
		confirm({
			title: '提示',
			content: '确定要删除吗？',
			okText: '确定',
			okType: 'danger',
			cancelText: '取消',
			onOk() {
				_this.delData()
			},
			onCancel() {
			  //console.log('Cancel');
			},
		});
		
		
	}
	render(){
		return(
			<div>
				<Button icon="edit" size="small" onClick={this.edit}>编辑</Button>&nbsp;&nbsp;
				<Button icon="delete" size="small" type="danger" onClick={this.del}>删除</Button>
			</div>
		)
	}
}
const mapStateToProps = state => ({modelState: state.UI.modelState, itemDetail: state.UI.itemDetail})
const mapDispatchToProps = dispatch => ({
	chageModelState: playload => {
	  dispatch(chageModelState(playload))
	},
	changeDetail: playload => {
		dispatch(changeDetail(playload))
	}
})

//export default Btn
export default connect(mapStateToProps, mapDispatchToProps)(Btn)
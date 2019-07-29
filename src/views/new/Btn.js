/*eslint-disable*/
import React from 'react'
import { connect } from 'react-redux'
import { Input, Button } from 'antd'

import { chageModelState, changeDetail } from '@/redux/actions'

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
		
		const { chageModelState, changeDetail } = this.props
		changeDetail(this.props.content)
		chageModelState(true)
		

	}
	del = () => {
		console.log(this.props)
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
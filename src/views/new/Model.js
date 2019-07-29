/*eslint-disable*/
import React from 'react'
import { connect } from 'react-redux'
import { Input, Button, Modal } from 'antd'
import { chageModelState } from '@/redux/actions'
import SubmitForm from './SubmitForm'

class Model extends React.Component{

	handleCancel = e => {
		const { chageModelState } = this.props
		chageModelState(false)
	};
	handleOk = e => {
		const { chageModelState } = this.props
		chageModelState(false)
    }
    

	render(){
		return(
			<div>
				
				<Modal
				  title="编辑"
                  footer={null}
                  width="800px"
				  visible={this.props.modelState}
				  onCancel={this.handleCancel}
                  onOk={this.handleOk}
                  destroyOnClose
		        >
					<SubmitForm content={this.props.itemDetail} newType={this.props.newType} fetch={this.props.fetch}/>
		        </Modal>
			</div>
		)
	}
}

const mapStateToProps = state => ({modelState: state.UI.modelState, itemDetail: state.UI.itemDetail})
const mapDispatchToProps = dispatch => ({
	chageModelState: playload => {
	  dispatch(chageModelState(playload))
	}
})

//export default Btn
export default connect(mapStateToProps, mapDispatchToProps)(Model)
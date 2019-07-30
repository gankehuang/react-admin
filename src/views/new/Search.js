/*eslint-disable*/
import React from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button } from 'antd';
import { chageModelState, changeDetail } from '@/redux/actions'

class search extends React.Component {
  constructor(props){
    super(props)
  }
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  //搜索提交
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        this.props.fetch(values.Title)
      }
    });
  };
  //添加
  add = () => {
        const {chageModelState, changeDetail} = this.props
        chageModelState(true)
        changeDetail({
          Content: '',
          Picture: '',
          Recommend: 1,
          Synopsis: '',
          Time: '',
          Title: '',
          Id: ''
        })
  }
  //批量删除
  batchDel = () => {
      this.props.onClick()
  }
  //全部
  all = () => {
      this.props.form.resetFields()
      this.props.fetch()
  }
  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    
   
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item>
        <Button type="danger" onClick={this.batchDel}>批量删除</Button>
        </Form.Item>
        <Form.Item >
          {getFieldDecorator('Title', {
            rules: [{ required: false }],
          })(
            <Input
              placeholder="请输入标题"
            />,
          )}
        </Form.Item>
        
        <Form.Item>
          <Button type="primary" htmlType="submit" >
            检索
          </Button>&nbsp;&nbsp;
          <Button type="primary" onClick={this.add}>添加</Button>&nbsp;&nbsp;
          <Button type="primary" onClick={this.all}>全部</Button>
        </Form.Item>
      </Form>
    );
  }
}

const Search = Form.create({ name: 'Search' })(search);

const mapStateToProps = state => ({modelState: state.UI.modelState, itemDetail: state.UI.itemDetail})
const mapDispatchToProps = dispatch => ({
	chageModelState: playload => {
	  dispatch(chageModelState(playload))
  },
	changeDetail: playload => {
		dispatch(changeDetail(playload))
	}
})


//export default Search
export default connect(mapStateToProps, mapDispatchToProps)(Search)
/*eslint-disable*/
import React,{Component} from 'react'
import { connect } from 'react-redux'
import { Table, Tag } from 'antd'
import api from '@/axios'
import global from '../../global'

import Search from './Search'
import {Pic} from './Pic'
import Btn from './Btn'
import Model from './Model'

const b = <Tag color="#87d068">未推荐</Tag>
const a = <Tag color="#f50">已推荐</Tag>


const columns = [{
  title: '标题',
  dataIndex: 'Title',
  sorter: true,
  width: '20%',
}, {
  title: '简介',
  dataIndex: 'Synopsis',
  width: '20%',
}, {
  title: '时间',
  dataIndex: 'Time',
  width: '20%',
},{
  title: '图片',
  dataIndex: 'Picture',
  width: '20%',
  key: 'Picture',
  render: (data, row, index) => {
    return Pic(data)
  }
}, {
  title: '推荐',
  dataIndex: 'Recommend',
  render: (data, row, index) => {
    return data==1? a:b
  },
}, {
  title: '操作',
  dataIndex: 'Id',
  width: '15%',
  render: (data, row, index) => {
    return <Btn id={data} content={row} />
  },
}]


class newCommon extends Component {
  constructor(props){
    super(props)
  }

  state = {
    data: [],
    pagination: {},
    loading: false,
  }
  componentDidMount() {
    console.log(this.props)
  }
  componentWillMount() {
    this.fetch()
  }

  componentWillUnmount(){
    // componentWillMount进行异步操作时且在callback中进行了setState操作时，需要在组件卸载时清除state
    this.setState = ()=>{
      return
    }
  }

  handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...this.state.pagination }
    pager.current = pagination.current
    this.setState({
      pagination: pager,
    })
    this.fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    })
  }
  fetch = () => {
    this.setState({ loading: true })
    api({
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
    })
  };
  
  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      }
    };
    return (
      <div className='shadow-radius'>
          <Search /><br/>
          <Table
              bordered
              rowSelection={rowSelection}
              columns={columns}
              dataSource={this.state.data}
              loading={this.state.loading}
              onChange={this.handleTableChange}
              pagination={this.state.pagination}
              rowKey={record => record.Id}
          />

          <Model content={this.props.itemDetail} newType={this.props.newType} fetch={this.fetch} />
      </div>
    )
  }
}

const mapStateToProps = state => ({modelState: state.UI.modelState, itemDetail: state.UI.itemDetail})

export default connect(mapStateToProps)(newCommon)
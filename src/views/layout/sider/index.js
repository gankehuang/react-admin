import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout,Icon } from 'antd'
import Menu from './Menu'
const { Sider } = Layout

class SiderComponent extends Component {
  render () {
    const { collapsed, isMobile } = this.props

    return (
      <Sider
          collapsed={isMobile?false:collapsed}
          collapsible
          style={{ overflowY: 'auto', overflowX: 'hidden', height: '100vh', position: 'fixed', left: 0 ,backgroundColor:'black', color: '#fff'}}
          trigger={null}
          width={isMobile ? 0 :250}
      >
        <div className="logo">
          <Icon
              style={{fontSize: '25px', marginTop: '20px'}} 
              type="global"
          /> {
            collapsed || <span style={{fontSize:'16px'}}> &nbsp;&nbsp;长期性后台管理系统 </span>
          }
        </div>
        <Menu
            collapsed={collapsed}
        />
      </Sider>
    )
  }
}

const mapStateToProps = state => ({collapsed: state.UI.collapsed, isMobile: state.UI.isMobile})
export default connect(mapStateToProps)(SiderComponent)

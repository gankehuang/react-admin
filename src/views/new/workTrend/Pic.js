
/*eslint-disable*/
import React from 'react'
import { Button } from 'antd'
import global from '../../../global'

const Pic = (src) => {
	let complementedUrl = global.Domain.resource + src
	return <img src={complementedUrl} style={{width: '100px'}}/>
}

const Btn = (id) => {
	return (
		<div>
			<Button icon="edit" size="small">编辑</Button>&nbsp;&nbsp;
			<Button icon="delete" size="small" type="danger">删除</Button>
		</div>
	)
}

export {
	Pic,
	Btn
}
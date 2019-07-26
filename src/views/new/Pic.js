
/*eslint-disable*/
import React from 'react'
import global from '../../global'
const Pic = (src) => {
	let complementedUrl = global.Domain.resource + src
	return <img src={complementedUrl} style={{width: '100px'}}/>
}


export {
	Pic
}
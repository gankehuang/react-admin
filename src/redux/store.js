//引入createStore创建store，引入applyMiddleware 来使用中间件
import { createStore, applyMiddleware } from 'redux'
//利用redux-logger打印日志
import { createLogger } from 'redux-logger'

// 安装redux-devtools-extension的可视化工具。
//import { composeWithDevTools } from 'redux-devtools-extension'

import thunk from 'redux-thunk'
import reducers from './reducers'

//使用日志打印方法
const loggerMiddleware = createLogger({collapsed: true})



const store = createStore(
  reducers,
  applyMiddleware(thunk, loggerMiddleware),
  //composeWithDevTools()
)
export default store

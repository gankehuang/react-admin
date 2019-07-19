# react-admin

### 前言

> 基于react和antd的后台管理系统，支持响应式，IE10+


- 该项目基于[create-react-app](https://github.com/facebook/create-react-app)创建
### 依赖模块
- [react@16.3.2](https://facebook.github.io/react/)
- [react-router@4.2.2](https://react-guide.github.io/react-router-cn/)(<span style="color: rgb(243,121,52);">注意，v4和v3的使用区别差距较大，坑也比较多，自行斟酌</span>)
- [react-redux]() 状态管理库;用redux-logger打印日志，方便调试;用redux-thunk实现异步操作
- [css-modules@4.7.2](https://react-guide.github.io/react-router-cn/)(<span style="color: rgb(243,121,52);">避免样式命名冲突，书写方式也更简单
一般小项目用不到</span>)
- [antd@3.0.1](https://ant.design/index-cn)(<span style="color: rgb(243,121,52);">蚂蚁金服开源的react ui组件框架,精美简约</span>)
- [axios@0.16.1](https://github.com/mzabriskie/axios)(<span style="color: rgb(243,121,52);">一个常用的http请求库，可以实现全局请求拦截，响应拦截</span>)
- [echarts@4.1.0](https://github.com/apache/incubator-echarts)(<span style="color: rgb(243,121,52);">可视化图表，习惯用这个了，同款推荐 [echarts-for-react](https://github.com/hustcc/echarts-for-react)</span>)
- [react-draft-wysiwyg@1.12.13](https://github.com/jpuri/react-draft-wysiwyg)(<span style="color: rgb(243,121,52);">基于react的富文本封装</span>)
- [react-sortable-hoc@0.7.2](https://github.com/clauderic/react-sortable-hoc)(<span style="color: rgb(243,121,52);">简单的拖拽模块</span>)
- [react-transition-group@2.3.1](https://github.com/reactjs/react-transition-group)(<span style="color: rgb(243,121,52);">用来实现过渡效果，如果你用过vue的transition，这玩意也差不多</span>)
- [react-particles-js@2.2.0](https://github.com/Wufe/react-particles-js)(<span style="color: rgb(243,121,52);">用来实现登录页背景的粒子效果</span>)



#### 路由

- 路由的跳转事件的三种获取方式

    1. withRouter 高阶函数
    ```js
      import { withRouter } from 'react-router-dom'
      const Component = props=>{
          const {history} = props
          return (
            <div onClick={history.push('/')}>点击跳转路由</div>
          )
      }
      export default withRouter(Component)
    ```

    2. 通过context拿到history对象，实现跳转
    ```js
      import PropTypes from 'prop-types'
      const Component = (props,context)=>{
          const {history} = context.router
          return (
             <div onClick={history.push('/')}>点击跳转路由</div>
          )
      }
      Component.contextTypes = {
        router: PropTypes.object.isRequired
      }

      export default Component
    ```

#### 样式模块化

- 全局样式
  直接创建一个样式文件xxx.less
  ```js
  import './index.less'
  <div className= 'box'></div>
  ```
- css模块化
创建一个文件xxx.module.less的样式文件,以module.less会后缀的样式文件里的class，会自动添加hash值，从而实现样式模块化，避免class的命名冲突
  ```js
  import CSSModules from 'react-css-modules'
  import styles from '../index.module.less'
  <div
      styleName='box'
  />
  export default CSSModules(Component,styles)
  ```


#### 多环境

设置不同的环境变量
```js
// package.json
"build:prod": "set REACT_APP_XXX= 'XXX' && npm run build",
"build:sit": "set REACT_APP_XXX= 'XXX' && npm run build"
```

之后可以在代码里自行判断
if(process.env.REACT_APP_XXX === 'xxx'){
  ...
}


### 安装运行，打包
```js
npm i
```
##### 启动项目
```js
npm start
```
##### 打包项目
```js
npm run build
```

##### 测试打包后的项目
```js
serve -s build
```





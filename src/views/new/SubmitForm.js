import React from 'react'
import {
  Form,
  Input,
  message,
  Button,
  Upload,
  Icon,
  Select
} from 'antd';
import global from '../../global'


class SubmitForm extends React.Component {
  constructor(props){
    super(props)
  }
  state = {
      picList: [
        {
          uid: '-1',
          name: this.props.content.Picture,
          status: 'done',
          url: global.Domain.resource + this.props.content.Picture,
          thumbUrl: global.Domain.resource + this.props.content.Picture,
        }
      ],
      fileList: [
        {
          uid: '1',
          name: this.props.content.Content,
          status: 'done',
          url: global.Domain.resource + this.props.content.Content,
        }
      ]
  }
  componentDidMount(){
      //console.log(this.props.content)
      //设置表单初始值
      let data = this.props.content
      this.props.form.setFieldsValue({
        Title: data.Title,
        Synopsis: data.Synopsis,
        Time: data.Time,
        Recommend: data.Recommend + ''
      });
      
  }
  //表单提交
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        // const value = {
        //   ...values,
        //   'Time': values['Time'].format('YYYY-MM-DD HH:mm:ss'),
        // };
        console.log('Received values of form: ', values)
        let sendData = {}
        sendData.Title = values.Title;
        sendData.Synopsis = values.Synopsis
        sendData.Time = values.Time
        sendData.Recommend = values.Recommend
        sendData.Content = values.Content[0].response ? JSON.parse(values.Content[0].response.resultData)[0].Url : values.Content[0].name
        sendData.Picture = values.Picture[0].response ? JSON.parse(values.Picture[0].response.resultData)[0].Url : values.Picture[0].name
        console.log(sendData)
        //this.props.changeVisible({visible: false})
      }
    });
  };
  //上传在页面显示上文件
  normFile = e => {
    //console.log('Upload event:', e);
    if(e.fileList.length > 1){
      e.fileList.pop()
      message.error('只能上传一个文件')
    }
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
    //图片上传
    const picProps = {
      action: global.API.UploadManageService.UploadAll + '?type=1&oldPath='+ this.props.content.Picture,
      listType: 'picture',
      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            //console.log(info.file, info.fileList);
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    }
    //内容上传
    const fileProps = {
      name: 'file',
      multiple: false,
      action: global.API.UploadManageService.UploadAll + '?type=2&oldPath='+ this.props.content.Content,
      beforeUpload: (file, fileList) => {
        //console.log(fileList.length)
        if(fileList.length > 1){
          return false;
        }
      },
      onChange(info) {
        const { status, response } = info.file;
        if (status !== 'uploading') {
          //console.log(info.fileList)
        }
        if (status === 'done') {
            message.success(`${info.file.name} 上传成功.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} 上传失败.`);
        }
      },
    };

 
    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="标题">
          {getFieldDecorator('Title', {
            rules: [
              {
                required: true,
                message: '请输入标题!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="简介">
          {getFieldDecorator('Synopsis', {
            rules: [
              {
                required: true,
                message: '请输入简介!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        <Form.Item label="简介">
          {getFieldDecorator('Time', {
            rules: [
              {
                required: true,
                message: '请输入时间!',
              },
            ],
          })(<Input />)}
        </Form.Item>
        {/* <Form.Item label="时间">
          {getFieldDecorator('Time', {
              initialValue: moment(this.props.content.Time , 'YYYY-MM-DD HH:mm:ss'),
              rules: [{ type: 'object', required: true, message: '请选择时间!' }],
          })(
            <DatePicker format="YYYY-MM-DD HH:mm:ss" showTime />,
          )}
        </Form.Item> */}
        <Form.Item hasFeedback label="推荐" >
          {getFieldDecorator('Recommend', {
            rules: [{ required: true, message: '请选择是否推荐' }],
          })(
            <Select placeholder="请选择是否推荐">
              <Select.Option value="1">推荐</Select.Option>
              <Select.Option value="0">不推荐</Select.Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item extra="支持jpg/png/jpge" label="图片上传">
          {getFieldDecorator('Picture', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
            initialValue: this.state.picList
          })(
            <Upload {...picProps} >
              <Button>
                <Icon type="upload" /> 点击上传
              </Button>
            </Upload>,
          )}
        </Form.Item>

        <Form.Item label="内容上传">
          <div className="dropbox">
            {getFieldDecorator('Content', {
              valuePropName: 'fileList',
              getValueFromEvent: this.normFile,
              initialValue: this.state.fileList
            })(
              <Upload.Dragger {...fileProps}>
                <p className="ant-upload-drag-icon">
                  <Icon type="inbox" />
                </p>
                <p className="ant-upload-text">点击或拖拽文件到此处上传</p>
                <p className="ant-upload-hint">Support for a single or bulk upload.</p>
              </Upload.Dragger>,
            )}
          </div>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button htmlType="submit" type="primary">
            编辑
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const Submit = Form.create({ name: 'validate_other' })(SubmitForm);

//ReactDOM.render(<WrappedRegistrationForm />, mountNode);
export default Submit
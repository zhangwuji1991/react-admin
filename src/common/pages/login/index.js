import React from 'react';
import { Form, Input, Button, notification, Icon } from 'antd';
import createHistory from 'history/createHashHistory';


import './index.less'
import 'whatwg-fetch'
import qs    from 'qs';
const FormItem = Form.Item;
const history = createHistory();

class LoginPage extends React.Component {

     //es6 组件的状态state
    constructor(props) {
        super(props);
        this.state = {
            message:''
         }
   };
    //登录事件
    handleSubmit = (e) => {
        e.preventDefault();
        let n = this.props.form.getFieldsValue().username;
        let p = this.props.form.getFieldsValue().password;
        //登录模块
        let para = {
                    username: n,
                    password: p                 
                };
        fetch('http://localhost:8888/vue/login',{
              method: 'POST',  
              headers: {
                         'Content-Type': 'application/x-www-form-urlencoded'
                        },  
              body: qs.stringify(para)
        }).then((res) => { return res.json()}).then((data) => {
            console.log(data);
            if(data.code==0){
                console.log(data.userInfo)
                sessionStorage.setItem("user", JSON.stringify(data.userInfo)); 
                history.push('/index');
            }else{
                this.state.message = data.message;
                this.openNotificationWithIcon('info');
            }
        }).catch((e) => {
         console.log(e.message) 
        })
    }
    // 返回一个弹框对象，提示用户名和密码
    openNotificationWithIcon = (type) => {
        return notification[type]({
                 message: '错误提示',
                 description: this.state.message,
                 duration: 6,
                 icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
               })
    }
    // //渲染之前加载
    // componentDidMount() {
    //     // this.openNotificationWithIcon('info');
    //     // this.fetchFn();
    // }
    //渲染页面
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="loginpagewrap">
                <div className="box">
                    <p>走过你的时光</p>
                    <div className="loginWrap">
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: '请输入用户名' }],
                                })(
                                    <Input placeholder="Username" />
                                )}
                            </FormItem>
                            <FormItem>
                                {getFieldDecorator('password', {
                                    rules: [{ required: true, message: '请输入密码' }],
                                })(
                                    <Input type="password" placeholder="Password" />
                                )}
                            </FormItem>
                            <Button type="primary" htmlType="submit" className="loginBtn">Login</Button>
                        </Form>
                    </div>
                </div>
            </div>
        );
    }
}

//返回的就是一个包装过的组件
let Login = Form.create()(LoginPage);
export default Login;
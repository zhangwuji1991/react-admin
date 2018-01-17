import React from 'react'
import { Menu, Icon, Layout,Modal, Button } from 'antd'
import { Link } from 'react-router-dom'
import createHistory from 'history/createHashHistory';


// import * as screenfull from 'screenfull'
import './header.less'
const history = createHistory();
const SubMenu = Menu.SubMenu
const confirm = Modal.confirm
const { Header } = Layout

export default class Top extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
            // title: props.title 
        }
    }

    componentDidMount() {
        // this.getUser()
    }

    getUser = () => {
        confirm({
            title: '你确定退出?',
            content: '那好吧！',
            onOk() {
              sessionStorage.removeItem('user');  
              history.push('/login');
            },
            onCancel() {
              console.log('Cancel');
            },
          });
    }

    clear = (item) => {
        if (item.key === 'logOut') {
            this.props.clear()
        }
    }

    // screenFull = () => {
    //     if (screenfull.enabled) {
    //         screenfull.request();
    //     }
    // }
    render() {
        return (
            <Header style={{ background: '#fff'}}>
                <Icon
                    className="trigger"
                    type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.props.toggle}
                />
                <Menu mode="horizontal" className="logOut" onClick={this.clear}>
                    <SubMenu title={<span><Icon type="user" />{ this.props.title }</span>} >
                        <Menu.Item key="logOut" ><p onClick={this.getUser}>退出</p></Menu.Item>
                    </SubMenu>
                </Menu>
                {/* <Icon
                    className="screenFull"
                    type="arrows-alt"
                    onClick={this.screenFull}
                /> */}
            </Header>
        );
    }
}
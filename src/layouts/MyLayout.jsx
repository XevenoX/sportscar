import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Button, Dropdown, Avatar } from 'antd';
import { DatabaseOutlined, HomeOutlined, UserOutlined, DollarOutlined, CarryOutOutlined, ShoppingOutlined, EditOutlined, LogoutOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './MyLayout.css';
import { Route, Switch } from "react-router-dom";
import EmployeeManagement from "../pages/EmployeeManagement";
import FinancialManagement from "../pages/FinancialManagement";
import MaterialManagement from "../pages/MaterialManagement";
import OrderManagement from "../pages/OrderManagement";
import QuotationsManagement from "../pages/QuotationsManagement";
import ReceiveGoods from "../pages/ReceiveGoods";
import RequisitionManagement from "../pages/RequisitionManagement";
import SupplierManagement from "../pages/SupplierManagement";
import Home from "../pages/Home";
import logo from "../graphs/logo.png";

const { Header, Footer, Content } = Layout;

const user = {
    name: 'user name',
    avatar: 'https://profile-avatar.csdnimg.cn/default.jpg!1'
};

function getItem(label, key, icon, children, type) {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
}

class MyLayout extends Component {
    handleClick = (e) => {
        this.setState({
            current: e.key,
        });
        const path = e.key.toString();
        this.props.history.push({
            pathname: path,
        });
        console.log(e);
    };

    render() {
        const menu = (
            <Menu onClick={this.handleClick}>
                <Menu.Item key="/Home" icon={<HomeOutlined />}>
                    个人首页
                </Menu.Item>
                <Menu.Item key="/Home/personalmanagement" icon={<EditOutlined />}>
                    个人设置
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item
                    key="/"
                    danger
                    onClick={() => {
                        this.props.history.push("/");
                    }}
                    icon={<LogoutOutlined />}
                >
                    退出登录
                </Menu.Item>
            </Menu>
        );
        return (
            <Layout>
                <Header
                    className="ant-menu"
                    style={{
                        position: 'fixed',
                        zIndex: 1,
                        width: '100%',
                    }}
                >
                    <img src={logo} className="logo" />
                    <Menu
                        mode="horizontal"
                        onClick={this.handleClick}
                        defaultSelectedKeys={['/Home']}
                        items={[
                            getItem('首页', '/Home', <HomeOutlined />),
                            getItem('用户管理', 'sub2', <UserOutlined />, [
                                getItem('员工管理', '/Home/employeeManagement'),
                                getItem('供应商管理', '/Home/supplierManagement'),
                            ]),
                            getItem('物料管理', '/Home/materialManagement', <DatabaseOutlined />),
                            getItem('订单管理', 'sub4', <ShoppingOutlined />, [
                                getItem('报价请求管理', '/Home/requisitionManagement'),
                                getItem('比价单管理', '/Home/quotationsManagement'),
                                getItem('采购订单管理', '/Home/orderManagement'),
                            ]),
                            getItem('收货管理', '/Home/receiveGoods', <CarryOutOutlined />),
                            getItem('财务管理', '/Home/financialManagement', <DollarOutlined />),
                        ]}
                    />
                    <span style={{
                            margin:'0 0 0 1200px',
                        }}>
                    <Dropdown overlay={menu} placement="bottomCenter"
                        
                    >
                        <Button
                            type="text"
                            size="large"
                            icon={
                                <Avatar
                                    src={`http://friday.nat100.top${user.avatar}`}
                                    size="large"
                                />
                            }
                        >
                            &nbsp;&nbsp;{user.name}
                        </Button>
                    </Dropdown>
                    </span>
                </Header>
                <Content
                    className="site-layout"
                    style={{
                        padding: '0 50px',
                        marginTop: 64,
                    }}
                >
                    <Breadcrumb
                        style={{
                            margin: '16px 0',
                        }}
                    >
                    </Breadcrumb>
                    <div
                        className="site-layout-background"
                        style={{
                            padding: 24,
                            minHeight: 500,
                        }}
                    >
                        <Switch>
                            <Route
                                path="/Home/employeeManagement"
                                component={EmployeeManagement}
                            />
                            <Route
                                path="/Home/supplierManagement"
                                component={SupplierManagement}
                            />
                            <Route
                                path="/Home/materialManagement"
                                component={MaterialManagement}
                            />
                            <Route
                                path="/Home/requisitionManagement"
                                component={RequisitionManagement}
                            />
                            <Route
                                path="/Home/quotationsManagement"
                                component={QuotationsManagement}
                            />
                            <Route path="/Home/orderManagement"
                                component={OrderManagement}
                            />
                            <Route path="/Home/receiveGoods"
                                component={ReceiveGoods}
                            />
                            <Route
                                path="/Home/financialManagement"
                                component={FinancialManagement}
                            />
                            <Route path="/Home" component={Home} />
                        </Switch>
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    2019 级系统分析与设计课程设计 Copyright © 2022 MIS Group 3
                </Footer>
            </Layout>
        );
    }
}

export default MyLayout;
/*
 * 登录页面
 * @Author: IMingx
 */

import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "antd/lib/style/index.css";
import "./login.less";

export default function Login() {
    // 表单提交
    const handleSubmit = values => {
        // const { history } = this.props;
        console.log("Success:", values);
        localStorage.token = "login";
        // history.push("/dashboard");
    };
    return (
        <main className="login">
            <Form onFinish={handleSubmit} className="login-form">
                <Form.Item
                    name="loginName"
                    rules={[
                        {
                            required: true,
                            message: "请输入账号"
                        }
                    ]}
                >
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        size="large"
                        addonBefore="账号"
                        placeholder="请输入账号"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "请输入密码"
                        }
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        size="large"
                        type="password"
                        addonBefore="密码"
                        placeholder="请输入密码"
                    />
                </Form.Item>
                <Form.Item name="remember">
                    <article className="login-form-remember">
                        <Checkbox>Remember me</Checkbox>
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                    </article>
                </Form.Item>
                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="login-form-button login-btn"
                    >
                        Log in
                    </Button>
                </Form.Item>
                <Form.Item>
                    <article className="register">
                        Or&nbsp;<a href="">register now!</a>
                    </article>
                </Form.Item>
            </Form>
        </main>
    );
}

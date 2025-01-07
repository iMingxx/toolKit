import { List, NavBar, FloatingBubble } from "antd-mobile";
import React, { useState } from "react";
import { TextOutline, UploadOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const [visible, setVisible] = useState(false);
    const [userInfo, setUserInfo] = useState({});
    const [signInList, setSignInList] = useState([
        {
            id: "1",
            name: "1.4御龙湾滑雪",
            time: "2024-1-1"
        },
        {
            id: "2",
            name: "1.5御龙湾滑雪",
            time: "2024-1-1"
        },
        {
            id: "3",
            name: "1.6御龙湾滑雪",
            time: "2024-1-1"
        },
        {
            id: "4",
            name: "1.7御龙湾滑雪",
            time: "2024-1-1"
        },
        {
            id: "5",
            name: "1.8御龙湾滑雪",
            time: "2024-1-1"
        }
    ]);
    const navigate = useNavigate();

    // 跳转详情
    const onClick = (item: any) => {
        navigate(`/sign_in_details/${item.id}`);
    };
    // 返回
    const onBack = () => {
        navigate(-1);
    };

    // 文件调整
    const handleFileChange = e => {
        console.log(e, "e");
    };

    // 触发文件选择的函数
    const triggerFileSelect = () => {
        document.getElementById("file-input")?.click();
    };
    return (
        <>
            <NavBar onBack={onBack}>文件列表</NavBar>
            {/* 隐藏的文件输入框 */}
            <input
                id="file-input"
                type="file"
                accept=".xlsx, .xls"
                onChange={handleFileChange}
                style={{ display: "none" }} // 隐藏文件输入框
            />

            {/* 漂浮按钮，点击后触发文件选择 */}
            <FloatingBubble
                style={{
                    "--initial-position-bottom": "24px",
                    "--initial-position-right": "24px",
                    "--edge-distance": "24px"
                }}
                onClick={triggerFileSelect}
            >
                <UploadOutline />
            </FloatingBubble>
            <List>
                {signInList.map(item => (
                    <List.Item
                        key={item.id}
                        prefix={<TextOutline />}
                        onClick={() => onClick(item)}
                        description={item.time}
                    >
                        {item.name}
                    </List.Item>
                ))}
            </List>
        </>
    );
}

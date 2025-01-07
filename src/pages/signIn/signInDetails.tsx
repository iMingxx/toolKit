import { List, Button, NavBar, ActionSheet, Toast } from "antd-mobile";
import React, { useState } from "react";
import { FlagOutline } from "antd-mobile-icons";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    const [visible, setVisible] = useState(false);
    const [userInfo, setUserInfo] = useState({ id: "" });
    const navigate = useNavigate();
    const [users, setUsers] = useState([
        {
            id: "1",
            name: "酱酱",
            description: "领队",
            tel: 15063210000,
            status: 0
        },
        {
            id: "2",
            name: "小明",
            description: "领队",
            tel: 15063210000,
            status: 0
        },
        {
            id: "3",
            name: "队员",
            description: "",
            tel: 15063210000,
            status: 0
        },
        {
            id: "4",
            name: "队员",
            description: "",
            tel: 15063210000,
            status: 0
        },
        {
            id: "5",
            name: "队员",
            description: "",
            tel: 15063210000,
            status: 0
        },
        {
            id: "6",
            name: "队员",
            description: "",
            tel: 15063210000,
            status: 0
        },
        {
            id: "7",
            name: "队员",
            description: "",
            tel: 15063210000,
            status: 0
        },
        {
            id: "8",
            name: "队员",
            description: "",
            tel: 15063210000,
            status: 0
        },
        {
            id: "9",
            name: "队员",
            description: "",
            tel: 15063210000,
            status: 0
        },
        {
            id: "10",
            name: "队员",
            description: "",
            tel: 15063210000,
            status: 0
        },
        {
            id: "11",
            name: "队员",
            description: "",
            tel: 15063210000,
            status: 0
        },
        {
            id: "12",
            name: "队员",
            description: "",
            tel: 15063210000,
            status: 0
        },
        {
            id: "13",
            name: "队员",
            description: "",
            tel: 15063210000,
            status: 0
        }
    ]);

    // 打电话
    const onMakePhoneCall = user => {
        window.location.href = `tel:${user.tel}`;
    };

    // 打开操作面板
    const openActionSheet = user => {
        setVisible(true);
        setUserInfo(user);
    };

    // 操作函数
    const onAction = action => {
        console.log(action, "action");
        if (action.key === "yes") {
            const updatedData = users?.map(item => {
                if (item.id === userInfo?.id) {
                    return { ...item, status: 1 };
                }
                return item;
            });
            setUsers(updatedData);
        } else {
            const updatedData = users?.map(item => {
                if (item.id === userInfo.id) {
                    return { ...item, status: 2 };
                }
                return item;
            });
            setUsers(updatedData);
        }
        Toast.show(`操作成功`);
        setVisible(false);
        setUserInfo({ id: "" });
    };

    const actions = [
        { text: "已签到", key: "yes" },
        { text: "不去了", key: "no", danger: true }
    ];

    const getColor = ["none", "#67ae5c", "red"];
    const onBack = () => {
        navigate(-1);
    };
    return (
        <>
            <NavBar onBack={onBack}>队员列表</NavBar>
            <ActionSheet
                visible={visible}
                actions={actions}
                onClose={() => setVisible(false)}
                onAction={onAction}
            />
            <List>
                {users.map(user => (
                    <List.Item
                        key={user.name}
                        style={{ backgroundColor: getColor[user.status] }}
                        prefix={
                            user.description === "领队" ? (
                                <FlagOutline style={{ color: "red", width: 30 }} />
                            ) : (
                                <div style={{ width: 30, textAlign: "center" }}>{user.id}</div>
                            )
                        }
                        description={user.description}
                        extra={
                            <Button
                                color="primary"
                                size="small"
                                onClick={() => openActionSheet(user)}
                            >
                                操作
                            </Button>
                        }
                    >
                        {user.name}
                        <Button
                            color="primary"
                            fill="none"
                            size="small"
                            onClick={() => onMakePhoneCall(user)}
                        >
                            {user.tel}
                        </Button>
                    </List.Item>
                ))}
            </List>
        </>
    );
}

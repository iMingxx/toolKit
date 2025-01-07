import React from "react";
import type { FC } from "react";
import { Card, TabBar } from "antd-mobile";
import { Route, Routes, useNavigate, useLocation, MemoryRouter as Router } from "react-router-dom";
import { AppOutline, MessageOutline, UnorderedListOutline, UserOutline } from "antd-mobile-icons";
import styles from "./index.less";

export default function Home() {
    const navigate = useNavigate();
    const setRouteActive = (value: string) => {
        navigate(value);
    };
    return (
        <div className={styles.app}>
            <div className={styles.top}>
                <Card title="签到表" onClick={() => setRouteActive("/sign_in")} />
            </div>
        </div>
    );
}

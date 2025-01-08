import React from "react";
import { Card } from "antd-mobile";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.less";

export default function Home() {
    const navigate = useNavigate();
    const setRouteActive = (value: string) => {
        navigate(value);
    };
    return (
        <div className={styles.home}>
            <Card className={styles.card} onClick={() => setRouteActive("/sign_in")}>
                <div className={styles.content}>签到表</div>
            </Card>
        </div>
    );
}

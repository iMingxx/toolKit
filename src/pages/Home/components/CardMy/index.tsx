import React from "react";
import "./index.less";

export default function MyCard() {
    return (
        <div className="my-card">
            <div className="card_two">
                <div className="left_box">
                    <div className="left">南京</div>
                    <div className="center">
                        <p>包裹量：10000</p>
                        <div className="arrow_box">
                            <span className="line1"></span>
                            <span className="arrow1"></span>
                        </div>
                        <p>里程：1000km</p>
                    </div>
                    <div className="right">西安</div>
                </div>
                <div className="right_box">
                    <div className="right_item">
                        <div className="right_item1">CN时效</div>
                        <div className="right_item2">3D</div>
                    </div>
                    <div className="right_item">
                        <div className="right_item1">CN时效</div>
                        <div className="right_item2" style={{ color: "red" }}>
                            3D
                        </div>
                    </div>
                    <div className="right_item">
                        <div className="right_item1">CN时效</div>
                        <div className="right_item2">3D</div>
                    </div>
                    <div className="right_item">
                        <div className="right_item1">CN时效</div>
                        <div className="right_item2">3D</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

import React from "react";
import { Link } from "react-router-dom";
import Carditem from "../Component/Carditem";

export default function About(prop) {
    return (
        <div className="container navbar-expand-lg my-4">
            <div>
                <h1>About Me</h1>
            </div>

            <div className="row my-4">
                <div className="col-sm">
                    <Carditem url="/images/profile.jpg" title='Mana Yupanan นายมานะ ยุปานันท์' discription="อายุ 22 ปี สาขาคอมพิวเตอร์ธุรกิจ คณะบริหารธุรกิจ เศรษฐศาสตร์ และการสื่อสาร มหาวิทยาลัยนเรศวร" />
                </div>
                <div className="col-sm">
                    <Carditem url="/images/about.jpg" title="Former president of the student club at Business Economics and Communication. In the year 2019" discription="Business Economics and Communication " />
                </div>
            </div>
            
        </div>
    )
}



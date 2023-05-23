import React from 'react'
import "./Banner.css"

let bannerData = {
    img: "https://di-uploads-pod4.dealerinspire.com/rawhideharleydavidson/uploads/2015/12/2015-Iron-883-TP.png",
    title: "IRON 883™",
    desc: "สีดำแบล็คเอาท์ในสไตล์ Stripped-down กับรูปทรงระดับตำนาน"
}

function Banner() {
    return (
        <div className="banner-bg">
            <div className="container">
                <div className="banner-con">
                    <img src="https://di-uploads-pod4.dealerinspire.com/rawhideharleydavidson/uploads/2015/12/2015-Iron-883-TP.png" alt="" />
                    <div className="banner-text">
                        <h1>{bannerData.title}</h1>
                        <p>{bannerData.desc}</p>
                        <a href="#" className="banner-btn">เรียนรู้เพิ่มเติม</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
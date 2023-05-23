import React from 'react'
import { FaMotorcycle } from "react-icons/fa"
import { FiShoppingBag } from "react-icons/fi"
import "./Content.css"

function Content() {
    return (
        <div className="container-bg" id="content">
            <div className="content-main">
                <div className="content-main-l">
                    <a href="#">
                        <h2><div className="icon"><FaMotorcycle /></div>Motorcycle</h2>
                    </a>
                </div>
                <div className="content-main-r">
                    <a href="#">
                        <h2><div className="icon"><FiShoppingBag /></div>Shopping Tools</h2>
                    </a>
                </div>
            </div>
            <div className="container">
                <section className="content-con">
                    <div className="content-l">
                        <img src="https://d2bywgumb0o70j.cloudfront.net/2019/10/02/5998d3b708990817f6c8eebb5e40bef7_a12b398fd9073393.png" alt="" />
                    </div>
                    <div className="content-r">
                        <h2>IRON 1200™</h2>
                        <p>รูปทรงแบบช้อปเปอร์ในสีแบล็คเอาท์ มาพร้อมพลังที่เหนือกว่าขีดจำกัดของเมือง</p>
                        <a href="#" className="price-btn">ซื้อเลย ฿579,000</a>
                    </div>
                </section>
                <section className="content-con">
                    <div className="content-l">
                        <h2>Nightster™</h2>
                        <p>Harley-Davidson® Nightster™ คือบทต่อไปของมรดกของ Harley-Davidson® Sportster® ซึ่งเป็นการก้าวกระโดดในด้านประสิทธิภาพและการออกแบบที่สร้างขึ้นจากรากฐานเมื่อ 65 ปีที่แล้ว เครื่องมือในการแสดงออก Nightster™ นำเสนอเครื่องยนต์ V-Twin ระบายความร้อนด้วยของเหลว Revolution® Max 975T ใหม่ล่าสุดที่ปรับแต่งให้มีแรงบิดมหาศาลที่ RPM ต่ำ ให้อัตราเร่งที่แข็งแกร่งตั้งแต่ออกตัวด้วยกำลังที่แข็งแกร่งจนถึงช่วงรอบกลาง เรานำความสปอร์ตกลับคืนสู่รุ่น Sportster® ของเรา</p>
                        <a href="#" className="price-btn">ซื้อเลย ฿658,000</a>
                    </div>
                    <div className="content-r">
                        <img src="https://cdn.room58.com/2022/09/06/99795cdc853ca00803a6bafe57b46cdd_0876fd975539f3ef.png" alt="" />
                    </div>
                </section>
                <section className="content-con">
                    <div className="content-l">
                        <img src="https://d2bywgumb0o70j.cloudfront.net/2022/02/12/839edddec485cd9732b2fbbbfe9a1eef_ce2a418afee35157.png" alt="" />
                    </div>
                    <div className="content-r">
                        <h2>Pan America™ 1250</h2>
                        <p>มอเตอร์ไซค์ Pan America™ 1250 Special เป็นเครื่องมืออเนกประสงค์สองล้อชั้นนำของเราที่สร้างขึ้นเพื่อให้ทนทาน ออกแบบมาเพื่อการสำรวจ และออกแบบมาเพื่อการผจญภัย</p>
                        <a href="#" className="price-btn">ซื้อเลย ฿1,120,000</a>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Content
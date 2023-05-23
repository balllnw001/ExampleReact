import React from 'react'
import "./CallToAction.css"

function CallToAction() {
    return (
        <div className="cta-bg">
            <div className="overlay"></div>
            <div className="container">
                <div className="cta-text">
                    <h2>ประวัติความเป็นมา ฮาร์เล่ย์ เดวิดสัน Harley Davidson มอเตอร์ไซค์อเมริกันคลาสสิก</h2>
                    <p>ฮาร์เล่ย์ เดวิดสัน (Harley Davidson) เป็นชื่อของผู้ผลิตมอเตอร์ไซค์ชื่อดังที่หลายคนคุ้นเคยดี ด้วยรูปลักษณ์ของตัวรถอันโดดเด่น สมรรถนะแรงได้ใจ และเสียงของเครื่องยนต์อันเป็นเอกลักษณ์ จึงทำให้ได้รับความนิยมอย่างยาวนานนับร้อยปี แน่นอนว่าหนทางการประสบความสำเร็จของฮาร์เล่ย์ก็ไม่ได้โรยด้วยกลีบกุหลาบ พวกเขาเกือบล้มละลายอยู่หลายครั้ง แต่ก็สามารถกลับมาและได้รับความนิยมอยู่จนปัจจุบัน</p>
                    <a className="cta-btn" href="#">ดูเพิ่มเติม</a>
                </div>
            </div>
        </div>
    )
}

export default CallToAction
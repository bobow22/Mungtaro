import React from 'react'
import { Button } from 'antd';
import '../Component/Cash_invoice.css';



export default function Cash_invoice() {







  return (<>
    <div className="Header">
        <img src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />
        <h1>สร้างใบเสร็จรับเงิน</h1>

        <Button type="primary" htmlType="submit">ทดลองใช้งานฟรี</Button>
        <Button type="primary" htmlType="submit">ลงชื่อเข้าใช้งาน</Button>
    </div>


    <div className="Content">
            <div>
                <Button type="primary" htmlType="submit">ส่ง</Button>
                <Button type="primary" htmlType="submit">บันทึก</Button>
                <Button type="primary" htmlType="submit">รับ PDF</Button>
                <Button type="primary" htmlType="submit">พิมพ์</Button>

                <div className="PDF">
                    PDF
                </div>
            </div>
        
            <div>
                <h3>ใส่ข้อมูลใบเสร็จรับเงิน</h3>
                <h3>เพิ่มที่อยู่ลูกค้าของคุณ</h3>
                <h3>เพิ่มข้อมูลสินค้า</h3>
                <h3>พิมพ์ใบเสร็จรับเงิน</h3>
            </div>
    </div>

    <div className='Footer'>
        <div className='Sub_Footer'>
            <h2>ทดลองใช้โปรเเกรมบัญชี FlowAccount</h2>
            <Button type="primary" htmlType="submit">สมัครใช้งาน</Button>
            <Button type="primary" htmlType="submit">ติดต่อเรา</Button>
        </div>
    </div>
    
    </>)
}

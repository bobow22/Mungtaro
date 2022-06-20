import React from 'react'
import { Button } from 'antd';
import '../Component/Cash_invoice.css';
import { SiVerizon } from "react-icons/si";


export default function Cash_invoice() {


    




  return (<>
    <div className="Header">
        <img src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />
        <h1>สร้างใบเสร็จรับเงิน</h1>
        
        <div className="Btn_Header">
            <Button type="primary" htmlType="submit" className='button-65'>ทดลองใช้งานฟรี</Button>
            <Button type="primary" htmlType="submit" className='button-65'>ลงชื่อเข้าใช้งาน</Button>
        </div>
    </div>


    <div className="Content">
            <div className="Btn_and_PDF">

                <div className='Btn_Content'>
                    <Button type="primary" htmlType="submit"  className='button-65'>ส่ง</Button>
                    <Button type="primary" htmlType="submit"  className='button-65'>บันทึก</Button>
                    <Button type="primary" htmlType="submit"  className='button-65'>รับ PDF</Button>
                    <Button type="primary" htmlType="submit"  className='button-65'>พิมพ์</Button>
                </div>

                <div className="PDF">
                    <img src='https://edit.org/images/cat/invoices-big-2019042509.jpg'/>
                </div>
            </div>

            
            <div className='Text_explain_procedure'>
                <h2>ใส่ข้อมูลใบเสร็จรับเงิน</h2>
                <p><SiVerizon /><span>เพิ่มที่อยู่ลูกค้าของคุณ</span></p>
                <p><SiVerizon /><span>เพิ่มหมายเลขใบเสร็จรับเงิน</span></p>
                <p><SiVerizon /><span>เพิ่มข้อมูลสินค้า</span></p>
                <p><SiVerizon /><span>พิมพ์ใบเสร็จรับเงิน</span></p>
            </div>
    </div>

    <div className='Footer'>
        <div className='Sub_Footer'>
            <h2>ทดลองใช้โปรเเกรมบัญชี FlowAccount</h2>

            <div className='Btn_Footer'>
                <Button type="primary" htmlType="submit" className='button-65'>สมัครใช้งาน</Button>
                <Button type="primary" htmlType="submit" className='button-65'>ติดต่อเรา</Button>
            </div>
        </div>
    </div>
    
    </>)
}

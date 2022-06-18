import { Button, Form, Input } from 'antd';
import '../index.css';
import axios from 'axios';


export default function Register() {
    
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log(values)
       }
       
       
       return (<>

            <div className="container">



                <div className="Form_Register">

                    
                    <div className="image_header">
                        <img src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />
                        <h2>สมัครใช้งานฟรี!</h2>
                        <h3>ใช้งานได้ครบทุกฟังก์ชั่น ไม่ต้องใช้บัตรเครดิต</h3>
                    </div>

                
                    <div className='Form'>
                    <Form form={form} onFinish ={onFinish} id='resetForm'>
                        <Form.Item
                                name="email"
                                label="อีเมล*"
                                labelCol ={{ span: 8 }}
                                wrapperCol ={{ span: 16 }}
                                rules={[
                                {
                                required: true,
                                },
                                ] }
                                >
                                <Input className='form__input' placeholder="name@example.com"/>
                        </Form.Item >

                        <Form.Item
                                    name="password"
                                    label="รหัสผ่าน*"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                    rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                            <Input className='form__input' placeholder="กรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร"/>
                        </Form.Item>

                        <p>รหัสผ่านควรมีทั้งตัวอักษร ตัวเลข และสัญลักษณ์ผสมกัน</p>

                        <Form.Item
                                name="Phone_number"
                                label="เบอร์ของผู้สมัครใช้งาน*"
                                labelCol ={{ span: 8 }}
                                wrapperCol ={{ span: 16 }}
                                rules={[
                                {
                                required: true,
                                },
                                ] }
                                >
                                <Input className='form__input' placeholder="09XXXXXXXX"/>
                        </Form.Item >
                        

                        <div className='form_text'>
                            <p>ในการสมัครใช้งาน ฉันได้ยอมรับ</p>
                            <p><span>ประกาศความเป็นส่วนตัวสําหรับลูกค้าและผู้รับบริการ</span> และ <span>เงื่อนไขการใช้บริการ</span></p>
                        </div>
                        

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit" className="button-37">
                                ทดลองใช้งานฟรี
                            </Button>

                        </Form.Item>

                        <div className="form_text"> 
                            <p>มีบัญชีกับเราแล้ว? <span>ล็อกอินเข้าสู่ระบบ</span></p>
                        </div>
                        
                        <hr/>

                        <div className="form_text">
                            <p>หรือสมัครโดยใช้บัญชีอื่นๆ</p>
                        </div>    
                        

                        <div id="myDiv" class="animate-bottom">
                            <div id="Loginbuttons">
                                <button class="button Facebook">
                                <span>Continue with Facebook</span>
                                <i class="fab fa-facebook-square"></i>
                                </button>

                                <button class="button Facebook">
                                <span>Continue with Facebook</span>
                                <i class="fab fa-facebook-square"></i>
                                </button>
                            </div>

                            
                        </div>

                    </Form>
                    </div>
            
                    </div>
            </div>
            </>
           );
       }
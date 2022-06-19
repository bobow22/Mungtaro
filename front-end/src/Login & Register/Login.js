import { Button, Form, Input } from 'antd';
import '../Login & Register/Login.css';
// import axios from 'axios';


export default function Login() {
    
    const [form] = Form.useForm();

    //-----------onFinish---------------
    const onFinish = async (values) => {
        console.log(values)
       }
       
       
       return (<>

                {/* --------------------Form Login----------------- */}
                <div className="Form_Login">

                        <div className="image_header">
                            <img src="https://flowaccount.com/blog/wp-content/uploads/2017/01/e27-flowaccount-logo.png" />
                            <h2>ล๊อกอินเข้าสู่ระบบ</h2>
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
                                    style={{fontSize: '15px'}}
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
                                    style={{fontSize: '15px'}}
                                >
                                <Input className='form__input' placeholder="กรอกรหัสผ่านอย่างน้อย 8 ตัวอักษร"/>
                            </Form.Item>


                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit" className="button-37" style={{marginTop: '30px'}}>
                                    เข้าสู่ระบบ
                                </Button>

                            </Form.Item>

                            <div className="form_text" style={{marginBottom: '25px'}}> 
                                <p>ยังไม่มีบัญชีกับเรา? <span>สมัครใช้งานฟรี</span></p>
                            </div>
                            
                                    <hr/>

                            <div className="form_text" style={{marginTop: '25px'}}>
                                <p>หรือเข้าสู่ระบบโดยล็อกอินผ่าน</p>
                            </div>    

                            <div class="animate-bottom">
                                <button class="button Facebook">
                                    <span>Continue with Facebook</span>
                                    <i class="fab fa-facebook-square"></i>
                                </button> 
                                
                                <button class="button Facebook">
                                    <span>Continue with Google</span>
                                    <i class="fa-brands fa-facebook-f"></i>
                                </button>
                            </div>
                        </Form>
                    </div>
                </div>
                
                <div className='FlowAccount_Co'>
                    <p>2014-2022 © FlowAccount Co., Ltd. All Right Reserved <span>Terms of Service</span><span>Privacy Policy</span></p>
                </div>
            </>
        );
    }
import './index.css';
import { Button, Form, Input, Typography, Row, Col } from 'antd';

const { Title } = Typography;

const Contact = () => {
    return (
        <section id="contact" className="bg-gray-200 py-20">
          <div className="container mx-auto px-6">
            <Title level={2} className="text-3xl font-bold mb-8 text-center">Contact Us</Title>
            <Form layout="vertical">
              <Row gutter={16}>
                <Col span={24} md={12}>
                  <Form.Item label="Name">
                    <Input placeholder="Your Name" />
                  </Form.Item>
                </Col>
                <Col span={24} md={12}>
                  <Form.Item label="Email">
                    <Input type="email" placeholder="Your Email" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Message">
                <Input.TextArea rows={4} placeholder="Your Message" />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Send</Button>
              </Form.Item>
            </Form>
          </div>
        </section>
    );
};

export default Contact;

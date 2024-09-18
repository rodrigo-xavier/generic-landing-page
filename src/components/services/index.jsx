import './index.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Card, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const Services = () => {
    const { ref: servicesRef, inView: servicesInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const services = [
        'Web Development',
        'Digital Marketing',
        'SEO Services',
        'Cybersecurity',
        'AI Graphic Design'
      ];

    const animations = {
        enterLeft: {
          initial: { opacity: 0, x: -100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -100 }
        },
        enterRight: {
          initial: { opacity: 0, x: 100 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: 100 }
        },
        enterTop: {
          initial: { opacity: 0, y: -100 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -100 }
        },
        enterBottom: {
          initial: { opacity: 0, y: 100 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: 100 }
        },
        enterCenter: {
          initial: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.9 }
        }
      };

    return (
        <section id="services" className="bg-gray-200 py-20">
          <div className="container mx-auto px-6">
            <Title level={2} className="text-3xl font-bold mb-8 text-center">Our Services</Title>
            <Row gutter={16}>
              {services.map((service, index) => (
                <Col span={24} md={12} lg={8} key={service}>
                  <motion.div
                    ref={servicesRef}
                    initial={animations.enterLeft.initial}
                    animate={servicesInView ? animations.enterLeft.animate : animations.enterLeft.exit}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card title={service} className="bg-white shadow-md">
                      <Text className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        </section>
    );
};

export default Services;

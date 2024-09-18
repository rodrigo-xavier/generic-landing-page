import './index.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Card, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const WhyChooseUs = () => {
    const { ref: reasonsRef, inView: reasonsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const reasons = [
        'We use the latest technologies',
        'We provide unique solutions',
        'We implement powerful strategies'
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
        <section id="why-choose-us" className="bg-gray-200 py-20">
          <div className="container mx-auto px-6">
            <Title level={2} className="text-3xl font-bold mb-8 text-center">Why Choose Our Services</Title>
            <Row gutter={16}>
              {reasons.map((reason, index) => (
                <Col span={24} md={8} key={index}>
                  <motion.div
                    ref={reasonsRef}
                    initial={animations.enterBottom.initial}
                    animate={reasonsInView ? animations.enterBottom.animate : animations.enterBottom.exit}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-white shadow-md">
                      <Text className="text-gray-600">{reason}</Text>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        </section>
    );
};

export default WhyChooseUs;

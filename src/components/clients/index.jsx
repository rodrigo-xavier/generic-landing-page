import './index.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const Clients = () => {
    const { ref: clientsRef, inView: clientsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const clientStats = [
        { label: 'Clients', value: 50 },
        { label: 'Completed Projects', value: 100 },
        { label: 'Satisfied Clients', value: 48 }
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
        <section id="clients" className="py-20">
          <div className="container mx-auto px-6">
            <Title level={2} className="text-3xl font-bold mb-8 text-center">Our Clients</Title>
            <Row gutter={16} justify="center">
              {clientStats.map((stat, index) => (
                <Col span={24} md={8} key={stat.label}>
                  <motion.div
                    ref={clientsRef}
                    initial={animations.enterCenter.initial}
                    animate={clientsInView ? animations.enterCenter.animate : animations.enterCenter.exit}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <Text className="text-4xl font-bold text-primary">{stat.value}+</Text>
                    <Text className="text-xl text-gray-700">{stat.label}</Text>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        </section>
    );
};

export default Clients;

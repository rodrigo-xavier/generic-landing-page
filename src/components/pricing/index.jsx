import './index.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Card, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const Pricing = () => {
    const { ref: pricingRef, inView: pricingInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const pricingPlans = [
        { name: 'Basic', price: '$499', features: ['1 Page Website', 'SEO Optimization', '1 Month Support'] },
        { name: 'Standard', price: '$999', features: ['5 Page Website', 'SEO Optimization', 'Digital Marketing', '3 Months Support'] },
        { name: 'Premium', price: '$1999', features: ['10 Page Website', 'SEO Optimization', 'Digital Marketing', 'Cybersecurity Setup', '6 Months Support'] },
        { name: 'Enterprise', price: 'Custom', features: ['Custom Website', 'Full Suite of Services', 'Dedicated Support Team', '1 Year Support'] }
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
        <section id="pricing" className="bg-gray-200 py-20">
          <div className="container mx-auto px-6">
            <Title level={2} className="text-3xl font-bold mb-8 text-center">Pricing Plans</Title>
            <Row gutter={16}>
              {pricingPlans.map((plan, index) => (
                <Col span={24} md={12} lg={6} key={plan.name}>
                  <motion.div
                    ref={pricingRef}
                    initial={animations.enterTop.initial}
                    animate={pricingInView ? animations.enterTop.animate : animations.enterTop.exit}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card title={plan.name} className="bg-white shadow-md">
                      <Text className="text-2xl font-bold">{plan.price}</Text>
                      <ul>
                        {plan.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        </section>
    );
};

export default Pricing;

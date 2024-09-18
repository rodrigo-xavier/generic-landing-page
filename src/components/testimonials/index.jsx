import './index.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Card, Typography, Row, Col } from 'antd';

const { Title, Text } = Typography;

const Testimonials = () => {
    const { ref: testimonialsRef, inView: testimonialsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const testimonials = [
        { name: 'John Doe', opinion: 'Exceptional service and stunning designs!' },
        { name: 'Jane Smith', opinion: 'They transformed our online presence completely.' },
        { name: 'Mike Johnson', opinion: 'Professional, responsive, and innovative team.' },
        { name: 'Sarah Williams', opinion: 'Our website traffic increased by 200% after their SEO work.' },
        { name: 'David Brown', opinion: 'The AI-generated graphics were beyond our expectations.' }
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
        <section id="testimonials" className="py-20">
          <div className="container mx-auto px-6">
            <Title level={2} className="text-3xl font-bold mb-8 text-center">What Our Clients Say</Title>
            <Row gutter={16}>
              {testimonials.map((testimonial, index) => (
                <Col span={24} md={12} lg={8} key={testimonial.name}>
                  <motion.div
                    ref={testimonialsRef}
                    initial={animations.enterBottom.initial}
                    animate={testimonialsInView ? animations.enterBottom.animate : animations.enterBottom.exit}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card title={testimonial.name} className="bg-white shadow-md">
                      <Text className="text-gray-600">"{testimonial.opinion}"</Text>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </div>
        </section>

    );
};

export default Testimonials;

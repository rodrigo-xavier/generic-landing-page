import './index.css';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Typography} from 'antd';

const { Title, Text } = Typography;

const Home = () => {
    const { ref: homeRef, inView: homeInView } = useInView({ triggerOnce: true, threshold: 0.1 });
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
        <section id="home" className="bg-primary text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              ref={homeRef}
              initial={animations.enterTop.initial}
              animate={homeInView ? animations.enterTop.animate : animations.enterTop.exit}
              transition={{ duration: 0.5 }}
            >
              <Title level={1} className="text-4xl font-bold mb-4">
                Welcome to Our Freelance Web Development Services
              </Title>
              <Text className="text-xl">
                Transforming ideas into powerful web solutions
              </Text>
            </motion.div>
          </div>
        </section>
    );
};

export default Home;

import { Layout, Typography } from 'antd';
import AnimatedBackground from './components/background';
import LandingPageMenu from './components/menu';
import Home from './components/home';
import Services from './components/services';
import Clients from './components/clients';
import WhyChooseUs from './components/whychoose';
import Portfolio from './components/portfolio';
import Pricing from './components/pricing';
import Testimonials from './components/testimonials';
import Contact from './components/contact';
import './App.css';
import 'antd/dist/reset.css';

const { Content, Footer } = Layout;
const { Text } = Typography;

const App = () => {
  return (
    <Layout className="bg-gray-100 min-h-screen">
      <AnimatedBackground />
      <LandingPageMenu />

      <Content className="pt-16">
        <Home />
        <Services />
        <Clients />
        <WhyChooseUs />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Contact />
      </Content>

      <Footer className="bg-primary text-white text-center py-4">
        <Text>© 2024 Your Company. All Rights Reserved.</Text>
      </Footer>
    </Layout>
  );
};

export default App;

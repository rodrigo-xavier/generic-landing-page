import { Layout, Menu } from 'antd';
import './index.css';

const { Header } = Layout;

const LandingPageMenu = () => {

    return (
        <Header className="bg-primary shadow-md fixed top-0 left-0 right-0 z-10">
        <Menu mode="horizontal" className="container mx-auto px-6">
          {['home', 'about', 'services', 'clients', 'why-choose-us', 'portfolio', 'pricing', 'testimonials', 'contact'].map((item) => (
            <Menu.Item key={item} >
              <a href={`#${item}`} className="text-white hover:text-light">
                {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
              </a>
            </Menu.Item>
          ))}
        </Menu>
      </Header>
    );
};

export default LandingPageMenu;

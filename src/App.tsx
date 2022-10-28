import React from 'react';
// import logo from './logo.svg';
// import 'antd/dist/antd.css';
import { Layout } from 'antd';
import Histogram from './components/Histogram'
import MathEquation from './components/MathEquation';
import Charts from './components/Charts';
import Regression from './components/Regression';
import MathJax from './components/MathJax';

const { Header, Footer, Sider, Content } = Layout;
function App() {
  return (
    <div className="App">
      <Layout className='App-layout'>
        <Sider style={{background: '#fff',width: '600px'}}>
          <MathEquation />
        </Sider>
        <Layout>
          <Header style={{background: '#f0f2f5'}}><Regression /></Header>
          <Content><Charts /></Content>
          <Footer><MathJax/></Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;

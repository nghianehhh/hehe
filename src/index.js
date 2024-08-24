// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import "./index.css";
// // import App from "./App";
// // import "./assets/css/index.css";
// // import './assets/css/style.css';

// const { Header, Content, Sider } = Layout;

// const App = () => (
//     <Layout>
//         <Header className='bg-white shadow-md'>
//             <div className='text-3xl font-bold'>My Shop</div>
//         </Header>
//         <Layout>
//             <Sider width={200} className='site-layout-background'>
//                 <Menu mode='inline' defaultSelectedKeys={["1"]} style={{ height: "100%", borderRight: 0 }}>
//                     <Menu.Item key='1'>Thời Trang Nam</Menu.Item>
//                     <Menu.Item key='2'>Điện Thoại & Phụ Kiện</Menu.Item>
//                     <Menu.Item key='3'>Thiết Bị Điện Tử</Menu.Item>
//                 </Menu>
//             </Sider>
//             <Layout style={{ padding: "0 24px 24px" }}>
//                 <Content
//                     className='site-layout-background'
//                     style={{
//                         padding: 24,
//                         margin: 0,
//                         minHeight: 280,
//                     }}
//                 >
//                     <div className='grid grid-cols-3 gap-4'>
//                         <Card hoverable cover={<img alt='example' src='https://via.placeholder.com/150' />}>
//                             <Card.Meta title='Product 1' description='This is the description' />
//                             <div className='mt-2 text-lg font-bold'>$10.00</div>
//                             <Button type='primary' className='mt-2'>
//                                 Add to Cart
//                             </Button>
//                         </Card>
//                         <Card hoverable cover={<img alt='example' src='https://via.placeholder.com/150' />}>
//                             <Card.Meta title='Product 2' description='This is the description' />
//                             <div className='mt-2 text-lg font-bold'>$20.00</div>
//                             <Button type='primary' className='mt-2'>
//                                 Add to Cart
//                             </Button>
//                         </Card>
//                         <Card hoverable cover={<img alt='example' src='https://via.placeholder.com/150' />}>
//                             <Card.Meta title='Product 3' description='This is the description' />
//                             <div className='mt-2 text-lg font-bold'>$30.00</div>
//                             <Button type='primary' className='mt-2'>
//                                 Add to Cart
//                             </Button>
//                         </Card>
//                     </div>
//                 </Content>
//             </Layout>
//         </Layout>
//     </Layout>
// );


import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
// import App from "./App";
// import "./assets/css/index.css";
// import './assets/css/style.css';

ReactDOM.render(
  <>
    {/* <meta name="viewport" content="width=device-width,initial-scale=1" /> */}
    <App />
  </>,
  document.getElementById("root")
);

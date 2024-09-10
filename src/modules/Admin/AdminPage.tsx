import React, { useEffect, useState } from "react";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
// import { MainLayout } from "components";
import {
  Button,
  Card,
  Col,
  Divider,
  Image,
  Row,
  Spin,
  Statistic,
  Typography,
} from "antd";
import MainLayout from "../../components/MainLayout";
import {
  CheckCircleOutlined,
  LikeOutlined,
  MenuOutlined,
  MessageOutlined,
  StarOutlined,
  TagOutlined,
  UserAddOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import AdminLayout from "../../components/adminComponents/AdminLayout";

const AdminPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <AdminLayout>
      admin
      {/* <div className="min-h-screen w-full">
        <div className="flex justify-center bg-slate-100 p-5">
          <div className="flex flex-row p-4 w-3/4 h-full bg-white">
            <Image
              alt=""
              preview={false}
              className="w-96"
              src="https://down-vn.img.susercontent.com/vn-11134259-7r98o-lwfsbsxvgogp92@resize_ss576x330"
            />
            <div className="pl-5">
              <div className="flex items-center text-end mb-3">
                <CheckCircleOutlined
                  style={{ fontSize: 25, paddingRight: 10 }}
                  className="text-green-600"
                />
                <p style={{ fontSize: 30 }} className="font-semibold">
                  Xôi chiên shushi
                </p>
              </div>

              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <div className="flex">
                    <TagOutlined
                      style={{ fontSize: 20 }}
                      className="text-gray-500"
                    />
                    <p className="pl-2 text-gray-500">Sản phẩm:</p>
                    <p className="pl-2 text-red-700">50</p>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="flex">
                    <UsergroupAddOutlined
                      style={{ fontSize: 20 }}
                      className="text-gray-500"
                    />
                    <p className="pl-2 text-gray-500">Người theo dõi:</p>
                    <p className="pl-2 text-red-700">5000</p>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="flex">
                    <UserOutlined
                      style={{ fontSize: 20 }}
                      className="text-gray-500"
                    />
                    <p className="pl-2 text-gray-500">Đang theo dõi:</p>
                    <p className="pl-2 text-red-700">950</p>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="flex">
                    <StarOutlined
                      style={{ fontSize: 20 }}
                      className="text-gray-500"
                    />
                    <p className="pl-2 text-gray-500">Đánh giá:</p>
                    <p className="pl-2 text-red-700">4.9 (37,3k đánh giá)</p>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="flex">
                    <MessageOutlined
                      style={{ fontSize: 20 }}
                      className="text-gray-500"
                    />
                    <p className="pl-2 text-gray-500">Tỉ lệ phản hồi chat:</p>
                    <p className="pl-2 text-red-700">88% (trong vài giờ)</p>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="flex">
                    <UserAddOutlined
                      style={{ fontSize: 20 }}
                      className="text-gray-500"
                    />
                    <p className="pl-2 text-gray-500">Tham gia:</p>
                    <p className="pl-2 text-red-700">7 năm trước</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </div>

        <div className="flex justify-center bg-slate-100 p-5 mt-10">
          <div className="p-4 w-3/4 h-full bg-white">
            <Typography.Title level={4}>Voucher</Typography.Title>

            <div className="flex w-full">
              <Card
                style={{ backgroundColor: "#FFF4F4" }}
                className="min-w-72 max-w-72 border-red-200"
              >
                <div className="flex w-full justify-between items-center">
                  <div>
                    <p className="text-red-500 font-medium text-lg">Giảm 25k</p>
                    <p className="text-red-500">Đơn tối thiểu 250k</p>
                  </div>

                  <Button type="primary" style={{ backgroundColor: "#D0011B" }}>
                    Nhận
                  </Button>
                </div>
              </Card>

              <Card
                style={{ backgroundColor: "#FFF4F4" }}
                className="min-w-72 max-w-72 border-red-200 ml-4"
              >
                <div className="flex w-full justify-between items-center">
                  <div>
                    <p className="text-red-500 font-medium text-lg">Giảm 25k</p>
                    <p className="text-red-500">Đơn tối thiểu 250k</p>
                  </div>

                  <Button style={{ backgroundColor: "#D0011B" }} type="primary">
                    Nhận
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex justify-center w-full mt-10 mb-10">
          <div className="flex w-3/4 bg-slate-100 p-5">
            <div className="p-4 w-full h-full">
              <div className="flex items-baseline">
                <MenuOutlined style={{ fontSize: 15, paddingRight: 10 }} />
                <Typography.Title level={4}>Danh mục</Typography.Title>
              </div>

              <Divider />

              <div className="grid grid-cols-3 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Card
                    key={i}
                    hoverable
                    cover={
                      <img
                        alt="example"
                        src="https://via.placeholder.com/150"
                      />
                    }
                  >
                    <Card.Meta
                      title={`Product ${i + 1}`}
                      description="This is the description"
                    />
                    <div className="mt-2 text-lg font-bold">$10.00</div>
                    <Button type="primary" className="mt-2">
                      Add to Cart
                    </Button>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </AdminLayout>
  );
};

export default AdminPage;

import React from "react";
import { useNavigate } from "react-router-dom";
import AdminLayout from "../../components/adminComponents/AdminLayout";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Divider,
  Form,
  Row,
  Select,
  Typography,
} from "antd";
import { Column, Pie, Line } from "@ant-design/plots"; // Import các biểu đồ cần thiết
import { DollarCircleFilled } from "@ant-design/icons";

const DashboardPage: React.FC = () => {
  const navigate = useNavigate();

  // Dữ liệu mẫu cho biểu đồ cột (Doanh thu và Tiền vốn)
  const data = [
    { month: "Tháng 1", type: "Doanh thu", value: 30000000 },
    { month: "Tháng 1", type: "Tiền vốn", value: 10000000 },
    { month: "Tháng 2", type: "Doanh thu", value: 25000000 },
    { month: "Tháng 2", type: "Tiền vốn", value: 8000000 },
    { month: "Tháng 3", type: "Doanh thu", value: 35000000 },
    { month: "Tháng 3", type: "Tiền vốn", value: 15000000 },
    { month: "Tháng 4", type: "Doanh thu", value: 40000000 },
    { month: "Tháng 4", type: "Tiền vốn", value: 20000000 },
    { month: "Tháng 5", type: "Doanh thu", value: 45000000 },
    { month: "Tháng 5", type: "Tiền vốn", value: 18000000 },
  ];

  // Cấu hình biểu đồ cột
  const configColumn = {
    data,
    isGroup: false,
    xField: "month",
    yField: "value",
    seriesField: "type",
    legend: {
      position: "top-left",
    },
    colorField: "type",
    color: ["#1979C9", "#D62A0D"],
    yAxis: {
      label: {
        formatter: (v: number) => `${(v / 1000000).toFixed(0)}M`,
      },
    },
    label: {
      style: {
        fill: "#FFFFFF",
        opacity: 0.3,
      },
    },
    tooltip: {
      shared: false,
    },
  };

  // Dữ liệu mẫu cho biểu đồ tròn (Số lượng đặt hàng từ các nguồn)
  const pieData = [
    { source: "Website", value: 45 },
    { source: "Facebook", value: 26 },
    { source: "Zalo", value: 18 },
    { source: "Shopee", value: 11 },
  ];

  // Cấu hình biểu đồ tròn
  const configPie = {
    appendPadding: 10,
    data: pieData,
    angleField: "value",
    colorField: "source",
    radius: 0.9,
    label: {
      //   type: "inner",
      offset: "-30%",
      content: ({ percent }: any) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 14,
        textAlign: "center",
      },
    },
    interactions: [{ type: "element-active" }],
  };

  // Dữ liệu mẫu cho biểu đồ đường (Mức tăng doanh thu từng năm)
  const lineData = [
    { year: "2018", revenue: 120000000 },
    { year: "2019", revenue: 150000000 },
    { year: "2020", revenue: 170000000 },
    { year: "2021", revenue: 210000000 },
    { year: "2022", revenue: 250000000 },
  ];

  // Cấu hình biểu đồ đường
  const configLine = {
    data: lineData,
    xField: "year",
    yField: "revenue",
    label: {
      style: {
        fill: "#000",
      },
    },
    yAxis: {
      label: {
        formatter: (v: number) => `${(v / 1000000).toFixed(0)}M`, // Hiển thị đơn vị triệu
      },
    },
    tooltip: {
      shared: true,
    },
  };

  return (
    <AdminLayout>
      <Typography.Title level={4}>
        Báo cáo doanh thu và tiền vốn
      </Typography.Title>

      <Divider />

      <Form layout="vertical">
        <Row gutter={16}>
          <Col span={6}>
            <Form.Item name="filter" label="Bộ lọc">
              <Select className="w-full" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="fromDate" label="Từ ngày">
              <DatePicker className="w-full" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item name="toDate" label="Đến ngày">
              <DatePicker className="w-full" />
            </Form.Item>
          </Col>
          <Col span={6}>
            <Form.Item label=" ">
              <Button type="primary">Tìm kiếm</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Divider />

      <div className="flex justify-between mb-5">
        <Card>
          <div className="flex">
            <DollarCircleFilled style={{ fontSize: 30, color: "#b4e79a" }} />
            <div className="pl-3">
              <p className="text-base font-bold">285.961.000</p>
              <p className="text-sm">Doanh thu</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex">
            <DollarCircleFilled style={{ fontSize: 30, color: "#ee4d2d" }} />
            <div className="pl-3">
              <p className="text-base font-bold">85.961.000</p>
              <p className="text-sm">Tổng vốn</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex">
            <DollarCircleFilled style={{ fontSize: 30 }} />
            <div className="pl-3">
              <p className="text-base font-bold">285.961.000</p>
              <p className="text-sm">Trả hàng</p>
            </div>
          </div>
        </Card>
        <Card>
          <div className="flex">
            <DollarCircleFilled style={{ fontSize: 30, color: "#035590" }} />
            <div className="pl-3">
              <p className="text-base font-bold">285.961.000</p>
              <p className="text-sm">Lợi nhuận</p>
            </div>
          </div>
        </Card>
      </div>

      <Divider />

      <Card title="Mức doanh thu & tiền vốn theo tháng">
        <Column {...configColumn} />
      </Card>

      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col span={12}>
          <Card title="Số lượng đặt hàng từ các nguồn">
            <Pie {...configPie} /> {/* Biểu đồ tròn */}
          </Card>
        </Col>
        <Col span={12}>
          <Card title="Mức tăng doanh thu từng năm">
            <Line {...configLine} /> {/* Biểu đồ đường */}
          </Card>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default DashboardPage;

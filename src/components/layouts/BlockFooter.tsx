import { CopyrightOutlined } from "@ant-design/icons";
import { Layout, Typography } from "antd";
// import {
//   FaceBookOutline,
//   LinkedInOutline,
//   TiktokOutline,
//   ZaloOutline,
// } from 'assets/svg';
import React, { useMemo } from "react";

const { Text, Link } = Typography;

const BlockFooter = (): React.ReactElement => {
  const { Footer } = Layout;

  const socialLinks = useMemo(
    () => [
      {
        href: "https://www.facebook.com/TuyenDungEcoPharmaEplus",
        // icon: <FaceBookOutline />,
      },
      {
        href: "https://www.linkedin.com/in/eco-pharma-eplus-06a6b9287/",
        // icon: <LinkedInOutline />,
      },
      {
        href: "https://www.tiktok.com/@tuyendungecopharma",
        // icon: <TiktokOutline />,
      },
      {
        href: "https://zalo.me/2706971858922086998",
        // icon: <ZaloOutline />,
      },
    ],
    []
  );

  return (
    <Footer style={{ background: "#00249C" }}>
      <div className="footer-content">
        <div className="md:flex md:flex-row justify-center text-center w-full items-center">
          <Text
            className="font-medium md:text-3xl md:mr-4 uppercase"
            style={{ color: "#FFF" }}
          >
            KẾT NỐI VỚI CHÚNG TÔI
          </Text>
          <div className="flex justify-center">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="p-2 md:mr-4 md:p-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* {link.icon} */}
              </Link>
            ))}
          </div>
        </div>
        <hr className="custom-divider" />

        <div className="flex flex-row justify-center items-center">
          <Text style={{ color: "#FFF" }}>
            <CopyrightOutlined /> 2024
          </Text>
        </div>
      </div>
    </Footer>
  );
};

export default React.memo(BlockFooter);

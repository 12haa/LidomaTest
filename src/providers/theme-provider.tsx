"use client";
import React from "react";
import { ConfigProvider } from "antd";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 2,
          },
          components: {
            Button: {
              controlHeight: 40,
              boxShadow: "none",
              colorPrimaryActive: "#007aff",
              controlOutline: "none",
              colorBorder: "#1B4242",
              borderRadius: 0,
              colorPrimary: "#007aff",
              colorTextSecondary: "#007aff",
              colorText: "#1B4242",
            },
            Input: {
              controlHeight: 45,
              boxShadow: "none",
              activeShadow: "none",
              colorErrorActive: "#f44336",
              colorError: "#f44336",
              borderRadius: 10,
            },
            InputNumber: {
              controlHeight: 45,
              boxShadow: "none",
              controlOutline: "none",
              colorErrorActive: "#f44336",
              colorError: "#f44336",
            },
            Select: {
              controlHeight: 45,
              boxShadow: "none",
              controlOutline: "none",
              borderRadius: 10,
            },
            Switch: {
              boxShadow: "none",
              colorPrimary: "#34c759",
              colorBgBase: "#fff",
              borderRadius: 10,
              padding: 10,
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </div>
  );
};

export default ThemeProvider;

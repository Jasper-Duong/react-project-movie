// import { AndroidOutlined, AppleOutlined } from "@ant-design/icons";
import { Tabs } from "antd";
import React from "react";
import { useAsync } from "../../hooks/useAsync";
import { getUserInfoApi } from "../../services/user";
import BookingHistory from "./BookingHistory/BookingHistory";
import UserInfo from "./UserInfo/UserInfo";

export default function UserAccount() {
  const { state: userInfo } = useAsync({ service: getUserInfoApi });
  const renderUserProfile = () => {
    const { thongTinDatVe: orders, ...userProfile } = userInfo;
    const handleGetUser = () => {
      console.log({ userProfile }, { orders });
    };
    return (
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="User Information" key="1">
          <UserInfo userProfile={userProfile} />
          {/* <button className="btn btn-outline-primary" onClick={handleGetUser}>
            GET USER
          </button> */}
        </Tabs.TabPane>
        <Tabs.TabPane tab="Booking History" key="2">
          <BookingHistory orders={orders}/>
        </Tabs.TabPane>
      </Tabs>
    );
  };

  return (
    <div className="container my-5">{userInfo && renderUserProfile()}</div>
  );
}

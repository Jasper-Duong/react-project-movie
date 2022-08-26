import { Tabs } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
import {
  getCinemaList,
  selectCinema,
} from "../../../store/actions/cinema.action";
import { formatDate } from "../../../utils/helper";
import "./HomeMenu.scss";
const { TabPane } = Tabs;

const HomeMenu = () => {
  const state = useSelector((store) => store.cinemaReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCinemaList());
    // dispatch(selectCinema(state.cinema[0].maHeThongRap));
  }, []);
  const handleClickCinema = (ele) => {
    console.log("Click: ", ele.maHeThongRap);
    dispatch(selectCinema(ele.maHeThongRap));
  };
  const renderCinema = () => {
    console.log(state.cinema);
    return state.cinema?.map((ele) => {
      return (
        <TabPane
          tab={<img width={60} src={ele.logo} alt={ele.tenCumRap} />}
          key={ele.maHeThongRap}
        >
          <Tabs tabPosition="left" style={{ height: 600 }}>
            {ele.lstCumRap?.map((theater) => {
              return (
                <TabPane
                  tab={
                    <div className="row theaterInfo">
                      <div className="col-3">
                        <img
                          width={60}
                          src={ele.logo}
                          alt={theater.tenCumRap}
                        />
                      </div>
                      <div className="col-9 text-left theaterText">
                        <h1>{theater.tenCumRap}</h1>
                        <p className="theaterAddress">{theater.diaChi}</p>
                      </div>
                    </div>
                  }
                  key={theater.maCumRap}
                >
                  <Tabs tabPosition="left" style={{ height: 600 }}>
                    {theater.danhSachPhim.map((film) => {
                      return (
                        <TabPane
                          key={film.maPhim}
                          tab={
                            <div className="movieInfo d-flex">
                              <img width={100} src={film.hinhAnh} alt={film.tenPhim} />
                              <h1 className="ml-3 text-left">{film.tenPhim}</h1>
                            </div>
                          }
                        >
                          <div className="movieShowtimes row">
                            {film.lstLichChieuTheoPhim.map((showtime) => {
                              return (
                                <div
                                  className="col-4"
                                  key={showtime.maLichChieu}
                                >
                                  {formatDate(showtime.ngayChieuGioChieu)}
                                </div>
                              );
                            })}
                          </div>
                        </TabPane>
                      );
                    })}
                  </Tabs>
                </TabPane>
              );
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <div className="container py-5">
      <>
        <Tabs tabPosition="left" style={{ height: 600 }}>
          {renderCinema()}
        </Tabs>
      </>
    </div>
  );
};

export default HomeMenu;

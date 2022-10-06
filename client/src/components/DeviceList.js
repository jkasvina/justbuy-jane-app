import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../index";
import { Row } from "react-bootstrap";
import DeviceItem from "./DeviceItem";

const DeviceList = observer(() => {
  const { device } = useContext(Context);

  console.log("device.devices", device.devices);
  return device.devices.length !== 0 ? (
    <Row className="d-flex">
      {device.devices.map((device) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  ) : (
    <div style={{color: 'gray'}}>Пока что нет товаров этой категории</div>
  );
});

export default DeviceList;

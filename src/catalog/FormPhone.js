import React from "react";
import { Col, Form } from "react-bootstrap";
// import ImageUploader from "react-images-upload";

const FormPhone = ({ handle, phone }) => {
  let detailsArray = [
    "Name",
    "Manufacturer",
    "Description",
    "Color",
    "Price",
    "Screen",
    "Processor",
    "Ram",
  ];

  let arr = [];
  for (var i = 0; i < detailsArray.length; i = i + 2) {
    let val = detailsArray[i];
    let val2 = detailsArray[i + 1];
    arr.push(
      <Form.Row key={val}>
        <Col key={val}>
          <Form.Group>
            <Form.Label>{val}</Form.Label>
            <Form.Control
              required
              id={val.toLowerCase()}
              onChange={handle}
              type="text"
              defaultValue={phone[val.toLowerCase()]}
              placeholder={`Enter ${val}...`}
            />
          </Form.Group>
        </Col>
        <Col key={val2}>
          <Form.Group>
            <Form.Label>{val2}</Form.Label>
            <Form.Control
              required={true}
              id={val2.toLowerCase()}
              onChange={handle}
              defaultValue={phone[val2.toLowerCase()]}
              type="text"
              placeholder={`Enter ${val2}...`}
            />
          </Form.Group>
        </Col>
      </Form.Row>
    );
  }
  const body = <Form>{arr}</Form>;

  // const onDrop = () => {};

  return (
    <>
      {body}
      {/* <ImageUploader
        withIcon={false}
        withPreview={true}
        singleImage={true}
        label="Accepted: .jpg,.png, maxsize: 5MB"
        buttonText="Upload Images"
        onChange={onDrop}
        imgExtension={[".jpg", ".png"]}
        maxFileSize={5242880}
        fileSizeError=" file size is too big"
      /> */}
    </>
  );
};

export default FormPhone;

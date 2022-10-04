import { Form, Divider, InputNumber, Button, Upload, Input } from "antd";
import "./UploadPage.css";

const UploadPage = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  return (
    <div id="body">
        <div id="upload-container">
          <Form name="uploadForm" onFinish={onFinish}>
            <Form.Item name="upload">
              <div id="upload-img">
                <img src="/images/icons/camera.png" />
                <span>상품 이미지를 업로드 해주세요</span>
              </div>
            </Form.Item>
            {/* row */}
            <Divider />
            {/* Divider: hr같은 역활이다 */}
            <Form.Item label={<span className="upload-label">상품명</span>} name="product-name" rules={[{ required: true, message: "상품명은 필수 입력 사항입니다" }]}>
              <Input className="upload-name" placeholder="상품명을 입력해주세요" size="large" />
            </Form.Item>
            {/* row */}
            <Form.Item label={<span className="upload-label">판매자명</span>} name="product-seller" rules={[{ required: true, message: "판매자명은 필수 입력 사항입니다" }]}>
              <Input className="upload-name" placeholder="판매자명을 입력해주세요" size="large" />
            </Form.Item>
            <Form.Item label={<span className="upload-label">판매가</span>} name="product-price" rules={[{ required: true, message: "판매가는 필수 입력사항입니다." }]}>
              <InputNumber className="upload-name" placeholder="판매가를  입력해주세요" size="large" min={0} defaultValue={0} />
            </Form.Item>
            <Divider />
            <Form.Item label={<span className="upload-label">상품설명</span>} name="product-desc" rules={[{ required: true, message: "상품설명는 필수 입력사항입니다." }]}>
              <Input.TextArea className="upload-name" placeholder="상품설명를 입력해주세요" size="large" showCount maxLenght={300} />
            </Form.Item>
            <Form.Item>
              <Button id="submit-button" size="large" htmlType="submit">
                상품등록하기
              </Button>
              {/* htmlType="submit"전송버튼으로 인식한다 */}
            </Form.Item>
          </Form>
        </div>
    </div>
  );
};
export default UploadPage;

import { useLocation } from "react-router-dom";
import {
  Button,
  DatePicker,
  Form,
  Image,
  Input,
  InputNumber,
  Select,
  message,
} from "antd";
import styles from "./index.module.css";
const { TextArea } = Input;

const GoodsEdit=()=>{
  const [form] = Form.useForm();
  const {state} = useLocation();

  console.log(state)
  return (
    <Form
      name="book"
      form={form}
      labelCol={{ span: 3 }}
      wrapperCol={{ span: 18 }}
      className={styles.form}
      // initialValues={editData ? editData : {}}
      // onFinish={handleFinish}
      autoComplete="off"
    >
      <Form.Item
        label="名称"
        name="name"
        rules={[
          {
            required: true,
            message: "请输入名称",
          },
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="型号"
        name="model"
        rules={[
          {
            required: true,
            message: "请输入型号",
          },
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="分类"
        name="classify"
        rules={[
          {
            required: true,
            message: "请选择分类",
          },
        ]}
      >
        <Select placeholder='请选择' options={[
                { value: '', label: '请选择' },
                { value: '沙发', label: '沙发' },
                { value: '茶几', label: '茶几' },
                { value: '床', label: '床' },
                { value: '床垫', label: '床垫'},
                ]}>
        </Select>
      </Form.Item>
      <Form.Item
        label="风格"
        name="style"
        rules={[
          {
            required: true,
            message: "请选择风格",
          },
        ]}
      >
        <Select placeholder='请选择' options={[
                { value: '', label: '请选择' },
                { value: '现代风格', label: '现代风格' },
                { value: '欧美风格', label: '欧美风格' },
                { value: '北欧风格', label: '北欧风格' },
                { value: '极简风格', label: '极简风格' },
                ]}>
        </Select>
      </Form.Item>
      <Form.Item
        label="volume"
        name="author"
        rules={[
          {
            required: true,
            message: "请输入体积",
          },
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>

      <Form.Item
        label="运费类型"
        name="free"
        rules={[
          {
            required: true,
            message: "请选择运费类型",
          },
        ]}
      >
        <Select placeholder='请选择' options={[
                { value: '', label: '请选择' },
                { value: '包邮', label: '包邮' },
                { value: '不包邮', label: '不包邮' },
                ]}>
        </Select>
      </Form.Item>

      <Form.Item
        label="供货价"
        name="supply_price"
        rules={[
          {
            required: true,
            message: "请输入供货价",
          },
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>

      <Form.Item
        label="建议零售价"
        name="sales_price"
        rules={[
          {
            required: true,
            message: "请输入建议零售价",
          },
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>

      <Form.Item
        label="店铺零售价"
        name="store_retail_price"
        rules={[
          {
            required: true,
            message: "请输入店铺零售价",
          },
        ]}
      >
        <Input placeholder="请输入" />
      </Form.Item>
      <Form.Item
        label="利润比"
        name="profit_ratio"
        rules={[
          {
            required: false,
            message: "请输入利润比",
          },
        ]}
      >
        <Input placeholder="请输入店铺零售价/供货价" disabled />
      </Form.Item>

      <Form.Item
        label="是否屏蔽"
        name="shield"
        rules={[
          {
            required: true,
            message: "请选择是否屏蔽",
          },
        ]}
      >
        <Select placeholder='请选择' options={[
                { value: '', label: '请选择' },
                { value: '是', label: '是' },
                { value: '否', label: '否' },
                ]}>
        </Select>
      </Form.Item>
      
      <Form.Item
        label="上架时间"
        name="listing_time"
        className={styles.publishAt}
        rules={[
          {
            required: true,
            message: "请选择上架时间",
          },
        ]}
      >
        <DatePicker />
      </Form.Item>
      <Form.Item label="库存" name="stock" rules={[
          {
            required: true,
            message: "请填写上架时间",
          },
        ]}>
        <InputNumber placeholder="请输入"/>
      </Form.Item>
      <Form.Item label="描述" name="description">
        <TextArea className={styles.textarea} />
      </Form.Item>
      <Form.Item label=" " colon={false}>
        <Button
          type="primary"
          htmlType="submit"
          size="large"
          className={styles.btn}
        >
          {state?.id? "更新" : "创建"}
        </Button>
      </Form.Item>
    </Form>
  )
}

export default GoodsEdit
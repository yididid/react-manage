import { useCallback, useEffect, useRef, useState } from "react";
import {
  Button,
  Col,
  Form,
  Image,
  Input,
  Modal,
  Popover,
  Row,
  Select,
  Space,
  Table,
  TablePaginationConfig,
  Tag,
  Tooltip,
  message,
} from "antd";
import styles from "./index.module.css";

import GoodsStatus from "@/store/modules/GoodsStatus/GoodsLibrary"

const GoodsList=()=>{
  const [form] = Form.useForm();

  const columns = [//表头
    {
      title: "商品名称",
      dataIndex: "name",
      key: "name",
      ellipsis: true,
      width: 200,
    },
    {
      title: "型号",
      dataIndex: "model",
      key: "model",
      ellipsis: true,
      width: 200,
    },
    {
      title: "分类",
      dataIndex: "classify",
      key: "classify",
      ellipsis: true,
      width: 150,
    },
    {
      title: "风格",
      dataIndex: "style",
      key: "style",
      ellipsis: true,
      width: 80,
    },
    {
      title: "体积",
      dataIndex: "volume",
      key: "volume",
      ellipsis: true,
      width: 80,
    },
    {
      title: "运费类型",
      dataIndex: "free",
      key: "free",
      ellipsis: true,
      width: 100,
    },
    {
      title: "供货价",
      dataIndex: "supply_price",
      key: "supply_price",
      ellipsis: true,
      width: 80,
    },
    {
      title: "建议零售价",
      dataIndex: "sales_price",
      key: "sales_price",
      ellipsis: true,
      width: 110,
    },
    {
      title: "店铺零售价",
      dataIndex: "store_retail_price",
      key: "store_retail_price",
      ellipsis: true,
      width: 110,
    },
    {
      title: "利润比",
      dataIndex: "profit_ratio",
      key: "profit_ratio",
      ellipsis: true,
      width: 100,
    },
    {
      title: "屏蔽状态",
      dataIndex: "shield",
      key: "shield",
      ellipsis: true,
      width: 100,
    },
    {
      title: "上架时间",
      dataIndex: "listing_time",
      key: "listing_time",
      ellipsis: true,
      width: 120,
    },
    {
      title: "操作",
      dataIndex: "description",
      key: "description",
      render: (_: any, row:any) => (
        <Space>
          <Button
            type="link"
            block
            onClick={() => {
              // router.push(`/book/edit/${row._id}`);
            }}
          >
            编辑
          </Button>
          <Button
            type="link"
            danger
            block
            onClick={() => {
              // handleDeleteModal(row._id as string);
            }}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];


  // const fetchData = useCallback(
  //   (search?:any) => {
  //     const { name, category, author } = search || {};
      
  //   },
  //   [pagination]
  // );

  const handleSearchFinish=(values:any)=>{//表单完成时提交数据
    // fetchData(values);
  }

  return (
    <>
      <Form
        form={form}
        name="search"
        className={styles.form}
        onFinish={handleSearchFinish}
      >
        <Row gutter={24}>
          <Col span={5}>
            <Form.Item name="name" label="商品编码">
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item name="author" label="选择品牌">
              <Input placeholder="请输入" />
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item name="series_id" label="选择系列">
              <Select placeholder="请选择" options={[
                { value: '', label: '请选择' },
                { value: '简约系列', label: '简约系列' },
                { value: '极简系列', label: '极简系列' },
                { value: '现代系列', label: '现代系列' },
                { value: '欧美系列', label: '欧美系列'},
                ]}
              >
              </Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item name="cat_id" label="选择分类">
              <Select placeholder="请选择" options={[
                { value: '', label: '请选择' },
                { value: '沙发', label: '沙发' },
                { value: '床垫', label: '床垫' },
                { value: '床', label: '床' },
                { value: '电视柜', label: '电视柜'},
                ]}>
              </Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item name="super_brand" label="一线大牌">
              <Select placeholder="请选择" options={[
                { value: '', label: '请选择' },
                { value: '芝华士', label: '芝华士' },
                { value: '格调', label: '格调' },
                { value: '雅兰', label: '雅兰' },
                { value: '美的', label: '美的'},
                ]}>
              </Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item name="block_status" label="屏蔽状态">
              <Select placeholder="请选择" options={[
                 { value: '', label: '请选择' },
                 { value: '是', label: '是' },
                 { value: '否', label: '否' },
                ]}>
              </Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item name="is_off_soon" label="即将下架">
              <Select placeholder="请选择" options={[
                 { value: '', label: '请选择' },
                 { value: '是', label: '是' },
                 { value: '否', label: '否' },
                ]}>
              </Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item name="remark" label="选择标签">
              <Select placeholder="请选择" options={[
                 { value: '', label: '请选择' },
                 { value: '爆款', label: '爆款' },
                 { value: '新品', label: '新品' },
                 { value: '热销', label: '热销' },
                ]}>
              </Select>
            </Form.Item>
          </Col>
          <Col span={3}>
            <Form.Item name="ship_free" label="是否包邮">
              <Select placeholder="请选择" options={[
                 { value: '', label: '请选择' },
                 { value: '是', label: '是' },
                 { value: '否', label: '否' },
                ]}>
              </Select>
            </Form.Item>
          </Col>
          <Col span={9} style={{ textAlign: "left" }}>
            <Button type="primary" htmlType="submit">
              搜索
            </Button>
            <Button
              style={{ margin: "0 8px" }}
              onClick={() => {
                form.resetFields();
              }}
            >
              清空
            </Button>
          </Col>
        </Row>
      </Form>

      <div className={styles.tableWrap}>
        <Table
          size="large"
          dataSource={GoodsStatus}
          columns={columns}
          rowKey={(GoodsStatus) => GoodsStatus.id}
          // onChange={handleTableChange}
          pagination={{
            ...GoodsStatus,
            total: GoodsStatus.length,
            showTotal: () => `共 ${GoodsStatus.length} 条`,
          }}
        />
      </div>
    
    </>
  )
}

export default GoodsList
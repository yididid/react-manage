import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import {POST} from "@/request/service"
// import {LoginByAccount} from "@/request/api"
// import {removeUndefinedProps} from "@/public/js/common"
import {
  Button,
  Col,
  Form,
  Input,
  Row,
  Select,
  Space,
  Table,
  Modal
} from "antd";
import {
  ExclamationCircleFilled
} from '@ant-design/icons';
import styles from "./index.module.css";

import GoodsStatus from "@/store/modules/GoodsStatus/GoodsLibrary"
const { confirm } = Modal;
const GoodsList=()=>{
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [list, setList] = useState(GoodsStatus);

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
              handleNavigation('/goods/edit',row);
            }}
          >
            编辑
          </Button>
          <Button
            type="link"
            danger
            block
            onClick={() => {
              handleDeleteModal(row);
            }}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);


  const fetchData = useCallback((search?:any) => {
    // console.log("search")
    // console.log(search)
    //这里获得选择数据后，可以通过接口拿取数据库里面的数值

    //方法一，这里是通过筛选前端数值
    // const search1 = { name: '简约',shield: '是'};
    if(!search){
      return false
    }
    const filteredData = GoodsStatus.filter(item => {
      // 对每个对象的属性进行遍历匹配
      return Object.keys(search).every(key => {
        // 创建正则表达式，不区分大小写，多了一个s标志，表示"."可以匹配换行符
        const regex = new RegExp(search[key], 'is');
        // 对象的属性值中匹配正则表达式
        return regex.test(item[key]);
      });
    });
    // console.log("filteredData")
    // console.log(filteredData)
    setList(filteredData)


    //方法二，通过接口获取数据
    // const data=removeUndefinedProps(search)
    // POST(LoginByAccount,data).then((res:any)=>{
    //   if(res.code===200){
    //     setList(filteredData)
    //   }else{
    //     message.warning(res.msg)
    //   }
    // })

  }, []); 


  const handleSearchFinish=(values:any)=>{//表单完成时提交数据
    fetchData(values);
  }

  function handleNavigation(path:any,row:any) {//跳转页面携带参数id
    navigate(path,{state: { id: row.id }});
  }

  function handleDeleteModal(row:any){
    confirm({
      title: 'Are you sure delete this task?',
      icon: <ExclamationCircleFilled />,
      content: row.name,
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        setList(list.filter(item => item.id !== row.id))
      },
      onCancel() {
        console.log('Cancel');
      },
    });
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
            <Form.Item name="shield" label="屏蔽状态">
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
            <Form.Item name="free" label="是否包邮">
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
          dataSource={list}
          columns={columns}
          rowKey={(GoodsStatus) => GoodsStatus.id}
          // onChange={handleTableChange}
          pagination={{
            ...list,
            total: list.length,
            showTotal: () => `共 ${list.length} 条`,
          }}
        />
      </div>
    
    </>
  )
}

export default GoodsList
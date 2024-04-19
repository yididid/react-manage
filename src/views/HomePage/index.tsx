import { 
  Button,
  Radio,
  DatePicker} from "antd"
import styles from "./index.module.scss";
import ChartLine from "@/components/Echarts/ChartLine"
const { RangePicker } = DatePicker;
const HomePage=()=>{

  return (
    <>
      <div className={styles.floor}>
        <div className={styles.floor1}>
          <div className={styles.floor1Left}>
            <div className={styles.floor1Title}>
              <div className={styles.floor1TitleChoice}>
              <Radio.Group defaultValue="a" size="large" buttonStyle="solid">
                <Radio.Button value="a" >今日</Radio.Button>
                <Radio.Button value="b">最近7天</Radio.Button>
                <Radio.Button value="c">最近30天</Radio.Button>
              </Radio.Group>
              </div>
              <div className={styles.floor1TitleDate}>
                <RangePicker/>
              </div>
              <div className={styles.floor1TitleUpdateDate}>
                更新时间：2024-04-19 09:12:20
              </div>
            </div>
            <div className={styles.floor1Operate}>
              <h1>经营概况</h1>
              <div className={styles.floor1OperateLine}>
                <img src="" alt="" />
                <div className={styles.floor1Operatebox}>
                  <h2>2</h2>
                  <span>29天订单总数</span>
                </div>
                <div className={styles.floor1Operatebox}>
                  <h2>2</h2>
                  <span>29天备单总数</span>
                </div>
                <div className={styles.floor1Operatebox}>
                  <h2>2</h2>
                  <span>29天采购总数</span>
                </div>
              </div>
              <div className={styles.floor1OperateLine}>
                <img src="" alt="" />
                <div className={styles.floor1Operatebox}>
                  <h2>2</h2>
                  <span>29天付款订单</span>
                </div>
                <div className={styles.floor1Operatebox}>
                  <h2>2</h2>
                  <span>29天成功订单</span>
                </div>
                <div className={styles.floor1Operatebox}>
                  <h2>2</h2>
                  <span>29天售后订单</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.floor1Right}>
            <h1>公共通知</h1>
            <div className={styles.floor1RightCent}>
              <div className={styles.floor1RightLine}>
                <text>如何运营店铺</text><span>查看</span>
              </div>
              <div className={styles.floor1RightLine}>
                <text>如何运营店铺</text><span>查看</span>
              </div>
              <div className={styles.floor1RightLine}>
                <text>如何运营店铺</text><span>查看</span>
              </div>
              <div className={styles.floor1RightLine}>
                <text>如何运营店铺</text><span>查看</span>
              </div>
              <div className={styles.floor1RightLine}>
                <text>如何运营店铺</text><span>查看</span>
              </div>
              <div className={styles.floor1RightLine}>
                <text>如何运营店铺</text><span>查看</span>
              </div>
              <div className={styles.floor1RightLine}>
                <text>如何运营店铺</text><span>查看</span>
              </div>
              <div className={styles.floor1RightLine}>
                <text>如何运营店铺</text><span>查看</span>
              </div>
              <div className={styles.floor1RightLine}>
                <text>如何运营店铺</text><span>查看</span>
              </div>
              <div className={styles.floor1RightLine}>
                <text>如何运营店铺</text><span>查看</span>
              </div>
              <div className={styles.floor1RightLine}>
                <text>如何运营店铺</text><span>查看</span>
              </div>
              <div className={styles.floor1RightLine}>
                <text>如何运营店铺</text><span>查看</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.floor}>
        <div className={styles.floor2}>
          <h1 className={styles.floor2Title}>销售走势</h1>
          <div className={styles.floor2Cent}>
            <ChartLine></ChartLine>
          </div>
        </div>
      </div>
    </>
    // <div className={styles.form}>
    //   首页信息
    // </div>
  )
}

export default HomePage
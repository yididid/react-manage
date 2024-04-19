import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';
 
const LineChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const chartInstance = echarts.init(chartRef.current as HTMLDivElement);
    const option = {
      xAxis: {
        type: 'category',
        data: ['00:00', '03:00', '06:00', '09:00', '12:00', '15:00', '18:00', '21:00', '24:00']
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: [820, 932, 1290, 2901, 1290, 1330, 1320,901,820],
        type: 'line'
      }]
    };
 
    chartInstance.setOption(option);
 
    return () => {
      chartInstance.dispose();
    };
  }, []);
 
  return <div ref={chartRef} style={{ width: '100%', height: '400px' }}></div>;
};
 
export default LineChart;
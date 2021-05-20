import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const MarketLineChart = ({ title, type }) => {
  const [uv, setUv] = useState(0);
  const [pv, setPv] = useState(0);

  const [enterMouse, setEnterMouse] = useState(false);
  const CustomTooltip = ({ payload, label, active }) => {
    if (active) {
      return <div className="custom-tooltip"></div>;
    }
    return null;
  };

  return (
    <div className="marketlinechart">
      <div className="p-3">
        {!enterMouse ? (
          <div className="marketlinechart_title">
            <h6 className="fs-16">{title}</h6>
            <p className="fs-14 text-muted">{type} • 24H</p>
          </div>
        ) : (
          <div className="marketlinechart_title">
            <h6 className="fs-16">{pv}</h6>
          </div>
        )}
        <div className="marketlinechart_chart">
          <LineChart
            width={400}
            height={100}
            data={data}
            onMouseEnter={(props) => {
              setEnterMouse(true);
            }}
            onMouseMove={(props) => {
              if (props.isTooltipActive) {
                setUv(props.activePayload[0].payload.uv);
                setPv(props.activePayload[0].payload.pv);
                setEnterMouse(true);
              }
            }}
            onMouseLeave={(props) => {
              setEnterMouse(false);
            }}
          >
            <Tooltip active={false} content={<CustomTooltip />} />
            <Line
              dataKey="pv"
              stroke="#8884d8"
              strokeWidth={2}
              dot={false}
              strokeDashArray="4 1 2"
            />
          </LineChart>
        </div>
        <h5 className="fs-19 marketlinechart_subtitle">
          {type === 'Volume' && '$'}
          {uv}
        </h5>
      </div>
    </div>
  );
};

export default MarketLineChart;

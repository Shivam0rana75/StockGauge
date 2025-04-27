import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as CHARTJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useSelector } from 'react-redux';

CHARTJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Chart = () => {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // 1. Get the correct state path
  const { meta = [], values = [] } = useSelector((state) => state.Charts) || {};

  // 2. More comprehensive loading/error state
  if (!meta || !values || meta.length === 0 || values.length === 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <div className="text-center">
          <h2 className="text-xl font-semibold">No chart data available</h2>
          <p>Please submit stock information on the home page</p>
        </div>
      </div>
    );
  }

  // 3. Add additional safety checks for the data structure
  try {
    const labels = values[0]?.map(item => item?.datetime) || [];
    
    const datasets = meta.map((stockMeta, index) => ({
      label: stockMeta?.symbol || `Stock ${index + 1}`,
      data: values[index]?.map(item => parseFloat(item?.close)) || [],
      borderColor: getRandomColor(),
      backgroundColor: 'rgba(0, 0, 0, 0)',
      fill: false,
    }));

    const chartData = {
      labels,
      datasets,
    };

    const options = {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Stock Price Trends',
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Date',
          },
        },
        y: {
          title: {
            display: true,
            text: 'Price (USD)',
          },
        },
      },
    };

    return (
      <div className='bg-white h-[85vh] w-[85]'>
        <div className='text-red-700 flex flex-row justify-center font-bold'>
          <h1>Graphs of Stocks</h1>
        </div>
        <div className="flex justify-center items-center h-full">
          <Line data={chartData} options={options} />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering chart:', error);
    return (
      <div className="flex justify-center items-center h-full">
        <div className="text-center text-red-500">
          <h2 className="text-xl font-semibold">Error rendering chart</h2>
          <p>Please try again later</p>
        </div>
      </div>
    );
  }
};

export default Chart;
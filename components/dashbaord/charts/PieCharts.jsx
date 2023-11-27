"use client";

import dynamic from "next/dynamic";
import ReactApexChart from "react-apexcharts";

const PieChart = ({ data }) => {
  const options = {
    series: data,
    options: {
      chart: {
        width: 380,
        type: "donut",
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: "gradient",
      },
      legend: {
        formatter: function (val, opts) {
          return val + " - " + opts.w.globals.series[opts.seriesIndex];
        },
      },
      title: {
        text: "Gradient Donut with custom Start-angle",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <ReactApexChart
      options={options}
      series={options.series}
      type="donut"
      width={380}
    />
  );
};

export default dynamic(() => Promise.resolve(PieChart), { ssr: false });

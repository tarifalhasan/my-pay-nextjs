import MonthlyEarningChart from "./charts/MonthlyEarning";

const MonthlyEarning = () => {
  const charts_data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <div className="rounded-12 shadow-shadow-1 ">
      <div className="flex px-4 py-4 items-center justify-between">
        <h5 className=" text-heading-5">Gains mensuels</h5>
        <div className=" w-7 h-7 bg-[#49BEFF] rounded-full grid place-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M11.25 21.25V19.15C10.3833 19 9.63767 18.6627 9.013 18.138C8.38767 17.6127 7.925 16.875 7.625 15.925L9 15.35C9.26667 16.1333 9.65 16.729 10.15 17.137C10.65 17.5457 11.3167 17.75 12.15 17.75C12.8667 17.75 13.5 17.5793 14.05 17.238C14.6 16.896 14.875 16.35 14.875 15.6C14.875 14.95 14.6707 14.4333 14.262 14.05C13.854 13.6667 13 13.2667 11.7 12.85C10.3333 12.4167 9.38333 11.9083 8.85 11.325C8.31667 10.7417 8.05 10.0167 8.05 9.15C8.05 8.15 8.40433 7.35833 9.113 6.775C9.821 6.19167 10.5333 5.86667 11.25 5.8V3.75H12.75V5.8C13.5167 5.91667 14.1583 6.17067 14.675 6.562C15.1917 6.954 15.6 7.46667 15.9 8.1L14.525 8.725C14.3083 8.24167 14.0043 7.86667 13.613 7.6C13.221 7.33333 12.7 7.2 12.05 7.2C11.3 7.2 10.696 7.38333 10.238 7.75C9.77933 8.11667 9.55 8.58333 9.55 9.15C9.55 9.73333 9.78333 10.2 10.25 10.55C10.7167 10.9 11.5917 11.2667 12.875 11.65C14.0583 12 14.9373 12.5083 15.512 13.175C16.0873 13.8417 16.375 14.6417 16.375 15.575C16.375 16.6583 16.025 17.504 15.325 18.112C14.625 18.7207 13.7667 19.0833 12.75 19.2V21.25H11.25Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className=" pt-6 px-4  space-y-4">
        <h3 className=" text-heading-3">$6,820</h3>
        <div className="flex flex-1 items-center gap-1">
          <div className=" bg-[#FBF2EF] w-5 h-5 rounded-full grid place-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M4.2665 3.5L3.5665 4.2L10.1332 10.7667H4.1665L4.1665 11.7667L11.8332 11.7667L11.8332 4.1L10.8332 4.1V10.0667L4.2665 3.5Z"
                fill="#FA896B"
              />
            </svg>
          </div>
          <p className="text-base text-gray-medium-blue-grey">
            <b className=" text-foreground">+9%</b>than last year
          </p>
        </div>
        <MonthlyEarningChart data={charts_data} />
      </div>
    </div>
  );
};

export default MonthlyEarning;

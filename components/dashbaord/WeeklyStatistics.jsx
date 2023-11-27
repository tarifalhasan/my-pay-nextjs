import { BiSolidGrid } from "react-icons/bi";
import MonthlyEarningChart from "./charts/MonthlyEarning";

const WeeklyStatistics = () => {
  const enterprise = [
    {
      bgColor: "#ECF2FF",
      text_color: "#5D87FF",
      title: "Entreprise 1",
      name: "Johnathan Doe",
      value: "+68",
    },
    {
      bgColor: "#E6FFFA",
      text_color: "#13DEB9",
      title: "Entreprise 1",
      name: "MaterialPro Admin",
      value: "+68",
    },
    {
      bgColor: "#FBF2EF",
      text_color: "#FA896B",
      title: "Entreprise 3",
      name: "Ample Admin",
      value: "+68",
    },
  ];
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
    <div className=" bg-white rounded-12 space-y-5  shadow-shadow-1 p-4">
      <div>
        <h5 className=" text-heading-5">Statistiques Hebdomadaires</h5>
        <p className="text-sm text-gray-md">Transactions en moyenne</p>
      </div>

      <MonthlyEarningChart data={charts_data} />
      <ul className="space-y-4 pt-7">
        {enterprise.map((data, index) => (
          <li key={index}>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <div
                  style={{ background: `${data.bgColor}` }}
                  className=" w-10 h-10 rounded-xl grid place-items-center"
                >
                  <BiSolidGrid
                    style={{ color: `${data.text_color}` }}
                    size={25}
                  />
                </div>
                <div>
                  <p className="text-base font-semibold">{data.title}</p>
                  <p className="text-sm text-gray-medium-blue-grey">
                    {data.name}
                  </p>
                </div>
              </div>
              <div
                style={{
                  background: `${data.bgColor}`,
                  color: data.text_color,
                }}
                className=" w-11 px-1 font-semibold rounded-md text-xs h-5 grid place-items-center"
              >
                {data.value}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeeklyStatistics;

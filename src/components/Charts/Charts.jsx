import { React, useState, useEffect } from "react";
import { dailydata } from "../api/index";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Charts.module.css";

const Charts = ({ country, alldata }) => {
  const [dailydt, setdailydt] = useState([]);

  useEffect(() => {
    const fetchdailydt = async () => {
      setdailydt(await dailydata());
    };

    fetchdailydt();
  }, []);

  if (dailydt.length == 0) {
    return <div>Loading ....</div>;
  } else {
    if (country != "") {
      console.log(alldata.confirmed.value);
      return (
        <Bar
          data={{
            labels: ["infected", "deaths"],
            datasets: [
              {
                data: [alldata.confirmed.value, alldata.deaths.value],
                label: ["daily data"],
                backgroundColor: [
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                ],

                borderColor: ["rgb(255, 99, 132)", "rgb(255, 159, 64)"],
              },
            ],
          }}
        />
      );
    } else
      return (
        <div className={styles.container}>
          <Line
            data={{
              labels: dailydt.map(({ date }) => date),
              datasets: [
                {
                  data: dailydt.map(({ confirmed }) => confirmed),
                  label: "infected",
                  borderColor: "#3333ff",
                  fill: true,
                },
                {
                  data: dailydt.map(({ deaths }) => deaths),
                  label: "Deaths",
                  borderColor: "red",
                  fill: true,
                },
              ],
            }}
          />
        </div>
      );
  }
};

export default Charts;

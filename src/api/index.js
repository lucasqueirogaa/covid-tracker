import axios from "axios";

const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    console.log(data);
    const modifedData = data[0].map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      detahs: dailyData.detahs.total,
      date: dailyData.reportDate,
    }));
    console.log("Modifed" + modifedData);
    return modifedData;
  } catch (error) {}
};

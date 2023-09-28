import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, scales } from "chart.js";
import PropTypes from "prop-types";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, scales);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom", // Menampilkan legenda di atas grafik
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: true, // Menampilkan grid pada sumbu y
      },
    },
    y: {
      min: 0,
      max: 50,
      ticks: {
        stepSize: 2,
        callback: (value) => value + "°C",
      },
      grid: {
        display: true, // Menampilkan grid pada sumbu y
      },
    },
  },
};

const ChartInfo = (props) => {
  const { dataWheatherForDisplayChart } = props;

  // self section variables
  const cityName = dataWheatherForDisplayChart?.resultweatherSelfLocation?.location?.name;
  const forecastData = dataWheatherForDisplayChart?.resultweatherSelfLocation?.forecast?.forecastday;
  // by search section variables
  const cityNameSearch = dataWheatherForDisplayChart?.resultsWeatherBySearch?.location?.name;
  const forecastDataSearch = dataWheatherForDisplayChart?.resultsWeatherBySearch?.forecast?.forecastday;

  // animasi loading ketika data belum selesai di muat
  if (!cityName || !forecastData || !dataWheatherForDisplayChart) {
    return (
      <div className="mx-auto my-5 text-center ">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  let dataToDisplay = {
    labels: forecastData.map((items) => items?.date),
    datasets: [
      // data by self location
      {
        label: `your location: ${cityName} `,
        data: forecastData.map((data) => data?.day?.avgtemp_c),
        borderColor: "rgb(255, 99, 132)",
        borderJoinStyle: "round",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
        borderWidth: 5,
        capBezierPoints: true,
        pointStyle: "circle", // Anda dapat menyesuaikan gaya titiknya sesuai kebutuhan
        pointRadius: 6, // Mengatur ukuran titik data
        pointHoverRadius: 8, // Mengatur ukuran titik data saat dihover
        pointHoverBorderWidth: 2, // Mengatur ketebalan border saat dihover
      },
    ],
  };
  if (cityName !== cityNameSearch) {
    dataToDisplay.datasets.push({
      label: `search result: ${cityNameSearch}`,
      data: forecastDataSearch.map((data) => data?.day?.avgtemp_c),
      borderColor: "rgb(3, 15, 252)",
      borderJoinStyle: "round",
      pointBorderColor: "transparent",
      pointBorderWidth: 4,
      tension: 0.5,
      borderWidth: 5,
      capBezierPoints: true,
      pointStyle: "circle", // Anda dapat menyesuaikan gaya titiknya sesuai kebutuhan
      pointRadius: 6, // Mengatur ukuran titik data
      pointHoverRadius: 8, // Mengatur ukuran titik data saat dihover
      pointHoverBorderWidth: 2, // Mengatur ketebalan border saat dihover
    });
  }
  return <Line options={options} data={dataToDisplay} />;
};
ChartInfo.propTypes = {
  dataWheatherForDisplayChart: PropTypes.object,
};

export default ChartInfo;

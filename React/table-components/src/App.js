import "./App.css";
import data1 from "./assets/data1.json";
import data2 from "./assets/data2.json";
import data3 from "./assets/data3.json";
import Table from "./components/Table";

function App() {
  const getHeadings = (data) => {
    return Object.keys(data[0]);
  };
  return (
    <div>
      <h1>Table Components</h1>
      <h2>Table 1</h2>
      <Table theadData={getHeadings(data1)} tbodyData={data1} />
      <h2>Table 2</h2>
      <Table theadData={getHeadings(data2)} tbodyData={data2} />
      <h2>Table 3</h2>
      <Table theadData={getHeadings(data3)} tbodyData={data3} />
    </div>
  );
}

export default App;

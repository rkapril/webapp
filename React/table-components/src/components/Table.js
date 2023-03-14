export default function Table({ theadData, tbodyData }) {
  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  };
  return (
    <table>
      <thead>
        <tr>
          {theadData.map((heading) => {
            return (
              <th key={heading}>
                {capitalizeWords(heading)}
              </th>
            );
          })}
        </tr>
      </thead>

      <tbody>
        {tbodyData.map((row, index) => {
          return (
            <tr key={index}>
              {theadData.map((key) => {
                return <td key={row[key]}>{row[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

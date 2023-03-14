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
        {tbodyData.map((row) => {
          return (
            <tr>
              {theadData.map((key) => {
                return <td>{row[key]}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

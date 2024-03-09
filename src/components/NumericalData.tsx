// import React from 'react';

// const NumericalData = () => {
//     // Replace with your numerical data
//     const numericalData = [10, 5, 8, 15, 20, 12];

//     // Calculate Mean
//     const mean = numericalData.reduce((acc, val) => acc + val, 0) / numericalData.length;
  
//     // Calculate Median
//     const sortedData = numericalData.slice().sort((a, b) => a - b);
//     const middleIndex = Math.floor(sortedData.length / 2);
//     const median = sortedData.length % 2 === 0 ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2 : sortedData[middleIndex];
  
//     // Calculate Minimum and Maximum
//     const minimum = Math.min(...numericalData);
//     const maximum = Math.max(...numericalData);
  
//     // Calculate Standard Deviation
//     const deviation = Math.sqrt(
//       numericalData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / numericalData.length
//     );
  
//     return (
//       <div>
        
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Statistic</th>
//               <th>Data</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Mean</td>
//               <td>{mean.toFixed(2)}</td>
//             </tr>
//             <tr>
//               <td>Median</td>
//               <td>{median}</td>
//             </tr>
//             <tr>
//               <td>Minimum</td>
//               <td>{minimum}</td>
//             </tr>
//             <tr>
//               <td>Maximum</td>
//               <td>{maximum}</td>
//             </tr>
//             <tr>
//               <td>Standard Deviation</td>
//               <td>{deviation.toFixed(2)}</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     );
//   };


//   // Placeholder numerical data
// //   const numericalValues = [25, 30, 35, 40, 45, 50];

// //   // Calculate statistics
// //   const sum = numericalValues.reduce((acc, val) => acc + val, 0);
// //   const average = sum / numericalValues.length;
// //   const max = Math.max(...numericalValues);
// //   const min = Math.min(...numericalValues);

// //   return (
// //     <div>
// //       <h2>Numerical Data Component</h2>
// //       <p>Data: {numericalValues.join(', ')}</p>
// //       <p>Sum: {sum}</p>
// //       <p>Average: {average.toFixed(2)}</p>
// //       <p>Max: {max}</p>
// //       <p>Min: {min}</p>
// //       {/* Add your numerical data presentation or visualization here */}
// //       <p>This is where you can display charts, graphs, or other numerical data content.</p>
// //     </div>
// //   );

// export default NumericalData;
// import React, { useEffect, useState } from 'react';
// import Papa from 'papaparse';

// const NumericalData = () => {
//   const [numericalData, setNumericalData] = useState([]);

//   useEffect(() => {
//     // Replace 'your_dataset.csv' with the path to your CSV file
//     Papa.parse('/path/to/your_dataset.csv', {
//       download: true,
//       header: true,
//       dynamicTyping: true,
//       complete: (result) => {
//         const data = result.data.map((row) => row.value); // Change 'value' to the column you want to analyze
//         setNumericalData(data);
//       },
//     });
//   }, []);

//   // Calculate statistics
//   const mean = numericalData.reduce((acc, val) => acc + val, 0) / numericalData.length;
//   const sortedData = numericalData.slice().sort((a, b) => a - b);
//   const middleIndex = Math.floor(sortedData.length / 2);
//   const median = sortedData.length % 2 === 0 ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2 : sortedData[middleIndex];
//   const minimum = Math.min(...numericalData);
//   const maximum = Math.max(...numericalData);
//   const deviation = Math.sqrt(
//     numericalData.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / numericalData.length
//   );

//   return (
//     <div>
//       <h2>Numerical Data Statistics</h2>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Statistic</th>
//             <th>Value</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Mean</td>
//             <td>{mean.toFixed(2)}</td>
//           </tr>
//           <tr>
//             <td>Median</td>
//             <td>{median}</td>
//           </tr>
//           <tr>
//             <td>Minimum</td>
//             <td>{minimum}</td>
//           </tr>
//           <tr>
//             <td>Maximum</td>
//             <td>{maximum}</td>
//           </tr>
//           <tr>
//             <td>Standard Deviation</td>
//             <td>{deviation.toFixed(2)}</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default NumericalData;



// import React, { useState } from 'react';



// const data = [
//     {
//       id: "1",
//       CustomerId: "DD37Cf93aecA6Dc",
//       FirstName: "Sheryl",
//       LastName: "Baxter",
//       Company: "Rasmussen Group",
//       City: "East Leonard",
//       Country: "Chile",
//       Phone1: "229.077.5154",
//       Phone2: "397.884.0519x718",
//       Email: "zunigavanessa@smith.info",
//       SubscriptionDate: "2020-08-24",
//       Website: "http://www.stephenson.com/",
//     },
//     {
//       id: "2",
//       CustomerId: "1Ef7b82A4CAAD10",
//       FirstName: "Preston",
//       LastName: "Lozano",
//       Company: "Vega-Gentry",
//       City: "East Jimmychester",
//       Country: "Djibouti",
//       Phone1: "5153435776",
//       Phone2: "686-620-1820x944",
//       Email: "vmata@colon.com",
//       SubscriptionDate: "2021-04-23",
//       Website: "http://www.hobbs.com/",
//     },
//     {
//       id: "3",
//       CustomerId: "6F94879bDAfE5a6",
//       FirstName: "Roy",
//       LastName: "Berry",
//       Company: "Murillo-Perry",
//       City: "Isabelborough",
//       Country: "Antigua and Barbuda",
//       Phone1: "+1-539-402-0259",
//       Phone2: "(496)978-3969x58947",
//       Email: "beckycarr@hogan.com",
//       SubscriptionDate: "2020-03-25",
//       Website: "http://www.lawrence.com/",
//     },
//     {
//       id: "4",
//       CustomerId: "5Cef8BFA16c5e3c",
//       FirstName: "Linda",
//       LastName: "Olsen",
//       Company: "Dominguez, Mcmillan and Donovan",
//       City: "Bensonview",
//       Country: "Dominican Republic",
//       Phone1: "001-808-617-6467x12895",
//       Phone2: "+1-813-324-8756",
//       Email: "stanleyblackwell@benson.org",
//       SubscriptionDate: "2020-06-02",
//       Website: "http://www.good-lyons.com/",
//     },
//     {
//       id: "5",
//       CustomerId: "053d585Ab6b3159",
//       FirstName: "Joanna",
//       LastName: "Bender",
//       Company: "Martin, Lang and Andrade",
//       City: "West Priscilla",
//       Country: "Slovakia (Slovak Republic)",
//       Phone1: "001-234-203-0635x76146",
//       Phone2: "001-199-446-3860x3486",
//       Email: "colinalvarado@miles.net",
//       SubscriptionDate: "2021-04-17",
//       Website: "https://goodwin-ingram.com/",
//     },
//     {
//       id: "6",
//       CustomerId: "2d08FB17EE273F4",
//       FirstName: "Aimee",
//       LastName: "Downs",
//       Company: "Steele Group",
//       City: "Chavezborough",
//       Country: "Bosnia and Herzegovina",
//       Phone1: "(283)437-3886x88321",
//       Phone2: "999-728-1637",
//       Email: "louis27@gilbert.com",
//       SubscriptionDate: "2020-02-25",
//       Website: "http://www.berger.net/",
//     },
//     {
//       id: "7",
//       CustomerId: "EA4d384DfDbBf77",
//       FirstName: "Darren",
//       LastName: "Peck",
//       Company: "Lester, Woodard and Mitchell",
//       City: "Lake Ana",
//       Country: "Pitcairn Islands",
//       Phone1: "(496)452-6181x3291",
//       Phone2: "+1-247-266-0963x4995",
//       Email: "tgates@cantrell.com",
//       SubscriptionDate: "2021-08-24",
//       Website: "https://www.le.com/",
//     },
//     {
//       id: "8",
//       CustomerId: "0e04AFde9f225dE",
//       FirstName: "Brett",
//       LastName: "Mullen",
//       Company: "Sanford, Davenport and Giles",
//       City: "Kimport",
//       Country: "Bulgaria",
//       Phone1: "001-583-352-7197x297",
//       Phone2: "001-333-145-0369",
//       Email: "asnow@colon.com",
//       SubscriptionDate: "2021-04-12",
//       Website: "https://hammond-ramsey.com/",
//     },
//     {
//       id: "9",
//       CustomerId: "C2dE4dEEc489ae0",
//       FirstName: "Sheryl",
//       LastName: "Meyers",
//       Company: "Browning-Simon",
//       City: "Robersonstad",
//       Country: "Cyprus",
//       Phone1: "854-138-4911x5772",
//       Phone2: "+1-448-910-2276x729",
//       Email: "mariokhan@ryan-pope.org",
//       SubscriptionDate: "2020-01-13",
//       Website: "https://www.bullock.net/",
//     },
 
   
//   ];
  
//   const columns = [
//     { field: "id", headerName: "ID" },
//     { field: "title", headerName: "Title", width: 300 },
//     { field: "body", headerName: "Body", width: 600 },
//   ];

// const NumericalData = () => {
//   // Function to check if the data is numerical or categorical
//   const checkDataType = (data: any[]) => {
//     const isNumerical = data.every(value => !isNaN(value));
//     return isNumerical ? 'Numerical' : 'Categorical';
//   };

//   // Function to get a random dataset of specified length for each column
//   const getRandomDataset = (length: number) => {
//     return Array.from({ length }, () => Math.floor(Math.random() * 50) + 1);
//   };

//   // Replace with your column names
//   const columnNames = ["Column1", "Column2", "Column3", "Column4", "Column5", "Column6"];

//   // Create an array to hold data for each column
//   const columnData = columnNames.map(() => getRandomDataset(6));

//   return (
//     <div>
//       <h2>Data Statistics</h2>
//       <p>Data type: {checkDataType(columnData.flat())}</p>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Statistic</th>
//             {columnNames.map((columnName, index) => (
//               <th key={index}>{columnName}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Mean</td>
//             {columnData.map((data, index) => (
//               <td key={index}>{(data.reduce((acc, val) => acc + val, 0) / data.length).toFixed(2)}</td>
//             ))}
//           </tr>
//           <tr>
//             <td>Median</td>
//             {columnData.map((data, index) => (
//               <td key={index}>{calculateMedian(data)}</td>
//             ))}
//           </tr>
//           <tr>
//             <td>Minimum</td>
//             {columnData.map((data, index) => (
//               <td key={index}>{Math.min(...data)}</td>
//             ))}
//           </tr>
//           <tr>
//             <td>Maximum</td>
//             {columnData.map((data, index) => (
//               <td key={index}>{Math.max(...data)}</td>
//             ))}
//           </tr>
//           <tr>
//             <td>Standard Deviation</td>
//             {columnData.map((data, index) => (
//               <td key={index}>{calculateStandardDeviation(data).toFixed(2)}</td>
//             ))}
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // Function to calculate median for an array of numbers
// const calculateMedian = (data: any[]) => {
//   const sortedData = data.slice().sort((a, b) => a - b);
//   const middleIndex = Math.floor(sortedData.length / 2);
//   return sortedData.length % 2 === 0
//     ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
//     : sortedData[middleIndex];
// };

// // Function to calculate standard deviation for an array of numbers
// const calculateStandardDeviation = (data: any[]) => {
//   const mean = data.reduce((acc, val) => acc + val, 0) / data.length;
//   return Math.sqrt(data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length);
// };



// export default NumericalData;

// 






// import React from 'react';

// const data = [
//   {
//     id: "1",
//     CustomerId: "DD37Cf93aecA6Dc",
//     FirstName: "Sheryl",
//     LastName: "Baxter",
//     Company: "Rasmussen Group",
//     City: "East Leonard",
//     Country: "Chile",
//     Phone1: "2",
//     Phone2: "397.884.0519x718",
//     Email: "zunigavanessa@smith.info",
//     SubscriptionDate: "2020-08-24",
//     Website: "http://www.stephenson.com/",
//   },
//   {
//     id: "86",
//     CustomerId: "C6763c99d0bd16D",
//     FirstName: "Emma",
//     LastName: "Cunningham",
//     Company: "Stephens Inc",
//     City: "North Jillianview",
//     Country: "New Zealand",
//     Phone1: "2",
//     Phone2: "(312)164-4545x2284",
//     Email: "walter83@juarez.org",
//     SubscriptionDate: "2022-05-13",
//     Website: "http://www.reid.info/",
//   },
// ];

// const NumericalData = () => {
//   // Function to check if the data is numerical or categorical
//   const checkDataType = (data: any[]) => {
//     const isNumerical = data.every((value: number) => !isNaN(value));
//     return isNumerical ? 'Numerical' : 'Categorical';
//   };

//   // Extract numerical values from the data for each column
//   const extractNumericalValues = (columnName: string) => {
//     return data.map(entry => parseFloat(entry[columnName]) || 0);
//   };

//   // Get all unique column names
//   const columnNames = Array.from(new Set(data.flatMap(entry => Object.keys(entry))));

//   // Create an array to hold data for each column
//   const columnData = columnNames.map(columnName => extractNumericalValues(columnName));

//   return (
//     <div>
//       <h2>Data Statistics</h2>
//       <p>Data type: {checkDataType(columnData.flat())}</p>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Column</th>
//             <th>Statistic</th>
//           </tr>
//         </thead>
//         <tbody>
//           {columnNames.map((columnName, columnIndex) => (
//             <tr key={columnIndex}>
//               <td>{columnName}</td>
//               <td>
//                 {checkDataType(columnData[columnIndex].flat()) === 'Numerical' ? (
//                   <>
//                     <div>Mean: {(columnData[columnIndex].reduce((acc, val) => acc + val, 0) / columnData[columnIndex].length).toFixed(2)}</div>
//                     <div>Median: {calculateMedian(columnData[columnIndex])}</div>
//                     <div>Minimum: {Math.min(...columnData[columnIndex])}</div>
//                     <div>Maximum: {Math.max(...columnData[columnIndex])}</div>
//                     <div>Standard Deviation: {calculateStandardDeviation(columnData[columnIndex]).toFixed(2)}</div>
//                   </>
//                 ) : (
//                   <>
//                     <div>Frequency: {JSON.stringify(calculateFrequency(columnData[columnIndex]))}</div>
//                     <div>Percentage: {JSON.stringify(calculatePercentage(columnData[columnIndex]))}</div>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // Function to calculate median for an array of numbers
// const calculateMedian = (data: any[]) => {
//   const sortedData = data.slice().sort((a, b) => a - b);
//   const middleIndex = Math.floor(sortedData.length / 2);
//   return sortedData.length % 2 === 0
//     ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
//     : sortedData[middleIndex];
// };

// // Function to calculate standard deviation for an array of numbers
// const calculateStandardDeviation = (data: any[]) => {
//   const mean = data.reduce((acc, val) => acc + val, 0) / data.length;
//   return Math.sqrt(data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length);
// };

// // Function to calculate frequency for an array of values
// const calculateFrequency = (data: any[]) => {
//   const frequencyMap: { [key: string]: number } = {};
//   data.forEach(value => {
//     frequencyMap[value] = (frequencyMap[value] || 0) + 1;
//   });
//   return frequencyMap;
// };

// // Function to calculate percentage for an array of values
// const calculatePercentage = (data: any[]) => {
//   const frequencyMap = calculateFrequency(data);
//   const totalEntries = data.length;
//   const percentageMap: { [key: string]: number } = {};
//   Object.keys(frequencyMap).forEach(key => {
//     percentageMap[key] = (frequencyMap[key] / totalEntries) * 100;
//   });
//   return percentageMap;
// };

// export default NumericalData;




// import React from 'react';

// const data = [
//   {
//     id: "1",
//     CustomerId: "DD37Cf93aecA6Dc",
//     FirstName: "Sheryl",
//     LastName: "Baxter",
//     Company: "Rasmussen Group",
//     City: "East Leonard",
//     Country: "Chile",
//     Phone1: "2",
//     Phone2: "397.884.0519x718",
//     Email: "zunigavanessa@smith.info",
//     SubscriptionDate: "2020-08-24",
//     Website: "http://www.stephenson.com/",
//   },
//   {
//     id: "86",
//     CustomerId: "C6763c99d0bd16D",
//     FirstName: "Emma",
//     LastName: "Cunningham",
//     Company: "Stephens Inc",
//     City: "North Jillianview",
//     Country: "New Zealand",
//     Phone1: "2",
//     Phone2: "(312)164-4545x2284",
//     Email: "walter83@juarez.org",
//     SubscriptionDate: "2022-05-13",
//     Website: "http://www.reid.info/",
//   },
// ];

// const NumericalData = () => {
//   // Extract numerical columns from the data
//   const numericalColumns = Object.keys(data[0]).filter(columnName =>
//     data.every(entry => !isNaN(parseFloat(entry[columnName])))
//   );

//   // Function to check if the data is numerical or categorical
//   const checkDataType = (data: any[]) => {
//     const isNumerical = data.every((value: number) => !isNaN(value));
//     return isNumerical ? 'Numerical' : 'Categorical';
//   };

//   // Extract numerical values from the data for each numerical column
//   const extractNumericalValues = (columnName: string) => {
//     return data.map(entry => parseFloat(entry[columnName]) || 0);
//   };

//   // Create an array to hold data for each numerical column
//   const columnData = numericalColumns.map(columnName => extractNumericalValues(columnName));

//   return (
//     <div>
//       <h2>Data Statistics</h2>
//       <p>Data type: {checkDataType(columnData.flat())}</p>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Column</th>
//             <th>Statistic</th>
//           </tr>
//         </thead>
//         <tbody>
//           {numericalColumns.map((columnName, columnIndex) => (
//             <tr key={columnIndex}>
//               <td>{columnName}</td>
//               <td>
//                 {checkDataType(columnData[columnIndex].flat()) === 'Numerical' ? (
//                   <>
//                     <div>Mean: {(columnData[columnIndex].reduce((acc, val) => acc + val, 0) / columnData[columnIndex].length).toFixed(2)}</div>
//                     <div>Median: {calculateMedian(columnData[columnIndex])}</div>
//                     <div>Minimum: {Math.min(...columnData[columnIndex])}</div>
//                     <div>Maximum: {Math.max(...columnData[columnIndex])}</div>
//                     <div>Standard Deviation: {calculateStandardDeviation(columnData[columnIndex]).toFixed(2)}</div>
//                   </>
//                 ) : (
//                   <>
//                     <div>Frequency: {JSON.stringify(calculateFrequency(columnData[columnIndex]))}</div>
//                     <div>Percentage: {JSON.stringify(calculatePercentage(columnData[columnIndex]))}</div>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// // Function to calculate median for an array of numbers
// const calculateMedian = (data: any[]) => {
//   const sortedData = data.slice().sort((a, b) => a - b);
//   const middleIndex = Math.floor(sortedData.length / 2);
//   return sortedData.length % 2 === 0
//     ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
//     : sortedData[middleIndex];
// };

// // Function to calculate standard deviation for an array of numbers
// const calculateStandardDeviation = (data: any[]) => {
//   const mean = data.reduce((acc, val) => acc + val, 0) / data.length;
//   return Math.sqrt(data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length);
// };

// // Function to calculate frequency for an array of values
// const calculateFrequency = (data: any[]) => {
//   const frequencyMap: { [key: string]: number } = {};
//   data.forEach(value => {
//     frequencyMap[value] = (frequencyMap[value] || 0) + 1;
//   });
//   return frequencyMap;
// };

// // Function to calculate percentage for an array of values
// const calculatePercentage = (data: any[]) => {
//   const frequencyMap = calculateFrequency(data);
//   const totalEntries = data.length;
//   const percentageMap: { [key: string]: number } = {};
//   Object.keys(frequencyMap).forEach(key => {
//     percentageMap[key] = (frequencyMap[key] / totalEntries) * 100;
//   });
//   return percentageMap;
// };

// export default NumericalData;







// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

// const data = [
//   {
//     id: "1",
//     CustomerId: "DD37Cf93aecA6Dc",
//     FirstName: "Sheryl",
//     LastName: "Baxter",
//     Company: "Rasmussen Group",
//     City: "East Leonard",
//     Country: "Chile",
//     Phone1: "229.077.5154",
//     Phone2: "397.884.0519x718",
//     Email: "zunigavanessa@smith.info",
//     SubscriptionDate: "2020-08-24",
//     Website: "http://www.stephenson.com/",
//   },
//   {
//     id: "86",
//     CustomerId: "C6763c99d0bd16D",
//     FirstName: "Emma",
//     LastName: "Cunningham",
//     Company: "Stephens Inc",
//     City: "North Jillianview",
//     Country: "New Zealand",
//     Phone1: "2",
//     Phone2: "(312)164-4545x2284",
//     Email: "walter83@juarez.org",
//     SubscriptionDate: "2022-05-13",
//     Website: "http://www.reid.info/",
//   },
// ];

// const NumericalData = () => {
//   const numericalColumns = Object.keys(data[0]).filter(columnName =>
//     data.every(entry => !isNaN(parseFloat(entry[columnName])))
//   );

//   const checkDataType = (data: any[]) => {
//     const isNumerical = data.every((value: number) => !isNaN(value));
//     return isNumerical ? 'Numerical' : 'Categorical';
//   };

//   const extractNumericalValues = (columnName: string) => {
//     return data.map(entry => parseFloat(entry[columnName]) || 0);
//   };

//   const columnData = numericalColumns.map(columnName => extractNumericalValues(columnName));

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Data Statistics</h2>
//       <div className="table-responsive">
//         <table className="table table-bordered">
//           <thead className="thead-dark">
//             <tr>
//               <th>Column</th>
//               <th>Statistic</th>
//             </tr>
//           </thead>
//           <tbody>
//             {numericalColumns.map((columnName, columnIndex) => (
//               <tr key={columnIndex}>
//                 <td>{columnName}</td>
//                 <td>
//                   {checkDataType(columnData[columnIndex].flat()) === 'Numerical' ? (
//                     <>
//                       <div>Mean: {(columnData[columnIndex].reduce((acc, val) => acc + val, 0) / columnData[columnIndex].length).toFixed(2)}</div>
//                       <div>Median: {calculateMedian(columnData[columnIndex])}</div>
//                       <div>Minimum: {Math.min(...columnData[columnIndex])}</div>
//                       <div>Maximum: {Math.max(...columnData[columnIndex])}</div>
//                       <div>Standard Deviation: {calculateStandardDeviation(columnData[columnIndex]).toFixed(2)}</div>
//                     </>
//                   ) : (
//                     <>
//                       <div>Frequency: {JSON.stringify(calculateFrequency(columnData[columnIndex]))}</div>
//                       <div>Percentage: {JSON.stringify(calculatePercentage(columnData[columnIndex]))}</div>
//                     </>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// const calculateMedian = (data: any[]) => {
//   const sortedData = data.slice().sort((a, b) => a - b);
//   const middleIndex = Math.floor(sortedData.length / 2);
//   return sortedData.length % 2 === 0
//     ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
//     : sortedData[middleIndex];
// };

// const calculateStandardDeviation = (data: any[]) => {
//   const mean = data.reduce((acc, val) => acc + val, 0) / data.length;
//   return Math.sqrt(data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length);
// };

// const calculateFrequency = (data: any[]) => {
//   const frequencyMap: { [key: string]: number } = {};
//   data.forEach(value => {
//     frequencyMap[value] = (frequencyMap[value] || 0) + 1;
//   });
//   return frequencyMap;
// };

// const calculatePercentage = (data: any[]) => {
//   const frequencyMap = calculateFrequency(data);
//   const totalEntries = data.length;
//   const percentageMap: { [key: string]: number } = {};
//   Object.keys(frequencyMap).forEach(key => {
//     percentageMap[key] = (frequencyMap[key] / totalEntries) * 100;
//   });
//   return percentageMap;
// };

// export default NumericalData;


// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; 

// const data = [
//   {
//     id: "1",
//     CustomerId: "DD37Cf93aecA6Dc",
//     FirstName: "Sheryl",
//     LastName: "Baxter",
//     Company: "Rasmussen Group",
//     City: "East Leonard",
//     Country: "Chile",
//     Phone1: "229.077.5154",
//     Phone2: "8",
//     Email: "zunigavanessa@smith.info",
//     SubscriptionDate: "2020-08-24",
//     Website: "http://www.stephenson.com/",
//   },
//   {
//     id: "86",
//     CustomerId: "C6763c99d0bd16D",
//     FirstName: "Emma",
//     LastName: "Cunningham",
//     Company: "Stephens Inc",
//     City: "North Jillianview",
//     Country: "New Zealand",
//     Phone1: "2",
//     Phone2: "4",
//     Email: "walter83@juarez.org",
//     SubscriptionDate: "2022-05-13",
//     Website: "http://www.reid.info/",
//   },
// ];

// const NumericalData = () => {
//   const numericalColumns = Object.keys(data[0]).filter(columnName =>
//     data.every(entry => !isNaN(parseFloat(entry[columnName])))
//   );

//   const checkDataType = (data: any[]) => {
//     const isNumerical = data.every((value: number) => !isNaN(value));
//     return isNumerical ? 'Numerical' : 'Categorical';
//   };

//   const extractNumericalValues = (columnName: string) => {
//     return data.map(entry => parseFloat(entry[columnName]) || 0);
//   };

//   const columnData = numericalColumns.map(columnName => extractNumericalValues(columnName));

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Data Statistics</h2>
//       <div className="table-responsive">
//         <table className="table table-bordered">
//           <thead className="thead-dark">
//             <tr>
//               <th></th>
//               {numericalColumns.map((columnName, index) => (
//                 <th key={index}>{columnName}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Mean</td>
//               {columnData.map((data, index) => (
//                 <td key={index}>{(data.reduce((acc, val) => acc + val, 0) / data.length).toFixed(2)}</td>
//               ))}
//             </tr>
//             <tr>
//               <td>Median</td>
//               {columnData.map((data, index) => (
//                 <td key={index}>{calculateMedian(data)}</td>
//               ))}
//             </tr>
//             <tr>
//               <td>Minimum</td>
//               {columnData.map((data, index) => (
//                 <td key={index}>{Math.min(...data)}</td>
//               ))}
//             </tr>
//             <tr>
//               <td>Maximum</td>
//               {columnData.map((data, index) => (
//                 <td key={index}>{Math.max(...data)}</td>
//               ))}
//             </tr>
//             <tr>
//               <td>Standard Deviation</td>
//               {columnData.map((data, index) => (
//                 <td key={index}>{calculateStandardDeviation(data).toFixed(2)}</td>
//               ))}
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// const calculateMedian = (data: any[]) => {
//   const sortedData = data.slice().sort((a, b) => a - b);
//   const middleIndex = Math.floor(sortedData.length / 2);
//   return sortedData.length % 2 === 0
//     ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
//     : sortedData[middleIndex];
// };

// const calculateStandardDeviation = (data: any[]) => {
//   const mean = data.reduce((acc, val) => acc + val, 0) / data.length;
//   return Math.sqrt(data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length);
// };

// export default NumericalData;


import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface DataEntry {
  [key: string]: string;
}

const data: DataEntry[] = [
  {
    id: "1",
    CustomerId: "DD37Cf93aecA6Dc",
    FirstName: "Sheryl",
    LastName: "Baxter",
    Company: "Rasmussen Group",
    City: "East Leonard",
    Country: "Chile",
    Phone1: "6",
    Phone2: "8",
    Email: "zunigavanessa@smith.info",
    SubscriptionDate: "2020-08-24",
    Website: "http://www.stephenson.com/",
  },
  {
    id: "86",
    CustomerId: "C6763c99d0bd16D",
    FirstName: "Emma",
    LastName: "Cunningham",
    Company: "Stephens Inc",
    City: "North Jillianview",
    Country: "New Zealand",
    Phone1: "2",
    Phone2: "4",
    Email: "walter83@juarez.org",
    SubscriptionDate: "2022-05-13",
    Website: "http://www.reid.info/",
  },
];

const NumericalData = () => {
  const numericalColumns = Object.keys(data[0]).filter((columnName) =>
    data.every((entry) => !isNaN(parseFloat(entry[columnName])))
  );

  const checkDataType = (data: any[]) => {
    const isNumerical = data.every((value: number) => !isNaN(value));
    return isNumerical ? 'Numerical' : 'Categorical';
  };

  const extractNumericalValues = (columnName: string) => {
    return data.map((entry) => parseFloat(entry[columnName]) || 0);
  };

  const columnData = numericalColumns.map((columnName) => extractNumericalValues(columnName));

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Data Statistics</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th></th>
              {numericalColumns.map((columnName, index) => (
                <th key={index}>{columnName}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Mean</td>
              {columnData.map((data, index) => (
                <td key={index}>{(data.reduce((acc, val) => acc + val, 0) / data.length).toFixed(2)}</td>
              ))}
            </tr>
            <tr>
              <td>Median</td>
              {columnData.map((data, index) => (
                <td key={index}>{calculateMedian(data)}</td>
              ))}
            </tr>
            <tr>
              <td>Minimum</td>
              {columnData.map((data, index) => (
                <td key={index}>{Math.min(...data)}</td>
              ))}
            </tr>
            <tr>
              <td>Maximum</td>
              {columnData.map((data, index) => (
                <td key={index}>{Math.max(...data)}</td>
              ))}
            </tr>
            <tr>
              <td>Standard Deviation</td>
              {columnData.map((data, index) => (
                <td key={index}>{calculateStandardDeviation(data).toFixed(2)}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

const calculateMedian = (data: any[]) => {
  const sortedData = data.slice().sort((a, b) => a - b);
  const middleIndex = Math.floor(sortedData.length / 2);
  return sortedData.length % 2 === 0
    ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
    : sortedData[middleIndex];
};

const calculateStandardDeviation = (data: any[]) => {
  const mean = data.reduce((acc, val) => acc + val, 0) / data.length;
  return Math.sqrt(data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length);
};

export default NumericalData;























// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; 

// const data = [
//   {
//     id: "1",
//     CustomerId: "DD37Cf93aecA6Dc",
//     FirstName: "Sheryl",
//     LastName: "Baxter",
//     Company: "Rasmussen Group",
//     City: "East Leonard",
//     Country: "Chile",
//     Phone1: "229.077.5154",
//     Phone2: "397.884.0519x718",
//     Email: "zunigavanessa@smith.info",
//     SubscriptionDate: "2020-08-24",
//     Website: "http://www.stephenson.com/",
//   },
//   {
//     id: "86",
//     CustomerId: "C6763c99d0bd16D",
//     FirstName: "Emma",
//     LastName: "Cunningham",
//     Company: "Stephens Inc",
//     City: "North Jillianview",
//     Country: "New Zealand",
//     Phone1: "2",
//     Phone2: "(312)164-4545x2284",
//     Email: "walter83@juarez.org",
//     SubscriptionDate: "2022-05-13",
//     Website: "http://www.reid.info/",
//   },
// ];

// const NumericalData = () => {
//   const numericalColumns = Object.keys(data[0]).filter(columnName =>
//     data.every(entry => !isNaN(parseFloat(entry[columnName])))
//   );

//   const checkDataType = (data: any[]) => {
//     const isNumerical = data.every((value: number) => !isNaN(value));
//     return isNumerical ? 'Numerical' : 'Categorical';
//   };

//   const extractNumericalValues = (columnName: string) => {
//     return data.map(entry => parseFloat(entry[columnName]) || 0);
//   };

//   const columnData = numericalColumns.map(columnName => extractNumericalValues(columnName));

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Numerical Data Statistics</h2>
//       <div className="table-responsive">
//         <table className="table table-bordered">
//           <thead className="thead-dark">
//             <tr>
//               <th>Column</th>
//               <th>Mean</th>
//               <th>Median</th>
//               <th>Minimum</th>
//               <th>Maximum</th>
//               <th>Standard Deviation</th>
//             </tr>
//           </thead>
//           <tbody>
//             {numericalColumns.map((columnName, index) => (
//               <tr key={index}>
//                 <td>{columnName}</td>
//                 <td>{(columnData[index].reduce((acc, val) => acc + val, 0) / columnData[index].length).toFixed(2)}</td>
//                 <td>{calculateMedian(columnData[index])}</td>
//                 <td>{Math.min(...columnData[index])}</td>
//                 <td>{Math.max(...columnData[index])}</td>
//                 <td>{calculateStandardDeviation(columnData[index]).toFixed(2)}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// const calculateMedian = (data: any[]) => {
//   const sortedData = data.slice().sort((a, b) => a - b);
//   const middleIndex = Math.floor(sortedData.length / 2);
//   return sortedData.length % 2 === 0
//     ? (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2
//     : sortedData[middleIndex];
// };

// const calculateStandardDeviation = (data: any[]) => {
//   const mean = data.reduce((acc, val) => acc + val, 0) / data.length;
//   return Math.sqrt(data.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0) / data.length);
// };

// export default NumericalData;

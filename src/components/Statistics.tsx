// import React from "react";

// interface IStatistics {
//   key: string;
//   value: string;
// }

// export const Statistics = () => {
//   const data: IStatistics[] = [
//     { key: "Shares", value: "1,503" },
//     { key: "Clicks", value: "11,503" },
//     { key: "Virality", value: "3.55%" },
//     { key: "Counteries", value: "36" },
//   ];
//   return <div className="stat-container"></div>;
// };
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import NumericalData from './NumericalData';
import CategoricalData from './CategoricalData';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('categorical');

  const handleTabClick = (tab: React.SetStateAction<string>) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === 'categorical' ? 'active' : ''}`}
            onClick={() => handleTabClick('categorical')}
          >
            Categorical Data
          </div>
        </li>
        <li className="nav-item">
          <div
            className={`nav-link ${activeTab === 'numerical' ? 'active' : ''}`}
            onClick={() => handleTabClick('numerical')}
          >
            Numerical Data
          </div>
        </li>
      </ul>
      <div className="tab-content">
        {activeTab === 'categorical' && <CategoricalData />}
        {activeTab === 'numerical' && <NumericalData />}
      </div>
    </div>
  );
};

export default Tabs;

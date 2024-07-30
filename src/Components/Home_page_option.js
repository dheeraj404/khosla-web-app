import React from "react";
import './Home_page_option.css'; // Ensure the path to your CSS file is correct

const HomePageOption = ({ companies }) => {
  return (
    <div className="home-page-option">
      {companies.map((brandName, index) => (
        <span key={index} style={{ margin: '0 10px', whiteSpace: 'nowrap' }}>
          {index > 0 && '|'}
          <a href={`/brands/${brandName}`}>
            {brandName}
          </a>
        </span>
      ))}
    </div>
  );
};

export default HomePageOption;

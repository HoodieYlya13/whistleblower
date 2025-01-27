import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Dashboard() {
  const navigate = useNavigate();

  // Mocked pollution data
  const pollutionData = [
    { companyName: 'EcoCorp', data: [30, 45, 50, 40, 35, 60, 55] },
    { companyName: 'GreenTech', data: [20, 30, 40, 45, 25, 50, 60] },
    { companyName: 'SustainCo', data: [10, 15, 20, 25, 30, 35, 40] },
  ];

  // State to manage toggle between all companies and logged-in company only
  const [showAll, setShowAll] = useState(false);
  const [companyName, setCompanyName] = useState('');

  // Fetch logged-in user's data from localStorage and set the company name
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
    } else {
      setCompanyName(user.companyName);
    }
  }, [navigate]);

  // Filter the data to show only the logged-in company or all companies
  const chartData = {
    labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    datasets: pollutionData
      .filter(company => showAll || company.companyName === companyName)
      .map(company => ({
        label: company.companyName,
        data: company.data,
        fill: false,
        borderColor: getRandomColor(),
        tension: 0.1,
      }))
  };

  // Random color for the lines in the chart
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <>
      <div className="header p-10">
        <h2>{companyName ? `${companyName} Pollution Data Dashboard` : 'Pollution Data Dashboard'}</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <div className="dashboard-container">
        <div className="toggle-container">
          <label className="toggle-label">
            <input
              type="checkbox"
              className='mx-2'
              checked={showAll}
              onChange={() => setShowAll(!showAll)}
            />
            Show Competitors
          </label>
        </div>

        <div className="chart-container w-10/12 sm:w-[600px] sm:h-[400px]">
          <Line
            data={chartData}
            options={{
              responsive: true,
              plugins: { legend: { position: 'top' } },
              maintainAspectRatio: false,
              scales: {
                x: {
                  title: {
                    display: true,
                    text: 'Year',
                  },
                },
                y: {
                  title: {
                    display: true,
                    text: 'CO2 (Mtons)',
                  },
                  beginAtZero: true,
                },
              },
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
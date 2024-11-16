"use client";
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const skills = [
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 90 },
  { name: "JavaScript", percentage: 88 },
  { name: "React", percentage: 89 },
  { name: "TypeScript", percentage: 60 },
];

const Skills: React.FC = () => {
  // Column Chart Options
  const columnChartOptions: Highcharts.Options = {
    chart: {
      type: "column",
      backgroundColor: "#1a202c", // Tailwind's gray-950 equivalent
    },
    title: {
      text: "Proficiency by Skill (Column Chart)",
      style: {
        color: "#ffc107",
        fontSize: "24px",
        fontWeight: "bold",
      }, // Tailwind's yellow-400
    },
    xAxis: {
      categories: skills.map((skill) => skill.name),
      title: {
        text: "Skills",
        style: { color: "#eee9e8" },
      },
      labels: {
        style: { color: "#eee9e8", fontSize: "16px" },
      },
    },
    yAxis: {
      min: 0,
      max: 100,
      title: {
        text: "Proficiency (%)",
        style: { color: "#ffffff" },
      },
      labels: {
        style: { color: "#ffffff" },
      },
    },
    series: [
      {
        name: "Proficiency",
        data: skills.map((skill) => skill.percentage),
        type: "column",
        color: "#ffc107", // Tailwind's yellow-400
      },
    ],
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false, // Removes the Highcharts.com logo
    },
  };

  // Pie Chart Options
  const pieChartOptions: Highcharts.Options = {
    chart: {
      type: "pie",
      backgroundColor: "#1a202c", // Tailwind's gray-950 equivalent
      plotBackgroundColor: "#1a202c",
    },
    title: {
      text: "Proficiency Distribution (Pie Chart)",
      style: {
        color: "#ffc107",
        fontSize: "24px",
        fontWeight: "bold",
      },
    },
    tooltip: {
      headerFormat:
        "<span style='font-size:14px; color: #ffc107'>{point.key}</span><br/>",
      pointFormat:
        "<span style='font-size:12px; color: #fff'>Proficiency: </span><b>{point.y}%</b>",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      borderColor: "#ffc107",
      borderRadius: 5,
      style: {
        color: "#fff",
        fontSize: "14px",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: "pointer",
        dataLabels: {
          enabled: true,
          format: "{point.name}: {point.percentage:.1f}%",
          style: {
            color: "#ffffff",
            fontSize: "14px",
            textOutline: "none",
          },
        },
      },
    },
    series: [
      {
        name: "Proficiency",
        type: "pie",
        selected: true,
        data: skills.map((skill) => ({
          name: skill.name,
          y: skill.percentage,
        })),
        colors: ["#ffc107", "#ff5722", "#4caf50", "#2196f3", "#9c27b0"], // Custom colors for each slice
      },
    ],
    credits: {
      enabled: false, // Removes the Highcharts.com logo
    },
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center space-y-12">
      {/* Column Chart */}
      <div className="w-full max-w-4xl p-6">
        <HighchartsReact highcharts={Highcharts} options={columnChartOptions} />
      </div>
      {/* Pie Chart */}
      <div className="w-full max-w-4xl p-6">
        <HighchartsReact highcharts={Highcharts} options={pieChartOptions} />
      </div>
    </div>
  );
};

export default Skills;

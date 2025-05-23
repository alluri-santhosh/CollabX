import React from "react";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          🚀 Welcome to your Dashboard!
        </h1>
        <p className="text-gray-600 text-lg">
          You're now signed in to <span className="font-semibold">CollabX</span>.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;

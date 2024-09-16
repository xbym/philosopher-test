import React from 'react';

interface ResultCardProps {
  philosopher: string;
  description: string;
  onRetake: () => void;
}

const ResultCard: React.FC<ResultCardProps> = ({ philosopher, description, onRetake }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-4 sm:p-8 max-w-2xl mx-auto mt-4 sm:mt-10 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-4 text-gray-800">你最像的哲学家是:</h2>
      <h3 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-blue-600">{philosopher}</h3>
      <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">{description}</p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm sm:text-base"
        onClick={onRetake}
      >
        重新测试
      </button>
    </div>
  );
};

export default ResultCard;
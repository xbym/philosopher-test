import React from 'react';

interface WelcomePageProps {
  onStart: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onStart }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-4 sm:p-8 max-w-2xl mx-auto mt-4 sm:mt-10 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">欢迎来到哲学家测试</h1>
      <p className="text-gray-600 mb-6 text-base sm:text-lg">
        通过回答一系列问题,发现你最像哪位著名哲学家。准备好开始这段哲学之旅了吗?
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-sm sm:text-base"
        onClick={onStart}
      >
        开始测试
      </button>
    </div>
  );
};

export default WelcomePage;
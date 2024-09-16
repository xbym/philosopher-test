import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 shadow-lg">
      <h1 className="text-3xl font-bold text-center">哲学家测试</h1>
      <p className="text-lg text-center mt-2">发现你最像哪位哲学家</p>
    </header>
  );
};

export default Header;
import React from 'react';
import { Option } from '../data/questions';

interface QuestionCardProps {
  question: string;
  options: Option[];
  onSelect: (optionId: string) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, options, onSelect }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-4 sm:p-8 max-w-2xl mx-auto mt-4 sm:mt-10">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800">{question}</h2>
      <div className="space-y-3 sm:space-y-4">
        {options.map((option) => (
          <button
            key={option.id}
            className="w-full text-left p-3 sm:p-4 rounded-lg border border-gray-300 hover:bg-blue-50 hover:border-blue-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            onClick={() => onSelect(option.id)}
          >
            {option.text}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
import React, { useState, useCallback, useMemo } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import WelcomePage from './components/WelcomePage';
import QuestionCard from './components/QuestionCard';
import ResultCard from './components/ResultCard';
import { questions, Question } from './data/questions';
import { philosophers, Philosopher } from './data/philosophers';

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(-1); // -1 表示欢迎页
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion: Question | null = currentQuestionIndex >= 0 ? questions[currentQuestionIndex] : null;

  const handleStart = useCallback(() => {
    setCurrentQuestionIndex(0);
  }, []);

  const handleSelect = useCallback((optionId: string) => {
    setAnswers(prevAnswers => [...prevAnswers, optionId]);
    setCurrentQuestionIndex(prevIndex => {
      if (prevIndex < questions.length - 1) {
        return prevIndex + 1;
      } else {
        setShowResult(true);
        return prevIndex;
      }
    });
  }, []);

  const handleRetake = useCallback(() => {
    setCurrentQuestionIndex(-1);
    setAnswers([]);
    setShowResult(false);
  }, []);

  const calculateResult = useCallback((): Philosopher => {
    const philosopherScores: {[key: string]: number} = {};
    
    answers.forEach((answerId, index) => {
      const question = questions[index];
      const selectedOption = question.options.find(option => option.id === answerId);
      if (selectedOption) {
        philosopherScores[selectedOption.philosopherId] = (philosopherScores[selectedOption.philosopherId] || 0) + 1;
      }
    });

    const topPhilosopherId = Object.entries(philosopherScores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    return philosophers.find(p => p.id === topPhilosopherId) || philosophers[0];
  }, [answers]);

  const result = useMemo(() => showResult ? calculateResult() : null, [showResult, calculateResult]);

  return (
    <div className="App flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        {currentQuestionIndex === -1 ? (
          <WelcomePage onStart={handleStart} />
        ) : !showResult ? (
          currentQuestion && (
            <QuestionCard
              question={currentQuestion.text}
              options={currentQuestion.options}
              onSelect={handleSelect}
            />
          )
        ) : result && (
          <ResultCard
            philosopher={result.name}
            description={result.description}
            onRetake={handleRetake}
          />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;

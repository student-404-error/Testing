import { Layout } from './components/layout/Layout';
import { StartScreen } from './components/StartScreen';
import { QuestionScreen } from './components/QuestionScreen';
import { ResultScreen } from './components/ResultScreen';
import { useQuiz } from './hooks/useQuiz';

function App() {
  const {
    currentStep,
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    startQuiz,
    submitAnswer,
    result,
    scores,
    restart
  } = useQuiz();

  return (
    <Layout>
      {currentStep === 'START' && (
        <StartScreen onStart={startQuiz} />
      )}

      {currentStep === 'QUIZ' && currentQuestion && (
        <QuestionScreen
          question={currentQuestion}
          currentStep={currentQuestionIndex}
          totalSteps={totalQuestions}
          onAnswer={submitAnswer}
        />
      )}

      {currentStep === 'RESULT' && result && (
        <ResultScreen
          result={result}
          scores={scores}
          onRestart={restart}
        />
      )}
    </Layout>
  );
}

export default App;

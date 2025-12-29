import { useState, useCallback } from 'react';
import { QUESTIONS } from '../data/questions';
import { RESULTS } from '../data/results';
import type { ResultType } from '../data/types';

export const useQuiz = () => {
    const [currentStep, setCurrentStep] = useState<'START' | 'QUIZ' | 'RESULT'>('START');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [scores, setScores] = useState<Record<ResultType, number>>({
        SOLO: 0,
        SOLO_HELL: 0,
        TRANSIT_LOVE: 0,
        HEART_SIGNAL: 0,
        BAD_ROMANCE: 0,
        WANT_DATING: 0,
        NOONA: 0,
        '72_HOURS': 0,
    });

    const startQuiz = useCallback(() => {
        setCurrentStep('QUIZ');
        setCurrentQuestionIndex(0);
        setScores({
            SOLO: 0,
            SOLO_HELL: 0,
            TRANSIT_LOVE: 0,
            HEART_SIGNAL: 0,
            BAD_ROMANCE: 0,
            WANT_DATING: 0,
            NOONA: 0,
            '72_HOURS': 0,
        });
    }, []);

    const submitAnswer = useCallback((answerScores: Partial<Record<ResultType, number>>) => {
        setScores(prev => {
            const newScores = { ...prev };
            Object.entries(answerScores).forEach(([key, value]) => {
                if (value) {
                    newScores[key as ResultType] = (newScores[key as ResultType] || 0) + value;
                }
            });
            return newScores;
        });

        if (currentQuestionIndex < QUESTIONS.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setCurrentStep('RESULT');
        }
    }, [currentQuestionIndex]);

    const getResult = useCallback(() => {
        const sortedScores = Object.entries(scores).sort(([, a], [, b]) => b - a);
        const topResultId = sortedScores[0][0] as ResultType;
        return RESULTS.find(r => r.id === topResultId) || RESULTS[0];
    }, [scores]);

    const restart = useCallback(() => {
        startQuiz();
    }, [startQuiz]);

    return {
        currentStep,
        currentQuestion: QUESTIONS[currentQuestionIndex],
        currentQuestionIndex,
        totalQuestions: QUESTIONS.length,
        startQuiz,
        submitAnswer,
        result: getResult(),
        scores,
        restart,
    };
};

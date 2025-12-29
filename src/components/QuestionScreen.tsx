import React from 'react';
import type { Question } from '../data/types';

interface QuestionScreenProps {
    question: Question;
    currentStep: number;
    totalSteps: number;
    onAnswer: (scores: any) => void;
}

export const QuestionScreen: React.FC<QuestionScreenProps> = ({ question, currentStep, totalSteps, onAnswer }) => {
    const progress = ((currentStep + 1) / totalSteps) * 100;

    return (
        <div className="fade-in" key={question.id} style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Progress Bar */}
            <div style={{ width: '100%', height: '6px', backgroundColor: '#f1f2f6', borderRadius: '3px', marginBottom: '2rem' }}>
                <div style={{ width: `${progress}%`, height: '100%', backgroundColor: 'var(--primary)', borderRadius: '3px', transition: 'width 0.3s ease' }} />
            </div>

            <div style={{ marginBottom: '1rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                Q{currentStep + 1}
            </div>

            <h2 style={{ fontSize: '1.5rem', marginBottom: '3rem', minHeight: '3.6rem' }}>
                {question.text}
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {question.answers.map((answer, idx) => (
                    <button
                        key={idx}
                        onClick={() => onAnswer(answer.scores)}
                        style={{
                            padding: '1.2rem',
                            backgroundColor: '#f8f9fa',
                            border: '2px solid transparent',
                            borderRadius: '12px',
                            fontSize: '1rem',
                            color: 'var(--text-main)',
                            textAlign: 'left',
                            transition: 'all 0.2s',
                            cursor: 'pointer',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.backgroundColor = '#fff0f1';
                            e.currentTarget.style.borderColor = 'var(--primary)';
                            e.currentTarget.style.color = 'var(--primary)';
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.backgroundColor = '#f8f9fa';
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.style.color = 'var(--text-main)';
                        }}
                    >
                        {answer.text}
                    </button>
                ))}
            </div>
        </div>
    );
};

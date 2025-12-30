import React from 'react';
import type { Result, ResultType } from '../data/types';
import { RefreshCw, Share2 } from 'lucide-react';
import { RESULTS } from '../data/results';

interface ResultScreenProps {
    result: Result;
    scores: Record<ResultType, number>;
    onRestart: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({ result, scores, onRestart }) => {
    const maxScore = Math.max(...Object.values(scores));

    return (
        <div className="fade-in" style={{ padding: '2rem', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ marginBottom: '1.5rem', marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#fff0f1', color: 'var(--primary)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 'bold' }}>
                나의 연애 프로그램 유형은?
            </div>

            <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>
                {result.title}
            </h1>

            <p style={{ fontSize: '1rem', color: 'var(--primary)', fontWeight: 'bold', marginBottom: '1.5rem' }}>
                {result.tagline}
            </p>

            <div style={{
                width: '100%',
                aspectRatio: '16/9',
                backgroundColor: '#f1f2f6',
                borderRadius: '16px',
                marginBottom: '2rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#a4b0be',
                fontSize: '0.9rem'
            }}>
                {/* Placeholder for Result Image */}
                {result.image ? <img src={result.image} alt={result.title} width={"100%"} /> : '이미지 준비중'}
            </div>

            <div style={{ width: '100%', textAlign: 'left', marginBottom: '2rem' }}>
                <div style={{ padding: '1.5rem', backgroundColor: '#f8f9fa', borderRadius: '12px', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-main)' }}>📌 한 줄 요약</h3>
                    <p style={{ color: 'var(--text-sub)', lineHeight: '1.5' }}>{result.summary}</p>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '1rem', color: 'var(--text-main)' }}>💌 연애 스타일</h3>
                    <div style={{ color: 'var(--text-sub)', lineHeight: '1.6', whiteSpace: 'pre-wrap' }}>
                        {result.style}
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                    <div style={{ padding: '1rem', backgroundColor: '#e3f2fd', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '0.9rem', color: '#1565c0', marginBottom: '0.5rem' }}>💘 찰떡 궁합</h4>
                        <p style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#0d47a1' }}>{result.match}</p>
                    </div>
                    <div style={{ padding: '1rem', backgroundColor: '#ffebee', borderRadius: '12px' }}>
                        <h4 style={{ fontSize: '0.9rem', color: '#c62828', marginBottom: '0.5rem' }}>🚨 주의보</h4>
                        <p style={{ fontSize: '0.95rem', fontWeight: 'bold', color: '#b71c1c' }}>{result.caution}</p>
                    </div>
                </div>
            </div>

            {/* Score Chart */}
            <div style={{ width: '100%', marginBottom: '3rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--text-main)' }}>유형별 점수 분석</h3>
                <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '200px', gap: '8px' }}>
                    {RESULTS.map((r) => {
                        const score = scores[r.id] || 0;
                        const heightPercentage = maxScore > 0 ? (score / maxScore) * 100 : 0;
                        const isSelected = r.id === result.id;

                        return (
                            <div key={r.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, height: '100%', justifyContent: 'flex-end' }}>
                                <div
                                    style={{
                                        fontSize: '0.75rem',
                                        marginBottom: '4px',
                                        fontWeight: 'bold',
                                        color: isSelected ? 'var(--primary)' : '#a4b0be'
                                    }}
                                >
                                    {score}
                                </div>
                                <div style={{
                                    width: '100%',
                                    height: `${Math.max(heightPercentage, 2)}%`,
                                    backgroundColor: isSelected ? 'var(--primary)' : '#dfe4ea',
                                    borderRadius: '4px',
                                    transition: 'height 0.5s ease'
                                }} />
                                <div style={{
                                    marginTop: '8px',
                                    fontSize: '0.7rem',
                                    color: '#57606f',
                                    writingMode: 'horizontal-tb',
                                    textOrientation: 'mixed',
                                    maxHeight: '80px',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    textAlign: 'left'
                                }}>
                                    {r.title}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', width: '100%' }}>
                <button
                    onClick={onRestart}
                    style={{
                        flex: 1,
                        padding: '1rem',
                        backgroundColor: 'var(--text-main)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem'
                    }}
                >
                    <RefreshCw size={18} />
                    다시하기
                </button>
                <button
                    style={{
                        flex: 1,
                        padding: '1rem',
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        fontWeight: 'bold',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        cursor: 'pointer'
                    }}
                    onClick={async () => {
                        const shareData = {
                            title: '연애 프로그램 유형 테스트',
                            text: `나의 연애 프로그램 유형은? [${result.title}] ${result.tagline} \n테스트 하러가기 👉`,
                            url: window.location.href
                        };

                        if (navigator.share) {
                            try {
                                await navigator.share(shareData);
                            } catch (err) {
                                console.log('Share canceled');
                            }
                        } else {
                            try {
                                await navigator.clipboard.writeText(window.location.href);
                                alert('링크가 복사되었습니다!');
                            } catch (err) {
                                alert('링크 복사에 실패했습니다.');
                            }
                        }
                    }}
                >
                    <Share2 size={18} />
                    공유하기
                </button>
            </div>
        </div>
    );
};

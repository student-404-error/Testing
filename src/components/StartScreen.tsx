import React from 'react';
import { Heart } from 'lucide-react';

interface StartScreenProps {
    onStart: () => void;
}

export const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
    return (
        <div className="fade-in" style={{ padding: '2rem', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ marginBottom: '2rem', color: 'var(--primary)' }}>
                <Heart size={64} fill="var(--primary)" />
            </div>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
                나에게 맞는<br />연애프로그램
            </h1>
            <p style={{ color: 'var(--text-sub)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                내 연애 스타일로 알아보는<br />
                운명의 리얼리티 쇼 찾기
            </p>
            <button
                onClick={onStart}
                style={{
                    backgroundColor: 'var(--primary)',
                    color: 'white',
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    padding: '1rem 3rem',
                    borderRadius: '50px',
                    boxShadow: '0 4px 15px rgba(255, 71, 87, 0.4)',
                    transition: 'transform 0.2s',
                }}
                onMouseDown={e => e.currentTarget.style.transform = 'scale(0.95)'}
                onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >
                테스트 시작하기
            </button>
        </div>
    );
};

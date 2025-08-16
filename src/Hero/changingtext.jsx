import React, { useState, useEffect } from 'react';

const ChangingText = () => {
    const texts = ['Frontend Developer','MERN Stack Explorer','Data Science Student','Turning Ideas into Code']
    const [displayText, setDisplayText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = texts[index];

        let timeout;

        if (!isDeleting && charIndex < currentText.length) {
            timeout = setTimeout(() => {
                setDisplayText(prev => prev + currentText.charAt(charIndex));
                setCharIndex(charIndex + 1);
            }, 100);
        } 
        else if (isDeleting && charIndex > 0) {
            timeout = setTimeout(() => {
                setDisplayText(prev => prev.slice(0, -1));
                setCharIndex(charIndex - 1);
            }, 50);
        } 
        else if (!isDeleting && charIndex === currentText.length) {
            timeout = setTimeout(() => setIsDeleting(true), 1000);
        } 
        else if (isDeleting && charIndex === 0) {
            setIsDeleting(false);
            setIndex((index + 1) % texts.length);
        }

        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, index, texts]);

    return (
        <h1>{displayText}|</h1>
    );
};

export default ChangingText;

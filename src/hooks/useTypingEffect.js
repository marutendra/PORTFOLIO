import { useEffect, useState } from "react";

export default function useTypingEffect(words, typingSpeed = 70, pause = 1300) {
  const [wordIndex, setWordIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const isComplete = letterIndex === currentWord.length;
    const isEmpty = letterIndex === 0;

    const timeout = setTimeout(
      () => {
        if (!deleting && isComplete) {
          setDeleting(true);
          return;
        }

        if (deleting && isEmpty) {
          setDeleting(false);
          setWordIndex((index) => (index + 1) % words.length);
          return;
        }

        setLetterIndex((count) => count + (deleting ? -1 : 1));
      },
      !deleting && isComplete ? pause : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [deleting, letterIndex, pause, typingSpeed, wordIndex, words]);

  return words[wordIndex].slice(0, letterIndex);
}

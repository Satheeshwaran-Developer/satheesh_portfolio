import { useEffect, useState } from "react";

export default function TypewriterText({ texts }: any) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!reverse) {
        setSubIndex((prev) => prev + 1);
        if (subIndex === texts[index].length) {
          setReverse(true);
        }
      } else {
        setSubIndex((prev) => prev - 1);
        if (subIndex === 0) {
          setReverse(false);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 100);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  return (
    <span className="font-mono text-blue-400">
      {texts[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}
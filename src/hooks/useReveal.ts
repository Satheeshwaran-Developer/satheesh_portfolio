import { useEffect, useRef, useState } from "react";

export default function useReveal() {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setShow(true);
    });
    if (ref.current) obs.observe(ref.current);
  }, []);

  return { ref, show };
}
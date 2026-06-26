import { useEffect, useRef, useState } from "react";

export default function Stack() {
  const cards = [1, 2, 3, 4];

  const refs = useRef([]);
  const [stuckCards, setStuckCards] = useState({});

  useEffect(() => {
    const observers = refs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setStuckCards((prev) => ({
            ...prev,
            [index]: entry.boundingClientRect.top <= 100,
          }));
        },
        {
          threshold: 1,
        }
      );

      if (ref) observer.observe(ref);

      return observer;
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <div onClick={()=>console.log(stuckCards)
    }>
      {cards.map((item, index) => (
        <div

          key={item}
          ref={(el) => (refs.current[index] = el)}
          className={`h-screen ${
            stuckCards[index] ? `sticky top-0 z-${cards.length-index}` : ""
          }`}
          style={{
            transform: `scale(${1 - index * 0.05})`,
          }}
        >
          <div className="h-[500px] bg-white border rounded-xl">
            Card {item}
          </div>
        </div>
      ))}
    </div>
  );
}
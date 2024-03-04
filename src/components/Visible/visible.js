import { useEffect, useRef, useState } from "react";

const VisibilityControl = ({ children, onVisible }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (!hasBeenVisible && onVisible) {
            onVisible();
            setHasBeenVisible(true);
          }
        } else {
          setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5, // Ubah nilai threshold sesuai kebutuhan
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref, onVisible, hasBeenVisible]);

  return <div ref={ref}>{isVisible || hasBeenVisible ? children : null}</div>;
};

export default VisibilityControl;

import { useState, useRef, useEffect } from "react"

export default function useOnScreen(ref) {
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        observerRef.current = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting)
        }, {
            threshold: 0.9
        });
    }, []);

    useEffect(() => {
        observerRef.current.observe(ref.current);

        return () => {
            observerRef.current.disconnect();
        };
    }, [ref]);

    return isVisible;
}

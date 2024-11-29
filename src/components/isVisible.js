import React from "react"
import { useState, useMemo, useEffect } from "react"

export default function useOnScreen(ref) {

    const [isIntersecting, setIntersecting] = useState(false)

    const observer = useMemo(() => new IntersectionObserver(
        ([entry]) => setIntersecting(entry.isIntersecting),
        {
            threshold: 0.9
        }
    ), [ref, 1.0])


    useEffect(() => {
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return isIntersecting
}
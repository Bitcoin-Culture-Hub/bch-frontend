import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect } from "react";
import useArchtype from "./QuizContext";
import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

type TestProps = {
    selection: string;
};

// Register DrawSVGPlugin
gsap.registerPlugin(DrawSVGPlugin);

const ArchtypeProgress: React.FC<TestProps> = ({ selection }) => {
    const value = useArchtype((state) => state.archtypes);
    useEffect(() => {
        const allPaths = document.querySelectorAll<SVGPathElement>('[id^="segment-"]');
        allPaths.forEach((path) => {
            gsap.set(path, { drawSVG: "0%" });
        });
    }, []);
    useEffect(() => {
        if (!selection) return;

        const segments = document.getElementById(`segment-${selection}`);
        console.log(segments)
        let percent = `${value[selection] * 20}%`

        gsap.to(`#segment-${selection}`, { drawSVG: `${percent}`, duration: 1, ease: "power1.inOut" });
        let point = value[selection]

    }, [selection, value]);

    return (
        <div className="w-1/2 h-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="4.6 8 3 2">
                <path
                    d="M 6 10 Q 5.773 9.54 5.387 9.359 Q 5 9.2 4.902 8.835 Q 4.867 8.691 4.864 8.558 Q 4.865 8.463 4.865 8.383 L 4.862 8.257"
                    stroke="#ccc"
                    strokeWidth="0.05"
                    fill="none"
                />
                <path
                    d="M 6 10 Q 5.882 9.458 5.656 9.306 Q 5.423 9.154 5.381 9.011 Q 5.353 8.918 5.347 8.768 Q 5.339 8.606 5.341 8.438 L 5.341 8.274"
                    stroke="#ccc"
                    strokeWidth="0.05"
                    fill="none"
                />
                <path
                    d="M 6 10 L 6 9.5 L 6 9.2 L 6.001 8.801 L 6 8.453 L 6 8.26"
                    stroke="#ccc"
                    strokeWidth="0.05"
                    fill="none"
                />
                <path
                    d="M 6 10 Q 6.12 9.459 6.362 9.305 Q 6.584 9.151 6.627 9.026 Q 6.657 8.926 6.676 8.752 Q 6.689 8.611 6.701 8.441 Q 6.707 8.319 6.705 8.278"
                    stroke="#ccc"
                    strokeWidth="0.05"
                    fill="none"
                />
                <path
                    d="M 6 10 Q 6.251 9.532 6.658 9.312 Q 7.021 9.172 7.097 8.748 Q 7.119 8.613 7.126 8.506 Q 7.129 8.406 7.126 8.337 L 7.124 8.266"
                    stroke="#ccc"
                    strokeWidth="0.05"
                    fill="none"

                />
                <path
                    id="segment-HODLer"
                    d="M 6 10 Q 5.773 9.54 5.387 9.359 Q 5 9.2 4.902 8.835 Q 4.867 8.691 4.864 8.558 Q 4.865 8.463 4.865 8.383 L 4.862 8.257"
                    stroke="orange"
                    strokeWidth="0.05"
                    fill="none"
                />
                <path
                    id="segment-Creator"
                    d="M 6 10 Q 5.882 9.458 5.656 9.306 Q 5.423 9.154 5.381 9.011 Q 5.353 8.918 5.347 8.768 Q 5.339 8.606 5.341 8.438 L 5.341 8.274"
                    stroke="orange"
                    strokeWidth="0.05"
                    fill="none"
                />
                <path
                    id="segment-Explorer"
                    d="M 6 10 L 6 9.5 L 6 9.2 L 6.001 8.801 L 6 8.453 L 6 8.26"
                    stroke="orange"
                    strokeWidth="0.05"
                    fill="none"
                />
                <path
                    id="segment-Maximalist"
                    d="M 6 10 Q 6.12 9.459 6.362 9.305 Q 6.584 9.151 6.627 9.026 Q 6.657 8.926 6.676 8.752 Q 6.689 8.611 6.701 8.441 Q 6.707 8.319 6.705 8.278"
                    stroke="orange"
                    strokeWidth="0.05"
                    fill="none"
                />
                <path
                    id="segment-Begninner"
                    d="M 6 10 Q 6.251 9.532 6.658 9.312 Q 7.021 9.172 7.097 8.748 Q 7.119 8.613 7.126 8.506 Q 7.129 8.406 7.126 8.337 L 7.124 8.266"
                    stroke="orange"
                    strokeWidth="0.05"
                    fill="none"
                    
                />
            </svg>
        </div>
    );
};

export default ArchtypeProgress;

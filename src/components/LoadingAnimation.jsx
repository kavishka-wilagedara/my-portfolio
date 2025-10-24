import React, { useEffect, useState } from "react";

export default function LoadingAnimation() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 15;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // optional: you can hide loader here or change text
          }, 500);
          return 100;
        }
        return next;
      });
    }, 200);
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-raibow overflow-hidden">
      {/* Loader Content */}
      <div className="flex flex-col items-center gap-10">
        {/* Shapes Container */}
        <div className="relative w-52 h-52">
          <div className="absolute w-30 h-30 top-10 left-10 rounded-lg bg-linear-to-br from-[#667eea] to-[#764ba2] animate-morph" />
          <div className="absolute w-24 h-24 top-5 left-15 rounded-lg bg-linear-to-br from-[#f093fb] to-[#f5576c] opacity-80 animate-morph animation-delay-200" />
          <div className="absolute w-22 h-22 top-15 left-7 rounded-lg bg-linear-to-br from-[#4facfe] to-[#00f2fe] opacity-60 animate-morph animation-delay-400" />

          {/* Orbiting Particles */}
          <div className="absolute top-1/2 left-1/2 w-44 h-44 -translate-x-1/2 -translate-y-1/2 rounded-full animate-orbit">
            <div className="absolute w-2 h-2 bg-[#667eea] rounded-full shadow-[0_0_20px_#667eea] top-0 left-1/2 -translate-x-1/2" />
            <div className="absolute w-2 h-2 bg-[#f5576c] rounded-full shadow-[0_0_20px_#f5576c] top-1/2 right-0 -translate-y-1/2" />
            <div className="absolute w-2 h-2 bg-[#00f2fe] rounded-full shadow-[0_0_20px_#00f2fe] bottom-0 left-1/2 -translate-x-1/2" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center text-center mt-6 sm:mt-8 px-4">
          {/* Loading Text */}

          <div className="absolute bottom-0 left-0 w-full h-0.5 sm:h-1 bg-linear-to-r from-teal-400 via-blue-500 to-indigo-600 animate-shimmer"></div>

          {/* Name */}
          <p className="text-black text-2xl sm:text-3xl md:text-4xl font-bold tracking-wide mb-1 sm:mb-2">
            Kavishka Wilagedara
          </p>

          {/* Title */}
          <span className="text-gray-700 text-lg sm:text-xl md:text-2xl animate-pulse">
            Full-Stack Developer
          </span>
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        @keyframes morph {
          0%,
          100% {
            border-radius: 20%;
            transform: rotate(0deg) scale(1);
          }
          25% {
            border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
            transform: rotate(90deg) scale(1.1);
          }
          50% {
            border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
            transform: rotate(180deg) scale(0.9);
          }
          75% {
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
            transform: rotate(270deg) scale(1.05);
          }
        }
        .animate-morph {
          animation: morph 3s ease-in-out infinite;
        }
        .animation-delay-200 {
          animation-delay: 0.4s;
        }
        .animation-delay-400 {
          animation-delay: 0.8s;
        }

        @keyframes orbit {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-orbit {
          animation: orbit 4s linear infinite;
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }

        @keyframes gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }

        .bg-grid {
          background-image: linear-gradient(
              rgba(102, 126, 234, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(102, 126, 234, 0.1) 1px,
              transparent 1px
            );
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </div>
  );
}

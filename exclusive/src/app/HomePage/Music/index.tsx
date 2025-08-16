import React, { useEffect, useState, useMemo } from "react";
import Image from "next/image";

const MusicBanner: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const countdownDate = useMemo(() => {
        const date = new Date();
        date.setDate(date.getDate() + 5);
        return date;
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate.getTime() - now;
            if (distance < 0) {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                clearInterval(intervalId);
                return;
            }
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);
        return () => clearInterval(intervalId);
    }, [countdownDate]);

    const pad = (num: number) => num.toString().padStart(2, "0");

    return (
        <section className="w-3/4 m-auto mt-25 relative bg-black text-white min-h-[360px] flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 gap-8 md:gap-16 overflow-hidden">
            <div className="flex flex-col gap-6 max-w-xl w-full">
                <span className="text-green-500 font-semibold font-poppins">Categories</span>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight font-poppins">
                    Enhance Your <br /> Music Experience
                </h1>
                <div className="flex gap-6">
                    {[
                        { label: "Days", value: pad(timeLeft.days) },
                        { label: "Hours", value: pad(timeLeft.hours) },
                        { label: "Minutes", value: pad(timeLeft.minutes) },
                        { label: "Seconds", value: pad(timeLeft.seconds) },
                    ].map(({ label, value }) => (
                        <div
                            key={label}
                            className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-white text-black font-bold shadow-lg font-poppins"
                        >
                            <span className="text-lg">{value}</span>
                            <span className="text-xs font-normal uppercase">{label}</span>
                        </div>
                    ))}
                </div>
                <button className="mt-4 px-14 py-5 bg-green-500 text-2xl hover:bg-white rounded-md font-semibold font-poppins hover:text-green-600 transition-colors duration-300 w-max">
                    Buy Now!
                </button>
            </div>
            <div className="relative w-full max-w-lg">
                <Image
                    src="/pictures/speakerr.png"
                    alt="JBL Speaker"
                    width={500}
                    height={500}
                    className=""
                    style={{ filter: "drop-shadow(0 0 30px rgba(0,0,0,0.9))" }}
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-transparent pointer-events-none" />
            </div>
        </section>
    );
};

export default MusicBanner;
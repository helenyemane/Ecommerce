export default function Service() {
  return (
    <div className="flex justify-center items-start gap-20 py-6 mt-25 mb-30 bg-white">
      {}
      <div className="flex flex-col items-center min-w-[270px]">
        <span className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-300 shadow">
          {}
          <svg
            className="w-12 h-12 fill-black"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="black" />
            <path
              d="M9 17a2 2 0 104 0h-4zM4 16v-4h2v4h10v-4h2v4"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 16h16v-5a2 2 0 00-2-2H6a2 2 0 00-2 2v5z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="mt-4 font-extrabold text-[1.12rem] text-center">
          FREE AND FAST DELIVERY
        </h3>
        <p className="text-[0.96rem] text-center text-gray-700 mt-1">
          Free delivery for all orders over $140
        </p>
      </div>

      {}
      <div className="flex flex-col items-center min-w-[270px]">
        <span className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-300 shadow">
          {}
          <svg
            className="w-12 h-12 fill-black"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="black" />
            <path
              d="M7 17v-5a5 5 0 0110 0v5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
            <circle cx="7" cy="17" r="1.5" fill="white" />
            <circle cx="17" cy="17" r="1.5" fill="white" />
          </svg>
        </span>
        <h3 className="mt-4 font-extrabold text-[1.12rem] text-center">
          24/7 CUSTOMER SERVICE
        </h3>
        <p className="text-[0.96rem] text-center text-gray-700 mt-1">
          Friendly 24/7 customer support
        </p>
      </div>

      {}
      <div className="flex flex-col items-center min-w-[270px]">
        <span className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-300 shadow">
          {}
          <svg
            className="w-12 h-12 fill-black"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="12" fill="black" />
            <path
              d="M8 12.5l3 3 5-5"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        <h3 className="mt-4 font-extrabold text-[1.12rem] text-center">
          MONEY BACK GUARANTEE
        </h3>
        <p className="text-[0.96rem] text-center text-gray-700 mt-1">
          We return money within 30 days
        </p>
      </div>
    </div>
  );
}

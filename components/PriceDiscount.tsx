"use client"

export default function PriceDiscount({ isHero = false }) {
  if (isHero) {
    return (
      <div className="bg-green-100 p-3 rounded-lg border-2 border-green-500 shadow-lg">
        <div className="flex items-center justify-center">
          <div className="bg-red-500 text-white px-3 py-1 rounded-md text-lg font-bold animate-pulse">
            AKČNÍ NABÍDKA
          </div>
        </div>
        <div className="flex justify-center items-center gap-4 mt-2">
          <span className="text-gray-500 line-through text-xl">890 Kč</span>
          <span className="text-3xl font-extrabold text-green-600">749 Kč</span>
        </div>
        <div className="text-sm text-center text-gray-700 font-semibold mt-1">
          Omezená nabídka na sezónu 2025
        </div>
      </div>
    )
  }

  return (
    <div className="relative inline-block">
      <div className="absolute -top-4 -right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg z-10 animate-pulse">
        -16%
      </div>
      <div className="flex flex-col items-center">
        <div className="flex items-baseline gap-3">
          <span className="text-gray-500 line-through text-lg">890 Kč</span>
          <span className="text-2xl font-bold text-green-600">749 Kč</span>
        </div>
        <div className="text-xs text-center font-medium text-gray-600 mt-1">
          Ušetříte 141 Kč při nákupu nyní
        </div>
      </div>
    </div>
  )
} 
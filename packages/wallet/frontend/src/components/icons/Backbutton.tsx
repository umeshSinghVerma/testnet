import React from 'react'
import { useRouter } from 'next/router'
export default function Backbutton() {
  const router = useRouter()
  return (
    <button
      className="flex-start mr-5 mt-[5px] flex h-4 w-4 scale-125 items-center active:scale-100 md:hidden"
      onClick={() => {
        // router.push(location)
        router.back()
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        version="1.1"
        x="0px"
        y="0px"
        viewBox="0 0 78.415 98.02"
        enableBackground="new 0 0 78.415 78.416"
        xmlSpace="preserve"
      >
        <g>
          <g>
            <path
              fill="#003A2F"
              d="M0,39.208c0,21.654,17.554,39.208,39.208,39.208c21.653,0,39.207-17.554,39.207-39.208S60.861,0,39.208,0    C17.554,0,0,17.554,0,39.208z M24.924,36.816l18.511-18.512c0.66-0.66,1.525-0.99,2.391-0.99s1.731,0.33,2.391,0.99    c1.316,1.319,1.32,3.458,0,4.777L32.088,39.209l16.128,16.125c1.316,1.32,1.316,3.459,0,4.777c-1.32,1.32-3.461,1.32-4.775,0    L24.924,41.598C23.604,40.278,23.604,38.136,24.924,36.816z"
            />
          </g>
        </g>
      </svg>
    </button>
  )
}

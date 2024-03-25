import React from "react";

type RangeComponentProps = {
    rangeInPercent: number;
}

function RangeComponent({rangeInPercent}: RangeComponentProps) {
    return (
        <>
            <RangeBar greenoffset={rangeInPercent}/>
        </>
    )
}


type RangeBarProps = {
        greenoffset:  number | string | undefined;
}

function RangeBar({greenoffset}: RangeBarProps) {
    console.log(greenoffset);
    return (
        <svg width="338" height="29" viewBox="0 0 338 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="338" height="29" rx="10" fill="url(#paint0_linear_188_28)" />
            <defs>
                <linearGradient id="paint0_linear_188_28" x1="0" y1="14.5" x2="338" y2="14.5" gradientUnits="userSpaceOnUse">
                    <stop offset={greenoffset} stop-color="#65FF80" />
                    <stop offset={1} stop-color="white" />
                </linearGradient>
            </defs>
        </svg>
    )
}
/* <svg
    {...props}
    width="346"
    height="37"
    viewBox="0 0 346 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <g filter="url(#filter0_d_188_26)">
        <rect x="4" width="338" height="29" rx="10" fill="white" />
        <rect x="4.5" y="0.5" width="337" height="28" rx="9.5" stroke="black" />
    </g>
    <defs>
        <filter id="filter0_d_188_26" x="0" y="0" width="346" height="37" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_188_26" />
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_188_26" result="shape" />
        </filter>
    </defs>
    </svg> */
export default RangeComponent;

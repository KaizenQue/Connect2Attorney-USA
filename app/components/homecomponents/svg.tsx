import React from "react";
export const BlueShapeSVG = React.memo(() => (
  <svg width="0" height="0" aria-hidden>
    <defs>
      <clipPath id="blue-shape-clip-hero" clipPathUnits="objectBoundingBox">
        <path
          transform="scale(0.00114155 0.00155521)"
          d="M0 30C0 13.4314 13.4315 0 30 0H846C862.569 0 876 13.4315 876 30V246.743C876 252.713 873.333 258.372 868.727 262.171L627.503 461.171C622.897 464.971 620.23 470.629 620.23 476.599V613C620.23 629.569 606.799 643 590.23 643H151.809C142.474 643 133.671 638.655 127.994 631.244L20.6175 491.084C7.24625 473.63 0 452.256 0 430.269V267.171V30Z"
        />
      </clipPath>
    </defs>
  </svg>
));

export const LightShapeSVG = React.memo(
  ({ children }: { children?: React.ReactNode }) => (
    <svg
      viewBox="0 0 665 643"
      className="w-full h-full object-cover"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path
          id="light-shape-path-hero"
          d="M482.667 523C478.63 523 474.989 525.427 473.436 529.154L433.693 624.538C429.034 635.718 418.111 643 406 643H30.0002C13.4317 643 0.000244141 629.569 0.000244141 613V509.978C0.000244141 501.019 4.00494 492.528 10.9188 486.829L240.212 297.829C249.431 290.23 254.77 278.909 254.77 266.963V30C254.77 13.4315 268.202 0 284.77 0H558H635C651.569 0 665 13.4315 665 30V493C665 509.569 651.569 523 635 523H482.667Z"
        />
        <clipPath id="light-shape-clip-hero">
          <use href="#light-shape-path-hero" />
        </clipPath>
      </defs>
      <use href="#light-shape-path-hero" fill="#F0F2F4" />
      <image
        href="/Homeherowhite.png"
        width="665"
        height="643"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#light-shape-clip-hero)"
      />

      {/* Removed 'xmlns' to fix TypeScript error in React */}
      <foreignObject
        x="0"
        y="0"
        width="665"
        height="643"
        clipPath="url(#light-shape-clip-hero)"
        style={{ overflow: "visible" }}
      >
        <div className="w-full h-full relative pointer-events-auto ">
          {children}
        </div>
      </foreignObject>
    </svg>
  )
);

export const LightShapeSVGExpanded = React.memo(
  ({ children }: { children?: React.ReactNode }) => (
    <svg
      viewBox="0 0 665 643"
      className="w-full h-full object-cover"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <path
          id="light-shape-path-hero"
          d="M482.667 523C478.63 523 474.989 525.427 473.436 529.154L433.693 624.538C429.034 635.718 418.111 643 406 643H30.0002C13.4317 643 0.000244141 629.569 0.000244141 613V509.978C0.000244141 501.019 4.00494 492.528 10.9188 486.829L240.212 297.829C249.431 290.23 254.77 278.909 254.77 266.963V30C254.77 13.4315 268.202 0 284.77 0H558H635C651.569 0 665 13.4315 665 30V493C665 509.569 651.569 523 635 523H482.667Z"
        />
        <clipPath id="light-shape-clip-hero">
          <use href="#light-shape-path-hero" />
        </clipPath>
      </defs>
      <use href="#light-shape-path-hero" fill="#F0F2F4" />
      <image
        href="/Homeherowhite.png"
        width="665"
        height="643"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#light-shape-clip-hero)"
      />

      <foreignObject
        x="0"
        y="0"
        width="665"
        height="643"
        clipPath="url(#light-shape-clip-hero)"
        style={{ overflow: "visible" }}
      >
        <div className="w-full h-full relative pointer-events-auto flex flex-col justify-center items-end">
          <div className="w-full pr-4 flex flex-col gap-1 items-end mt-2">
            {children}
          </div>
        </div>
      </foreignObject>
    </svg>
  )
);

// const MobileBlueShapeSVG = React.memo(() => (
//   <svg
//     viewBox="0 0 876 643"
//     className="w-full h-full"
//     preserveAspectRatio="xMidYMid slice"
//     aria-hidden
//     focusable="false"
//   >
//     <defs>
//       <path
//         id="mobile-shape-path"
//         d="M0 30C0 13.4314 13.4315 0 30 0H846C862.569 0 876 13.4315 876 30V246.743C876 252.713 873.333 258.372 868.727 262.171L627.503 461.171C622.897 464.971 620.23 470.629 620.23 476.599V613C620.23 629.569 606.799 643 590.23 643H151.809C142.474 643 133.671 638.655 127.994 631.244L20.6175 491.084C7.24625 473.63 0 452.256 0 430.269V267.171V30Z"
//       />
//       <clipPath id="blue-shape-clip-hero-mobile">
//         <use href="#mobile-shape-path" />
//       </clipPath>
//     </defs>

//     {/* Visible filled shape to act as container background */}
//     <use href="#mobile-shape-path" fill="#162766" />
//   </svg>
// ));

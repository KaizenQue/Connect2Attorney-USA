/* eslint-disable react/display-name */
"use client";
import React, { useState, useEffect, useMemo, useRef } from "react";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
const VectorLeftDottedLine = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="413"
    height="514"
    viewBox="0 0 413 514"
    fill="none"
  >
    <path
      d="M1.71661e-05 3.50879C1.71661e-05 5.44663 1.57095 7.01756 3.50879 7.01756C5.44663 7.01756 7.01756 5.44663 7.01756 3.50879C7.01756 1.57095 5.44663 1.71661e-05 3.50879 1.71661e-05C1.57095 1.71661e-05 1.71661e-05 1.57095 1.71661e-05 3.50879ZM405.702 509.649C405.702 511.587 407.273 513.158 409.211 513.158C411.148 513.158 412.719 511.587 412.719 509.649C412.719 507.711 411.148 506.14 409.211 506.14C407.273 506.14 405.702 507.711 405.702 509.649ZM3.50879 3.50879H2.85089V4.81764H3.50879H4.16668V3.50879H3.50879ZM3.50879 7.43534H2.85089V10.053H3.50879H4.16668V7.43534H3.50879ZM3.50879 12.6707H2.85089V15.2884H3.50879H4.16668V12.6707H3.50879ZM3.50879 17.9061H2.85089V20.5238H3.50879H4.16668V17.9061H3.50879ZM3.50879 23.1415H2.85089V25.7592H3.50879H4.16668V23.1415H3.50879ZM3.50879 28.3769H2.85089V30.9946H3.50879H4.16668V28.3769H3.50879ZM3.50879 33.6123H2.85089V36.23H3.50879H4.16668V33.6123H3.50879ZM3.50879 38.8477H2.85089V41.4654H3.50879H4.16668V38.8477H3.50879ZM3.50879 44.0831H2.85089V46.7008H3.50879H4.16668V44.0831H3.50879ZM3.50879 49.3185H2.85089V51.9362H3.50879H4.16668V49.3185H3.50879ZM3.50879 54.5539H2.85089V57.1716H3.50879H4.16668V54.5539H3.50879ZM3.50879 59.7893H2.85089V62.407H3.50879H4.16668V59.7893H3.50879ZM3.50879 65.0247H2.85089V67.6424H3.50879H4.16668V65.0247H3.50879ZM3.50879 70.2601H2.85089V72.8778H3.50879H4.16668V70.2601H3.50879ZM3.50879 75.4955H2.85089V78.1132H3.50879H4.16668V75.4955H3.50879ZM3.50879 80.7309H2.85089V83.3486H3.50879H4.16668V80.7309H3.50879ZM3.50879 85.9663H2.85089V88.584H3.50879H4.16668V85.9663H3.50879ZM3.50879 91.2017H2.85089V93.8194H3.50879H4.16668V91.2017H3.50879ZM3.50879 96.4371H2.85089V99.0548H3.50879H4.16668V96.4371H3.50879ZM3.50879 101.672H2.85089V104.29H3.50879H4.16668V101.672H3.50879ZM3.50879 106.908H2.85089V109.526H3.50879H4.16668V106.908H3.50879ZM3.50879 112.143H2.85089V114.761H3.50879H4.16668V112.143H3.50879ZM3.50879 117.379H2.85089V119.996H3.50879H4.16668V117.379H3.50879ZM3.50879 122.614H2.85089V125.232H3.50879H4.16668V122.614H3.50879ZM3.50879 127.849H2.85089V130.467H3.50879H4.16668V127.849H3.50879ZM3.50879 133.085H2.85089V135.703H3.50879H4.16668V133.085H3.50879ZM3.50879 138.32H2.85089V140.938H3.50879H4.16668V138.32H3.50879ZM3.50879 143.556H2.85089V146.173H3.50879H4.16668V143.556H3.50879ZM3.50879 148.791H2.85089V151.409H3.50879H4.16668V148.791H3.50879ZM3.50879 154.027H2.85089V156.644H3.50879H4.16668V154.027H3.50879ZM3.50879 159.262H2.85089V161.88H3.50879H4.16668V159.262H3.50879ZM3.50879 164.497H2.85089V167.115H3.50879H4.16668V164.497H3.50879ZM3.50879 169.733H2.85089V172.35H3.50879H4.16668V169.733H3.50879ZM3.50879 174.968H2.85089V177.586H3.50879H4.16668V174.968H3.50879ZM3.50879 180.204H2.85089V182.821H3.50879H4.16668V180.204H3.50879ZM3.50879 185.439H2.85089V188.057H3.50879H4.16668V185.439H3.50879ZM3.50879 190.674H2.85089V193.292H3.50879H4.16668V190.674H3.50879ZM3.50879 195.91H2.85089V198.528H3.50879H4.16668V195.91H3.50879ZM3.50879 201.145H2.85089V203.763H3.50879H4.16668V201.145H3.50879ZM3.50879 206.381H2.85089V208.998H3.50879H4.16668V206.381H3.50879ZM3.50879 211.616H2.85089V214.234H3.50879H4.16668V211.616H3.50879ZM3.50879 216.851H2.85089V219.469H3.50879H4.16668V216.851H3.50879ZM3.50879 222.087H2.85089V224.705H3.50879H4.16668V222.087H3.50879ZM3.50879 227.322H2.85089V229.94H3.50879H4.16668V227.322H3.50879ZM3.50879 232.558H2.85089V235.175H3.50879H4.16668V232.558H3.50879ZM3.50879 237.793H2.85089V240.411H3.50879H4.16668V237.793H3.50879ZM3.50879 243.029H2.85089V245.646H3.50879H4.16668V243.029H3.50879ZM3.50879 248.264H2.85089V250.882H3.50879H4.16668V248.264H3.50879ZM3.50879 253.499H2.85089V256.117H3.50879H4.16668V253.499H3.50879ZM3.50879 258.735H2.85089V261.352H3.50879H4.16668V258.735H3.50879ZM3.50879 263.97H2.85089V266.588H3.50879H4.16668V263.97H3.50879ZM3.50879 269.206H2.85089V271.823H3.50879H4.16668V269.206H3.50879ZM3.50879 274.441H2.85089V277.059H3.50879H4.16668V274.441H3.50879ZM3.50879 279.676H2.85089V282.294H3.50879H4.16668V279.676H3.50879ZM3.50879 284.912H2.85089V287.53H3.50879H4.16668V284.912H3.50879ZM3.50879 290.147H2.85089V292.765H3.50879H4.16668V290.147H3.50879ZM3.50879 295.383H2.85089V298H3.50879H4.16668V295.383H3.50879ZM3.50879 300.618H2.85089V303.236H3.50879H4.16668V300.618H3.50879ZM3.50879 305.853H2.85089V308.471H3.50879H4.16668V305.853H3.50879ZM3.50879 311.089H2.85089V313.707H3.50879H4.16668V311.089H3.50879ZM3.50879 316.324H2.85089V318.942H3.50879H4.16668V316.324H3.50879ZM3.50879 321.56H2.85089V324.177H3.50879H4.16668V321.56H3.50879ZM3.50879 326.795H2.85089V329.413H3.50879H4.16668V326.795H3.50879ZM3.50879 332.031H2.85089V334.648H3.50879H4.16668V332.031H3.50879ZM3.50879 337.266H2.85089V339.884H3.50879H4.16668V337.266H3.50879ZM3.50879 342.501H2.85089V345.119H3.50879H4.16668V342.501H3.50879ZM3.50879 347.737H2.85089V350.354H3.50879H4.16668V347.737H3.50879ZM3.50879 352.972H2.85089V355.59H3.50879H4.16668V352.972H3.50879ZM3.50879 358.208H2.85089V360.825H3.50879H4.16668V358.208H3.50879ZM3.50879 363.443H2.85089V366.061H3.50879H4.16668V363.443H3.50879ZM3.50879 368.678H2.85089V371.296H3.50879H4.16668V368.678H3.50879ZM3.50879 373.914H2.85089V376.532H3.50879H4.16668V373.914H3.50879ZM3.50879 379.149H2.85089V381.767H3.50879H4.16668V379.149H3.50879ZM3.50879 384.385H2.85089V387.002H3.50879H4.16668V384.385H3.50879ZM3.50879 389.62H2.85089V392.238H3.50879H4.16668V389.62H3.50879ZM3.50879 394.855H2.85089V397.473H3.50879H4.16668V394.855H3.50879ZM3.50879 400.091H2.85089V402.709H3.50879H4.16668V400.091H3.50879ZM3.50879 405.326H2.85089V407.944H3.50879H4.16668V405.326H3.50879ZM3.50879 410.562H2.85089V413.179H3.50879H4.16668V410.562H3.50879ZM3.50879 415.797H2.85089V417.105H3.50879H4.16668V415.797H3.50879ZM3.50879 417.105H2.85089C2.85089 417.556 2.8576 418.005 2.8709 418.453L3.52851 418.433L4.18611 418.414C4.17319 417.979 4.16668 417.543 4.16668 417.105H3.50879ZM3.68621 421.077L3.03095 421.136C3.11151 422.033 3.2187 422.923 3.35174 423.805L4.00227 423.706L4.6528 423.608C4.52369 422.753 4.41966 421.889 4.34147 421.018L3.68621 421.077ZM4.47715 426.314L3.83378 426.452C4.02197 427.332 4.23622 428.203 4.47567 429.064L5.10949 428.888L5.74331 428.711C5.51099 427.876 5.30312 427.031 5.12053 426.177L4.47715 426.314ZM5.89705 431.418L5.27513 431.632C5.56842 432.482 5.88673 433.32 6.22917 434.146L6.83688 433.894L7.4446 433.642C7.11234 432.841 6.80352 432.028 6.51896 431.203L5.89705 431.418ZM7.92565 436.31L7.33436 436.598C7.72831 437.406 8.14596 438.2 8.58642 438.979L9.15916 438.655L9.7319 438.331C9.30448 437.575 8.89921 436.805 8.51695 436.021L7.92565 436.31ZM10.532 440.921L9.9799 441.279C10.4679 442.032 10.978 442.77 11.5094 443.491L12.039 443.1L12.5686 442.71C12.0529 442.01 11.5578 441.295 11.0842 440.564L10.532 440.921ZM13.6744 445.185L13.1693 445.607C13.7438 446.295 14.3388 446.966 14.9533 447.619L15.4323 447.168L15.9112 446.717C15.3148 446.083 14.7373 445.432 14.1796 444.764L13.6744 445.185ZM17.3058 449.041L16.8548 449.52C17.5073 450.135 18.1784 450.73 18.8671 451.304L19.2886 450.799L19.71 450.294C19.0416 449.736 18.3902 449.159 17.7569 448.562L17.3058 449.041ZM21.3732 452.435L20.9829 452.964C21.7038 453.496 22.4414 454.006 23.1946 454.494L23.5523 453.942L23.9101 453.39C23.179 452.916 22.4632 452.421 21.7635 451.905L21.3732 452.435ZM25.8186 455.315L25.4948 455.887C26.2741 456.328 27.068 456.745 27.8756 457.139L28.1641 456.548L28.4525 455.957C27.6689 455.574 26.8985 455.169 26.1423 454.742L25.8186 455.315ZM30.5795 457.637L30.3275 458.245C31.1533 458.587 31.9916 458.905 32.8416 459.199L33.0562 458.577L33.2708 457.955C32.4461 457.67 31.6327 457.361 30.8315 457.029L30.5795 457.637ZM35.5859 459.364L35.4096 459.998C36.2702 460.237 37.1414 460.452 38.0221 460.64L38.1596 459.997L38.2971 459.353C37.4425 459.171 36.5973 458.963 35.7623 458.73L35.5859 459.364ZM40.7673 460.471L40.6691 461.122C41.5504 461.255 42.4402 461.362 43.3376 461.443L43.3965 460.788L43.4553 460.132C42.5843 460.054 41.7207 459.95 40.8655 459.821L40.7673 460.471ZM46.0405 460.945L46.0209 461.603C46.4685 461.616 46.9177 461.623 47.3684 461.623V460.965V460.307C46.9307 460.307 46.4946 460.301 46.06 460.288L46.0405 460.945ZM47.3684 460.965V461.623H48.6934V460.965V460.307H47.3684V460.965ZM51.3432 460.965V461.623H53.9931V460.965V460.307H51.3432V460.965ZM56.6429 460.965V461.623H59.2928V460.965V460.307H56.6429V460.965ZM61.9426 460.965V461.623H64.5925V460.965V460.307H61.9426V460.965ZM67.2423 460.965V461.623H69.8922V460.965V460.307H67.2423V460.965ZM72.5421 460.965V461.623H75.1919V460.965V460.307H72.5421V460.965ZM77.8418 460.965V461.623H80.4916V460.965V460.307H77.8418V460.965ZM83.1415 460.965V461.623H85.7913V460.965V460.307H83.1415V460.965ZM88.4412 460.965V461.623H91.091V460.965V460.307H88.4412V460.965ZM93.7409 460.965V461.623H96.3907V460.965V460.307H93.7409V460.965ZM99.0406 460.965V461.623H101.69V460.965V460.307H99.0406V460.965ZM104.34 460.965V461.623H106.99V460.965V460.307H104.34V460.965ZM109.64 460.965V461.623H112.29V460.965V460.307H109.64V460.965ZM114.94 460.965V461.623H117.59V460.965V460.307H114.94V460.965ZM120.239 460.965V461.623H122.889V460.965V460.307H120.239V460.965ZM125.539 460.965V461.623H128.189V460.965V460.307H125.539V460.965ZM130.839 460.965V461.623H133.489V460.965V460.307H130.839V460.965ZM136.139 460.965V461.623H138.788V460.965V460.307H136.139V460.965ZM141.438 460.965V461.623H144.088V460.965V460.307H141.438V460.965ZM146.738 460.965V461.623H149.388V460.965V460.307H146.738V460.965ZM152.038 460.965V461.623H154.688V460.965V460.307H152.038V460.965ZM157.337 460.965V461.623H159.987V460.965V460.307H157.337V460.965ZM162.637 460.965V461.623H165.287V460.965V460.307H162.637V460.965ZM167.937 460.965V461.623H170.587V460.965V460.307H167.937V460.965ZM173.237 460.965V461.623H175.886V460.965V460.307H173.237V460.965ZM178.536 460.965V461.623H181.186V460.965V460.307H178.536V460.965ZM183.836 460.965V461.623H186.486V460.965V460.307H183.836V460.965ZM189.136 460.965V461.623H191.786V460.965V460.307H189.136V460.965ZM194.435 460.965V461.623H197.085V460.965V460.307H194.435V460.965ZM199.735 460.965V461.623H202.385V460.965V460.307H199.735V460.965ZM205.035 460.965V461.623H207.685V460.965V460.307H205.035V460.965ZM210.335 460.965V461.623H212.984V460.965V460.307H210.335V460.965ZM215.634 460.965V461.623H218.284V460.965V460.307H215.634V460.965ZM220.934 460.965V461.623H223.584V460.965V460.307H220.934V460.965ZM226.234 460.965V461.623H228.884V460.965V460.307H226.234V460.965ZM231.533 460.965V461.623H234.183V460.965V460.307H231.533V460.965ZM236.833 460.965V461.623H239.483V460.965V460.307H236.833V460.965ZM242.133 460.965V461.623H244.783V460.965V460.307H242.133V460.965ZM247.433 460.965V461.623H250.082V460.965V460.307H247.433V460.965ZM252.732 460.965V461.623H255.382V460.965V460.307H252.732V460.965ZM258.032 460.965V461.623H260.682V460.965V460.307H258.032V460.965ZM263.332 460.965V461.623H265.982V460.965V460.307H263.332V460.965ZM268.631 460.965V461.623H271.281V460.965V460.307H268.631V460.965ZM273.931 460.965V461.623H276.581V460.965V460.307H273.931V460.965ZM279.231 460.965V461.623H281.881V460.965V460.307H279.231V460.965ZM284.531 460.965V461.623H287.18V460.965V460.307H284.531V460.965ZM289.83 460.965V461.623H292.48V460.965V460.307H289.83V460.965ZM295.13 460.965V461.623H297.78V460.965V460.307H295.13V460.965ZM300.43 460.965V461.623H303.08V460.965V460.307H300.43V460.965ZM305.729 460.965V461.623H308.379V460.965V460.307H305.729V460.965ZM311.029 460.965V461.623H313.679V460.965V460.307H311.029V460.965ZM316.329 460.965V461.623H318.979V460.965V460.307H316.329V460.965ZM321.628 460.965V461.623H324.278V460.965V460.307H321.628V460.965ZM326.928 460.965V461.623H329.578V460.965V460.307H326.928V460.965ZM332.228 460.965V461.623H334.878V460.965V460.307H332.228V460.965ZM337.527 460.965V461.623H340.177V460.965V460.307H337.527V460.965ZM342.827 460.965V461.623H345.477V460.965V460.307H342.827V460.965ZM348.127 460.965V461.623H350.777V460.965V460.307H348.127V460.965ZM353.426 460.965V461.623H356.076V460.965V460.307H353.426V460.965ZM358.726 460.965V461.623H361.376V460.965V460.307H358.726V460.965ZM364.026 460.965V461.623H365.351V460.965V460.307H364.026V460.965ZM365.351 460.965V461.623C365.789 461.623 366.225 461.629 366.659 461.642L366.679 460.985L366.698 460.327C366.251 460.314 365.802 460.307 365.351 460.307V460.965ZM369.323 461.142L369.264 461.798C370.135 461.876 370.999 461.98 371.854 462.109L371.952 461.458L372.05 460.808C371.169 460.675 370.279 460.568 369.382 460.487L369.323 461.142ZM374.56 461.933L374.422 462.577C375.277 462.759 376.122 462.967 376.957 463.199L377.133 462.566L377.31 461.932C376.449 461.692 375.578 461.478 374.697 461.29L374.56 461.933ZM379.663 463.353L379.449 463.975C380.273 464.26 381.087 464.568 381.888 464.901L382.14 464.293L382.392 463.685C381.566 463.343 380.728 463.025 379.878 462.731L379.663 463.353ZM384.555 465.382L384.267 465.973C385.051 466.355 385.821 466.761 386.577 467.188L386.901 466.615L387.225 466.043C386.445 465.602 385.651 465.184 384.844 464.79L384.555 465.382ZM389.167 467.988L388.809 468.54C389.54 469.014 390.256 469.509 390.956 470.025L391.346 469.495L391.736 468.966C391.016 468.434 390.278 467.924 389.525 467.436L389.167 467.988ZM393.431 471.131L393.009 471.636C393.678 472.193 394.329 472.771 394.962 473.367L395.414 472.888L395.865 472.409C395.212 471.795 394.541 471.2 393.852 470.625L393.431 471.131ZM397.287 474.762L396.808 475.213C397.405 475.846 397.982 476.498 398.54 477.166L399.045 476.745L399.55 476.323C398.975 475.635 398.381 474.963 397.766 474.311L397.287 474.762ZM400.68 478.829L400.151 479.22C400.666 479.919 401.162 480.635 401.635 481.366L402.187 481.008L402.739 480.651C402.251 479.898 401.741 479.16 401.21 478.439L400.68 478.829ZM403.56 483.275L402.987 483.598C403.415 484.355 403.82 485.125 404.202 485.909L404.794 485.62L405.385 485.332C404.991 484.524 404.573 483.73 404.133 482.951L403.56 483.275ZM405.882 488.036L405.275 488.288C405.607 489.089 405.916 489.902 406.2 490.727L406.822 490.512L407.444 490.298C407.151 489.448 406.833 488.609 406.49 487.784L405.882 488.036ZM407.61 493.042L406.976 493.218C407.208 494.053 407.416 494.899 407.599 495.753L408.242 495.616L408.886 495.478C408.697 494.598 408.483 493.726 408.244 492.866L407.61 493.042ZM408.717 498.223L408.067 498.322C408.196 499.177 408.3 500.04 408.378 500.911L409.033 500.853L409.688 500.794C409.608 499.896 409.501 499.007 409.368 498.125L408.717 498.223ZM409.191 503.497L408.533 503.516C408.546 503.951 408.553 504.387 408.553 504.825H409.211H409.868C409.868 504.374 409.862 503.925 409.848 503.477L409.191 503.497ZM409.211 504.825H408.553V506.031H409.211H409.868V504.825H409.211ZM409.211 508.443H408.553V509.649H409.211H409.868V508.443H409.211Z"
      fill="#F2C438"
    />
  </svg>
));

const LeftApos = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="28"
    viewBox="0 0 29 28"
    fill="none"
  >
    <path
      d="M5.73099 0L9.47369 0.706309L7.7193 13.6554L10.5263 14.7148V27.193H0V15.5388L5.73099 0ZM23.2749 0L27.0175 0.706309L25.2632 13.6554L28.0702 14.7148V27.193H17.5439V15.5388L23.2749 0Z"
      fill="#DBDFE7"
    />
  </svg>
));
const RightApos = React.memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="29"
    height="28"
    viewBox="0 0 29 28"
    fill="none"
  >
    <path
      d="M22.3393 27.1934L18.5966 26.4871L20.351 13.538L17.544 12.4785V0.000377655H28.0703V11.6545L22.3393 27.1934ZM4.79546 27.1934L1.05277 26.4871L2.80716 13.538L0.000137329 12.4785V0.000377655H10.5265V11.6545L4.79546 27.1934Z"
      fill="#DBDFE7"
    />
  </svg>
));
/* ------------------------------------------------------------------ */
/* TYPES */
/* ------------------------------------------------------------------ */

type Person = {
  name: string;
  role: string;
  img: string;
  linkedIn: string;
  data: string;
};

/* ------------------------------------------------------------------ */
/* DATA */
/* ------------------------------------------------------------------ */

const leaders: Person[] = [
  {
    name: "Mr. Manoj Gupta",
    role: "FOUNDER & PRESIDENT",
    img: "/TeamSectionImg1desktop.png",
    linkedIn: "https://www.linkedin.com/in/manojcgupta/",
    data: "Manoj Gupta is the Founder and President of Opalescent IT Solutions Inc., a visionary entrepreneur known for his innovative approach and unwavering commitment to excellence.",
  },
  {
    name: "Mr. Neeraj Gupta",
    role: "VICE PRESIDENT",
    img: "/TeamSectionNgimg.png",
    linkedIn: "https://www.linkedin.com/in/neerajchgupta/",
    data: "Neeraj Gupta serves as the Vice President and Head of IT at Opalescent IT Solutions Inc., where he spearheads technological innovation and drives digital growth strategy.",
  },
];

const deputy: Person = {
  name: "Mrs. Sunshine Rigsby",
  role: "DEPUTY DIRECTOR SALES & MARKETING",
  img: "/SunshineRigsby.png",
  linkedIn: "https://www.linkedin.com/in/sunshine-rigsby-222569282/",
  data: "Sunshine Rigsby leads sales and marketing initiatives with a strong focus on brand growth, strategic partnerships, and customer engagement.",
};

const tabletleaders = [
  {
    name: "Mr. Manoj Gupta",
    role: "FOUNDER & PRESIDENT",
    img: "/TeamSectionImg1desktop.png",
    bg: "bg-[#facc42]",
    linkedIn: "https://www.linkedin.com/in/manojcgupta/",
    data: "Manoj Gupta is the Founder and President of Opalescent IT Solutions Inc., a visionary entrepreneur known for his innovative approach and unwavering commitment to excellence.",
  },
  {
    name: "Mr. Neeraj Gupta",
    role: "VICE PRESIDENT",
    img: "/TeamSectionNgimg.png",
    bg: "bg-[#facc42]",
    linkedIn: "https://www.linkedin.com/in/neerajchgupta/",
    data: "Neeraj Gupta serves as the Vice President and Head of IT at Opalescent IT Solutions Inc., where he spearheads the company's technological innovation and drives its digital growth strategy.",
  },
];

const tabletdeputy = {
  name: "Sunshine Rigsby",
  role: "DEPUTY DIRECTOR SALES & MARKETING",
  img: "/SunshineRigsby.png",
  bg: "bg-[#f1f3f6]",
  linkedIn: "https://www.linkedin.com/in/sunshine-rigsby-222569282/",
  data: "Mrs. Sunshine RigsbyMrs. Sunshine RigsbyMrs. Sunshine RigsbyMrs. Sunshine RigsbyMrs. Sunshine RigsbyMrs. Sunshine RigsbyMrs. Sunshine RigsbyMrs. Sunshine Rigsby",
};

const mobileleaders = [
  {
    name: "Mr. Manoj Gupta",
    role: "FOUNDER & PRESIDENT",
    img: "/TeamSectionImg1mobile.png",
    bg: "bg-[#facc42]",
    linkedIn: "https://www.linkedin.com/in/manojcgupta/",
  },
  {
    name: "Mr. Neeraj Gupta",
    role: "VICE PRESIDENT",
    img: "/TeamSectionNgimg.png",
    bg: "bg-[#facc42]",
    linkedIn: "https://www.linkedin.com/in/neerajchgupta/",
  },
];

const mobiledeputy = {
  name: "Sunshine Rigsby",
  role: "DEPUTY DIRECTOR SALES & MARKETING",
  img: "/SunshineRigsby.png",
  bg: "bg-[#f1f3f6]",
  linkedIn: "https://www.linkedin.com/in/sunshine-rigsby-222569282/",
};

const teamMembers = [
  {
    name: "Brian Thompson ",
    role: "Intake Specialist ",
    img: "/BrianThompson.jpeg",
    linkedIn: "https://www.linkedin.com/in/t3m3d/",
  },
  {
    name: "Candace Martin",
    role: "Director of Operations",
    img: "/CandanceMartin.jpeg",
    linkedIn: "https://www.linkedin.com/in/candace-martin-853851289/",
  },
  {
    name: "Monica Howell",
    role: "Intake Specialist",
    img: "/MonicaHowell.jpeg",
    linkedIn: "https://www.linkedin.com/in/monica-howell-387005267/",
  },
  // {
  //   name: "Mrs. Aponi Curtis",
  //   role: "Lead Engineer",
  //   img: "/mockimg4.png",
  // },
  // {
  //   name: "Ms. Cielo Cama",
  //   role: "FINANCIAL DIRECTOR",
  //   img: "/mockimg5.png",
  // },
  // {
  //   name: "Mr. Nicholas Runolfsdottir",
  //   role: "MARKETING DIRECTOR",
  //   img: "/mockimg6.png",
  // },
];

/* ------------------------------------------------------------------ */
/* HOVER OVERLAY COMPONENT (SECTION 1 ONLY) */
/* ------------------------------------------------------------------ */
const getExitPadding = () => {
  if (typeof window === "undefined") return 60;

  const vw = window.innerWidth;

  // Scale padding with screen size:
  // - small laptops: smaller padding
  // - big screens: larger, more forgiving padding
  const dynamic = Math.round(vw * 0.06); // 6% of screen width

  // Clamp to a safe range
  return Math.min(140, Math.max(40, dynamic));
};

export const DrivingForceHover = ({
  person,
  onLeave,
}: {
  person: Person;
  onLeave: () => void;
}) => {
  const [firstName, lastName] = person.name
    .replace(/^(Mr|Mrs|Ms|Miss|Dr)\.?\s+/i, "")
    .split(" ");

  const isDeputy = person.role.toUpperCase().includes("DEPUTY");
  const cardRef = useRef<HTMLDivElement | null>(null);
  const EXIT_PADDING = 20;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;

    const isOutside =
      x < rect.left - EXIT_PADDING ||
      x > rect.right + EXIT_PADDING ||
      y < rect.top - EXIT_PADDING ||
      y > rect.bottom + EXIT_PADDING;

    if (isOutside) onLeave();
  };

  useEffect(() => {
    const handleScrollExit = () => {
      onLeave();
    };

    // Mouse wheel (desktop)
    window.addEventListener("wheel", handleScrollExit, { passive: true });

    // Touch scroll (mobile / trackpad)
    window.addEventListener("touchmove", handleScrollExit, { passive: true });

    // Keyboard scroll (optional but good UX)
    window.addEventListener("keydown", handleScrollExit);

    return () => {
      window.removeEventListener("wheel", handleScrollExit);
      window.removeEventListener("touchmove", handleScrollExit);
      window.removeEventListener("keydown", handleScrollExit);
    };
  }, [onLeave]);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="fixed inset-0 z-[999] bg-[#162766] overflow-hidden flex items-center justify-center opacity-0 animate-[fadeIn_0.35s_ease-out_forwards]"
    >
      <div
        ref={cardRef}
        className="relative bg-[#162766] overflow-hidden flex items-center w-[92vw] max-w-[1130px] aspect-[1130/649] pt-[2.459px] pr-[4.32px] pb-0 pl-0 opacity-0 animate-[fadeIn_0.45s_ease-out_forwards]"
      >
        <div className="absolute left-0 top-[99%] -translate-y-1/2 pointer-events-none select-none z-0 hidden xl:block opacity-0 animate-[fadeSlideLeft_0.8s_ease-out_0.2s_forwards]">
          <VectorLeftDottedLine />
        </div>

        <div className="relative z-10 w-full h-full px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-12 md:py-16 lg:py-24 flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-6 md:gap-8 lg:gap-0">
          <div className="relative max-w-full lg:max-w-[560px] opacity-0 translate-y-6 animate-[fadeUp_0.6s_ease-out_0.25s_forwards]">
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <span className="w-6 sm:w-8 h-[1px] bg-[#eec044]" />
              <p
                className={`font-work-sans text-sm sm:text-[15.789px] font-semibold uppercase ${isDeputy ? "text-[#F2C438]" : "text-white"}`}
              >
                {person.role}
              </p>
            </div>

            <h2
              className={`flex flex-col justify-center w-full max-w-[432px] min-h-[150px] sm:min-h-[200px] md:min-h-[270px] font-urbanist text-5xl sm:text-7xl md:text-8xl lg:text-[105.8px] leading-none font-extrabold bg-clip-text text-transparent mb-6 md:mb-10 opacity-0 scale-[0.98] animate-[fadeScale_0.55s_ease-out_0.35s_forwards] ${isDeputy ? "bg-[linear-gradient(100deg,#F2C438_37.2%,#FFFFFF_63.99%,rgba(255,255,255,0)_90.04%)]" : "bg-[linear-gradient(95deg,#F2C438_33.32%,#FFFFFF_57.48%,rgba(255,255,255,0)_80.98%)]"}`}
            >
              <span>{firstName}</span>
              <span>{lastName}</span>
            </h2>

            <div className="relative pl-6 sm:pl-10 max-w-full lg:max-w-[520px] opacity-0 animate-[fadeIn_0.5s_ease-out_0.55s_forwards]">
              <span className="absolute left-0 top-0 text-3xl sm:text-[48px] text-white">
                <LeftApos />
              </span>
              <p className="font-urbanist text-[#F4F4F5] text-sm sm:text-base md:text-[15.789px] leading-relaxed sm:leading-[24.5px] pl-4 sm:pl-0">
                {person.data}
              </p>
              <span className="absolute -right-4 sm:-right-6 bottom-0 text-3xl sm:text-[48px] text-white">
                <RightApos />
              </span>
            </div>
          </div>

          <div className="relative order-first lg:order-last opacity-0 translate-y-6 animate-[fadeUp_0.6s_ease-out_0.4s_forwards]">
            <Link
              href={person.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="w-[180px] h-[216px] sm:w-[240px] sm:h-[288px] md:w-[280px] md:h-[336px] lg:w-[300px] lg:h-[360px] rounded-2xl sm:rounded-[28px] overflow-hidden mx-auto cursor-pointer transition-all duration-500 ease-out hover:scale-[1.04] hover:-translate-y-1">
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </Link>

            <div className="mt-4 text-center opacity-0 animate-[fadeIn_0.4s_ease-out_0.65s_forwards]">
              <p className="font-urbanist text-[#F2C438] text-xs uppercase font-medium">
                {person.role}
              </p>
              <p className="font-urbanist text-white text-base sm:text-lg font-semibold mt-1">
                {person.name}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* MAIN COMPONENT */
/* ------------------------------------------------------------------ */

const TeamSectionDesktop = () => {
  const [activePerson, setActivePerson] = useState<Person | null>(null);

  return (
    <div className="relative min-h-screen bg-[#162766] font-sans text-white py-10 px-4 flex justify-center overflow-x-hidden">
      <div className="relative w-full max-w-[900px] z-10">
        <div
          className="relative w-full bg-no-repeat bg-center bg-cover py-20"
          style={{ backgroundImage: "url('/bgimgfullpartial.png')" }}
        >
          {activePerson && (
            <DrivingForceHover
              person={activePerson}
              onLeave={() => setActivePerson(null)}
            />
          )}

          <div className="relative z-10 text-center mb-8">
            <h1
              className="font-noto-serif font-normal capitalize mb-8"
              style={{
                fontSize: "clamp(32px, 7vw, 60px)",
                lineHeight: "clamp(40px, 8vw, 70px)",
              }}
            >
              <span className="text-[#eec044]">Our</span> Driving Force
            </h1>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {leaders.map((leader, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setActivePerson(leader)}
                  className="flex flex-col items-center w-[220px] cursor-pointer"
                >
                  <div className="relative w-full h-[220px] rounded-[20px] overflow-hidden">
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-[#eec044] uppercase tracking-widest text-[12px] mb-1">
                      {leader.role}
                    </p>
                    <h3 className="font-urbanist text-[18px]">{leader.name}</h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mb-16">
              <div
                onMouseEnter={() => setActivePerson(deputy)}
                className="flex flex-col items-center w-[220px] cursor-pointer"
              >
                <div className="relative w-full h-[220px] rounded-[20px] overflow-hidden">
                  <img
                    src={deputy.img}
                    alt={deputy.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <p className="text-[#eec044] uppercase tracking-widest text-[12px] mb-1">
                    {deputy.role}
                  </p>
                  <h3 className="font-urbanist text-[18px]">{deputy.name}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center">
          <h2
            className="font-noto-serif font-normal capitalize mb-8"
            style={{
              fontSize: "clamp(28px, 6vw, 48px)",
              lineHeight: "clamp(36px, 7vw, 60px)",
              letterSpacing: "0px",
            }}
          >
            Our <span className="text-[#eec044]">A</span> Team
          </h2>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 px-4 -mx-4 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:px-4 md:mx-0">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group shrink-0 w-[200px] md:w-auto snap-center flex flex-col items-center"
              >
                <Link
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative w-full aspect-square rounded-[20px] overflow-hidden mb-3">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
                    />
                    <div className="absolute inset-0 flex items-center justify-center px-3 text-center bg-transparent group-hover:bg-[#1d3a8a] transition-colors duration-300">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="font-urbanist text-[11px] md:text-xs uppercase tracking-[0.18em] text-white mb-1">
                          {member.role}
                        </p>
                        <h3 className="font-urbanist text-sm md:text-base text-white">
                          {member.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                </Link>
                <p
                  className="text-[#eec044] group-hover:text-white transition-colors font-urbanist font-normal uppercase tracking-widest mb-1"
                  style={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "0px",
                  }}
                >
                  {member.role}
                </p>
                <h3
                  className="font-urbanist font-normal group-hover:text-white transition-colors"
                  style={{
                    fontSize: "18px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                  }}
                >
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <img
          src="/bgvector.png"
          alt="background vector"
          className="absolute top-[-20] right-0 h-full w-auto object-contain object-right lg:translate-x-[12%] xl:translate-x-[15%] z-20 pointer-events-none select-none"
        />
      </div>
    </div>
  );
};

const TeamSectionMobile = () => {
  return (
    <div className="relative min-h-screen bg-[#162766] font-sans text-white py-10 px-4 flex justify-center overflow-x-hidden">
      <div className="relative w-full max-w-[900px] z-10">
        <div className="relative w-full pt-16 pb-10">
          <div className="relative z-10 text-center">
            <h1
              className="font-noto-serif font-normal capitalize mb-10"
              style={{
                fontSize: "clamp(32px, 7vw, 60px)",
                lineHeight: "clamp(40px, 8vw, 70px)",
              }}
            >
              <span className="text-[#eec044]">Our</span> Driving Force
            </h1>

            <div className="grid grid-cols-2 gap-4 mb-10 md:flex md:flex-wrap md:justify-center md:gap-8">
              {mobileleaders.map((leader, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-full md:w-[220px]"
                >
                  <Link
                    href={leader.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative w-full h-[150px] md:h-[220px] rounded-[16px] md:rounded-[20px] overflow-hidden cursor-pointer"
                  >
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </Link>
                  <div className="text-center mt-3 md:mt-4">
                    <p className="text-[#eec044] font-urbanist uppercase tracking-widest text-[10px] md:text-[12px] mb-1">
                      {leader.role}
                    </p>
                    <h3 className="font-urbanist font-normal text-[14px] md:text-[18px]">
                      {leader.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="relative flex justify-center pt-16 pb-10">
              <div
                className="absolute inset-x-0 top-0 h-full bg-no-repeat bg-center bg-contain pointer-events-none"
                style={{ backgroundImage: "url('/bgmobilevector.png')" }}
              />
              <div className="relative z-10 flex flex-col items-center w-full max-w-[calc(50%-8px)] md:w-[220px] mb-4">
                <Link
                  href={mobiledeputy.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-full h-[150px] md:h-[220px] rounded-[16px] md:rounded-[20px] overflow-hidden cursor-pointer"
                >
                  <img
                    src={mobiledeputy.img}
                    alt={mobiledeputy.name}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </Link>
                <div className="text-center mt-4">
                  <p className="text-[#eec044] font-urbanist uppercase tracking-widest text-[10px] md:text-[12px] mb-1">
                    {mobiledeputy.role}
                  </p>
                  <h3 className="font-urbanist font-normal text-[14px] md:text-[18px]">
                    {mobiledeputy.name}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center mt-[-4]">
          <h2
            className="font-noto-serif font-normal capitalize mb-8"
            style={{
              fontSize: "clamp(28px, 6vw, 48px)",
              lineHeight: "clamp(36px, 7vw, 60px)",
            }}
          >
            Our <span className="text-[#eec044]">A</span> Team
          </h2>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-4 -mx-4 pb-6 scrollbar-hide md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-0 md:mx-0">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="shrink-0 snap-center w-[calc(50%-8px)] md:w-auto flex flex-col items-center"
              >
                <div className="relative w-full h-[150px] md:h-[220px] rounded-[16px] md:rounded-[20px] overflow-hidden">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="text-center mt-3">
                  <p className="text-[#eec044] font-urbanist uppercase tracking-widest text-[10px] md:text-[12px] mb-1">
                    {member.role}
                  </p>
                  <h3 className="font-urbanist font-normal text-[14px] md:text-[18px]">
                    {member.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const TeamSectionTablet = () => {
  return (
    <div className="relative min-h-screen bg-[#162766] font-sans text-white py-10 px-4 flex justify-center overflow-x-hidden">
      <div className="relative w-full max-w-[900px] z-10">
        <img
          src="/bgtabletvectorleft.png"
          alt="background vector"
          className="absolute top-0 left-0 h-[85%] w-auto max-w-[60%] object-contain object-left md:-translate-x-[1%] md:-translate-y-[15%] lg:translate-x-[12%] xl:translate-x-[15%] z-20 pointer-events-none select-none"
        />

        <div className="relative w-full bg-no-repeat bg-center bg-cover py-20">
          <div className="relative z-10 text-center mb-8">
            <h1
              className="font-noto-serif font-normal capitalize mb-8"
              style={{
                fontSize: "clamp(32px, 7vw, 60px)",
                lineHeight: "clamp(40px, 8vw, 70px)",
                letterSpacing: "0px",
              }}
            >
              <span className="text-[#eec044]">Our</span> Driving Force
            </h1>

            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {tabletleaders.map((leader, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center w-[220px]"
                >
                  <div className="relative w-full h-[220px] rounded-[20px] overflow-hidden">
                    <img
                      src={leader.img}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-[#eec044] font-urbanist font-normal uppercase tracking-widest mb-1 text-[12px]">
                      {leader.role}
                    </p>
                    <h3 className="font-urbanist font-normal text-[18px]">
                      {leader.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mb-16">
              <div className="flex flex-col items-center w-[220px]">
                <div className="relative w-full h-[220px] rounded-[20px] overflow-hidden">
                  <img
                    src={tabletdeputy.img}
                    alt={tabletdeputy.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="text-center mt-4">
                  <p className="text-[#eec044] font-urbanist font-normal uppercase tracking-widest mb-1 text-[12px]">
                    {tabletdeputy.role}
                  </p>
                  <h3 className="font-urbanist font-normal text-[18px]">
                    {tabletdeputy.name}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center">
          <h2
            className="font-noto-serif font-normal capitalize mb-8"
            style={{
              fontSize: "clamp(28px, 6vw, 48px)",
              lineHeight: "clamp(36px, 7vw, 60px)",
              letterSpacing: "0px",
            }}
          >
            Our <span className="text-[#eec044]">A</span> Team
          </h2>

          <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 px-4 -mx-4 scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:px-0 md:mx-0">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group shrink-0 w-[200px] md:w-auto snap-center flex flex-col items-center"
              >
                <div className="relative w-full aspect-square rounded-[20px] overflow-hidden mb-3">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 flex items-center justify-center px-3 text-center bg-transparent group-hover:bg-[#1d3a8a] transition-colors duration-300">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="font-urbanist text-[11px] md:text-xs uppercase tracking-[0.18em] text-white mb-1">
                        {member.role}
                      </p>
                      <h3 className="font-urbanist text-sm md:text-base text-white">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                </div>
                <p
                  className="text-[#eec044] group-hover:text-white transition-colors font-urbanist font-normal uppercase tracking-widest mb-1"
                  style={{
                    fontSize: "12px",
                    lineHeight: "16px",
                    letterSpacing: "0px",
                  }}
                >
                  {member.role}
                </p>
                <h3
                  className="font-urbanist font-normal group-hover:text-white transition-colors"
                  style={{
                    fontSize: "18px",
                    lineHeight: "24px",
                    letterSpacing: "0px",
                  }}
                >
                  {member.name}
                </h3>
              </div>
            ))}
          </div>
        </div>

        <img
          src="/bgvector.png"
          alt="background vector"
          className="absolute top-[-8] right-0 h-full w-auto object-contain object-right lg:translate-x-[12%] xl:translate-x-[15%] z-20 pointer-events-none select-none"
        />
      </div>
    </div>
  );
};

const TeamSection = () => {
  return (
    <>
      <div className="md:hidden">
        <TeamSectionMobile />
      </div>
      <div className="hidden md:block lg:hidden">
        <TeamSectionTablet />
      </div>
      <div className="hidden lg:block">
        <TeamSectionDesktop />
      </div>
    </>
  );
};

export default TeamSection;

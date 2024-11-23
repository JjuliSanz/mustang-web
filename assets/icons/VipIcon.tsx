import React from "react";
import type { SVGProps } from "react";

export function VipIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m7 13l3 6.5l3-6.5m3.5 0v6.5m4-2.225h1.48c.651 0 1.277-.275 1.721-.75a2.34 2.34 0 0 0 .215-2.932a1.4 1.4 0 0 0-1.14-.593H20.5zm0 0V19.5M5 7h22a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2"
      ></path>
    </svg>
  );
}

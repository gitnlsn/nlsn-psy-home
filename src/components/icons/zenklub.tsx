import * as React from "react";

interface ZenklubIcon extends React.ComponentProps<"svg"> {}

export function ZenklubIcon({ ...props }: ZenklubIcon) {
  return (
    <svg
      width={24}
      viewBox="0 0.69 148.554 158.866"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M44.993 99.949c0-1.753.399-3.314 1.334-4.551l.004-.005.001-.002 31.666-41.502H53.784c-2.061 0-3.859-.512-5.131-1.773-1.27-1.26-1.785-3.038-1.785-5.077 0-2.038.515-3.816 1.785-5.076 1.272-1.262 3.07-1.774 5.131-1.774h37.108c2.061 0 3.858.512 5.13 1.774 1.271 1.26 1.785 3.038 1.785 5.076 0 1.753-.398 3.314-1.333 4.551l-.003.004-31.556 41.504H92.07c2.06 0 3.858.513 5.13 1.774 1.27 1.26 1.785 3.038 1.785 5.077 0 2.038-.515 3.816-1.785 5.076-1.272 1.261-3.07 1.774-5.13 1.774H51.909c-2.061 0-3.858-.513-5.13-1.774-1.271-1.26-1.786-3.038-1.786-5.076z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.626 8.843h-.001a33.42 33.42 0 00-23.605 9.812 33.55 33.55 0 00-9.804 23.649v60.753a33.55 33.55 0 009.798 23.659 33.419 33.419 0 0023.611 9.816h37.024c1.873.001 3.723.42 5.415 1.224l16.529 10.653a8.738 8.738 0 004.733 1.49h.022c1.853 0 3.727-.69 5.146-2.083 1.432-1.407 2.326-3.458 2.342-6.037v-7.785l.841-.474a33.497 33.497 0 0014.134-12.337 33.588 33.588 0 005.301-18.07V42.304a33.536 33.536 0 00-9.779-23.633 33.408 33.408 0 00-23.573-9.828H42.626zM79.62 128.692h.002c3.314 0 6.577.82 9.499 2.387l.045.024 16.69 10.744.036.026c.041.031.084.058.129.083.006-.075.009-.155.009-.241v-8.153a6.116 6.116 0 012.806-5.777l.03-.019 2.375-1.333.05-.023a25.68 25.68 0 0010.929-9.471 25.737 25.737 0 004.086-13.885V42.308a25.699 25.699 0 00-7.506-18.117 25.612 25.612 0 00-18.086-7.522H42.587A25.61 25.61 0 0024.519 24.2a25.701 25.701 0 00-7.497 18.107v60.803a25.7 25.7 0 007.506 18.129 25.606 25.606 0 0018.097 7.522h.003l36.992-.069z"
      />
    </svg>
  );
}
export const ChevronDown = ({ rotate }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`inline h-4 w-4 ${
        rotate ? 'rotate-180' : ''
      } transition duration-300`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1c-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0 0 11.6 0l43.6-43.5a8.2 8.2 0 0 0 0-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"
      />
    </svg>
  )
}

export const BuildingIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="m243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24h400c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8.1-3.4-17.2-3.4-25.2 0zM128 224H64v196.3c-.6.3-1.2.7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512h448c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384v192h-40V224h-64v192h-48V224h-64v192h-40V224zm128-96c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z"
      />
    </svg>
  )
}

export const SandTimerIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M18 22H6v-6l4-4l-4-4V2h12v6l-4 4l4 4M8 7.5l4 4l4-4V4H8m4 8.5l-4 4V20h8v-3.5M14 18h-4v-.8l2-2l2 2Z"
      />
    </svg>
  )
}

export const CheckedIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M433.1 657.7a31.8 31.8 0 0 0 51.7 0l210.6-292c3.8-5.3 0-12.7-6.5-12.7H642c-10.2 0-19.9 4.9-25.9 13.3L459 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H315c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8z"
      />
      <path
        fill="currentColor"
        d="M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"
      />
    </svg>
  )
}

export const DocumentIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="m25.7 9.3l-7-7c-.2-.2-.4-.3-.7-.3H8c-1.1 0-2 .9-2 2v24c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V10c0-.3-.1-.5-.3-.7zM18 4.4l5.6 5.6H18V4.4zM24 28H8V4h8v6c0 1.1.9 2 2 2h6v16z"
      />
      <path fill="currentColor" d="M10 22h12v2H10zm0-6h12v2H10z" />
    </svg>
  )
}

export const ClockIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448s448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372s372 166.6 372 372s-166.6 372-372 372z"
      />
      <path
        fill="currentColor"
        d="M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z"
      />
    </svg>
  )
}

export const DocumentFilledIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 48 48"
    >
      <g fill="currentColor">
        <path
          fillRule="evenodd"
          d="M10 7v30a3 3 0 0 0 3 3h13v-3.535a4 4 0 1 1 4 0V40h5a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H13a3 3 0 0 0-3 3Zm18 28a2 2 0 1 0 0-4a2 2 0 0 0 0 4ZM18 11a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H19a1 1 0 0 1-1-1Zm-3 5a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H15Zm-1 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H15Z"
          clipRule="evenodd"
        />
        <path d="M26 44v-4h4v4l-2-1.5l-2 1.5Z" />
      </g>
    </svg>
  )
}

export const CloseIcon = () => {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  )
}

export const DownloadIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M216 0h80c13.3 0 24 10.7 24 24v168h87.7c17.8 0 26.7 21.5 14.1 34.1L269.7 378.3c-7.5 7.5-19.8 7.5-27.3 0L90.1 226.1c-12.6-12.6-3.7-34.1 14.1-34.1H192V24c0-13.3 10.7-24 24-24zm296 376v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h146.7l49 49c20.1 20.1 52.5 20.1 72.6 0l49-49H488c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20s9 20 20 20s20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20s9 20 20 20s20-9 20-20z"
      />
    </svg>
  )
}

export const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M15 2.013H9V9H2v6h7v6.987h6V15h7V9h-7z" />
    </svg>
  )
}

export const MinusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
        d="M20 12H4"
      />
    </svg>
  )
}

export const NoteIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11s11-4.925 11-11S18.075 1 12 1Zm-.5 5a1 1 0 1 0 0 2h.5a1 1 0 1 0 0-2h-.5ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

export const PreviousIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="m272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 0 0 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"
      />
    </svg>
  )
}

export const NextIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1024 1024"
    >
      <path
        fill="currentColor"
        d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512L181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512L485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"
      />
    </svg>
  )
}

export const RefreshIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M4 20v-7h7l-3.217 3.22A5.917 5.917 0 0 0 12 18a6 6 0 0 0 5.648-4h.018c.114-.325.201-.66.259-1h2.012A8 8 0 0 1 12 20h-.01a7.941 7.941 0 0 1-5.653-2.34L4 20Zm2.074-9H4.062a8 8 0 0 1 7.933-7H12a7.94 7.94 0 0 1 5.654 2.34L20 4v7h-7l3.222-3.22A5.916 5.916 0 0 0 12 6a6 6 0 0 0-5.648 4h-.018c-.115.325-.202.66-.259 1h-.001Z"
      />
    </svg>
  )
}

export const AvatarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 16 16"
    >
      <g fill="currentColor">
        <path d="M11 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0z" />
        <path
          fillRule="evenodd"
          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
        />
      </g>
    </svg>
  )
}

export const CopyIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 512 512"
    >
      <path
        fill="currentColor"
        d="M408 432h-32v32H112V136h32v-32H80v392h328v-64z"
      />
      <path
        fill="currentColor"
        d="M176 16v384h320V153.373L358.627 16Zm288 352H208V48h104v152h152Zm0-200H344V48h1.372L464 166.627Z"
      />
    </svg>
  )
}

export const ExclamationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 64 64"
    >
      <g fill="#ff5a79">
        <path d="M37 42.4H27L23 2h18z" />
        <ellipse cx="32" cy="54.4" rx="7.7" ry="7.6" />
      </g>
    </svg>
  )
}

export const DotIcon = ({ color }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      className="text-red-500"
    >
      <path fill={color} d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12Z" />
    </svg>
  )
}

export const AttachmentIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
    >
      <path
        fill="currentColor"
        d="M26 30H11a2.002 2.002 0 0 1-2-2v-6h2v6h15V6h-9V4h9a2.002 2.002 0 0 1 2 2v22a2.002 2.002 0 0 1-2 2Z"
      />
      <path
        fill="currentColor"
        d="M17 10h7v2h-7zm-1 5h8v2h-8zm-1 5h9v2h-9zm-6-1a5.005 5.005 0 0 1-5-5V3h2v11a3 3 0 0 0 6 0V5a1 1 0 0 0-2 0v10H8V5a3 3 0 0 1 6 0v9a5.005 5.005 0 0 1-5 5z"
      />
    </svg>
  )
}
export const LacationIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 20 20"
    >
      <path
        fill="currentColor"
        d="M10 2.009c-2.762 0-5 2.229-5 4.99c0 4.774 5 11 5 11s5-6.227 5-11c0-2.76-2.238-4.99-5-4.99zm0 7.751a2.7 2.7 0 1 1 0-5.4a2.7 2.7 0 0 1 0 5.4z"
      />
    </svg>
  )
}
export const EmailIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12.72 2.03A9.991 9.991 0 0 0 2.03 12.72C2.39 18.01 7.01 22 12.31 22H16c.55 0 1-.45 1-1s-.45-1-1-1h-3.67c-3.73 0-7.15-2.42-8.08-6.03c-1.49-5.8 3.91-11.21 9.71-9.71C17.58 5.18 20 8.6 20 12.33v1.1c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57v-1.25c0-2.51-1.78-4.77-4.26-5.12a5.008 5.008 0 0 0-5.66 5.87a4.996 4.996 0 0 0 3.72 3.94c1.84.43 3.59-.16 4.74-1.33c.89 1.22 2.67 1.86 4.3 1.21c1.34-.53 2.16-1.9 2.16-3.34v-1.09c0-5.31-3.99-9.93-9.28-10.29zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3s3 1.34 3 3s-1.34 3-3 3z"
      />
    </svg>
  )
}
export const PhoneIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 36 36"
    >
      <g transform="rotate(-90 18 18)">
        <path
          fill="currentColor"
          d="M27.73 35.44a4.72 4.72 0 0 1-1-.11a33.91 33.91 0 0 1-16.62-8.75a32.71 32.71 0 0 1-9-16.25a4.58 4.58 0 0 1 1.35-4.28l4-3.85A2 2 0 0 1 8 1.66a2 2 0 0 1 1.45.87l5 7.39a1.6 1.6 0 0 1-.11 1.9l-2.51 3A18.94 18.94 0 0 0 16 20.71a19.26 19.26 0 0 0 6.07 4.09l3.11-2.47a1.64 1.64 0 0 1 1.86-.12l7.55 4.88A2 2 0 0 1 35 30.2l-3.9 3.86a4.74 4.74 0 0 1-3.37 1.38ZM7.84 3.64l-4 3.85a2.54 2.54 0 0 0-.75 2.4a30.7 30.7 0 0 0 8.41 15.26a31.9 31.9 0 0 0 15.64 8.23a2.75 2.75 0 0 0 2.5-.74l3.9-3.86l-7.29-4.71l-3.34 2.66a1 1 0 0 1-.92.17a20.06 20.06 0 0 1-7.36-4.75a19.49 19.49 0 0 1-4.87-7.2A1 1 0 0 1 10 14l2.7-3.23Z"
          className="clr-i-outline clr-i-outline-path-1"
        />
        <path fill="none" d="M0 0h36v36H0z" />
      </g>
    </svg>
  )
}

export const CalendarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path fill="currentColor" d="M8 15h3v3h2v-3h3v-2h-3v-3h-2v3H8z" />
      <path
        fill="currentColor"
        d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V8h14l.002 12z"
      />
    </svg>
  )
}

export const ResearchIcon = (props: any) => {
  return (
    <svg
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="1em"
      height="1em"
      viewBox="0 0 45 33"
      style={{
        enableBackground: 'new 0 0 45 33',
      }}
      xmlSpace="preserve"
      role="img"
      {...props}
    >
      <style type="text/css">
        {
          '\n\t.st0{fill:#92C8F6;}\n\t.st1{fill:#122E51;}\n\t.st2{clip-path:url(#SVGID_2_);}\n\t.st3{clip-path:url(#SVGID_4_);}\n\t.st4{clip-path:url(#SVGID_6_);}\n\t.st5{clip-path:url(#SVGID_8_);fill:#92C8F6;}\n\t.st6{clip-path:url(#SVGID_10_);fill:none;stroke:#122E51;stroke-width:2;stroke-miterlimit:10;}\n\t.st7{clip-path:url(#SVGID_12_);}\n\t.st8{clip-path:url(#SVGID_14_);fill:#92C8F6;}\n\t.st9{clip-path:url(#SVGID_16_);fill:none;stroke:#122E51;stroke-width:2;stroke-miterlimit:10;}\n\t.st10{clip-path:url(#SVGID_18_);}\n\t.st11{clip-path:url(#SVGID_20_);fill:#FFFFFF;}\n\t.st12{clip-path:url(#SVGID_22_);}\n\t.st13{clip-path:url(#SVGID_24_);fill:none;stroke:#122E51;stroke-width:4;stroke-miterlimit:10;}\n\t.st14{clip-path:url(#SVGID_26_);}\n\t.st15{clip-path:url(#SVGID_28_);fill:#FFFFFF;}\n\t.st16{clip-path:url(#SVGID_4_);fill:none;stroke:#122E51;stroke-width:2;stroke-miterlimit:10;}\n\t.st17{fill:none;}\n\t.st18{fill:#FFFFFF;}\n\t.st19{fill:#92C8F6;stroke:#122E51;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st20{fill:none;stroke:#122E51;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n\t.st21{fill:none;stroke:#122E51;stroke-width:2;stroke-miterlimit:10;}\n\t.st22{fill:#FFFFFF;stroke:#122E51;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}\n'
        }
      </style>
      <g>
        <defs>
          <rect id="SVGID_1_" x={68.2} y={24.1} width={59.2} height={42.2} />
        </defs>
        <clipPath id="SVGID_2_">
          <use
            xlinkHref="#SVGID_1_"
            style={{
              overflow: 'visible',
            }}
          />
        </clipPath>
        <g className="st2">
          <defs>
            <rect
              id="SVGID_3_"
              x={27.8}
              y={-976.4}
              width={1024}
              height={2765}
            />
          </defs>
          <clipPath id="SVGID_4_">
            <use
              xlinkHref="#SVGID_3_"
              style={{
                overflow: 'visible',
              }}
            />
          </clipPath>
          <g className="st3">
            <defs>
              <path
                id="SVGID_5_"
                d="M91.3,53.8V32.2c0-1.3-3.7-2.4-8.4-2.4c-4.7,0-8.4,1.1-8.4,2.4v21.7c1.5-0.4,5.3-0.7,8.4-0.7 C86,53.2,88.2,53.4,91.3,53.8z"
              />
            </defs>
            <clipPath id="SVGID_6_">
              <use
                xlinkHref="#SVGID_5_"
                style={{
                  overflow: 'visible',
                }}
              />
            </clipPath>
            <g className="st4">
              <defs>
                <rect
                  id="SVGID_7_"
                  x={27.8}
                  y={-976.4}
                  width={1024}
                  height={2765}
                />
              </defs>
              <clipPath id="SVGID_8_">
                <use
                  xlinkHref="#SVGID_7_"
                  style={{
                    overflow: 'visible',
                  }}
                />
              </clipPath>
            </g>
          </g>
          <g className="st3">
            <defs>
              <rect
                id="SVGID_9_"
                x={27.8}
                y={-976.4}
                width={1024}
                height={2765}
              />
            </defs>
            <clipPath id="SVGID_10_">
              <use
                xlinkHref="#SVGID_9_"
                style={{
                  overflow: 'visible',
                }}
              />
            </clipPath>
          </g>
          <g className="st3">
            <defs>
              <path
                id="SVGID_11_"
                d="M108,53.8V32.2c0-1.3-3.7-2.4-8.4-2.4c-4.7,0-8.4,1.1-8.4,2.4v21.7c3-0.4,5.3-0.7,8.4-0.7 C102.8,53.2,106.5,53.4,108,53.8z"
              />
            </defs>
            <clipPath id="SVGID_12_">
              <use
                xlinkHref="#SVGID_11_"
                style={{
                  overflow: 'visible',
                }}
              />
            </clipPath>
            <g className="st7">
              <defs>
                <rect
                  id="SVGID_13_"
                  x={27.8}
                  y={-976.4}
                  width={1024}
                  height={2765}
                />
              </defs>
              <clipPath id="SVGID_14_">
                <use
                  xlinkHref="#SVGID_13_"
                  style={{
                    overflow: 'visible',
                  }}
                />
              </clipPath>
            </g>
          </g>
          <g className="st3">
            <defs>
              <rect
                id="SVGID_15_"
                x={27.8}
                y={-976.4}
                width={1024}
                height={2765}
              />
            </defs>
            <clipPath id="SVGID_16_">
              <use
                xlinkHref="#SVGID_15_"
                style={{
                  overflow: 'visible',
                }}
              />
            </clipPath>
          </g>
          <g className="st3">
            <defs>
              <path
                id="SVGID_17_"
                d="M106.5,53.7c-0.4-0.4-0.4-1,0-1.4c0.4-0.4,1-0.4,1.4,0l6.5,6.7c0.4,0.4,0.4,1,0,1.4 c-0.4,0.4-1,0.4-1.4,0L106.5,53.7z"
              />
            </defs>
            <clipPath id="SVGID_18_">
              <use
                xlinkHref="#SVGID_17_"
                style={{
                  overflow: 'visible',
                }}
              />
            </clipPath>
            <g className="st10">
              <defs>
                <rect
                  id="SVGID_19_"
                  x={27.8}
                  y={-976.4}
                  width={1024}
                  height={2765}
                />
              </defs>
              <clipPath id="SVGID_20_">
                <use
                  xlinkHref="#SVGID_19_"
                  style={{
                    overflow: 'visible',
                  }}
                />
              </clipPath>
            </g>
          </g>
          <g className="st3">
            <defs>
              <path
                id="SVGID_21_"
                d="M106.9,53.4c-0.2-0.2-0.2-0.5,0-0.7c0.2-0.2,0.5-0.2,0.7,0l6.5,6.7c0.2,0.2,0.2,0.5,0,0.7 c-0.2,0.2-0.5,0.2-0.7,0L106.9,53.4z M89.6,52.7l18-17.4L131.4,60l-18,17.4L89.6,52.7z"
              />
            </defs>
            <clipPath id="SVGID_22_">
              <use
                xlinkHref="#SVGID_21_"
                style={{
                  overflow: 'visible',
                }}
              />
            </clipPath>
            <g className="st12">
              <defs>
                <rect
                  id="SVGID_23_"
                  x={27.8}
                  y={-976.4}
                  width={1024}
                  height={2765}
                />
              </defs>
              <clipPath id="SVGID_24_">
                <use
                  xlinkHref="#SVGID_23_"
                  style={{
                    overflow: 'visible',
                  }}
                />
              </clipPath>
            </g>
          </g>
          <g className="st3">
            <defs>
              <ellipse id="SVGID_25_" cx={103.5} cy={48.8} rx={7.3} ry={7.4} />
            </defs>
            <clipPath id="SVGID_26_">
              <use
                xlinkHref="#SVGID_25_"
                style={{
                  overflow: 'visible',
                }}
              />
            </clipPath>
            <g className="st14">
              <defs>
                <rect
                  id="SVGID_27_"
                  x={27.8}
                  y={-976.4}
                  width={1024}
                  height={2765}
                />
              </defs>
              <clipPath id="SVGID_28_">
                <use
                  xlinkHref="#SVGID_27_"
                  style={{
                    overflow: 'visible',
                  }}
                />
              </clipPath>
            </g>
          </g>
        </g>
      </g>
      <g>
        <path
          className="st0"
          d="M18.6,26.2v-23c0-1.4-3.9-2.6-9-2.6c-5.1,0-9,1.2-9,2.6v23c1.6-0.4,5.6-0.7,9-0.7C13,25.5,15.4,25.8,18.6,26.2 z"
        />
        <path
          className="st1"
          d="M0.7,27.2c-0.2,0-0.4-0.1-0.6-0.2c-0.2-0.2-0.4-0.5-0.4-0.8v-23c0-2.6,5.4-3.6,10-3.6c4.6,0,10,0.9,10,3.6v23 c0,0.3-0.1,0.6-0.3,0.8s-0.5,0.3-0.8,0.2c-3.4-0.5-5.7-0.7-8.9-0.7c-3.6,0-7.3,0.3-8.7,0.7C0.8,27.2,0.7,27.2,0.7,27.2z M9.6,24.5 c2.9,0,5.1,0.2,8,0.6V3.2c-0.2-0.4-2.9-1.6-8-1.6c-5.1,0-7.8,1.2-8,1.7l0,21.7C3.8,24.6,7.1,24.5,9.6,24.5z"
        />
      </g>
      <g>
        <path
          className="st0"
          d="M36.6,26.2v-23c0-1.4-3.9-2.6-9-2.6c-5.1,0-9,1.2-9,2.6v23c3.3-0.4,5.6-0.7,9-0.7C31,25.5,35,25.8,36.6,26.2z"
        />
        <path
          className="st1"
          d="M36.6,27.2c-0.1,0-0.2,0-0.3,0c-1.4-0.4-5.1-0.7-8.7-0.7c-3.2,0-5.5,0.2-8.9,0.7c-0.3,0-0.6,0-0.8-0.2 s-0.3-0.5-0.3-0.8v-23c0-2.6,5.4-3.6,10-3.6s10,0.9,10,3.6v23c0,0.3-0.1,0.6-0.4,0.8C37,27.1,36.8,27.2,36.6,27.2z M27.6,1.6 c-5.1,0-7.8,1.2-8,1.7l0,21.8c2.9-0.4,5.1-0.6,8-0.6c2.6,0,5.9,0.2,8,0.5V3.2C35.4,2.8,32.8,1.6,27.6,1.6z"
        />
      </g>
      <g>
        <path
          className="st1"
          d="M13.1,9.8H5.4c-0.6,0-1-0.4-1-1s0.4-1,1-1h7.8c0.6,0,1,0.4,1,1S13.7,9.8,13.1,9.8z"
        />
      </g>
      <g>
        <path
          className="st1"
          d="M13.1,14.5H5.4c-0.6,0-1-0.4-1-1s0.4-1,1-1h7.8c0.6,0,1,0.4,1,1S13.7,14.5,13.1,14.5z"
        />
      </g>
      <g>
        <path
          className="st1"
          d="M13.1,19.2H5.4c-0.6,0-1-0.4-1-1s0.4-1,1-1h7.8c0.6,0,1,0.4,1,1S13.7,19.2,13.1,19.2z"
        />
      </g>
      <g>
        <path
          className="st1"
          d="M31.9,9.8h-7.7c-0.6,0-1-0.4-1-1s0.4-1,1-1h7.7c0.6,0,1,0.4,1,1S32.5,9.8,31.9,9.8z"
        />
      </g>
      <g>
        <path
          className="st1"
          d="M31.9,14.5h-7.7c-0.6,0-1-0.4-1-1s0.4-1,1-1h7.7c0.6,0,1,0.4,1,1S32.5,14.5,31.9,14.5z"
        />
      </g>
      <g>
        <path
          className="st1"
          d="M31.9,19.2h-7.7c-0.6,0-1-0.4-1-1s0.4-1,1-1h7.7c0.6,0,1,0.4,1,1S32.5,19.2,31.9,19.2z"
        />
      </g>
      <g>
        <g>
          <path
            className="st1"
            d="M42.4,32.8c-0.6,0-1.3-0.2-1.8-0.7L35.5,27c-1-1-1-2.6,0-3.5c1-1,2.6-1,3.5,0l5.1,5.1c1,1,1,2.6,0,3.5 C43.7,32.5,43.1,32.8,42.4,32.8z M37.3,24.7c-0.1,0-0.3,0-0.4,0.1c-0.2,0.2-0.2,0.5,0,0.7l5.1,5.1c0.2,0.2,0.5,0.2,0.7,0 c0.2-0.2,0.2-0.5,0-0.7l-5.1-5.1C37.6,24.7,37.4,24.7,37.3,24.7z"
          />
        </g>
        <g>
          <circle className="st18" cx={33.1} cy={20.6} r={7} />
          <path
            className="st1"
            d="M33.1,28.6c-4.4,0-8-3.6-8-8s3.6-8,8-8c4.4,0,8,3.6,8,8S37.5,28.6,33.1,28.6z M33.1,14.6c-3.3,0-6,2.7-6,6 s2.7,6,6,6c3.3,0,6-2.7,6-6S36.4,14.6,33.1,14.6z"
          />
        </g>
      </g>
    </svg>
  )
}

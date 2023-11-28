const CustomButton = ({ title, ...props }) => {
  return (
    <button {...props} className="hero_btn">
      {title}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 37 37"
        fill="none"
      >
        <circle
          cx="18.5"
          cy="18.5"
          r="18.5"
          fill="url(#paint0_linear_111_1322)"
        />
        <path
          d="M14.817 12.0207L14.7551 13.8349L22.2618 13.8863L11.3038 24.6155L12.6445 25.9848L23.6026 15.2557L23.4826 22.7487L25.3496 22.7516L25.4572 12.0729L14.817 12.0207Z"
          fill="black"
        />
        <defs>
          <linearGradient
            id="paint0_linear_111_1322"
            x1="-55.5"
            y1="-10"
            x2="50"
            y2="37"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4C88FC" />
            <stop offset="1" stopColor="#75F2F6" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};

export default CustomButton;

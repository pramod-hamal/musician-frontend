
import React from "react";

const ChevronIcon = ({ direction = "right", className = "" }) => {
    const rotation = direction === "right" ? "rotate-0" : "rotate-180";
    return (
        <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`${rotation} ${className} transition-transform duration-300`}
        >
            <rect width="20" height="20" rx="10" fill="#4FBFA5" />
            <path d="M7.11499 14.115L7.99999 15L13 10L7.99999 5L7.11499 5.885L11.23 10L7.11499 14.115Z" fill="white" />
        </svg>
    );
};

export default ChevronIcon;

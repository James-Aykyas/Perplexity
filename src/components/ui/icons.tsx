import * as React from "react";

// The actual Perplexity logo from the uploaded image
export function PerplexityLogo(props: React.HTMLAttributes<HTMLImageElement>) {
  const { className, ...rest } = props;
  return (
    <img 
      src="/assets/perplexity-logo.png" 
      alt="Perplexity Logo"
      width={24} 
      height={24} 
      className={className}
      {...rest}
    />
  );
}

// Home icon for Perplexity sidebar
export function HomeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      {...props}
    >
      <path
        d="M10.5 18H13.5V14H16.5L12 9L7.5 14H10.5V18Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3.75C16.5563 3.75 20.25 7.44365 20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Discover icon for Perplexity sidebar
export function DiscoverIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      {...props}
    >
      <path
        d="M20.25 12C20.25 16.5563 16.5563 20.25 12 20.25C7.44365 20.25 3.75 16.5563 3.75 12C3.75 7.44365 7.44365 3.75 12 3.75C16.5563 3.75 20.25 7.44365 20.25 12Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.47 13.47L15.53 8.47L10.53 10.53L8.47 15.53L13.47 13.47Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Spaces icon for Perplexity sidebar
export function SpacesIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      {...props}
    >
      <path
        d="M15.75 10.5V6C15.75 5.17157 15.0784 4.5 14.25 4.5H4.5C3.67157 4.5 3 5.17157 3 6V14.25C3 15.0784 3.67157 15.75 4.5 15.75H6.75"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.75 9H19.5C20.3284 9 21 9.67157 21 10.5V18.75C21 19.5784 20.3284 20.25 19.5 20.25H9.75C8.92157 20.25 8.25 19.5784 8.25 18.75V10.5C8.25 9.67157 8.92157 9 9.75 9Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Chat/Threads icon for Perplexity sidebar
export function ThreadsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth="1.5"
      {...props}
    >
      <path
        d="M12 20.25C16.5563 20.25 20.25 16.5563 20.25 12C20.25 7.44365 16.5563 3.75 12 3.75C7.44365 3.75 3.75 7.44365 3.75 12C3.75 13.0471 3.94218 14.0471 4.29297 14.9648C4.34604 15.0971 4.36395 15.2402 4.33838 15.3799L3.75 18.75L7.12019 18.1616C7.25989 18.1361 7.40294 18.154 7.53516 18.207C8.45285 18.5578 9.45285 18.75 10.5 18.75H12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12L9.75 12.75L12 10.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
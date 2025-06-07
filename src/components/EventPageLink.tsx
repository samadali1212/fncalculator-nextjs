import React from 'react';

// This component forces a full page reload when clicking on event links
const EventPageLink: React.FC<{
  to: string;
  children: React.ReactNode;
  className?: string;
}> = ({ to, children, className }) => {
  return (
    <a
      href={to}
      className={className}
      onClick={(e) => {
        // Allow ctrl/cmd+click to open in new tab
        if (e.ctrlKey || e.metaKey) return;
        
        // Otherwise force reload by using traditional navigation
        window.location.href = to;
        e.preventDefault();
      }}
    >
      {children}
    </a>
  );
};

export default EventPageLink;

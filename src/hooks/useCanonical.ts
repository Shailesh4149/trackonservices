import { useEffect } from "react";

const BASE_URL = "https://trackonservices.lovable.app";

export const useCanonical = (path?: string) => {
  useEffect(() => {
    const canonicalPath = path || window.location.pathname;
    const url = `${BASE_URL}${canonicalPath}`;
    
    let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (link) {
      link.href = url;
    } else {
      link = document.createElement("link");
      link.rel = "canonical";
      link.href = url;
      document.head.appendChild(link);
    }

    return () => {
      // Reset to homepage canonical on unmount
      if (link) link.href = `${BASE_URL}/`;
    };
  }, [path]);
};

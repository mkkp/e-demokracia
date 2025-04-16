import { useEffect, useRef, useState } from 'react';

export function useLayout() {
  const layoutRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !layoutRef.current) return;
    setHeight(layoutRef.current.clientHeight);
    setWidth(layoutRef.current.clientWidth);
  }, [isMounted]);

  const isHidden = isMounted && height === 0 && width === 0;

  return { isMounted, isHidden, layoutRef, height, width };
}

'use client';

import { useEffect, useState } from 'react';

/**
 * Only renders children on the client after mount.
 * Use this to avoid running browser-only code (e.g. localStorage, framer-motion)
 * during Next.js server-side rendering.
 */
export default function ClientOnly({
  children,
  fallback = null,
}: {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <>{fallback}</>;
  return <>{children}</>;
}

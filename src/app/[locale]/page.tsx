'use client';

import { useEffect } from 'react';

import { useRouter } from '@/navigation';

export default function LocalePage() {
  const router = useRouter();

  useEffect(() => router.push('/recipes'), [router]);
}

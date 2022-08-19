import React from 'react';
import { useRouter } from 'next/router';

export default function ConfigPage() {
  const router = useRouter();
  return (
    <div>
      Config Page All Slugs: {(router.query?.allConfig ?? []).join(', ')}
    </div>
  );
}

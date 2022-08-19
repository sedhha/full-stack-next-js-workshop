import React from 'react';
import { useRouter } from 'next/router';
export default function SlugPage() {
  const router = useRouter();
  return <div>Blog Slug: {router.query.slug}</div>;
}

'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const router = useRouter();

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data.user) router.push('/login');
      else setUser(data.user);
    };
    getUser();
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Welcome, {user.email}</h1>
      <p>Your Blockrise Real Estate Portfolio</p>
      <p>(Rental income and properties will appear here soon)</p>
    </div>
  );
}

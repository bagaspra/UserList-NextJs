import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return (
    <div className="not-found">
      <h1>Opsss ...</h1>
      <h2>Halaman ini tidak dapat di temukan</h2>
      <p>
        Silahkan Kembali ke <Link href="/">Homepage</Link>
      </p>
    </div>
  );
};

export default NotFound;

import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link href="/">
          <Image src="/bagas.png" width={127} height={77}></Image>
        </Link>
      </div>

      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/users">Listing</Link>
    </nav>
  );
};

export default Navbar;

import Link from 'next/link';
import styles from '../../styles/Users.module.css';
import Head from 'next/head';

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const index = ({ users }) => {
  return (
    <>
      <Head>
        <title>Bagas Next | Users</title>
        <meta name="keywords" content="bagas" />
      </Head>

      <div>
        <h1>Index</h1>
        {users.map((user) => (
          <Link
            href={`/users/${user.id}`}
            key={user.id}
            className={styles.single}
          >
            <h3>{user.name}</h3>
          </Link>
        ))}
      </div>
    </>
  );
};

export default index;

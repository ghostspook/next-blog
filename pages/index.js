import Link from 'next/link'

export default function Home() {
    return (
      <>
        <h1>Next.js starter site</h1>
        <p>This is a demonstration blog using <a href="https://nextjs.org/">Next.js</a>.</p>
        <p>Find out more about us <Link href="/about">here</Link></p>
      </>
    );
  }
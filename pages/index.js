import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>This is main page</h1>
      <p>You can Login Or Sign Upd</p>
      <Link href="/login">
        <a>Login</a>
      </Link>
      <Link href="/sign-up">
        <a>Sign Up</a>
      </Link>
    </>
  )
}

import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <>
      <h1>Hello world!</h1>
      <Link href="/new">New</Link>
    </>
  );
}

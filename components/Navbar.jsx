//built in link component
import Link from "next/link";

export default function navbar() {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>

      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  );
}

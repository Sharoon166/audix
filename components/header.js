import Link from "next/link";

export default function Header() {
    return (
      <header className="flex items-center justify-between font-sans">
        <Link href="/">
          <h2 className="font-molgan text-2xl font-bold">Audix</h2>
        </Link>
        <nav>
          <ul className="flex items-center gap-4 text-sm">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Features</Link>
            </li>
            <li>
              <Link href="#">Shop</Link>
            </li>
            <li>
              <Link href="#">Support</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
}
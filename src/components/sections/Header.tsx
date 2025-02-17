import Link from "next/link";
import "@/components/String";

const Header = () => {
  return(
    <header className="site-header">
      <h1><Link href="/"><span className="color-wdd-pink">this</span>.<span className="color-wdd-blue">webDeveloperDude</span>();</Link></h1>
      <String>Los Angeles based Software Engineer.</String>
    </header>
  );
}

export default Header;

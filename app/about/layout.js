import Link from "next/link";
const AboutLayout = ({ children }) => {
  return (
    <div className="mt-2">
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">vision</Link>
          </li>
        </ul>
      </nav>
      <hr />
      {children}
    </div>
  );
};

export default AboutLayout;

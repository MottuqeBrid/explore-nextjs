import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "My First Blog Post",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere, nunc vitae tristique accumsan, mauris lectus facilisis velit, non aliquet ligula odio in metus.",
      date: "July 15, 2023",
    },
    {
      id: 2,
      title: "My Second Blog Post",
      content:
        "Proin vel sollicitudin ante. Donec sed velit vel neque tristique eleifend. Nullam malesuada ipsum et justo finibus, at consectetur ligula facilisis.",
      date: "July 10, 2023",
    },
    {
      id: 3,
      title: "My Third Blog Post",
      content:
        "Integer nec neque vel felis facilisis convallis. Donec ultricies, mauris vel condimentum placerat, ligula nulla consectetur nunc, in consectetur quam ligula id arcu.",
      date: "July 5, 2023",
    },
    {
      id: 4,
      title: "My Fourth Blog Post",
      content:
        "Sed consectetur, neque non tempus malesuada, neque lectus vestibulum neque, vitae fermentum risus dui vel metus.",
      date: "July 1, 2023",
    },
  ];
  return (
    <div>
      <div className="mt-10 text-2xl">This is Blogs Page</div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="mt-5">
            <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// export default About;

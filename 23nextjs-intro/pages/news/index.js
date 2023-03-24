/*https://my-domain/news */
import Link from 'next/link'
function NewsPage() {
  return (
    <>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs">Nextjs</Link>
        </li>
        <li>
          <Link href="/news/reactjs">React</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;

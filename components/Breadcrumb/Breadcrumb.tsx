// components/Breadcrumb.tsx
import { useRouter } from 'next/router';
import Link from 'next/link';

interface BreadcrumbProps {
  separator?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ separator = '/' }) => {
  const router = useRouter();
  const pathSegments = router.asPath.split('/').filter(segment => segment !== '');

  return (
    <nav className="flex items-center text-gray-500">
      <ul className="flex space-x-2">
        <li>
          <Link href="/" passHref>
            <a className="hover:text-blue-600">Home</a>
          </Link>
        </li>
        {pathSegments.map((segment, index) => (
          <li key={index} className="flex items-center">
            <span className="mx-1">{separator}</span>
            {index !== pathSegments.length - 1 ? (
              <Link href={`/${pathSegments.slice(0, index + 1).join('/')}`} passHref>
                <a className="hover:text-blue-600">{segment}</a>
              </Link>
            ) : (
              <span className="font-semibold">{segment}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;

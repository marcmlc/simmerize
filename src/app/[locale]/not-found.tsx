import 'server-only';

import { Error } from '@/components/Error';

export default function NotFoundPage() {
  return <Error code={404} message="Cette page n'existe pas" />;
}

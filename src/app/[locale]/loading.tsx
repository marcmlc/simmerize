import { center } from '@styles/patterns';

import { Loader } from '@/components/Loader';

export default function LoadingRoot() {
  return (
    <div className={center({ height: 'full' })}>
      <Loader />
    </div>
  );
}

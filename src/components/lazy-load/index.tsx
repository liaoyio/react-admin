import { Suspense } from 'react';
import Loading from '../loading';

const LazyLoad = (Component: any) => (
  <Suspense fallback={<Loading />}>
    <Component />
  </Suspense>
);

export default LazyLoad;

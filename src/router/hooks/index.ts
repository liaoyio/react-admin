import { useMemo } from 'react';

import {
  useParams as _useParams,
  useLocation,
  useNavigate,
  useSearchParams as _useSearchParams,
} from 'react-router-dom';

const useParams = () => {
  const params = _useParams();
  return useMemo(() => params, [params]);
};

const usePathname = () => {
  const { pathname } = useLocation();
  return useMemo(() => pathname, [pathname]);
};

const useRouter = () => {
  const navigate = useNavigate();

  const router = useMemo(
    () => ({
      back: () => navigate(-1),
      forward: () => navigate(1),
      reload: () => window.location.reload(),
      push: (href: string) => navigate(href),
      replace: (href: string) => navigate(href, { replace: true }),
    }),
    [navigate],
  );

  return router;
};

const useSearchParams = () => {
  const [searchParams] = _useSearchParams();
  return useMemo(() => searchParams, [searchParams]);
};

export { useParams, usePathname, useRouter, useSearchParams };

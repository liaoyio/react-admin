import useSWR from 'swr';
import http from '@/utils/request';

const Home: React.FC = () => {
  const { data, error, isLoading } = useSWR('/api/v1/me', (url) => {
    return http.get<{
      data: {
        id: number;
        name: string;
      };
    }>({ url });
  });

  if (isLoading) {
    return <div>加载中...</div>;
  }
  if (error) {
    return <div>加载失败</div>;
  }

  return <div>Hi, I am {JSON.stringify(data)}</div>;
};
export default Home;

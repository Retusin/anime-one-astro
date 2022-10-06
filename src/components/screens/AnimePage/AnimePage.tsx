import { AnimeCard } from '@components/ui/card/AnimeCard';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { FC } from 'react';
import { useInView } from 'react-intersection-observer';
import { getRequestAnime } from '../../../services/hooks/getAnimes';
import type { AnimeParams } from '../../../types/anime.types';

const queryClient = new QueryClient();

export const AnimePage: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AnimeScreen />
    </QueryClientProvider>
  );
};

const AnimeScreen: FC = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage } = getRequestAnime();

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);
  return (
    <div>
      <ul className='grid grid-cols-2 gap-5'>
        {data?.pages.map((page) =>
          page.data.map((repo: AnimeParams) => (
            <div key={repo.id}>
              <AnimeCard item={repo} />
            </div>
          ))
        )}
      </ul>
      <div ref={ref} />
    </div>
  );
};

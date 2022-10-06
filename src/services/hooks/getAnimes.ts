import { useInfiniteQuery } from '@tanstack/react-query';
import { AnimeServices } from '../anime.services';

export const getRequestAnime = () =>
  useInfiniteQuery(
    ['anime'],
    ({ pageParam = 0 }) => AnimeServices.getAnime({ pageParam }),
    {
      getNextPageParam: (lastPage, allPages) => allPages.length * 12
    }
  );

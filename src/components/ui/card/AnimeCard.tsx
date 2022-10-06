import React from 'react';
import type { AnimeParams } from '../../../types/anime.types';

interface IAnimeCard {
  item: AnimeParams;
}

export const AnimeCard: React.FC<IAnimeCard> = ({ item }) => {
  return (
    <li className='bg-[#004643] rounded-xl'>
      <a href='/manga'>
        <div className='p-4 flex gap-10'>
          <img
            src={item.attributes.posterImage.medium}
            width={170}
            height={250}
            alt='logo'
            className='rounded-xl'
          />
          <div>
            <h2 className='mb-2 text-2xl font-semibold'>
              {item.attributes.titles.en_jp}
            </h2>
            <span className='text-[#e16162]'>
              {item.attributes.titles.ja_jp}
            </span>
            <div className='mb-2 mt-2 flex items-center gap-3'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='#f9bc60'
                className='w-6 h-6'
              >
                <path
                  fill-rule='evenodd'
                  d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                  clip-rule='evenodd'
                />
              </svg>
              <span className='font-semibold'>
                {item.attributes.averageRating}
              </span>
            </div>
            <p className='line-clamp-4 mb-2 text-lg text-[#abd1c6]'>
              {item.attributes.synopsis}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};

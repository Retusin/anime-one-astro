import { axiosBase } from '../api/axios';

interface AnimeParams {
  pageParam: number;
}

export const AnimeServices = {
  async getAnime({ pageParam }: AnimeParams) {
    const response = await axiosBase.get(
      `/anime?page[limit]=10&page[offset]=${pageParam}`
    );
    return response.data;
  }
};

export interface AnimeDataParams  {
  data : [
    {
      id: string,
      type: string,
      links: {
        self: string,
      },
      attributes: {
        createdAt: string,
        updatedAt: string,
        slug: string,
        synopsis: string,
        coverImageTopOffset: number,
        titles: {
          en: string,
          en_jp: string,
          ja_jp: string,
        },
        canonicalTitle: string,
        abbreviatedTitles: [
          string
        ],
        averageRating: string,
        ratingFrequencies: {
          2: string,
          3: string,
          4: string,
          5: string,
          6: string,
          7: string,
          8: string,
          9: string,
          10: string,
          11: string,
          12: string,
          13: string,
          14: string,
          15: string,
          16: string,
          17: string,
          18: string,
          19: string,
          20: string,
        },
        userCount: number,
        favoritesCount: number,
        startDate: string,
        endDate: string,
        popularityRank: number,
        ratingRank: number,
        ageRating: string,
        ageRatingGuide: string,
        subtype: string,
        status: string,
        tba: string,
        posterImage: {
          tiny: string,
          small: string,
          medium: string,
          large: string,
          original: string,
          meta: {
            dimensions: {
              tiny: {
                width: null,
                height: null
              },
              small: {
                width: null,
                height: null
              },
              medium: {
                width: null,
                height: null
              },
              large: {
                width: null,
                height: null
              }
            }
          }
        },
        coverImage: {
          tiny: string,
          small: string,
          large: string,
          original: string,
        	meta: {
            dimensions: {
              tiny: {
                width: null,
                height: null
              },
              small: {
                width: null,
                height: null
              },
              large: {
                width: null,
                height: null
              }
            }
          }
        },
        episodeCount: number,
        episodeLength: number,
        youtubeVideoId: string,
        showType: string,
        nsfw: boolean
      },
      relationships: {
        genres: {
          links: {
            self: string,
            related: string,
          }
        },
        categories: {
          links: {
            self: string,
            related: string,
          }
        },
        castings: {
          links: {
            self: string,
            related: string
          }
        },
        installments: {
          links: {
            self: string,
            related: string
          }
        },
        mappings: {
          links: {
            self: string,
            related: string
          }
        },
        reviews: {
          links: {
            self: string,
            related: string
          }
        },
        mediaRelationships: {
          links: {
            self: string,
            related: string
          }
        },
        episodes: {
          links: {
            self: string,
            related: string
          }
        },
        streamingLinks: {
          links: {
            self: string,
            related: string
          }
        },
        animeProductions: {
          links: {
            self: string,
            related: string
          }
        },
        animeCharacters: {
          links: {
            self: string,
            related: string
          }
        },
        animeStaff: {
          links: {
            self: string,
            related: string
          }
        }
      }
    }
  ],
  meta: {
    count: number
  },
  links: {
    first: string,
    prev: string,
    next: string,
    last: string
  }
}

export interface AnimeParams {
	
  	 id: string,
      type: string,
      links: {
        self: string,
      },
      attributes: {
        createdAt: string,
        updatedAt: string,
        slug: string,
        synopsis: string,
        coverImageTopOffset: number,
        titles: {
          en: string,
          en_jp: string,
          ja_jp: string,
        },
        canonicalTitle: string,
        abbreviatedTitles: [
          string
        ],
        averageRating: string,
        ratingFrequencies: {
          2: string,
          3: string,
          4: string,
          5: string,
          6: string,
          7: string,
          8: string,
          9: string,
          10: string,
          11: string,
          12: string,
          13: string,
          14: string,
          15: string,
          16: string,
          17: string,
          18: string,
          19: string,
          20: string,
        },
        userCount: number,
        favoritesCount: number,
        startDate: string,
        endDate: string,
        popularityRank: number,
        ratingRank: number,
        ageRating: string,
        ageRatingGuide: string,
        subtype: string,
        status: string,
        tba: string,
        posterImage: {
          tiny: string,
          small: string,
          medium: string,
          large: string,
          original: string,
          meta: {
            dimensions: {
              tiny: {
                width: null,
                height: null
              },
              small: {
                width: null,
                height: null
              },
              medium: {
                width: null,
                height: null
              },
              large: {
                width: null,
                height: null
              }
            }
          }
        },
        coverImage: {
          tiny: string,
          small: string,
          large: string,
          original: string,
        	meta: {
            dimensions: {
              tiny: {
                width: null,
                height: null
              },
              small: {
                width: null,
                height: null
              },
              large: {
                width: null,
                height: null
              }
            }
          }
        },
        episodeCount: number,
        episodeLength: number,
        youtubeVideoId: string,
        showType: string,
        nsfw: boolean
      },
      relationships: {
        genres: {
          links: {
            self: string,
            related: string,
          }
        },
        categories: {
          links: {
            self: string,
            related: string,
          }
        },
        castings: {
          links: {
            self: string,
            related: string
          }
        },
        installments: {
          links: {
            self: string,
            related: string
          }
        },
        mappings: {
          links: {
            self: string,
            related: string
          }
        },
        reviews: {
          links: {
            self: string,
            related: string
          }
        },
        mediaRelationships: {
          links: {
            self: string,
            related: string
          }
        },
        episodes: {
          links: {
            self: string,
            related: string
          }
        },
        streamingLinks: {
          links: {
            self: string,
            related: string
          }
        },
        animeProductions: {
          links: {
            self: string,
            related: string
          }
        },
        animeCharacters: {
          links: {
            self: string,
            related: string
          }
        },
        animeStaff: {
          links: {
            self: string,
            related: string
          }
        }
      }
  
}
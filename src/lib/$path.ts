import { OptionalQuery as OptionalQuery0 } from '../../pages/account/login'

export const pagesPath = {
  $404: {
    $url: (url?: { hash?: string }) => ({ pathname: '/404' as const, hash: url?.hash })
  },

  account: {
    login: {
      $url: (url?: { query?: OptionalQuery0, hash?: string }) => ({
        pathname: '/account/login' as const,
        query: url?.query,
        hash: url?.hash
      })
    },
    register: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/account/register' as const,
        hash: url?.hash
      })
    }
  },
  customers: {
    _slug: (slug: string | number) => ({
      $url: (url?: { hash?: string }) => ({
        pathname: '/customers/[slug]' as const,
        query: { slug },
        hash: url?.hash
      })
    }),
    add: {
      $url: (url?: { hash?: string }) => ({
        pathname: '/customers/add' as const,
        hash: url?.hash
      })
    },
    $url: (url?: { hash?: string }) => ({
      pathname: '/customers' as const,
      hash: url?.hash
    })
  },
  dashboard: {
    $url: (url?: { hash?: string }) => ({
      pathname: '/dashboard' as const,
      hash: url?.hash
    })
  },
  $url: (url?: { hash?: string }) => ({
    pathname: '/' as const,
    hash: url?.hash
  })
}

export type PagesPath = typeof pagesPath

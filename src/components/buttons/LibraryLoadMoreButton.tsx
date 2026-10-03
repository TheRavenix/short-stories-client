"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { Button } from "@/components/ui/Button";

import { PAGINATION_DEFAULT_LIMIT } from "@/constants/filter";

type Props = {
  limit: number
  count: number
}

export function LibraryLoadMoreButton({ limit, count }: Props) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const handleOnClick = () => {
    const params = new URLSearchParams(searchParams)
    params.set('limit', (limit + PAGINATION_DEFAULT_LIMIT).toString())
    router.push(`/s?${params.toString()}`, { scroll: false })
  }

  if (limit >= count) {
    return null
  }

  return (
    <Button size='responsive' onClick={handleOnClick}>
      Load more stories
    </Button>
  )
}

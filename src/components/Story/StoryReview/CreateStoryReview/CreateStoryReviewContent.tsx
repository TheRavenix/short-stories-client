"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

import styles from "./CreateStoryReview.module.css";

import { Button } from "@/components/ui/Button";
import { STAR_RATING_MAX, StarRating } from "@/components/StarRating";
import { Input } from "@/components/ui/Input";
import { Form } from "@/components/Form";
import { ActionSlot } from "@/components/ActionSlot";
import { useToastStore } from "@/stores/toast";
import { createStoryReview, CreateStoryReviewData } from "@/services/story-review";

type Props = {
  storyId: number
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function CreateStoryReviewContent({ storyId, setOpen }: Props) {
  const router = useRouter()
  const pathName = usePathname()
  const searchParams = useSearchParams()
  const [rating, setRating] = useState(STAR_RATING_MAX)
  const [comment, setComment] = useState("")
  const addToast = useToastStore((s) => s.addToast)

  const mutation = useMutation({
    mutationKey: ['create-story-review'],
    mutationFn: (data: CreateStoryReviewData) => {
      return createStoryReview(storyId, data)
    },
    onSuccess(data) {
      let href = pathName

      if (searchParams.get('view') === 'tabs') {
        href += `?view=tabs&tab=${searchParams.get('tab')}`
      }

      addToast({
        title: 'Post review',
        description: data.message,
      })
      setOpen(false)
      router.push(href, { scroll: false })
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        addToast({
          title: 'Error post review',
          description: error.response?.data.message,
          variant: 'error'
        })
      }
    }
  })

  const handleReview = (e: React.FormEvent<HTMLFormElement>) => {
    mutation.mutate({
      stars: rating,
      comment
    })
  }

  return (
    <div className={styles.content}>
      <StarRating rating={rating} setRating={setRating} interactive />
      <Form onSubmit={handleReview}>
        <Input
          label='Your Comment'
          required
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <ActionSlot>
          <Button
            type='submit'
            className={styles.postButton}
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Loading...' : 'Add'}
          </Button>
        </ActionSlot>
      </Form>
    </div>
  )
}

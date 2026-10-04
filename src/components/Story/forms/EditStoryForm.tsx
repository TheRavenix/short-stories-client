"use client";

import { useMutation } from "@tanstack/react-query";
import { useState } from "react";

import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Input/Textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";
import { Skeleton } from "@/components/Skeleton";
import { Form } from "@/components/Form";
import { useProfile } from "@/hooks/profile";
import { useToastStore } from "@/stores/toast";
import { joinByNewLine, splitByNewLine } from "@/utils/text";
import { StoryType } from "../Story";
import { StoryContentType } from "../StoryContent";
import { editStory, EditStoryData } from "@/services/story";

type Props = {
  story: StoryType
  storyContent: StoryContentType
}

export function EditStoryForm({ story, storyContent }: Props) {
  const { isLoading, profile } = useProfile()
  const [formData, setFormData] = useState<EditStoryData>({
    name: story.name || '',
    description: story.description || '',
    preview: story.preview || [],
    about: story.about || [],
    content: storyContent.content || [],
    genre: story.genre || ['adventure'],
    plan: story.plan || 'free',
    coverImage: story.coverImage || 'short-story-cover.jpeg'
  })
  const addToast = useToastStore((s) => s.addToast)

  const mutation = useMutation({
    mutationKey: ['edit-story'],
    mutationFn: (data: EditStoryData) => {
      return editStory(story.id, data)
    },
    onSuccess(data) {
      addToast({
        title: 'Edit story',
        description: data.message,
      })
      window.location.replace(`/s/${data.slug}`)
    },
    onError(error) {
      addToast({
        title: 'Error edit story',
        description: error.message,
        variant: 'error'
      })
    }
  })

  const updateFormDataProp = (
    prop: keyof EditStoryData,
    value: EditStoryData[keyof EditStoryData]
  ) => {
    setFormData((prev) => ({ ...prev, [prop]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    mutation.mutate(formData)
  }

  if (isLoading || profile?.role !== 'admin') {
    return <Skeleton type='card' />
  }

  return (
    <Form spacing='md' onSubmit={handleSubmit}>
      <Input
        label='Name'
        defaultValue={formData.name}
        onBlur={(e) => updateFormDataProp('name', e.target.value)}
        required
      />
      <Input
        label='Description'
        defaultValue={formData.description}
        onBlur={(e) => updateFormDataProp('description', e.target.value)}
        required
      />
      <Textarea
        label='About'
        defaultValue={joinByNewLine(formData.about)}
        onBlur={(e) =>
          updateFormDataProp('about', splitByNewLine(e.target.value))
        }
      />
      <Textarea
        label='Preview'
        defaultValue={joinByNewLine(formData.preview)}
        onBlur={(e) =>
          updateFormDataProp('preview', splitByNewLine(e.target.value))
        }
      />
      <Textarea
        label='Content'
        defaultValue={joinByNewLine(formData.content)}
        onBlur={(e) =>
          updateFormDataProp('content', splitByNewLine(e.target.value))
        }
      />
      <Select
        value={formData.genre[0]}
        onValueChange={(v) => updateFormDataProp('genre', [v])}
      >
        <SelectTrigger>
          <SelectValue placeholder='Select story genre' />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='adventure'>Adventure</SelectItem>
            <SelectItem value='mystery'>Mystery</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select
        value={formData.plan}
        onValueChange={(v) => updateFormDataProp('plan', v)}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='free'>Free</SelectItem>
            <SelectItem value='pro'>Pro</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Input label='Cover Image' type='file' />
      <Button type='submit' size='responsive'>
        Edit
      </Button>
    </Form>
  )
}

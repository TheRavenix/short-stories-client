'use client'

import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import axios from 'axios'

import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Input/Textarea'
import { Button } from '@/components/ui/Button'
import { Skeleton } from '@/components/Skeleton'
import { Form } from '@/components/Form'
import { LabelRowSelect } from '@/components/LabelRow/LabelRowSelect'
import { LabelRowSwitch } from '@/components/LabelRow/LabelRowSwitch'
import { useProfile } from '@/hooks/profile'
import { useToastStore } from '@/stores/toast'
import { joinByNewLine, splitByNewLine } from '@/utils/text'
import { editStory, EditStoryData } from '@/services/story'
import { StoryType } from '../Story'

type Props = {
  story: StoryType
}

export function EditStoryForm({ story }: Props) {
  const { isLoading, profile } = useProfile()
  const [formData, setFormData] = useState<EditStoryData>({
    name: story.name || '',
    description: story.description || '',
    preview: story.preview || [],
    about: story.about || [],
    content: story.content || [],
    genre: story.genre || ['adventure'],
    plan: story.plan || 'free',
    featured: story.featured || false,
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
      if (axios.isAxiosError(error)) {
        addToast({
          title: 'Error edit story',
          description: error.response?.data.message,
          variant: 'error'
        })
      }
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
      <LabelRowSelect
        label='Genre'
        defaultValue={formData.genre[0]}
        onValueChange={(v) => updateFormDataProp('genre', [v])}
        selectItems={
          [
            { value: 'adventure', children: 'Adventure' },
            { value: 'mystery', children: 'Mystery' }
          ]
        }
      />
      <LabelRowSelect 
        label='Plan'
        defaultValue={formData.plan}
        onValueChange={(v) => updateFormDataProp('plan', v)}
        selectItems={
          [
            { value: 'free', children: 'Free' },
            { value: 'pro', children: 'Pro' }
          ]
        }
      />
      <LabelRowSwitch
        label='Featured'
        checked={formData.featured}
        onCheckedChange={(checked) => updateFormDataProp('featured', checked)}
      />
      <Input label='Cover Image' type='file' />
      <Button type='submit' size='responsive'>
        Edit
      </Button>
    </Form>
  )
}

'use client'

import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import axios from 'axios'

import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Input/Textarea'
import { Button } from '@/components/ui/Button'
import { Skeleton } from '@/components/Skeleton'
import { Form } from '@/components/Form'
import { LabelRowSwitch } from '@/components/LabelRow/LabelRowSwitch'
import { LabelRowSelect } from '@/components/LabelRow/LabelRowSelect'
import { useProfile } from '@/hooks/profile'
import { useToastStore } from '@/stores/toast'
import { createStory, CreateStoryData } from '@/services/story'
import { splitByNewLine } from '@/utils/text'

export function CreateStoryForm() {
  const { isLoading, profile } = useProfile()
  const [formData, setFormData] = useState<CreateStoryData>({
    name: '',
    description: '',
    preview: [],
    about: [],
    content: [],
    genre: ['adventure'],
    plan: 'free',
    featured: false,
    coverImage: 'short-story-cover.jpeg'
  })
  const addToast = useToastStore((s) => s.addToast)

  const mutation = useMutation({
    mutationKey: ['create-story'],
    mutationFn: createStory,
    onSuccess(data) {
      addToast({
        title: 'Create story',
        description: data.message,
      })
      window.location.replace(`/s?q=${formData.name}`)
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        addToast({
          title: 'Error create story',
          description: error.response?.data.message,
          variant: 'error'
        })
      }
    }
  })

  const updateFormDataProp = (
    prop: keyof CreateStoryData,
    value: CreateStoryData[keyof CreateStoryData]
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
        defaultValue={formData.about}
        onBlur={(e) =>
          updateFormDataProp('about', splitByNewLine(e.target.value))
        }
      />
      <Textarea
        label='Preview'
        defaultValue={formData.preview}
        onBlur={(e) =>
          updateFormDataProp('preview', splitByNewLine(e.target.value))
        }
      />
      <Textarea
        label='Content'
        defaultValue={formData.content}
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
        Create
      </Button>
    </Form>
  )
}

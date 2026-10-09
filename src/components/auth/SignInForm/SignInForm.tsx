'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import styles from './SignInForm.module.css'

import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { P } from '@/components/ui/Typography'
import { Form } from '@/components/Form'
import { useToastStore } from '@/stores/toast'
import { signIn, SignInData } from '@/services/auth'

export function SignInForm() {
  const [formData, setFormData] = useState<SignInData>({
    email: '',
    password: ''
  })
  const addToast = useToastStore((s) => s.addToast)

  const mutation = useMutation({
    mutationFn: signIn,
    onSuccess(data) {
      addToast({
        title: 'Sign in',
        description: data.message
      })
      window.location.replace('/')
    },
    onError(error) {
      if (axios.isAxiosError(error)) {
        addToast({
          title: 'Error sign in',
          description: error.response?.data.message,
          variant: 'error'
        })
      }
    }
  })

  const handleSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    mutation.mutate(formData)
  }

  return (
    <Form spacing='md' onSubmit={handleSignIn}>
      <Input
        type='email'
        label='Email'
        required
        value={formData.email}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <Input
        type='password'
        label='Password'
        required
        value={formData.password}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, password: e.target.value }))
        }
      />
      <div className={styles.endContent}>
        <Button size='responsive' type='submit' disabled={mutation.isPending}>
          {mutation.isPending ? 'Loading...' : 'Sign in'}
        </Button>
        <P variant='gray'>
          You don't have an account?{' '}
          <Link href='/sign-up' className={styles.signUpLink}>
            Sign up
          </Link>
        </P>
      </div>
    </Form>
  )
}

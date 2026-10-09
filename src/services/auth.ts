import { axiosClient } from '@/utils/axios-client'
import { MessageResponse } from '@/types/response'

export type SignUpData = {
  name?: string
  email: string
  password: string
}

type SignUpResponse = MessageResponse

export async function signUp(data: SignUpData): Promise<SignUpResponse> {
  const response = await axiosClient.post('auth/sign-up', data)
  return response.data
}

export type SignInData = {
  email: string
  password: string
}

type SignInResponse = MessageResponse

export async function signIn(data: SignInData): Promise<SignInResponse> {
  const response = await axiosClient.post('auth/sign-in', data)
  return response.data
}

type SignOutResponse = MessageResponse

export async function signOut(): Promise<SignOutResponse> {
  const response = await axiosClient.post('auth/sign-out')
  return response.data
}

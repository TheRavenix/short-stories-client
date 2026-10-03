import { PlanType } from "@/components/Plans";
import { axiosClient } from "@/utils/axios-client";
import { MessageResponse } from "@/types/response";

export type ProfileRoleType = "user" | "admin"

export type ProfileType = {
  id: number
  name: string
  email: string
  plan: PlanType
  role: ProfileRoleType
  createdAt: number
  updatedAt: number
}

export async function getUserProfile(): Promise<ProfileType> {
  const response = await axiosClient.get('users/profile')
  return response.data
}

type GetStatusResponse = {
  plan: PlanType
  role: ProfileRoleType
}

// Is this still needed?
export async function getUserStatus(): Promise<GetStatusResponse> {
  const response = await axiosClient.get('users/status')
  return response.data
}

export async function editUserName(name: string): Promise<MessageResponse> {
  const response = await axiosClient.post('users/edit-name', { name })
  return response.data
}

export type EditEmailData = {
  currentEmail: string
  newEmail: string
}

export async function editUserEmail(data: EditEmailData): Promise<MessageResponse> {
  const response = await axiosClient.post('users/edit-email', data)
  return response.data
}

export type ChangePasswordData = {
  currentPassword: string
  newPassword: string
}

type ChangeUserPasswordResponse = MessageResponse

export async function changeUserPassword(data: ChangePasswordData): Promise<ChangeUserPasswordResponse> {
  const response = await axiosClient.post('users/change-password', data)
  return response.data
}

export async function deleteUser(id: number): Promise<MessageResponse> {
  const response = await axiosClient.delete(`users/${id}`)
  return response.data
}

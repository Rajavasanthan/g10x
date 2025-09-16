import { CommentData, CommentsType } from "@/types";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export function postComment(data: CommentData) {
  return axios.post(`${baseURL}/api`, data)
}

export function getComment(blogId: string) {
  return axios.get(`${baseURL}/api?blogId=${blogId}`)
}

export function updateClapCountById(id: number, clapCount: number) {
  return axios.put(`${baseURL}/api?id=${id}`, { clapCount });
}

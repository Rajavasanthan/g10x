import { CommentData } from "@/types";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export function postComment(data: CommentData) {
  return axios.post(`${baseURL}/api/comments`, data)
}

export function getComment(blogId: string) {
  return axios.get(`${baseURL}/api/comments?blogId=${blogId}`)
}

export function updateClapCountById(id: string, clapCount: number) {
  return axios.put(`${baseURL}/api/comments?id=${id}`, { clapCount });
}

export function createBlogsForClaps(blogId: string) {
  return axios.post(`${baseURL}/api/blogs`, { blogId });
}


export function getBlogsClapCount(blogId: string) {
  return axios.get(`${baseURL}/api/blogs?blogId=${blogId}`)
}

export function updateClapCountByBlogId(blogId: string, clapCount: number) {
  return axios.put(`${baseURL}/api/blogs?blogId=${blogId}`, { clapCount });
}

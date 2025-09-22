import { CommentData } from "@/types";
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

export function postComment(data: CommentData) {
  return axios.post(`${baseURL}/api/comments`, data)
}

export function getComment(slugId: string) {
  return axios.get(`${baseURL}/api/comments?slugId=${slugId}`)
}

export function updateClapCountById(id: string, clapCount: number) {
  return axios.put(`${baseURL}/api/comments?id=${id}`, { clapCount });
}


export function createBlogsForClaps(slug: string) {
  return axios.post(`${baseURL}/api/blogs`, { slug });
}

export function getBlogsClapCount(slug: string) {
  return axios.get(`${baseURL}/api/blogs?slug=${slug}`)
}

export function updateClapCountBySlug(slug: string, clapCount: number) {
  return axios.put(`${baseURL}/api/blogs?slug=${slug}`, { clapCount });
}

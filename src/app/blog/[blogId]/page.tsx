import fs from "fs/promises";
import path from "path";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";
import matter from "gray-matter";

import { Navbar, Comments } from "@/components";
import Image from 'next/image'

import menImg from "../../../../public/images/men-img2.jpg"

export async function generateMetadata({ params }: { params: Promise<{ blogId: string }> }): Promise<Metadata> {

  const { blogId } = await params;

  const filePath = path.join(process.cwd(), `src/assets/article/${blogId}.md`);
  let fileContent = "";

  try {
    fileContent = await fs.readFile(filePath, "utf-8");
  } catch (err) {
    console.error("Markdown file not found:", filePath, err);
  }

  const { data, content } = matter(fileContent);

  const titleMatch = content.match(/^#\s+(.*)/m);
  const title = titleMatch ? titleMatch[1] : blogId.replace(/-/g, " ");

  const ogImage = data.ogImage;

  return {
    title,
    openGraph: {
      title,
      images: [{ url: ogImage, alt: title }],
    },
  };
}

export default async function Page({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;

  const filePath = path.join(process.cwd(), `src/assets/article/${blogId}.md`);
  let fileContent = "";

  try {
    fileContent = await fs.readFile(filePath, "utf-8");
  } catch (err) {
    console.error("Markdown file not found:", filePath, err);
  }

  const { content } = matter(fileContent);

  return (
    <div className="h-screen pb-1 px-4 md:px-6 lg:px-10 bg-[#ede7dd] overflow-x-hidden text-gray-700">

      <Navbar />

      <div className="max-w-4xl mx-auto mb-12">
        <div className="flex flex-col">

          <div className="flex items-center space-x-4">
            <Image src={menImg} alt="Profile image" className="rounded-full w-10 h-10 object-cover" />
            <h2 className="font-semibold text-lg">ZIRU</h2>
            <p className="text-gray-700 text-sm">7 min read</p>
            <p>.</p>
            <p className="text-gray-700 text-sm">Jul 22, 2025</p>
          </div>

          <div className="flex items-center justify-around sm:justify-start space-x-8 mt-8 ml-2">
            <div className="flex space-x-1.5 items-center">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                strokeWidth="0.2"
                stroke="#a1a1a1"
                viewBox="0 0 24 24"
                aria-label="clap"
              >
                <path
                  d="M11.37.828 12 3.282l.63-2.454zM13.916
        3.953l1.523-2.112-1.184-.39zM8.589 1.84l1.522 2.112-.337-2.501zM18.523
        18.92c-.86.86-1.75 1.246-2.62 1.33a6 6 0 0 0 .407-.372c2.388-2.389 2.86-4.951
        1.399-7.623l-.912-1.603-.79-1.672c-.26-.56-.194-.98.203-1.288a.7.7 0 0 1
        .546-.132c.283.046.546.231.728.5l2.363 4.157c.976 1.624 1.141 4.237-1.324
        6.702m-10.999-.438L3.37 14.328a.828.828 0 0 1 .585-1.408.83.83 0 0 1
        .585.242l2.158 2.157a.365.365 0 0 0
        .516-.516l-2.157-2.158-1.449-1.449a.826.826 0 0 1 1.167-1.17l3.438
        3.44a.363.363 0 0 0 .516 0 .364.364 0 0 0 0-.516L5.293 9.513l-.97-.97a.826.826
        0 0 1 0-1.166.84.84 0 0 1 1.167 0l.97.968 3.437 3.436a.36.36 0 0 0 .517 0
        .366.366 0 0 0 0-.516L6.977 7.83a.82.82 0 0 1-.241-.584.82.82 0 0 1
        .824-.826c.219 0 .43.087.584.242l5.787 5.787a.366.366 0 0 0
        .587-.415l-1.117-2.363c-.26-.56-.194-.98.204-1.289a.7.7 0 0 1
        .546-.132c.283.046.545.232.727.501l2.193 3.86c1.302 2.38.883 4.59-1.277
        6.75-1.156 1.156-2.602 1.627-4.19
        1.367-1.418-.236-2.866-1.033-4.079-2.246M10.75 5.971l2.12 2.12c-.41.502-.465
        1.17-.128 1.89l.22.465-3.523-3.523a.8.8 0 0
        1-.097-.368c0-.22.086-.428.241-.584a.847.847 0 0 1 1.167 0m7.355
        1.705c-.31-.461-.746-.758-1.23-.837a1.44 1.44 0 0
        0-1.11.275c-.312.24-.505.543-.59.881a1.74 1.74 0 0 0-.906-.465 1.47 1.47 0 0
        0-.82.106l-2.182-2.182a1.56 1.56 0 0 0-2.2 0 1.54 1.54 0 0 0-.396.701 1.56
        1.56 0 0 0-2.21-.01 1.55 1.55 0 0
        0-.416.753c-.624-.624-1.649-.624-2.237-.037a1.557 1.557 0 0 0 0
        2.2c-.239.1-.501.238-.715.453a1.56 1.56 0 0 0 0 2.2l.516.515a1.556 1.556 0 0
        0-.753 2.615L7.01 19c1.32 1.319 2.909 2.189 4.475 2.449q.482.08.971.08c.85 0
        1.653-.198 2.393-.579.231.033.46.054.686.054 1.266 0 2.457-.52 3.505-1.567
        2.763-2.763 2.552-5.734 1.439-7.586z"
                  clipRule="evenodd"
                />
              </svg>


              <p className="text-sm text-gray-600">2.1k</p>
            </div>

            <div className="flex space-x-1.5 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                strokeWidth="0.2"
                stroke="#a1a1a1"
                viewBox="0 0 24 24"
                className="im"
              >
                <path
                  d="M18.006 16.803c1.533-1.456 2.234-3.325 2.234-5.321C20.24 7.357 16.709 4 12.191 4S4 7.357 4 11.482c0 4.126 3.674 7.482 8.191 7.482.817 0 1.622-.111 2.393-.327.231.2.48.391.744.559 1.06.693 2.203 1.044 3.399 1.044.224-.008.4-.112.486-.287a.49.49 0 0 0-.042-.518c-.495-.67-.845-1.364-1.04-2.057a4 4 0 0 1-.125-.598zm-3.122 1.055-.067-.223-.315.096a8 8 0 0 1-2.311.338c-4.023 0-7.292-2.955-7.292-6.587 0-3.633 3.269-6.588 7.292-6.588 4.014 0 7.112 2.958 7.112 6.593 0 1.794-.608 3.469-2.027 4.72l-.195.168v.255c0 .056 0 .151.016.295.025.231.081.478.154.733.154.558.398 1.117.722 1.659a5.3 5.3 0 0 1-2.165-.845c-.276-.176-.714-.383-.941-.59z"
                />
              </svg>

              <p className="text-sm text-gray-600">90</p>
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#a1a1a1"
              className="size-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15"
              />
            </svg>

          </div>

        </div>
        <Markdown
          remarkPlugins={[remarkGfm]}
          components={{
            h1: (props) => <h1 className="text-3xl sm:text-4xl font-bold my-6 mt-8" {...props} />,
            h2: (props) => <h2 className="text-2xl sm:text-3xl font-semibold my-5" {...props} />,
            h3: (props) => <h3 className="text-xl sm:text-2xl font-semibold my-4" {...props} />,
            p: (props) => <p className="my-4 leading-relaxed text-base sm:text-lg" {...props} />,
            ul: (props) => <ul className="list-disc list-inside my-4 pl-5" {...props} />,
            ol: (props) => <ol className="list-decimal list-inside my-4 pl-5" {...props} />,
            li: (props) => <li className="mb-2" {...props} />,
            img: (props) => <img className="my-6" alt={props.alt || ""} {...props} />,
            strong: (props) => <strong className="font-semibold" {...props} />,
            em: (props) => <em className="italic" {...props} />,
            table: (props) => (
              <div className="overflow-x-auto my-6">
                <table className="w-full border-collapse" {...props} />
              </div>
            ),
            thead: (props) => <thead className="bg-gray-800 text-white" {...props} />,
            tbody: (props) => <tbody {...props} />,
            tr: (props) => <tr className="border border-gray-700" {...props} />,
            th: (props) => <th className="text-left px-4 py-2 font-semibold" {...props} />,
            td: (props) => <td className="px-4 py-2" {...props} />,
          }}
        >
          {content}
        </Markdown>
      </div>

      <Comments />

    </div>
  );
}
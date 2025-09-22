import fs from "fs/promises";
import path from "path";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";
import matter from "gray-matter";
import { Navbar, Comments, CommentCount, BlogClapCount, ShareBtn } from "@/components";
import Image from 'next/image'

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

  const { data, content } = matter(fileContent);

  return (
    <div className="h-screen pb-1  bg-[#ede7dd] overflow-x-hidden text-gray-700">
      <Navbar
        items={[
          { label: "Home", href: "/" },
          { label: "Comments", targetId: "comments-section" },
        ]}
      />
      <div className="max-w-4xl mx-auto mb-12 px-4 md:px-6 lg:px-10">
        <div className="flex flex-col">

          <div className="flex flex-col sm:flex-row sm:items-center space-x-4">
            <div className="flex items-center space-x-4 sm:order-1 order-2 mt-3 sm:mt-0">
              <Image
                src={data.profileImage}
                alt="Profile image"
                className="rounded-full w-10 h-10 object-cover"
                width={40}
                height={40}
              />
              <h2 className="font-semibold text-lg">{data.author || "Unknown"}</h2>
            </div>
            <div className="flex items-center space-x-4 sm:order-2 order-1">
              <p className="text-gray-700 text-sm">{data.readTime || "0 min read"}</p>
              <p>.</p>
              <p className="text-gray-700 text-sm">{data.date || "Unknown date"}</p>
            </div>
          </div>

          <div className="flex items-center justify-around sm:justify-start space-x-8 mt-8">
            <BlogClapCount slug={blogId} />
            <CommentCount blogId={blogId} />
            <ShareBtn />
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
      <div id="comments-section">
        <Comments />
      </div>
    </div>
  );
}
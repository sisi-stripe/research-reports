import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

const reportsDirectory = path.join(process.cwd(), "reports");

export interface ReportMeta {
  slug: string;
  title: string;
  date: string;
  sources: string[];
  summary: string;
}

export interface Report extends ReportMeta {
  contentHtml: string;
}

export function getAllReports(): ReportMeta[] {
  if (!fs.existsSync(reportsDirectory)) return [];

  const fileNames = fs.readdirSync(reportsDirectory);
  const reports = fileNames
    .filter((name) => name.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(reportsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug,
        title: data.title || slug,
        date: data.date || "",
        sources: data.sources || [],
        summary: data.summary || "",
      };
    });

  return reports.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getReport(slug: string): Promise<Report | null> {
  const fullPath = path.join(reportsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(remarkGfm).use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    sources: data.sources || [],
    summary: data.summary || "",
    contentHtml,
  };
}

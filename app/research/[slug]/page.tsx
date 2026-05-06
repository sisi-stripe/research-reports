import Link from "next/link";
import { getAllReports, getReport } from "@/lib/reports";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const reports = getAllReports();
  return reports.map((report) => ({ slug: report.slug }));
}

export default async function ReportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const report = await getReport(slug);

  if (!report) notFound();

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <Link
            href="/"
            className="text-sm text-zinc-500 hover:text-zinc-700 transition-colors"
          >
            &larr; All reports
          </Link>
          <h1 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900">
            {report.title}
          </h1>
          <div className="mt-2 flex items-center gap-3">
            <time className="text-sm text-zinc-400">{report.date}</time>
            {report.sources.length > 0 && (
              <div className="flex flex-wrap gap-1.5">
                {report.sources.map((source) => (
                  <span
                    key={source}
                    className="inline-flex rounded-full bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600"
                  >
                    {source}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">
        <article
          className="prose prose-zinc max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-xl prose-h3:text-lg prose-h4:text-base prose-p:text-sm prose-p:leading-relaxed prose-li:text-sm prose-table:text-sm prose-table:w-full prose-th:text-left prose-th:font-medium prose-th:text-zinc-600 prose-th:border-b prose-th:border-zinc-200 prose-th:pb-2 prose-th:pr-4 prose-td:py-2.5 prose-td:pr-4 prose-td:border-b prose-td:border-zinc-100 prose-td:align-top"
          dangerouslySetInnerHTML={{ __html: report.contentHtml }}
        />
      </main>
    </div>
  );
}

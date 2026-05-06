import Link from "next/link";
import { getAllReports } from "@/lib/reports";

export default function Home() {
  const reports = getAllReports();

  return (
    <div className="min-h-screen bg-zinc-50 font-sans">
      <header className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-4xl px-6 py-8">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Research Synthesis
          </h1>
          <p className="mt-1 text-sm text-zinc-500">
            Findings from user research, interviews, and discovery
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">
        {reports.length === 0 ? (
          <div className="rounded-lg border border-zinc-200 bg-white p-12 text-center">
            <p className="text-sm text-zinc-500">
              No reports yet. Run{" "}
              <code className="rounded bg-zinc-100 px-1.5 py-0.5 text-xs font-mono text-zinc-700">
                /research-synthesizer
              </code>{" "}
              in Claude Code to generate your first synthesis.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {reports.map((report) => (
              <Link
                key={report.slug}
                href={`/research/${report.slug}`}
                className="block rounded-lg border border-zinc-200 bg-white px-6 py-5 transition-shadow hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    <h2 className="text-base font-medium text-zinc-900 truncate">
                      {report.title}
                    </h2>
                    {report.summary && (
                      <p className="mt-1 text-sm text-zinc-500 line-clamp-2">
                        {report.summary}
                      </p>
                    )}
                    {report.sources.length > 0 && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
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
                  <time className="shrink-0 text-xs text-zinc-400">
                    {report.date}
                  </time>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

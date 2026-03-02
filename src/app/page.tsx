import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center w-full px-6 py-12 md:py-20 gap-8">
        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-center">
          Welcome to <span className="text-primary">The Conductor&apos;s Problem</span>
        </h1>
        <p className="text-lg text-text-muted text-center max-w-2xl">
          A comprehensive framework for understanding and mitigating the friction between human intent and AI execution in modern workflows.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 w-full max-w-[960px]">
          {/* Card 1 */}
          <Link href="/chapter-1" className="group flex flex-col p-6 rounded-2xl border border-border-subtle hover:border-primary dark:border-slate-800 dark:hover:border-primary transition-all bg-white dark:bg-slate-900 shadow-sm hover:shadow-md">
            <span className="text-text-muted text-xs font-bold tracking-widest uppercase mb-4">Chapter 1</span>
            <h2 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">The Problem</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-auto">Most people are terrible at using AI. And it&apos;s not their fault. Discover why.</p>
          </Link>

          {/* Card 2 */}
          <Link href="/chapter-2" className="group flex flex-col p-6 rounded-2xl border border-border-subtle hover:border-primary dark:border-slate-800 dark:hover:border-primary transition-all bg-white dark:bg-slate-900 shadow-sm hover:shadow-md">
            <span className="text-text-muted text-xs font-bold tracking-widest uppercase mb-4">Chapter 2</span>
            <h2 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">The Mirror</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-auto">The system has turned your methods into rituals. A UX reality check.</p>
          </Link>

          {/* Card 3 */}
          <Link href="/framework" className="group flex flex-col p-6 rounded-2xl border border-border-subtle hover:border-primary dark:border-slate-800 dark:hover:border-primary transition-all bg-white dark:bg-slate-900 shadow-sm hover:shadow-md bg-primary/5 dark:bg-primary/10">
            <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 flex items-center justify-between">
              <span>Part 3</span>
              <span className="material-symbols-outlined text-sm">architecture</span>
            </span>
            <h2 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">The Framework</h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-auto">The vocabulary for what you&apos;ve been feeling. 6 components of Orchestration Load.</p>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

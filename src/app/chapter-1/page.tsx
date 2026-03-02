import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';

export default function ChapterOne() {
    return (
        <>
            <Navbar />

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center px-6 py-12 md:py-20">
                <article className="w-full max-w-[640px] flex flex-col gap-8">

                    {/* Section Label */}
                    <div className="flex flex-col gap-4">
                        <span className="text-text-muted dark:text-gray-400 text-xs font-bold tracking-widest uppercase">01 The Problem</span>
                        {/* Headline */}
                        <h1 className="text-3xl md:text-4xl font-bold leading-[1.2] tracking-tight text-text-main dark:text-white font-display">
                            Most people are terrible at using AI. And it&apos;s not their fault.
                        </h1>
                    </div>

                    {/* Body Text */}
                    <div className="flex flex-col gap-6 text-[17px] leading-[1.75] text-text-main dark:text-gray-200 font-normal">
                        <p>
                            We often blame users when AI tools fail to deliver. But recent studies reveal a structural issue in how we interact with these systems, often falling into the &apos;slot machine pattern&apos; where we pull a lever and hope for a result.
                        </p>
                        <p>
                            When the result isn&apos;t what we expected, we pull the lever again, perhaps slightly harder or with a different spin, hoping for a jackpot that rarely comes. This isn&apos;t just frustrating; it&apos;s a fundamental breakdown in human-computer collaboration known as the &quot;Activity Theory trap.&quot;
                        </p>

                        {/* Aside / Callout Box */}
                        <aside className="my-6 p-6 bg-surface-accent dark:bg-white/5 rounded-lg border border-transparent dark:border-white/10 relative overflow-hidden group">
                            {/* Subtle pattern decoration */}
                            <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-2 text-primary dark:text-green-400">
                                    <span className="material-symbols-outlined text-lg">analytics</span>
                                    <span className="text-xs font-bold uppercase tracking-wider">The BCG Study</span>
                                </div>
                                <p className="text-[15px] leading-relaxed text-text-main dark:text-gray-200">
                                    In a recent landmark study by BCG involving 758 consultants, those using AI for creative product innovation tasks were <strong className="text-primary dark:text-green-400">19 percentage points less likely to get the right answer</strong> compared to the control group working without AI assistance.
                                </p>
                            </div>
                        </aside>

                        <p>
                            This counter-intuitive finding highlights the danger of delegating critical thinking to a probabilistic engine. The consultants didn&apos;t lack expertise; they lacked a framework for orchestrating the AI&apos;s output with their own judgment.
                        </p>

                        <h3 className="text-2xl font-bold mt-6 mb-2 text-text-main dark:text-white font-display">The Conductor Metaphor</h3>
                        <p>
                            Imagine an orchestra where every musician plays their loudest note at once. That is the current state of most AI interactions. To create harmony, we don&apos;t need louder instruments; we need a conductor.
                        </p>

                        <div className="my-8 rounded-xl overflow-hidden aspect-video bg-gray-100 dark:bg-slate-800 relative">
                            <Image
                                alt="A close up of a conductor's hands guiding an orchestra"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd3j4o5cRcv2ViNAigBYOn8FCOoY0BwNWUm6HHNcYnFxfwJtBxgAVs7_Fx-8GtVjv23r_W7-4CdYmxygEgjVQHPa91Me5N2TPmTTdLcWr34zKqw0j4pOyNVtAcU3DkaykCSj8nA7t5n0uOu-Z6gQz_v1UylDFeDZA3YVlLw9za2-raj6JQuKZZaHdEzOEKN0HCpgu9SOHIfTfIhca8iAcmluUIKhD7Ka4IevdqkHpGjDOYBPhivVYPMXyKo5LytDPygavtOZI9sjca"
                                fill
                                className="object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        <p>
                            This brings us to the concept of <strong className="font-bold text-text-main dark:text-white">Orchestration Load (OL)</strong>. OL is the cognitive effort required not just to operate the tool, but to synthesize its outputs into a coherent strategy.
                        </p>
                        <p>
                            Currently, the cognitive tax of prompting, verifying, and refining AI output often exceeds the effort of doing the task manually. Until we reduce this Orchestration Load, AI will remain a novelty rather than a utility.
                        </p>
                    </div>

                </article>
            </main>

            <Footer />
        </>
    );
}

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';

export default function ChapterTwo() {
    return (
        <>
            <Navbar />

            <main className="flex-grow w-full max-w-[640px] mx-auto px-6 py-12 md:py-20 flex flex-col gap-10">
                {/* Chapter Label */}
                <div className="flex items-center justify-center mb-2">
                    <span className="bg-[#EAECEB] dark:bg-white/10 text-text-muted dark:text-slate-400 text-xs font-bold tracking-widest px-3 py-1 rounded-full uppercase">02 The Mirror</span>
                </div>

                {/* Headline */}
                <h1 className="text-3xl md:text-4xl font-bold leading-[1.2] text-text-main dark:text-white tracking-tight font-display">
                    The System Has Turned Your Methods Into Rituals
                </h1>

                {/* Reading Meta */}
                <div className="flex items-center gap-4 text-text-muted text-sm border-b border-[#EAECEB] dark:border-white/10 pb-6 mb-2">
                    <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined !text-base">schedule</span>
                        <span>6 min read</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="material-symbols-outlined !text-base">menu_book</span>
                        <span>Chapter 2 of 3</span>
                    </div>
                </div>

                {/* Body Content */}
                <article className="prose prose-slate dark:prose-invert max-w-none text-base leading-relaxed text-text-main dark:text-slate-200">
                    <p className="mb-6">
                        We often sell the &apos;Pitch Deck&apos; version of UX: a clean, double-diamond process where research informs design, and design informs code. It&apos;s a beautiful lie we tell stakeholders, and eventually, ourselves.
                    </p>
                    <p className="mb-8">
                        But the reality of the &apos;Sprint&apos; is far messier. It is a fragmented race where artifacts are created not to solve problems, but to satisfy the rituals of the methodology itself. When the velocity of delivery becomes the primary metric of success, the thoughtfulness required for true orchestration evaporates.
                    </p>

                    <div className="my-10 p-6 bg-white dark:bg-white/5 border border-[#EAECEB] dark:border-white/10 rounded-xl shadow-sm">
                        <h3 className="font-display font-bold text-lg mb-4 text-primary dark:text-white flex items-center gap-2">
                            <span className="material-symbols-outlined">theater_comedy</span>
                            Methodology Theater Patterns
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary/60 !text-lg mt-0.5">check_circle</span>
                                <span className="text-sm">Research that confirms pre-existing roadmaps rather than challenging them.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary/60 !text-lg mt-0.5">check_circle</span>
                                <span className="text-sm">Personas that serve as decoration on walls but are ignored in Jira tickets.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary/60 !text-lg mt-0.5">check_circle</span>
                                <span className="text-sm">Usability testing scheduled after code freeze as a &quot;validation&quot; checkbox.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-primary/60 !text-lg mt-0.5">check_circle</span>
                                <span className="text-sm">Design systems that prioritize consistency over actual user utility.</span>
                            </li>
                        </ul>
                    </div>

                    <p className="mb-6">
                        This disconnection has a measurable cost. Recent surveys suggest that <span className="bg-primary/10 text-primary dark:text-primary-light font-bold px-1 rounded">61% of practitioners</span> struggle to trace their daily output back to tangible user outcomes. We are busy, but we are not necessarily effective.
                    </p>

                    <h3 className="font-display text-2xl font-bold mt-12 mb-4 text-text-main dark:text-white">Why This Matters Now</h3>

                    <p className="mb-6">
                        We stand at a precipice. The introduction of Generative AI into our production layers isn&apos;t just another tool update; it&apos;s an accelerator. If our current processes are broken rituals, AI will simply help us perform those broken rituals faster.
                    </p>
                    <p>
                        To avoid automating our own irrelevance, we must stop looking at the artifacts we produce and start looking at the orchestration of value. We need a new framework that accounts for the cognitive load of the system itself.
                    </p>
                </article>

                {/* Image Insert */}
                <figure className="my-8 relative h-64 w-full">
                    <Image
                        alt="Abstract reflection representing the mirror concept"
                        className="object-cover rounded-lg grayscale hover:grayscale-0 transition-all duration-700"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVJhiuVQ5qkEgih6wMHWFfLhGw29A8Q62Fahn0_UTeqF_WPkrv3BWCzY0lj0vgZ560hoCkRLylN_CpbBEbfdR07Z1URY8Afx5PgsA4b2QW4AmbCy_GtEf_XSVXdva8zvToqDsM4L27z8wAh4xvKoc0280MxaYrpXS2Z54GCJf1Cgl-DAFXE6HpHCgUeI4wlHhBAl9QhSuMKvhn7RJ8EFvMhsGhf74kCQG9MZEI2KgB-s0jjE-W6MyRFPuDvMOKTWjBj4l6y_EUQBHy"
                        fill
                    />
                    <figcaption className="absolute -bottom-6 w-full text-xs text-text-muted text-center">Reflecting on the gap between method and reality.</figcaption>
                </figure>

            </main>

            <Footer />
        </>
    );
}

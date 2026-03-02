import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

export default function Framework() {
    return (
        <>
            <Navbar />

            <main className="flex-grow flex flex-col items-center w-full px-6 py-12 md:py-20">
                <article className="w-full max-w-[640px] flex flex-col gap-10">
                    {/* Header Section */}
                    <header className="flex flex-col gap-4">
                        <div className="flex items-center justify-between border-b border-border-subtle dark:border-slate-800 pb-4 mb-2">
                            <span className="text-text-muted text-xs font-bold tracking-widest uppercase">03 The Framework</span>
                            <span className="text-text-muted text-xs font-mono">Part 3 of 3</span>
                        </div>
                        <h1 className="font-display text-text-main dark:text-white text-3xl md:text-4xl font-black leading-[1.15] tracking-tight">
                            The Vocabulary for What You&apos;ve Been Feeling
                        </h1>
                        <p className="text-lg leading-relaxed text-slate-700 dark:text-slate-300">
                            We&apos;ve identified six distinct components of Orchestration Load. By naming them, we can begin to measure and mitigate the friction between human intent and AI execution.
                        </p>
                    </header>

                    {/* OL Components List */}
                    <section className="border-t border-border-subtle dark:border-slate-700 mt-4">

                        {/* Item 1 */}
                        <div className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b border-border-subtle dark:border-slate-700 transition-colors hover:bg-primary/5 -mx-4 px-4 rounded-lg">
                            <span className="font-mono text-primary bg-primary/10 px-2 py-1 rounded text-sm w-fit sm:w-12 text-center shrink-0">Cc</span>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-display font-bold text-text-main dark:text-white text-base">Cognitive Clutter</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">The mental effort required to filter, verify, and discard irrelevant AI outputs.</p>
                            </div>
                        </div>

                        {/* Item 2 */}
                        <div className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b border-border-subtle dark:border-slate-700 transition-colors hover:bg-primary/5 -mx-4 px-4 rounded-lg">
                            <span className="font-mono text-primary bg-primary/10 px-2 py-1 rounded text-sm w-fit sm:w-12 text-center shrink-0">Cr</span>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-display font-bold text-text-main dark:text-white text-base">Context Reassembly</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">The invisible work of providing sufficient background information for the AI to function.</p>
                            </div>
                        </div>

                        {/* Item 3 */}
                        <div className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b border-border-subtle dark:border-slate-700 transition-colors hover:bg-primary/5 -mx-4 px-4 rounded-lg">
                            <span className="font-mono text-primary bg-primary/10 px-2 py-1 rounded text-sm w-fit sm:w-12 text-center shrink-0">Iv</span>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-display font-bold text-text-main dark:text-white text-base">Intent Verification</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Checking if the AI&apos;s output actually matches the user&apos;s initial strategic intent.</p>
                            </div>
                        </div>

                        {/* Item 4 */}
                        <div className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b border-border-subtle dark:border-slate-700 transition-colors hover:bg-primary/5 -mx-4 px-4 rounded-lg">
                            <span className="font-mono text-primary bg-primary/10 px-2 py-1 rounded text-sm w-fit sm:w-12 text-center shrink-0">Ed</span>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-display font-bold text-text-main dark:text-white text-base">Error Detection</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">The vigilance required to identify hallucinations or subtle mistakes in generation.</p>
                            </div>
                        </div>

                        {/* Item 5 */}
                        <div className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b border-border-subtle dark:border-slate-700 transition-colors hover:bg-primary/5 -mx-4 px-4 rounded-lg">
                            <span className="font-mono text-primary bg-primary/10 px-2 py-1 rounded text-sm w-fit sm:w-12 text-center shrink-0">If</span>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-display font-bold text-text-main dark:text-white text-base">Integration Friction</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Moving AI outputs into existing workflows, formats, or enterprise tools.</p>
                            </div>
                        </div>

                        {/* Item 6 */}
                        <div className="group flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 py-5 border-b border-border-subtle dark:border-slate-700 transition-colors hover:bg-primary/5 -mx-4 px-4 rounded-lg">
                            <span className="font-mono text-primary bg-primary/10 px-2 py-1 rounded text-sm w-fit sm:w-12 text-center shrink-0">Sl</span>
                            <div className="flex flex-col gap-1">
                                <h3 className="font-display font-bold text-text-main dark:text-white text-base">Social Liability</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Managing the reputational risk and ownership of AI-generated content.</p>
                            </div>
                        </div>
                    </section>

                    {/* Universal Principles Section */}
                    <section className="py-6">
                        <h2 className="font-display text-2xl font-bold mb-6 text-text-main dark:text-white">Seven Universal Principles</h2>
                        <div className="pl-4">
                            <ol className="list-decimal marker:text-primary marker:font-bold space-y-4 text-slate-700 dark:text-slate-300">
                                <li className="pl-4"><strong>Human-in-the-loop is not a feature, it&apos;s a cost.</strong> We must design to minimize the loop, not celebrate it.</li>
                                <li className="pl-4"><strong>Context is currency.</strong> Systems that require less context injection from the user are inherently more valuable.</li>
                                <li className="pl-4"><strong>Trust is binary in execution.</strong> Partial trust results in 100% verification overhead.</li>
                                <li className="pl-4"><strong>Friction migrates.</strong> Solving a generation problem often creates an integration problem.</li>
                                <li className="pl-4"><strong>Cognitive load compounds.</strong> Three small verification tasks equal one large creative block.</li>
                                <li className="pl-4"><strong>Tools shape thought.</strong> If the AI tool requires specific prompting structures, it changes how we formulate problems.</li>
                                <li className="pl-4"><strong>Orchestration &gt; Generation.</strong> The value is in the workflow, not the raw output.</li>
                            </ol>
                        </div>
                    </section>

                    {/* How To Start Section */}
                    <section className="bg-white dark:bg-slate-800/50 rounded-xl p-8 border border-border-subtle dark:border-slate-700 shadow-sm">
                        <h2 className="font-display text-2xl font-bold mb-8 text-text-main dark:text-white border-b border-border-subtle dark:border-slate-700 pb-4">How to Start</h2>

                        <div className="grid gap-8">
                            <div>
                                <h3 className="font-display text-lg font-bold text-primary mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-xl">person</span>
                                    Individuals
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                    Audit your last week of AI usage. Tally the time spent on &quot;Cognitive Clutter&quot; versus creative output. If the ratio exceeds 1:3, simplify your toolset.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-display text-lg font-bold text-primary mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-xl">groups</span>
                                    Teams
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                    Establish &quot;verification protocols&quot; before adopting new LLMs. Define who owns the output error (Social Liability) before the project begins.
                                </p>
                            </div>

                            <div>
                                <h3 className="font-display text-lg font-bold text-primary mb-2 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-xl">shield_person</span>
                                    Leaders
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                                    Stop measuring AI adoption by &quot;active users.&quot; Start measuring &quot;time saved in workflow.&quot; If OL is high, adoption metrics are a vanity trap.
                                </p>
                            </div>
                        </div>
                    </section>
                </article>
            </main>

            <Footer />
        </>
    );
}

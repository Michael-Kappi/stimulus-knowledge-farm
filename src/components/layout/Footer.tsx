export function Footer() {
    return (
        <footer className="mt-auto py-12 px-6 border-t border-border-subtle dark:border-slate-800 bg-white dark:bg-background-dark">
            <div className="max-w-[960px] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                <div className="text-xs text-text-muted uppercase tracking-widest font-medium">
                    Research by Michael Käppi / STIMULUS
                </div>
                <div className="flex gap-6">
                    <a className="text-text-muted hover:text-primary text-xs transition-colors" href="#">Privacy</a>
                    <a className="text-text-muted hover:text-primary text-xs transition-colors" href="#">Terms</a>
                    <a className="text-text-muted hover:text-primary text-xs transition-colors" href="#">Contact</a>
                </div>
            </div>
        </footer>
    );
}

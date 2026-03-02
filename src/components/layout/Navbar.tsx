import Link from 'next/link';

export function Navbar() {
    return (
        <div className="sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-border-subtle dark:border-slate-800">
            <header className="flex items-center justify-between px-6 py-4 max-w-[960px] mx-auto w-full">
                {/* Left: Logo/Title */}
                <div className="flex items-center gap-3">
                    <div className="size-5 text-primary">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z" fill="currentColor" fillRule="evenodd"></path>
                            <path clipRule="evenodd" d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z" fill="currentColor" fillRule="evenodd"></path>
                        </svg>
                    </div>
                    <h2 className="text-text-main dark:text-white text-base font-bold leading-tight tracking-tight hidden sm:block">The Conductor&apos;s Problem</h2>
                </div>

                {/* Right flex row for desktop */}
                <div className="flex items-center gap-8">
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-text-muted hover:text-primary transition-colors text-sm font-medium relative hover:after:absolute hover:after:left-0 hover:after:-bottom-5 hover:after:w-full hover:after:h-0.5 hover:after:bg-primary" href="/chapter-1">The Problem</Link>
                        <Link className="text-text-muted hover:text-primary transition-colors text-sm font-medium relative hover:after:absolute hover:after:left-0 hover:after:-bottom-5 hover:after:w-full hover:after:h-0.5 hover:after:bg-primary" href="/chapter-2">The Mirror</Link>
                        <Link className="text-text-muted hover:text-primary transition-colors text-sm font-medium relative hover:after:absolute hover:after:left-0 hover:after:-bottom-5 hover:after:w-full hover:after:h-0.5 hover:after:bg-primary" href="/framework">The Framework</Link>
                    </nav>
                    <button className="flex items-center justify-center rounded-lg h-9 px-4 bg-primary/10 hover:bg-primary/20 text-primary text-sm font-bold transition-colors">
                        Login
                    </button>
                </div>
            </header>
        </div>
    );
}

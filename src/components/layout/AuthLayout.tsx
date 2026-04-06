import Link from "next/link"
import React from "react"
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"

interface AuthLayoutProps {
  children: React.ReactNode
  title: string
  subTitle?: React.ReactNode
  showSocials?: boolean
  image?: string
  alt?: string
}

export const AuthLayout: React.FC<AuthLayoutProps> = ({ 
  children, 
  title, 
  subTitle, 
  showSocials = true, 
  image = "https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80",
  alt = "Secure Architecture",
}) => {
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex bg-surface font-inter text-on-surface">
      <div className="flex-1 flex flex-col justify-center py-12 px-6 sm:px-12 lg:flex-none lg:px-20 xl:px-32 relative z-10 bg-surface">
        {/* Mobile Header Logo */}
        <div className="absolute top-10 left-10 lg:static lg:mb-12">
           <Link href="/" className="flex items-center gap-2 group">
              <span className="material-symbols-outlined text-3xl text-brand-vibrant group-hover:scale-110 transition-transform">shield_lock</span>
              <span className="font-manrope text-2xl font-bold tracking-tighter text-brand-vibrant">NextPlate</span>
           </Link>
        </div>

        <div className="mx-auto w-full max-w-sm lg:w-96">
          <header className="mb-10 text-center lg:text-left">
            <h2 className="font-manrope text-4xl font-extrabold tracking-tight text-on-surface leading-tight">
              {title}
            </h2>
            {subTitle && (
              <p className="mt-4 text-on-surface-variant font-medium leading-relaxed">
                {subTitle}
              </p>
            )}
          </header>

          <div className="mt-8">
            {showSocials && (
              <div className="space-y-6">
                <p className="text-xs font-bold uppercase tracking-widest text-on-surface-variant/70 text-center lg:text-left">Sign in with</p>

                <div className="mt-1 grid grid-cols-3 gap-4">
                  {/* Google Button */}
                  <Button variant="outline" className="h-12 border-surface-variant/30 hover:bg-surface-variant/20 shadow-sm rounded-xl px-0" title="Sign in with Google">
                    <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.908 3.152-1.928 4.152-1.228 1.228-3.14 2.52-6.64 2.52-5.392 0-9.472-4.36-9.472-9.752s4.08-9.752 9.472-9.752c3.14 0 5.392 1.228 7.12 2.892l2.308-2.308C18.42 1.344 15.652 0 12.112 0 5.528 0 0 5.528 0 12s5.528 12 12.112 12c3.54 0 6.228-1.152 8.352-3.324 2.152-2.152 2.824-5.18 2.824-7.592 0-.74-.064-1.392-.188-2.164H12.48z" />
                    </svg>
                  </Button>
                  
                  {/* Facebook Button */}
                  <Button variant="outline" className="h-12 border-surface-variant/30 hover:bg-surface-variant/20 shadow-sm rounded-xl px-0" title="Sign in with Facebook">
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 21.128 22 16.991 22 12z" />
                    </svg>
                  </Button>

                  {/* Apple Button */}
                  <Button variant="outline" className="h-12 border-surface-variant/30 hover:bg-surface-variant/20 shadow-sm rounded-xl px-0" title="Sign in with Apple">
                    <svg className="w-5 h-5 mb-0.5" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.671-1.48 3.659-2.922 1.155-1.675 1.623-3.3 1.649-3.39-.039-.013-3.117-1.196-3.143-4.753-.026-2.987 2.457-4.415 2.56-4.481-1.39-2.04-3.532-2.272-4.285-2.311-2.013-.156-3.117.844-4.085.844zm2.143-4.42c.857-1.039 1.442-2.477 1.286-3.913-1.233.052-2.733.818-3.61 1.857-.78.91-1.468 2.364-1.286 3.757 1.365.104 2.759-.652 3.61-1.701z" />
                    </svg>
                  </Button>
                </div>

                <div className="mt-8 relative">
                  <div className="absolute inset-0 flex items-center" aria-hidden="true">
                    <div className="w-full border-t border-outline-variant/20" />
                  </div>
                  <div className="relative flex justify-center text-[10px] font-bold uppercase tracking-widest">
                    <span className="px-4 bg-surface text-on-surface-variant/60">Or continue with</span>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-10">
              {children}
            </div>
          </div>
        </div>

        
      </div>

      {/* Decorative Right Panel - Desktop Only */}
      <div className="hidden lg:block relative w-0 flex-1 overflow-hidden">
        <div className="absolute inset-0 z-10 bg-brand-vibrant/10 mix-blend-multiply transition-colors dark:bg-brand-vibrant/30" />
        <img
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-10000 hover:scale-110"
          src={image}
          alt={alt}
        />
        {/* Floating Brand Overlay */}
        <div className="absolute bottom-12 left-12 z-20 max-w-lg p-10 bg-surface/5 backdrop-blur-3xl rounded-3xl border border-white/5 shadow-2xl">
           <p className="text-[10px] font-bold uppercase tracking-widest text-white/50 mb-4">Enterprise Architecture</p>
           <h3 className="font-manrope text-3xl font-extrabold text-white leading-tight">
             Experience Secure Monolith built for high-end digital craftsmanship.
           </h3>
        </div>
      </div>
    </div>
  )
}

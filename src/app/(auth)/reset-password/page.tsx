import Link from "next/link"
import React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-surface px-6 py-4 backdrop-blur-xl dark:bg-slate-950">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl text-brand-vibrant dark:text-brand-vibrant">shield_lock</span>
          <span className="font-manrope text-2xl font-extrabold tracking-tighter text-brand-vibrant dark:text-brand-vibrant">
            NextPlate
          </span>
        </div>
      </header>

      <main className="flex flex-grow items-center justify-center bg-surface-container-low p-6">
        <div className="relative w-full max-w-md">
          <div className="absolute -top-12 -left-12 h-32 w-32 rounded-full bg-brand-vibrant/10 blur-3xl"></div>
          <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-brand-sky/10 blur-3xl"></div>

          <div className="relative z-10 rounded-xl bg-surface-container-lowest p-8 md:p-12">
            <div className="mb-10 space-y-2">
              <h1 className="font-manrope text-[2.5rem] font-extrabold leading-tight tracking-tight text-on-surface">
                New Password
              </h1>
              <p className="leading-relaxed text-on-surface-variant">Set a new, highly secure password for your account.</p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <Label className="text-[1.125rem] font-semibold text-on-surface" htmlFor="password">
                  New Password
                </Label>
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="material-symbols-outlined text-outline text-xl">lock</span>
                  </div>
                  <Input
                    className="w-full rounded-xl border-none bg-surface-container-low py-4 pl-12 pr-4 text-on-surface outline-none transition-all placeholder:text-outline-variant focus:bg-surface focus:ring-2 focus:ring-brand-vibrant"
                    id="password"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[1.125rem] font-semibold text-on-surface" htmlFor="confirm-password">
                  Confirm Password
                </Label>
                <div className="group relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <span className="material-symbols-outlined text-outline text-xl">verified_user</span>
                  </div>
                  <Input
                    className="w-full rounded-xl border-none bg-surface-container-low py-4 pl-12 pr-4 text-on-surface outline-none transition-all placeholder:text-outline-variant focus:bg-surface focus:ring-2 focus:ring-brand-vibrant"
                    id="confirm-password"
                    placeholder="••••••••"
                    required
                    type="password"
                  />
                </div>
              </div>

              <div className="pt-4">
                <Button
                  className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-brand-vibrant to-brand-royal px-6 py-8 font-bold text-white shadow-xl shadow-brand-vibrant/10 transition-all hover:shadow-brand-vibrant/20 active:scale-[0.98]"
                  type="submit"
                >
                  Reset Password
                  <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
                    sync_lock
                  </span>
                </Button>
              </div>
            </form>

            <div className="mt-10 border-t border-outline-variant/15 pt-8 text-center">
              <Link
                className="group inline-flex items-center gap-2 font-semibold text-brand-vibrant hover:underline"
                href="/login"
              >
                <span className="material-symbols-outlined text-xl">keyboard_backspace</span>
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

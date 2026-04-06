"use client"

import Link from "next/link"
import React from "react"
import { useTranslation } from "react-i18next"
import { BrandShowcase } from "@/components/BrandShowcase"
import { Navbar } from "@/components/layout/Navbar"

export default function Web() {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <section className="bg-primary-container/10 dark:bg-gray-900 border-b border-outline-variant/10">
          <div className="mx-auto grid max-w-screen-xl px-6 py-12 text-center lg:py-24">
            <div className="mx-auto max-w-3xl">
              <h1 className="mb-6 font-manrope text-5xl font-extrabold leading-tight tracking-tight md:text-6xl text-on-surface">
                {t("welcome")}
              </h1>
              <p className="mb-10 text-lg font-medium text-on-surface-variant/80 lg:text-xl">
                Jumpstart your enterprise project with our feature-packed, high-performance Next.js boilerplate!
                Experience rapid UI development, AI-powered code reviews, and an extensive suite of tools.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/register"
                  className="rounded-xl bg-brand-vibrant px-8 py-4 text-center text-lg font-bold text-white shadow-xl shadow-brand-vibrant/20 transition-all hover:bg-brand-royal hover:shadow-brand-vibrant/30 active:scale-[0.98]"
                >
                  {t("signup")}
                </Link>
                <Link
                  href="/login"
                  className="rounded-xl border border-outline/20 px-8 py-4 text-center text-lg font-bold text-on-surface transition-all hover:bg-surface-variant/30 active:scale-[0.98]"
                >
                  {t("login")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface py-16 dark:bg-gray-800">
          <div className="mx-auto max-w-5xl px-6">
            <BrandShowcase />
          </div>
        </section>
      </main>

      <footer className="w-full py-8 border-t bg-background text-center text-sm font-medium text-on-surface-variant">
         © 2024 NextPlate. Built with TanStack & Redux.
      </footer>
    </div>
  )
}

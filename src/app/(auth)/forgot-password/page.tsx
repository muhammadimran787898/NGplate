"use client"

import Link from "next/link"
import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthLayout } from "@/components/layout/AuthLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { forgotPasswordSchema, ForgotPasswordInput } from "@/utils/validators"

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordInput>({
    resolver: zodResolver(forgotPasswordSchema),
  })

  const onSubmit = async (data: ForgotPasswordInput) => {
    console.log("Forgot password form data:", data)
    // Implement API call here
  }

  return (
    <AuthLayout 
      title="Forgot Password?"
      subTitle="No worries. Enter your registered email address and we'll send you a secure link to reset your access."
      showSocials={false}
      image="https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80"
      alt="Secure Recovery"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label className="text-xs font-bold uppercase tracking-widest text-on-surface" htmlFor="email">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            className={`h-14 rounded-xl border-surface-variant/30 bg-surface-container-low px-4 text-on-surface focus:ring-2 focus:ring-brand-vibrant ${errors.email ? 'border-destructive ring-destructive/20' : ''}`}
            placeholder="name@company.com"
          />
          {errors.email && (
            <p className="text-[10px] font-bold uppercase tracking-widest text-destructive">
              {errors.email.message}
            </p>
          )}
          <p className="text-[10px] italic text-on-surface-variant/70 pl-1 font-medium">
             Check your spam folder if the email doesn't arrive within 2 minutes.
          </p>
        </div>

        <div className="pt-4 space-y-8 text-center">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 rounded-xl bg-brand-vibrant font-bold text-white shadow-xl shadow-brand-vibrant/20 transition-all hover:bg-brand-royal active:scale-[0.98]"
          >
            {isSubmitting ? "Sending link..." : "Send Reset Link"}
          </Button>

          <Link
            className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-vibrant hover:underline"
            href="/login"
          >
            <span className="material-symbols-outlined text-xl transition-transform group-hover:-translate-x-1">keyboard_backspace</span>
            Back to Login
          </Link>
        </div>
      </form>
    </AuthLayout>
  )
}

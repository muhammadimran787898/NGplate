"use client"

import Link from "next/link"
import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslation } from "react-i18next"
import { AuthLayout } from "@/components/layout/AuthLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { loginSchema, LoginInput } from "@/utils/validators"

export default function LoginPage() {
  const { t } = useTranslation()
  
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginInput) => {
    console.log("Login form data:", data)
    // Implement API call here
  }

  return (
    <AuthLayout 
      title="Sign in to your account"
      subTitle={
        <>
          Or{" "}
          <Link href="/register" className="font-bold text-brand-vibrant hover:underline">
            start your 14-day free trial
          </Link>
        </>
      }
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
            className={`h-12 rounded-xl border-surface-variant/30 bg-surface-container-low px-4 text-on-surface focus:ring-2 focus:ring-brand-vibrant ${errors.email ? 'border-destructive ring-destructive/20' : ''}`}
            placeholder="name@company.com"
          />
          {errors.email && (
            <p className="text-[10px] font-bold uppercase tracking-widest text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-bold uppercase tracking-widest text-on-surface" htmlFor="password">
            Password
          </Label>
          <Input
            id="password"
            type="password"
            {...register("password")}
            className={`h-12 rounded-xl border-surface-variant/30 bg-surface-container-low px-4 text-on-surface focus:ring-2 focus:ring-brand-vibrant ${errors.password ? 'border-destructive ring-destructive/20' : ''}`}
            placeholder="••••••••"
          />
          {errors.password && (
            <p className="text-[10px] font-bold uppercase tracking-widest text-destructive">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember-me" {...register("rememberMe")} className="border-surface-variant/30 data-[state=checked]:bg-brand-vibrant data-[state=checked]:border-brand-vibrant" />
            <Label htmlFor="remember-me" className="text-xs font-bold text-on-surface-variant cursor-pointer">
              Remember me
            </Label>
          </div>

          <div className="text-xs">
            <Link href="/forgot-password" title="Forgot your password?" className="font-bold text-brand-vibrant hover:underline">
              Forgot your password?
            </Link>
          </div>
        </div>

        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 rounded-xl bg-brand-vibrant font-bold text-white shadow-xl shadow-brand-vibrant/20 transition-all hover:bg-brand-royal active:scale-[0.98]"
          >
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </div>
      </form>
    </AuthLayout>
  )
}

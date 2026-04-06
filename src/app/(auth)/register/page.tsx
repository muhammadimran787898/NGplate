"use client"

import Link from "next/link"
import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthLayout } from "@/components/layout/AuthLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { registerSchema, RegisterInput } from "@/utils/validators"

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInput>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterInput) => {
    console.log("Register form data:", data)
    // Implement API call here
  }

  return (
    <AuthLayout 
      title="Create Account"
      subTitle={
        <>
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-brand-vibrant hover:underline">
            Sign in
          </Link>
        </>
      }
      image="https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80"
      alt="Secure Workspace"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-on-surface" htmlFor="firstName">
              First Name
            </Label>
            <Input
              id="firstName"
              {...register("firstName")}
              autoComplete="given-name"
              className={`h-11 rounded-xl border-surface-variant/30 bg-surface-container-low px-4 text-on-surface focus:ring-2 focus:ring-brand-vibrant ${errors.firstName ? 'border-destructive ring-destructive/20' : ''}`}
              placeholder="John"
            />
            {errors.firstName && (
              <p className="text-[10px] font-bold uppercase tracking-widest text-destructive">
                {errors.firstName.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-on-surface" htmlFor="lastName">
              Last Name
            </Label>
            <Input
              id="lastName"
              {...register("lastName")}
              autoComplete="family-name"
              className={`h-11 rounded-xl border-surface-variant/30 bg-surface-container-low px-4 text-on-surface focus:ring-2 focus:ring-brand-vibrant ${errors.lastName ? 'border-destructive ring-destructive/20' : ''}`}
              placeholder="Doe"
            />
            {errors.lastName && (
              <p className="text-[10px] font-bold uppercase tracking-widest text-destructive">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-xs font-bold uppercase tracking-widest text-on-surface" htmlFor="email">
            Email address
          </Label>
          <Input
            id="email"
            type="email"
            {...register("email")}
            autoComplete="email"
            className={`h-11 rounded-xl border-surface-variant/30 bg-surface-container-low px-4 text-on-surface focus:ring-2 focus:ring-brand-vibrant ${errors.email ? 'border-destructive ring-destructive/20' : ''}`}
            placeholder="name@company.com"
          />
          {errors.email && (
            <p className="text-[10px] font-bold uppercase tracking-widest text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-on-surface" htmlFor="password">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              {...register("password")}
              className={`h-11 rounded-xl border-surface-variant/30 bg-surface-container-low px-4 text-on-surface focus:ring-2 focus:ring-brand-vibrant ${errors.password ? 'border-destructive ring-destructive/20' : ''}`}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-[10px] font-bold uppercase tracking-widest text-destructive">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Label className="text-xs font-bold uppercase tracking-widest text-on-surface" htmlFor="confirmPassword">
              Confirm
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
              className={`h-11 rounded-xl border-surface-variant/30 bg-surface-container-low px-4 text-on-surface focus:ring-2 focus:ring-brand-vibrant ${errors.confirmPassword ? 'border-destructive ring-destructive/20' : ''}`}
              placeholder="••••••••"
            />
            {errors.confirmPassword && (
              <p className="text-[10px] font-bold uppercase tracking-widest text-destructive">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        </div>

        <div className="pt-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 rounded-xl bg-brand-vibrant font-bold text-white shadow-xl shadow-brand-vibrant/20 transition-all hover:bg-brand-royal active:scale-[0.98]"
          >
            {isSubmitting ? "Creating account..." : "Create Account"}
          </Button>
        </div>
      </form>
    </AuthLayout>
  )
}

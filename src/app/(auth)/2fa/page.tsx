"use client"

import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { AuthLayout } from "@/components/layout/AuthLayout"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { twoFactorSchema, TwoFactorInput } from "@/utils/validators"

export default function TwoFactorPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<TwoFactorInput>({
    resolver: zodResolver(twoFactorSchema),
    defaultValues: { code: "" },
  })

  // Sample handling for OTP fields (simplified to one input for this snippet)
  const onSubmit = async (data: TwoFactorInput) => {
    console.log("2FA code submitted:", data.code)
    // Implement API call here
  }

  return (
    <AuthLayout 
      title="Verify Identity"
      subTitle="We've sent a 6-digit authentication code to your registered device. Enter the code below to continue."
      showSocials={false}
      image="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80"
      alt="Security Verification"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <Label className="text-xs font-bold uppercase tracking-widest text-on-surface text-center block" htmlFor="code">
            Verification Code
          </Label>
          <div className="flex justify-center">
             <Input
               id="code"
               type="text"
               {...register("code")}
               maxLength={6}
               className={`h-16 w-full max-w-[200px] text-center text-3xl font-manrope font-extrabold tracking-[0.5em] rounded-xl border-2 bg-surface-container-low focus:ring-2 focus:ring-brand-vibrant ${errors.code ? 'border-destructive ring-destructive/20' : 'border-surface-variant/30'}`}
               placeholder="000000"
             />
          </div>
          {errors.code && (
            <p className="text-[10px] font-bold uppercase tracking-widest text-destructive text-center">
              {errors.code.message}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full h-14 rounded-xl bg-brand-vibrant font-bold text-white shadow-xl shadow-brand-vibrant/20 transition-all hover:bg-brand-royal active:scale-[0.98]"
          >
            {isSubmitting ? "Authenticating..." : "Authenticate"}
          </Button>
          
          <div className="text-center space-y-4">
             <button type="button" className="text-xs font-bold text-brand-vibrant uppercase tracking-widest hover:underline">
               Resend Code
             </button>
             <div className="flex items-center justify-center gap-2 text-[10px] text-on-surface-variant font-bold uppercase tracking-widest opacity-60">
                <span className="material-symbols-outlined text-sm">timer</span>
                Expires in 04:59
             </div>
          </div>
        </div>
      </form>
    </AuthLayout>
  )
}

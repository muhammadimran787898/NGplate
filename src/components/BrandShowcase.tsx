import React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const BrandShowcase = () => {
  return (
    <div className="flex w-full flex-col items-center gap-8 rounded-3xl border border-border bg-background p-8 shadow-2xl transition-all duration-500 hover:shadow-brand-vibrant/20">
      <div className="flex flex-col gap-2 text-center">
        <h2 className="bg-gradient-to-r from-brand-deep via-brand-vibrant to-brand-cyan bg-clip-text text-4xl font-bold tracking-tight text-transparent">
          Brand Theme Showcase
        </h2>
        <p className="text-lg text-muted-foreground">Experience the harmoniously crafted color palette from the image</p>
      </div>

      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-5">
        <div className="flex flex-col items-center gap-2">
          <div className="h-32 w-full rounded-2xl border border-border/50 bg-brand-deep shadow-lg transition-transform hover:scale-105" />
          <span className="font-mono text-xs uppercase text-muted-foreground">#12086F</span>
          <span className="text-sm font-medium">Deep Blue</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-32 w-full rounded-2xl border border-border/50 bg-brand-royal shadow-lg transition-transform hover:scale-105" />
          <span className="font-mono text-xs uppercase text-muted-foreground">#2B35AF</span>
          <span className="text-sm font-medium">Royal Blue</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-32 w-full animate-pulse rounded-2xl border border-border/50 bg-brand-vibrant shadow-lg transition-transform hover:scale-105" />
          <span className="font-mono text-xs uppercase text-muted-foreground">#4361EE</span>
          <span className="text-sm font-medium">Vibrant Blue</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-32 w-full rounded-2xl border border-border/50 bg-brand-sky shadow-lg transition-transform hover:scale-105" />
          <span className="font-mono text-xs uppercase text-muted-foreground">#4895EF</span>
          <span className="text-sm font-medium">Sky Blue</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="h-32 w-full rounded-2xl border border-border/50 bg-brand-cyan shadow-lg transition-transform hover:scale-105" />
          <span className="font-mono text-xs uppercase text-muted-foreground">#4CC9F0</span>
          <span className="text-sm font-medium">Cyan Blue</span>
        </div>
      </div>

      <Card className="group w-full max-w-md overflow-hidden border-brand-vibrant/20">
        <div className="h-2 bg-gradient-to-r from-brand-deep via-brand-vibrant to-brand-cyan" />
        <CardHeader>
          <CardTitle>Theme Integration</CardTitle>
          <CardDescription>Primary colors updated globally</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <p className="text-sm text-muted-foreground">
            These buttons use the <code>primary</code> and <code>secondary</code> variables which have been mapped to
            our new brand colors. Try switching between light and dark mode to see the theme adapt!
          </p>
          <div className="flex gap-4">
            <Button className="border-none bg-brand-vibrant text-white shadow-md shadow-brand-vibrant/30 transition-colors hover:bg-brand-royal">
              Primary Action
            </Button>
            <Button
              variant="secondary"
              className="border-none bg-brand-cyan/20 text-brand-deep transition-colors hover:bg-brand-cyan/30 dark:text-brand-cyan"
            >
              Secondary Info
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

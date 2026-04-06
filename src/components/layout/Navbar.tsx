"use client"

import React from "react"
import { useTranslation } from "react-i18next"
import { useTheme } from "next-themes"
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar, RootState } from "@/store"
import { Button } from "@/components/ui/button"

export const Navbar = () => {
  const { t, i18n } = useTranslation()
  const { theme, setTheme } = useTheme()
  const dispatch = useDispatch()
  const isSidebarOpen = useSelector((state: RootState) => state.ui.isSidebarOpen)

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === "en" ? "de" : "en")
  }

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b bg-background sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => dispatch(toggleSidebar())}
        >
          <span className="material-symbols-outlined">menu</span>
        </Button>
        <span className="font-manrope font-bold text-xl tracking-tighter text-brand-vibrant">
          NextPlate
        </span>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" onClick={toggleLanguage}>
          {i18n.language.toUpperCase()}
        </Button>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <span className="material-symbols-outlined">
            {theme === "dark" ? "light_mode" : "dark_mode"}
          </span>
        </Button>

        <Button variant="default" size="sm">
          {t("login")}
        </Button>
      </div>
    </nav>
  )
}

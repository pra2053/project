"use client"

import React, { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import NavItem from "./NavItem"
import NavSection from "./NavSection"

const Navigation: React.FC = () => {
  const [isSchedulingExpanded, setIsSchedulingExpanded] = useState(true)
  const navigate = useNavigate()
  const location = useLocation()

  const mainNavItems = [
    { icon: "🏠", label: "Home" },
  ]

  const schedulingSubItems = [
    { label: "Job Form", path: "/add-job", active: location.pathname === "/add-job" },
    { label: "Dataset Trigger", path: "/dataset-trigger", active: location.pathname === "/dataset-trigger" },
    { label: "Calendar Scheduling Form", path: "/calendar-scheduling", active: location.pathname === "/calendar-scheduling" },
  ]

  const otherNavItems: any[] = []

  const handleNavClick = (label: string, path?: string) => {
    console.log(`Clicked on: ${label}`)
    if (path) {
      navigate(path)
    }
  }

  return (
    <nav className="flex-1 py-4">
      {mainNavItems.map((item, index) => (
        <NavItem key={index} icon={item.icon} label={item.label} onClick={() => handleNavClick(item.label)} />
      ))}

      <NavSection
        icon="📅"
        label="Scheduling"
        subItems={schedulingSubItems}
        expanded={isSchedulingExpanded}
        onClick={() => setIsSchedulingExpanded(!isSchedulingExpanded)}
        onSubItemClick={handleNavClick}
      />

      {otherNavItems.map((item, index) => (
        <NavItem
          key={index}
          icon={item.icon}
          label={item.label}
          hasArrow={item.hasArrow}
          onClick={() => handleNavClick(item.label)}
        />
      ))}
    </nav>
  )
}

export default Navigation

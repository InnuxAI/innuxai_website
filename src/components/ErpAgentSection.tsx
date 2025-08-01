"use client"
import React from "react"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { Building2, Users, ShoppingCart, Truck, Calculator, BarChart3 } from "lucide-react"
import { img } from "motion/react-client"

const content = [
  {
    title: "Accounting & Finance",
    description:
      "Automate invoice processing, expense tracking, and financial reporting with InnuxAI agents. Seamlessly integrate with ERPNext's accounting modules to streamline your financial workflows and ensure accurate bookkeeping across all transactions.",
    content: (
      <img 
        src="/assets/1. home_screen_reorder tirggered.png" 
        alt="Finance Dashboard" 
        className="w-full h-full object-contain p-0 m-0"
      />
    ),
  },
  {
    title: "Human Resources",
    description:
      "Transform HR operations with intelligent agents that handle employee onboarding, payroll processing, and performance tracking. Our AI agents integrate seamlessly with ERPNext HR modules to automate recruitment workflows and employee lifecycle management.",
    content: (
      <img 
        src="/assets/2. MR generated.png" 
        alt="HR Dashboard" 
        className="w-full h-full object-contain p-0 m-0"
      />
    ),
  },
  {
    title: "Sales & CRM",
    description:
      "Boost your sales performance with AI agents that automate lead qualification, opportunity tracking, and customer communication. Integrate with ERPNext CRM to create intelligent sales workflows that convert prospects into customers more efficiently.",
    content: (
      <img 
        src="/assets/3. RFQ Notificaton.png" 
        alt="Sales Dashboard" 
        className="w-full h-full object-contain p-0 m-0"
      />
    ),
  },
  {
    title: "Inventory Management",
    description:
      "Optimize inventory levels with intelligent agents that monitor stock levels, predict demand, and automate reordering processes. Connect with ERPNext inventory modules to maintain optimal stock levels while reducing carrying costs and stockouts.",
    content: (
      <img 
        src="/assets/1. home_screen_reorder tirggered.png" 
        alt="Inventory Dashboard" 
        className="w-full h-full object-contain p-0 m-0"
      />
    ),
  },
  {
    title: "Supply Chain & Procurement",
    description:
      "Streamline procurement processes with AI agents that automate vendor selection, purchase order creation, and supplier communication. Integrate with ERPNext procurement workflows to ensure timely deliveries and cost optimization across your supply chain.",
    content: (
      <img 
        src="/assets/2. MR generated.png" 
        alt="Supply Chain Dashboard" 
        className="w-full h-full object-contain p-0 m-0"
      />
    ),
  },
  {
    title: "Manufacturing Operations",
    description:
      "Enhance manufacturing efficiency with AI agents that optimize production schedules, monitor quality control, and manage work orders. Seamlessly integrate with ERPNext manufacturing modules to create intelligent production workflows that maximize output and minimize waste.",
    content: (
      <img 
        src="/assets/3. RFQ Notificaton.png" 
        alt="Manufacturing Dashboard" 
        className="w-full h-full object-contain p-0 m-0"
      />
    ),
  },
]


const ERPAgentsSection = () => {
  return (
    <section className="w-full py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            AI Agents for Every ERP Module
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Discover how InnuxAI transforms each ERPNext module with intelligent automation, streamlining operations
            across your entire organization.
          </p>
        </div>

        <div className="w-full">
          <StickyScroll content={content} className="dark:bg-white"/>
        </div>
      </div>
    </section>
  )
}

export default React.memo(ERPAgentsSection)

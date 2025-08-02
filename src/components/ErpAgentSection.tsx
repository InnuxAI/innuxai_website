"use client"
import React from "react"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
// import Image from "next/image"

const content = [
  {
    title: "Procurement",
    description:
      "Automate procurement workflows, supplier management, and purchase order processing with InnuxAI agents. Seamlessly integrate with ERPNext’s procurement and inventory modules to streamline requisitions, approvals, vendor coordination, and inventory tracking—ensuring efficient purchasing, reduced delays, and intelligent decision, making across your supply chain.",
    content: (
      <img 
        src="/assets/procurement.png" 
        alt="Finance Dashboard" 
        className="w-full h-full object-contain p-0 m-0"
        width={100}
      />
    ),
  },
  // {
  //   title: "Human Resources",
  //   description:
  //     "Transform HR operations with intelligent agents that handle employee onboarding, payroll processing, and performance tracking. Our AI agents integrate seamlessly with ERPNext HR modules to automate recruitment workflows and employee lifecycle management.",
  //   content: (
  //     <img 
  //       src="/assets/2. MR generated.png" 
  //       alt="HR Dashboard" 
  //       className="w-full h-full object-contain p-0 m-0"
  //     />
  //   ),
  // },
  // {
  //   title: "Sales & CRM",
  //   description:
  //     "Boost your sales performance with AI agents that automate lead qualification, opportunity tracking, and customer communication. Integrate with ERPNext CRM to create intelligent sales workflows that convert prospects into customers more efficiently.",
  //   content: (
  //     <img 
  //       src="/assets/3. RFQ Notificaton.png" 
  //       alt="Sales Dashboard" 
  //       className="w-full h-full object-contain p-0 m-0"
  //     />
  //   ),
  // },
  // {
  //   title: "Inventory Management",
  //   description:
  //     "Optimize inventory levels with intelligent agents that monitor stock levels, predict demand, and automate reordering processes. Connect with ERPNext inventory modules to maintain optimal stock levels while reducing carrying costs and stockouts.",
  //   content: (
  //     <img 
  //       src="/assets/1. home_screen_reorder tirggered.png" 
  //       alt="Inventory Dashboard" 
  //       className="w-full h-full object-contain p-0 m-0"
  //     />
  //   ),
  // },
  // {
  //   title: "Supply Chain & Procurement",
  //   description:
  //     "Streamline procurement processes with AI agents that automate vendor selection, purchase order creation, and supplier communication. Integrate with ERPNext procurement workflows to ensure timely deliveries and cost optimization across your supply chain.",
  //   content: (
  //     <img 
  //       src="/assets/2. MR generated.png" 
  //       alt="Supply Chain Dashboard" 
  //       className="w-full h-full object-contain p-0 m-0"
  //     />
  //   ),
  // },
  {
    title: "Other Modules",
    description:
      "Exciting things are on the horizon! Other module integrations are currently under development, and the team at InnuxAI is working earnestly to bring it to life. Stay tuned — additional modules and capabilities will be rolling out shortly as we continue to build and refine the experience.",
    content: (
      <div className="flex items-center justify-center h-full bg-background dark:bg-background"
        // style={{
        //   background: "linear-gradient(90deg, rgba(5, 5, 10, 1.000) 0.000%, rgba(5, 5, 10, 1.000) 7.692%, rgba(9, 10, 14, 1.000) 7.692%, rgba(9, 10, 14, 1.000) 15.385%, rgba(13, 14, 18, 1.000) 15.385%, rgba(13, 14, 18, 1.000) 23.077%, rgba(18, 19, 22, 1.000) 23.077%, rgba(18, 19, 22, 1.000) 30.769%, rgba(22, 23, 26, 1.000) 30.769%, rgba(22, 23, 26, 1.000) 38.462%, rgba(26, 27, 30, 1.000) 38.462%, rgba(26, 27, 30, 1.000) 46.154%, rgba(30, 31, 34, 1.000) 46.154%, rgba(30, 31, 34, 1.000) 53.846%, rgba(34, 35, 38, 1.000) 53.846%, rgba(34, 35, 38, 1.000) 61.538%, rgba(38, 39, 42, 1.000) 61.538%, rgba(38, 39, 42, 1.000) 69.231%, rgba(41, 42, 45, 1.000) 69.231%, rgba(41, 42, 45, 1.000) 76.923%, rgba(44, 45, 48, 1.000) 76.923%, rgba(44, 45, 48, 1.000) 84.615%, rgba(46, 47, 51, 1.000) 84.615%, rgba(46, 47, 51, 1.000) 92.308%, rgba(48, 49, 53, 1.000) 92.308% 100.000%)"
          // }}
        >
        <span className="mx-auto pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Coming Soon
        </span>
      </div>
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

import React from "react"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"
import { ProcurementCard } from "@/components/custom/procurement-card"
import { motion } from "framer-motion"

const content = [
  {
    title: "Procurement",
    description:
      "Automate procurement workflows, supplier management, and purchase order processing with InnuxAI agents. Seamlessly integrate with ERPNext's procurement and inventory modules to streamline requisitions, approvals, vendor coordination, and inventory tracking—ensuring efficient purchasing, reduced delays, and intelligent decision making across your supply chain.",
    image: "/assets/procurement.png",
    badge: "Core Module"
  },
  {
    title: "Other Modules",
    description:
      "Exciting things are on the horizon! Other module integrations are currently under development, and the team at InnuxAI is working earnestly to bring it to life. Stay tuned — additional modules and capabilities will be rolling out shortly as we continue to build and refine the experience.",
    image: null,
    badge: "Coming Soon"
  },
]


const ERPAgentsSection = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-white dark:bg-black" id="modules">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">
            AI Agents for Every ERP Module
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed text-balance">
            Discover how InnuxAI transforms each ERPNext module with intelligent automation, streamlining operations
            across your entire organization.
          </p>
        </div>

        {/* Mobile: Horizontal Carousel */}
        <div className="block lg:hidden">
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-4 px-4">
              {content.map((item, index) => (
                <div
                  key={index}
                  className="flex-none w-[85vw] snap-center"
                >
                  <div className="h-full bg-white dark:bg-zinc-900 rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden flex flex-col shadow-sm">
                    {/* Text Section - Top */}
                    <div className="p-6 flex flex-col gap-3">
                      <Badge className={cn("w-fit border-0 px-3 py-1 bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
                        item.badge === "Coming Soon" && "bg-amber-50 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300"
                      )}>
                        {item.badge}
                      </Badge>

                      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                        {item.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400 line-clamp-4">
                        {item.description}
                      </p>
                    </div>

                    {/* Image Section - Bottom */}
                    <div className="flex-1 min-h-[250px] bg-gray-50 dark:bg-neutral-900/50 p-4 flex items-center justify-center relative overflow-hidden group">
                      {item.title === "Procurement" ? (
                        <div className="w-full h-full min-h-[250px]">
                          <ProcurementCard />
                        </div>
                      ) : item.image ? (
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-contain rounded-lg transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex items-center justify-center h-full w-full relative">
                          {/* Abstract visual for 'Coming Soon' */}
                          <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-1 opacity-[0.03] dark:opacity-[0.05]">
                            {Array.from({ length: 36 }).map((_, i) => (
                              <div key={i} className="bg-current rounded-sm" />
                            ))}
                          </div>
                          <div className="relative z-10 flex flex-col items-center gap-2">
                            <div className="h-16 w-16 rounded-2xl bg-gradient-to-tr from-gray-200 to-gray-100 dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center shadow-inner">
                              <span className="text-2xl">🚧</span>
                            </div>
                            <span className="text-lg font-medium text-gray-500 dark:text-gray-400">Under Construction</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="flex justify-center gap-2 mt-4">
              {content.map((_, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700"
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-8">
          {content.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group bg-gray-100 dark:bg-zinc-900 rounded-3xl border border-gray-200 dark:border-white/10 overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-black/5 dark:hover:shadow-white/5 transition-all duration-500"
            >
              {/* Text Section - Top */}
              <div className="p-8 md:p-10 flex flex-col gap-5">
                <Badge className={cn("w-fit border-0 px-3 py-1 font-medium bg-blue-50 text-blue-700 dark:bg-blue-500/20 dark:text-blue-300",
                  item.badge === "Coming Soon" && "bg-amber-50 text-amber-700 dark:bg-amber-500/20 dark:text-amber-300"
                )}>
                  {item.badge}
                </Badge>

                <h3 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
                  {item.title}
                </h3>

                <p className="text-base leading-relaxed text-gray-600 dark:text-gray-400">
                  {item.description}
                </p>
              </div>

              {/* Image Section - Bottom */}
              <div className="flex-1 min-h-[350px] bg-gray-50 dark:bg-neutral-900/40 p-10 flex items-center justify-center relative overflow-hidden">
                {item.title === "Procurement" ? (
                  <div className="w-full h-full min-h-[300px]">
                    <ProcurementCard />
                  </div>
                ) : item.image ? (
                  <div className="relative w-full h-full">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain rounded-xl shadow-lg ring-1 ring-black/5 dark:ring-white/10 transition-transform duration-700 ease-out group-hover:scale-[1.02] group-hover:-translate-y-2"
                    />
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full w-full relative">
                    {/* Abstract visual for 'Coming Soon' */}
                    <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 gap-2 opacity-[0.03] dark:opacity-[0.05]">
                      {Array.from({ length: 48 }).map((_, i) => (
                        <div key={i} className="bg-current rounded-md" />
                      ))}
                    </div>
                    <div className="relative z-10 flex flex-col items-center gap-4 p-8 rounded-2xl bg-white/50 dark:bg-black/50 backdrop-blur-sm border border-white/50 dark:border-white/5 shadow-xl">
                      <div className="h-20 w-20 rounded-2xl bg-gradient-to-tr from-gray-100 to-white dark:from-neutral-800 dark:to-neutral-900 flex items-center justify-center shadow-[inset_0_1px_4px_rgba(0,0,0,0.1)] ring-1 ring-black/5">
                        <span className="text-3xl opacity-80">🚧</span>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">Work in Progress</div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">More modules arriving soon</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}

export default React.memo(ERPAgentsSection)

import React from "react";
import { Workflow, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"
import AnimatedBeamMultipleOutputDemo from "@/components/custom/animated-beam-multiple-outputs"
import { AnimatedListDemo } from "@/components/custom/notifications"
import { OrbitingCirclesDemo } from "@/components/custom/oribiting-cicles-mcp"
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid"
import { Marquee } from "@/components/magicui/marquee"
import { AgnoIcon } from "@/components/icons/custom-icons";


const Icons = {
  mcp: () => (
    <svg
      width="15%"
      height="15%"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="bg-black dark:bg-black fill-white dark:fill-white p-[10px] rounded-[10px]"
    >
      <title>ModelContextProtocol</title>
      <path d="M15.688 2.343a2.588 2.588 0 00-3.61 0l-9.626 9.44a.863.863 0 01-1.203 0 .823.823 0 010-1.18l9.626-9.44a4.313 4.313 0 016.016 0 4.116 4.116 0 011.204 3.54 4.3 4.3 0 013.609 1.18l.05.05a4.115 4.115 0 010 5.9l-8.706 8.537a.274.274 0 000 .393l1.788 1.754a.823.823 0 010 1.18.863.863 0 01-1.203 0l-1.788-1.753a1.92 1.92 0 010-2.754l8.706-8.538a2.47 2.47 0 000-3.54l-.05-.049a2.588 2.588 0 00-3.607-.003l-7.172 7.034-.002.002-.098.097a.863.863 0 01-1.204 0 .823.823 0 010-1.18l7.273-7.133a2.47 2.47 0 00-.003-3.537z"></path>
      <path d="M14.485 4.703a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a4.115 4.115 0 000 5.9 4.314 4.314 0 006.016 0l7.12-6.982a.823.823 0 000-1.18.863.863 0 00-1.204 0l-7.119 6.982a2.588 2.588 0 01-3.61 0 2.47 2.47 0 010-3.54l7.12-6.982z"></path>
    </svg>
  ),
}
  const agents = [
    {
      name: "Gmail Agent",
      body: "Automate email processing, categorization, and responses. Extract insights from email conversations and trigger workflows based on email content.",
      icon: "📧",
      color: "#EA4335",
    },
    {
      name: "SharePoint Agent",
      body: "Seamlessly integrate with SharePoint to automate document management, content approval workflows, and collaborative processes.",
      icon: "📁",
      color: "#0078D4",
    },
    {
      name: "MongoDB Agent",
      body: "Connect and automate database operations, data synchronization, and real-time analytics with your MongoDB instances.",
      icon: "🍃",
      color: "#47A248",
    },
    {
      name: "Slack Agent",
      body: "Enhance team collaboration with automated notifications, message processing, and workflow triggers directly in Slack.",
      icon: "💬",
      color: "#4A154B",
    },
    {
      name: "Salesforce Agent",
      body: "Streamline CRM operations with automated lead processing, opportunity management, and customer data synchronization.",
      icon: "☁️",
      color: "#00A1E0",
    },
  ]
  
  const features = [
    {
      Icon: AgnoIcon,
      name: "AI Agents",
      description: "MCP-compliant agents that integrate with your enterprise tools seamlessly.",
      href: "#",
      cta: "Explore Agents",
      className: "col-span-3 lg:col-span-1",
      background: (
        <Marquee
          pauseOnHover
          className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
        >
          {agents.map((agent, idx) => (
            <figure
              key={idx}
              className={cn(
                "relative w-40 cursor-pointer overflow-hidden rounded-xl border p-4",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none",
              )}
            >
              <div className="flex flex-row items-center gap-2">
                <div
                  className="flex size-8 items-center justify-center rounded-lg text-white text-sm font-medium"
                  style={{ backgroundColor: agent.color }}
                >
                  {agent.icon}
                </div>
                <div className="flex flex-col">
                  <figcaption className="text-sm font-medium dark:text-white ">{agent.name}</figcaption>
                </div>
              </div>
              <blockquote className="mt-2 text-xs text-gray-600 dark:text-gray-400">{agent.body}</blockquote>
            </figure>
          ))}
        </Marquee>
      ),
    },
    {
      Icon: Workflow,
      name: "Live Workflows",
      description: "Real-time automation activities across your enterprise systems.",
      href: "#",
      cta: "View Dashboard",
      className: "col-span-3 lg:col-span-2",
      background: (
        <AnimatedListDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    {
      Icon: Building2,
      name: "Enterprise Integrations",
      description: "Connect with 100+ enterprise tools and platforms seamlessly.",
      href: "#",
      cta: "View Integrations",
      className: "col-span-3 lg:col-span-2",
      background: (
        <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    {
      Icon: Icons.mcp,
      name: "MCP Compliant",
      description: "All agents follow Model Context Protocol standards for reliability.",
      className: "col-span-3 lg:col-span-1 bg-transparent",
      href: "#",
      cta: "Learn More",
      background: (
        <OrbitingCirclesDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
      ),
    },
    
  ]

const FeaturesSection = () => {
    return (
    <div id="features" className="w-full max-w-7xl mx-auto p-6 py-20">
            <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">Platform Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                Discover how InnuxAI transforms your enterprise workflows with intelligent automation.
            </p>
            </div>

            <BentoGrid>
            {features.map((feature, idx) => (
                <BentoCard key={idx} {...feature} />
            ))}
            </BentoGrid>
           
            {/* <ExpandableCardExamples /> */}
            
        </div>
    )
}

export default React.memo(FeaturesSection);
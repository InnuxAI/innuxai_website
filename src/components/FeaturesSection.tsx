import React from "react";
import { Workflow, Building2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid"
import { AgnoIcon } from "@/components/icons/custom-icons";
import { LiveWorkflowsCard } from "@/components/custom/live-workflows-card";
import { AIAgentsCard } from "@/components/custom/ai-agents-card";
import { EnterpriseIntegrationsCard } from "@/components/custom/enterprise-integrations-card";
import { MCPComplianceCard } from "@/components/custom/mcp-compliance-card";

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

const features = [
  {
    Icon: AgnoIcon,
    name: "AI Agents",
    description: "MCP-compliant agents that integrate with your enterprise tools seamlessly.",
    href: "#",
    cta: "Explore Agents",
    className: "col-span-1 md:col-span-3 lg:col-span-1",
    background: (
      <AIAgentsCard />
    ),
  },
  {
    Icon: Workflow,
    name: "Live Workflows",
    description: "Real-time automation activities across your enterprise systems.",
    href: "#",
    cta: "View Dashboard",
    className: "col-span-1 md:col-span-3 lg:col-span-2",
    background: (
      <LiveWorkflowsCard />
    ),
  },
  {
    Icon: Building2,
    name: "Enterprise Integrations",
    description: "Connect with 100+ enterprise tools and platforms seamlessly.",
    href: "#",
    cta: "View Integrations",
    className: "col-span-1 md:col-span-3 lg:col-span-2",
    background: (
      <EnterpriseIntegrationsCard />
    ),
  },
  {
    Icon: Icons.mcp,
    name: "MCP Compliant",
    description: "All agents follow Model Context Protocol standards for reliability.",
    className: "col-span-1 md:col-span-3 lg:col-span-1 bg-transparent",
    href: "#",
    cta: "Learn More",
    background: (
      <MCPComplianceCard />
    ),
  },

]

const FeaturesSection = () => {
  return (
    <div id="features" className="w-full max-w-7xl mx-auto p-6 py-20">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-6 tracking-tight">Platform Features</h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-loose text-balance">
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
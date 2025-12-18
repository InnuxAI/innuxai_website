"use client";
import React from "react";

import { BentoCard } from "@/components/eldoraui/bento";

import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardTitle,
} from "@/components/ui/minimal-card"

import { Badge } from "@/components/ui/badge";


import { EmailAnalysisCard } from "@/components/custom/email-analysis-card";
import { ComplianceCard } from "@/components/custom/compliance-card";
import { AIChatCard } from "@/components/custom/ai-chat-card";
import { ReviewApproveCard } from "@/components/custom/review-approve-card";
import { GlobalReachCard } from "@/components/custom/global-reach-card";

const BentoDemoComponent = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
      <BentoCard
        eyebrow={
          <div>
            <Badge variant="default" className="bg-[#ADF81D] text-black">Analyse and Create</Badge>
          </div>
        }
        title="Analyse Email Conversation"
        description="AI instantly extracts contract terms and context from client emails and attachments, building your draft contract with unmatched accuracy directly on your company template saving hours with smart automation and eliminating manual entry."
        graphic={
          <EmailAnalysisCard />
        }
        className="max-lg:rounded-t-4xl lg:rounded-tl-4xl lg:col-span-3"
      />
      <BentoCard
        eyebrow={
          <div>
            <Badge variant="default" className="bg-[#ADF81D] text-black">Modify and Chat</Badge>
          </div>
        }
        title="User Interaction and Compliance"
        description="Users can easily edit contracts, check compliance scores instantly, and review key terms with AI assistance for accurate, efficient contract management and risk mitigation."
        graphic={
          <ComplianceCard />
        }
        // fade={["bottom"]}
        // fadeColor="black"
        className="lg:rounded-tr-4xl lg:col-span-3"
      />
      <BentoCard
        eyebrow={
          <Badge variant="default" className="bg-[#ADF81D] text-black">Review and Approve</Badge>
        }
        title="Streamlined Review & Approval"
        description="Reviewer and approver workflows are simplified with AI tools, comments, version tracking, and instant notifications, collaborate seamlessly."
        graphic={
          // <div className="flex size-full px-4 pt-4">
          <ReviewApproveCard />
          // </div>
        }
        className="lg:rounded-bl-4xl lg:col-span-2"
      />
      <BentoCard
        eyebrow={
          <Badge variant="default" className="bg-[#ADF81D] text-black">Chat</Badge>
        }
        title="Chat with AI"
        description="Chat with AI to get instant responses to your questions related to the contract and get help with your tasks."
        graphic={

          <AIChatCard />
        }

        className="lg:col-span-2"
      />
      <BentoCard
        eyebrow={
          <Badge variant="default" className="bg-[#ADF81D] text-black">Centralised Management</Badge>
        }
        title="Global Deployment"
        description="Manage contracts globally with ease, ensuring compliance and accessibility for your entire organization."
        graphic={
          <GlobalReachCard />
        }
        // fade={["bottom"]}
        // fadeColor="black"
        className="max-lg:rounded-b-4xl lg:rounded-br-4xl lg:col-span-2"
      />
    </div>
  );
};

export const BentoDemo = React.memo(BentoDemoComponent);

"use client";
import React from "react";

import { BentoCard } from "@/components/eldoraui/bento";
import { Globe } from "@/components/magicui/globe";

import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardTitle,
} from "@/components/ui/minimal-card"

import { CardComment } from "@/components/eldoraui/animatedcardcomment";
import { Badge } from "@/components/ui/badge";


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
          <div className="h-80 bg-[url(/assets/gmail_contract1.png)] bg-[size:650px_400px] bg-[left_-30px_top_-65px]  bg-no-repeat" />
        }
        fade={["bottom"]}
        fadeColor="black"
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
          <div className="absolute inset-0 bg-[url(/assets/contract_editor.png)] bg-[size:650px_400px] bg-[left_0px_top_-30px] bg-no-repeat" />
        }
        fade={["bottom"]}
        fadeColor="black"
        className="lg:rounded-tr-4xl lg:col-span-3"
      />
      <BentoCard
        eyebrow={
            <Badge variant="default" className="bg-[#ADF81D] text-black">Review and Approve</Badge>
        }
        title="Streamlined Review & Approval"
        description="Reviewer and approver workflows are simplified with AI tools, comments, version tracking, and instant notifications, collaborate seamlessly."
        graphic={
          <div className="flex size-full px-4 pt-4">
            {/* <ProductShowcaseCard /> */}
            <MinimalCard className="w-full ">
            <CardComment commenter="Reviewer" replier="Approver" />
            <MinimalCardTitle>
              Comments
            </MinimalCardTitle>
            <MinimalCardDescription>
              Reviewer commented on the document with changes.
              Approver replied.
            </MinimalCardDescription>
          </MinimalCard>
          </div>
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
          <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border dark:bg-zinc-900 bg-gray-600 m-4">
         <img src="/assets/ai-chat.png" alt="Chat" className="w-full h-[300px] object-fit" />
        </div>
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
          <div className="relative flex items-center justify-center overflow-hidden rounded-2xl border dark:bg-zinc-900 bg-white px-40 pb-40 pt-8 m-4">
          <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            Reach
          </span>
          <Globe className="top-28" />
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
        }
        // fade={["bottom"]}
        // fadeColor="black"
        className="max-lg:rounded-b-4xl lg:rounded-br-4xl lg:col-span-2"
      />
    </div>
  );
};

export const BentoDemo = React.memo(BentoDemoComponent);

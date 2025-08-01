"use client";
import React from "react";
import { ProductShowcaseCard } from "@/components/demo_carddemo";
import { BentoCard } from "@/components/eldoraui/bento";
import { LogoCluster } from "@/components/eldoraui/logocluster";
import { Map } from "@/components/eldoraui/map";

import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardTitle,
} from "@/components/ui/minimal-card"

import { CardComment } from "@/components/eldoraui/animatedcardcomment";
import { Badge } from "@/components/ui/badge";


export function BentoDemo() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
      <BentoCard
        eyebrow={
            <div>
                <Badge variant="default" className="bg-[#ADF81D] text-black">Step 1</Badge>
            </div>
        }
        title="Analyse Email Conversation"
        description="Radiant uses social engineering to build a detailed financial picture of your leads. Know their budget, compensation package, social security number, and more."
        graphic={
          // eslint-disable-next-line tailwindcss/no-contradicting-classname
          <div className="h-80 bg-[url(/assets/2a-Review-Action.png)] bg-[size:1000px_560px] bg-[left_-30px_top_-65px]  bg-no-repeat" />
        }
        fade={[]}
        className="max-lg:rounded-t-4xl lg:rounded-tl-4xl lg:col-span-3"
      />
      <BentoCard
        eyebrow={
          <div>
              <Badge variant="default" className="bg-[#ADF81D] text-black">Step 2</Badge>
          </div>
      }
        title="Undercut your competitors"
        description="With our advanced data mining, you’ll know which companies your leads are talking to and exactly how much they’re being charged."
        graphic={
          // eslint-disable-next-line tailwindcss/no-contradicting-classname
          <div className="absolute inset-0 bg-[url(https://res.cloudinary.com/eldoraui/image/upload/v1734021357/competitors_ouucah.png)] bg-[size:1100px_650px] bg-[left_-38px_top_-73px] bg-no-repeat" />
        }
        fade={["bottom"]}
        className="lg:rounded-tr-4xl lg:col-span-3"
      />
      <BentoCard
        eyebrow={
            <Badge variant="default" className="bg-[#ADF81D] text-black">Step 3</Badge>
        }
        title="Built for power users"
        description="It’s never been faster to cold email your entire contact list using our streamlined keyboard shortcuts."
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
        eyebrow="Source"
        title="Get the furthest reach"
        description="Bypass those inconvenient privacy laws to source leads from the most unexpected places."
        graphic={<LogoCluster />}
        className="lg:col-span-2"
      />
      <BentoCard
        eyebrow="Limitless"
        title="Sell globally"
        description="Radiant helps you sell in locations currently under international embargo."
        graphic={<Map />}
        className="max-lg:rounded-b-4xl lg:rounded-br-4xl lg:col-span-2"
      />
    </div>
  );
}

"use client";

import { CalendarIcon, Check, MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import TextGif from "@/components/ui/text-gif";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SparklesCore } from "@/components/ui/sparkles";

export const ContactSection = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="px-10 py-20 lg:py-25 flex items-center bg-[#f6f5f4]/60 dark:bg-zinc-900/30 flex-col gap-20 sm:m-10 lg:m-20 md:m-10 rounded-4xl">
      <h1 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-bold"> Contact Us </h1>
      <div className="container max-w-6xl mx-auto"> 
        <div className="grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col gap-6 justify-center items-center rounded-tl-4xl rounded-bl-4xl"
            style={{
              background: "radial-gradient(circle at top left, rgba(146, 10, 230, 0.57), rgba(230, 10, 127, 0.33) 30%, transparent 70%)"
            }}
          >
            <SparklesCore
              id="tsparticles"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={500}
              className="absolute  h-[400px] w-[400px]"
              particleColor="#e60a64"
            />
            <div className="flex flex-col gap-4">
              <div>
                <Badge
                  className="bg-[#ADFA1B] text-black border-black"
                >
                  Contact
                </Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  <TextGif
                    gifUrl={"https://media.giphy.com/media/fnglNFjBGiyAFtm6ke/giphy.gif"}
                    text="Something New"
                    size="xl"
                    weight="bold"
                  />
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-foreground/75 dark:text-foreground/75 max-w-sm text-left">
                  Managing a workflow today is already tough. Avoid
                  further complications by ditching outdated, tedious, manual
                  methods.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Easy to use</p>
                <p className="text-foreground/75 dark:text-foreground/75 text-sm">
                  We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Fast and reliable</p>
                <p className="text-foreground/75 dark:text-foreground/75 text-sm">
                  We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
                <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Beautiful and modern</p>
                <p className="text-foreground/75 dark:text-foreground/75 text-sm">
                  We&apos;ve made it easy to use and understand.
                </p>
              </div>
            </div>
          </div>

          <div className="justify-center flex items-center w-full">
            <div className="rounded-md flex flex-col border p-8 gap-4 w-full">
              <p>Book a meeting</p>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="picture">Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" type="text" />
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" type="text" />
              </div>
              <div className="grid w-full items-center gap-1">
                <Label htmlFor="message">Say hello</Label>
                <Textarea className="w-full" />
              </div>

              <Button className="gap-4 w-full">
                Book the meeting <MoveRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
"use client";

import { CalendarIcon, Check, MoveRight, Loader2 } from "lucide-react";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import TextGif from "@/components/ui/text-gif";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SparklesCore } from "@/components/ui/sparkles";

export default function ContactSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [formData, setFormData] = useState({
    fullname: '',
    phoneNumber: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !formData.fullname || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        'service_34u911u',
        'template_xo4lcsv',
        {
          full_name: formData.fullname,
          email: formData.email,
          phone: formData.phoneNumber,
          message: formData.message,
          date: date ? format(date, 'PPP') : 'No date selected',
        },
        'hHCBY8U_lael-jfEi'
      );

      setIsSent(true);
      // Reset form
      setFormData({
        fullname: '',
        phoneNumber: '',
        email: '',
        message: ''
      });
      setDate(new Date());

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSent(false);
      }, 5000);

    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-10 lg:py-20 flex items-center flex-col gap-10 lg:gap-20">
      <div className="w-full backdrop-blur-3xl border rounded-3xl lg:rounded-[3rem] p-4 lg:p-6"
        style={{
          background: "radial-gradient(circle at top left, rgba(146, 10, 230, 0.57), rgba(230, 10, 127, 0.33) 30%, transparent 70%)"
        }}
      >
        <div className="w-full max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6 justify-center items-center rounded-tl-3xl rounded-tr-3xl lg:rounded-tr-none lg:rounded-bl-4xl rounded-bl-none">
              <SparklesCore
                id="tsparticles"
                background="transparent"
                minSize={0.6}
                maxSize={1.4}
                particleDensity={400}
                speed={2}
                className="absolute h-[200px] lg:h-[300px] w-full max-w-[400px]"
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
              <form onSubmit={handleSubmit} className="rounded-md flex flex-col border p-8 gap-4 w-full">
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
                  <Label htmlFor="fullname">Full Name *</Label>
                  <Input
                    id="fullname"
                    type="text"
                    value={formData.fullname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1">
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <Input
                    id="phoneNumber"
                    type="phone"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid w-full items-center gap-1">
                  <Label htmlFor="message">Say hello</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="gap-4 w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : isSent ? (
                    'Message Sent!'
                  ) : (
                    <>
                      Book the meeting <MoveRight className="w-4 h-4" />
                    </>
                  )}
                </Button>
                {isSent && (
                  <p className="text-sm text-green-600 text-center">
                    Your meeting request has been sent successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
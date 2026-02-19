import Link from "next/link";
import TextGif from "@/components/ui/text-gif";
import { cn } from "@/lib/utils";

export default function FooterSection() {
  const navigationItems = [
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Reports",
          href: "/coming-soon",
        },
        {
          title: "Statistics",
          href: "/coming-soon",
        },
        {
          title: "Dashboards",
          href: "/coming-soon",
        },
        {
          title: "Recordings",
          href: "/coming-soon",
        },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "About us",
          href: "/coming-soon",
        },
        {
          title: "Fundraising",
          href: "/coming-soon",
        },
        {
          title: "Investors",
          href: "/coming-soon",
        },
        {
          title: "Contact us",
          href: "/coming-soon",
        },
      ],
    },
  ];
  return (
    <div className="w-full py-10 lg:py-40 bg-background text-foreground dark:bg-background dark:text-foreground"
      style={{ background: "radial-gradient(circle at 50% 150%, #a35fff 0%, #ce74ff 15%, #f88fff 30%, #ffadff 45%, #ffdfff 60%, #fff0ff 75%, #ffffff 100%)" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-12">
          {/* Brand Section */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                <TextGif
                  gifUrl={"https://media.giphy.com/media/4bhs1boql4XVJgmm4H/giphy.gif"}
                  text="InnuxAI™"
                  size="lg"
                  weight="bold"
                />
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left dark:text-foreground/60">
                Building Systems for automating enterprise workflows.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-border dark:bg-neutral-800"></div>

          {/* Links Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Address */}
            <div className="flex flex-col gap-2 text-sm leading-relaxed tracking-tight text-foreground/75 dark:text-foreground/50">
              <p className="font-semibold text-foreground/90 dark:text-foreground/70 mb-1">Address</p>
              <p>Plot No: 122, VGP Gandhi Street</p>
              <p>Uthandi, Chennai 600112</p>
              <p>India</p>
            </div>

            {/* Product */}
            <div className="flex flex-col gap-2">
              <p className="text-base font-bold text-foreground/90 dark:text-foreground mb-1">Product</p>
              {navigationItems.find(item => item.title === "Product")?.items?.map((subItem) => (
                <Link
                  key={subItem.title}
                  href={subItem.href}
                  className="text-sm text-foreground/75 dark:text-foreground/60 hover:text-[blue] dark:hover:text-[#ADF81D] transition-colors"
                >
                  {subItem.title}
                </Link>
              ))}
            </div>

            {/* Company */}
            <div className="flex flex-col gap-2">
              <p className="text-base font-bold text-foreground/90 dark:text-foreground mb-1">Company</p>
              {navigationItems.find(item => item.title === "Company")?.items?.map((subItem) => (
                <Link
                  key={subItem.title}
                  href={subItem.href}
                  className="text-sm text-foreground/75 dark:text-foreground/60 hover:text-[blue] dark:hover:text-[#ADF81D] transition-colors"
                >
                  {subItem.title}
                </Link>
              ))}
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-2">
              <p className="text-base font-bold text-foreground/90 dark:text-foreground mb-1">Legal</p>
              <Link href="/coming-soon" className="text-sm text-foreground/75 dark:text-foreground/60 hover:text-[blue] dark:hover:text-[#ADF81D] transition-colors">
                Terms of service
              </Link>
              <Link href="/coming-soon" className="text-sm text-foreground/75 dark:text-foreground/60 hover:text-[blue] dark:hover:text-[#ADF81D] transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
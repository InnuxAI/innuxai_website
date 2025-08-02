import Link from "next/link";
import TextGif from "@/components/ui/text-gif";

export default function FooterSection() {
  const navigationItems = [
    {
      title: "Home",
      href: "/",
      description: "",
    },
    {
      title: "Product",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "Reports",
          href: "/reports",
        },
        {
          title: "Statistics",
          href: "/statistics",
        },
        {
          title: "Dashboards",
          href: "/dashboards",
        },
        {
          title: "Recordings",
          href: "/recordings",
        },
      ],
    },
    {
      title: "Company",
      description: "Managing a small business today is already tough.",
      items: [
        {
          title: "About us",
          href: "/about",
        },
        {
          title: "Fundraising",
          href: "/fundraising",
        },
        {
          title: "Investors",
          href: "/investors",
        },
        {
          title: "Contact us",
          href: "/contact",
        },
      ],
    },
  ];
  return (
    <div className="w-full py-20 lg:py-40 bg-background text-foreground dark:bg-background dark:text-foreground">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                {/* InnuxAI™ */}
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
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left dark:text-foreground/50">
                <p>Plot No: 122, VGP Gandhi</p>
                <p>Street, Uthandi</p>
                <p>Chennai 600112</p>
                <p>India</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-foreground/75 text-left dark:text-foreground/50">
                <Link href="/">Terms of service</Link>
                <Link href="/">Privacy Policy</Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start text-foreground/75 dark:text-foreground/50"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xl font-bold text-foreground/75 dark:text-foreground">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl font-bold text-foreground/75 dark:text-foreground">{item.title}</p>
                  )}
                  {item.items &&
                    item.items.map((subItem) => (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="flex justify-between items-center text-foreground/75 dark:text-foreground"
                      >
                        <span className="text-foreground/75 dark:text-foreground/60 hover:text-[blue] dark:hover:text-[#ADF81D]">
                          {subItem.title}
                        </span>
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
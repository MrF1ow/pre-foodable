import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/config/site";
import { title, subtitle, button } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { tree } from "next/dist/build/templates/app-page";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-left justify-start gap-4">
          <h1 className={title({ size: "lg", color: "green" })}>Foodable</h1>
          <br />
          <h1 className={title({ size: "sm", fullWidth: true })}>
            Making Food More Doable.
          </h1>
          <h4 className={subtitle({ class: "mt-4" })}>Coming Soon ...</h4>
        </div>

        <div className="flex gap-3">
          <Button radius="md" className={button({ size: "lg" })}>
            Join Waitlist
          </Button>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}

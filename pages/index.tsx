import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { Button } from "@nextui-org/button";

import { siteConfig } from "@/config/site";
import { title, subtitle, button } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import Reasoning from "@/sections/reasoning";
import Features from "@/sections/features";
import { moveIn, container } from "@/components/movements";

import { motion } from "framer-motion";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-start justify-center gap-4 py-8 md:py-10 h-allIsh">
        <div className="inline-block max-w-lg text-left justify-start gap-8">
          <motion.div initial="initial" animate="animate" variants={container}>
            <motion.h1
              className={title({ size: "lg", color: "green", fullWidth: true })}
              variants={moveIn}
            >
              Foodable
            </motion.h1>
            <br />
            <motion.h1
              className={title({ size: "sm", fullWidth: true })}
              variants={moveIn}
            >
              Making Food More Doable.
            </motion.h1>
            <motion.h4 className={subtitle({ class: "mt-4" })} variants={moveIn}>
              Coming Soon ...
            </motion.h4>
          </motion.div>
          <motion.div className="flex gap-3" variants={moveIn}>
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
          </motion.div>
        </div>
      </section>
      <Reasoning />
      <Features />
    </DefaultLayout>
  );
}

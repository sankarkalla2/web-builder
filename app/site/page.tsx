import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import Image from "next/image";
import { pricingCards } from "@/lib/stripe/constants";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import clsx from "clsx";
import { CheckIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    // <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
    //   <div className="space-y-6 text-center">
    //     <h1
    //       className={cn(
    //         "text-6xl font-semibold text-white drop-shadow-md",
    //         font.className
    //       )}
    //     >
    //       🔐 Auth
    //     </h1>
    //     <p className="text-white text-lg">A simple authentication service</p>
    //     <div>
    //       <LoginButton asChild>
    //         <Button variant="secondary" size="lg">
    //           Sign in
    //         </Button>
    //       </LoginButton>
    //     </div>
    //   </div>
    // </main>

    <>
      <section className="h-full w-full relative flex items-center pt-36 justify-center flex-col">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:from-background bg-background">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />
        </div>
        <p className="text-center">Run your agency at one place</p>
        <div className="bg-gradient-to-r from-primary to-secondary-foreground text-transparent relative bg-clip-text">
          <h1 className="text-6xl text-center md:text-7xl lg:text-9xl font-bold">
            WEB AGENCY
          </h1>
        </div>
        <div className="md:mt-[-70px] relative flex items-center justify-center">
          <Image
            className="rounded-tl-2xl rounded-tr-2xl object-contain"
            src={"/assets/preview.png"}
            alt="banner img"
            width={1200}
            height={1200}
          />
        </div>
        <div className="bottom-0 top-[50%] bg-gradient-to-t dark:from-background left-0 right-0 z-10"></div>
      </section>
      <section className="md:mt-30 lg:mt-32 flex items-center justify-center gap-4 flex-col p-4">
        <h2 className="text-center text-4xl font-semibold">
          Choose what's fits you
        </h2>
        <p className="text-center text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tenetur,
          harum distinctio amet facilis autem odit itaque eos mollitia quidem{" "}
          <br />
          pariatur aliquid saepe nemo repellat eius! Laborum optio quas amet?
        </p>
        <div className="flex items-center justify-center gap-4 flex-wrap mt-6">
          {pricingCards.map((card) => (
            <Card
              key={card.title}
              className={cn(
                "w-[300px] flex flex-col justify-between",
                card.title === "Unlimited Saas" && "border-2 border-primary"
              )}
            >
              <CardHeader>
                <CardTitle
                  className={clsx("", {
                    "text-muted-foreground": card.title !== "Unlimited Saas",
                  })}
                >
                  {card.title}
                </CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">/m</span>
              </CardContent>

              <CardFooter className="flex flex-col gap-4 items-start">
                <div className="">
                  {card.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-x-2"
                    >
                      <CheckIcon />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link href={`/agency?plan=${card.price}`}>Get Started</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}

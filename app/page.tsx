import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { DisclaimerIcon } from "@/components/disclaimer-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Users, HandHeart, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section - Logo and copy layout */}
      <section className="relative bg-background py-16 sm:py-24 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <div className="mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-10 md:grid-cols-[35%_1fr] md:gap-14">
            {/* Logo - 35% on large screens */}
            <div className="flex justify-center animate-fade-in-up md:justify-center">
              <div className="relative aspect-square h-44 w-44 sm:h-52 sm:w-52 md:h-56 md:w-56 md:max-w-full">
                <Image
                  src="/logo.png"
                  alt="The Regentonians Benevolent Fund"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 224px, 256px"
                />
              </div>
            </div>
            {/* Text - 65%, centered */}
            <div className="flex flex-col items-center text-center animate-fade-in-up animation-delay-200">
              <h1 className="text-2xl font-bold uppercase tracking-tight text-primary sm:text-3xl md:text-4xl">
                <span className="block">The Regentonians&apos;</span>
                <span className="mt-1 block">Benevolent Fund</span>
              </h1>
              <hr className="my-2 h-px w-[40%] min-w-32 border-0 bg-primary" aria-hidden />
              <p className="mt-4 max-w-xl text-base leading-7 text-foreground sm:text-lg">
                Providing compassionate welfare support to alumni of Sierra Leone Grammar School in times of need. Rooted in{" "}
                <span className="font-semibold text-primary">care</span>,{" "}
                <span className="font-semibold text-primary">unity</span> and{" "}
                <span className="font-semibold text-primary">brotherhood</span>.
              </p>
              <p className="mt-4 flex items-center justify-center gap-3 text-sm italic text-primary sm:text-base">
                <span className="h-px w-8 bg-primary/60" aria-hidden />
                Standing together, caring for one another
                <span className="h-px w-8 bg-primary/60" aria-hidden />
              </p>
            </div>
          </div>
        </div>
        {/* CTA buttons - below, centered */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mt-12 flex max-w-5xl flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up animation-delay-400">
            <span className="inline-flex items-center gap-2">
              <Button href="/contribute" size="lg" className="transition-transform duration-200 hover:scale-105">
                Contribute Now
              </Button>
              <DisclaimerIcon />
            </span>
            <Button href="/join" variant="outline" size="lg" className="transition-transform duration-200 hover:scale-105">
              How to Join
            </Button>
            <Button href="/contact" variant="secondary" size="lg" className="transition-transform duration-200 hover:scale-105">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-64 w-full overflow-hidden rounded-lg sm:h-80 lg:h-96 animate-fade-in-up">
              <Image
                src="/whatwedo.png"
                alt="Community support and unity"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                What We Do
              </h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">
                The Regentonians Benevolent Fund (RBF) is not a registered charity or charitable
                trust. It is an internal support initiative under the Sierra Leone Grammar School Old
                Boys’ Association Foundation Trust (UK) for the benefit of its members and related
                persons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Support Section - 3 Pillars */}
      <section className="bg-muted py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How We Support
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our support is delivered through three core pillars
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-screen-2xl gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/support#bereavement-support" className="block">
              <Card className="group overflow-hidden animate-fade-in-up animation-delay-200 flex flex-col transition-all duration-300 hover:shadow-xl h-full cursor-pointer">
                <div className="relative aspect-3/4 w-full min-h-[280px] sm:min-h-[320px]">
                  <Image
                    src="/bereavementsupport.jpeg"
                    alt="Bereavement support and compassion"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="flex-1 flex flex-col">
                  <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Bereavement Support</CardTitle>
                  <CardDescription>"Cry Berrin"</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Providing compassionate support and financial assistance to
                    families during times of loss, helping them navigate difficult
                    periods with dignity and care.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/support#get-well-soon-support" className="block">
              <Card className="group overflow-hidden animate-fade-in-up animation-delay-400 flex flex-col transition-all duration-300 hover:shadow-xl h-full cursor-pointer">
                <div className="relative aspect-3/4 w-full min-h-[280px] sm:min-h-[320px]">
                  <Image
                    src="/newgetwellsoon.jpeg"
                    alt="Health and recovery support"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="flex-1 flex flex-col">
                  <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <HandHeart className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Get Well Soon Support</CardTitle>
                  <CardDescription>Health & Recovery</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Offering support and encouragement to members during illness
                    or recovery, ensuring they know they are not alone in their
                    journey back to health.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/support#milestone-birthdays" className="block">
              <Card className="group overflow-hidden animate-fade-in-up animation-delay-600 flex flex-col transition-all duration-300 hover:shadow-xl h-full cursor-pointer">
                <div className="relative aspect-3/4 w-full min-h-[280px] sm:min-h-[320px]">
                  <Image
                    src="/birthdayMilestone.jpeg"
                    alt="Community celebration"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="flex-1 flex flex-col">
                  <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Milestone Birthdays</CardTitle>
                  <CardDescription>Celebrating Together</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Recognising and celebrating significant milestone birthdays,
                    honouring our members and strengthening the bonds of our
                    community.
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/support#mentoring-scheme" className="block">
              <Card className="group overflow-hidden animate-fade-in-up animation-delay-600 flex flex-col transition-all duration-300 hover:shadow-xl h-full cursor-pointer">
                <div className="relative aspect-3/4 w-full min-h-[280px] sm:min-h-[320px]">
                  <Image
                    src="/mentoringMission.png"
                    alt="Mentoring and mission support"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="flex-1 flex flex-col">
                  <div className="mb-3 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">Mission: Mentoring Scheme</CardTitle>
                  <CardDescription>Personal & Professional Growth</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Our mentoring scheme supports members' personal and professional development by connecting them with peers for guidance and shared experience.
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Get Involved
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Join our community of caring alumni and make a difference in the
              lives of fellow Regentonians'.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <span className="inline-flex items-center gap-2">
                <Button
                  href="/contribute"
                  size="lg"
                  className="transition-transform duration-200 hover:scale-105"
                >
                  Contribute Now
                </Button>
                <DisclaimerIcon />
              </span>
              <Button
                href="/join"
                variant="outline"
                size="lg"
                className="transition-transform duration-200 hover:scale-105"
              >
                Join RBF
              </Button>
              <Button
                href="/contact"
                variant="secondary"
                size="lg"
                className="transition-transform duration-200 hover:scale-105"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

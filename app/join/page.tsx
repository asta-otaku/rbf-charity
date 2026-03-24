import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Hero } from "@/components/hero";
import { Button } from "@/components/ui/button";
import { DisclaimerIcon } from "@/components/disclaimer-dialog";
import { MembershipFormModal } from "@/components/membership-form-modal";
import { Users, ArrowRight, CheckCircle } from "lucide-react";

export default function JoinPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Hero
        title="How to Join"
        description="Become part of a community dedicated to supporting one another"
      // imageUrl="/heroThree.JPG"
      // imageAlt="Join our community"
      // imagePosition="top"
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <span className="inline-flex items-center gap-2">
            <DisclaimerIcon />
            <Button href="/contribute" size="lg">
              Contribute Now
            </Button>
          </span>
          <Button href="/contact" variant="outline" size="lg">
            Contact Us
          </Button>
          <MembershipFormModal />
        </div>
      </Hero>

      {/* Who Can Join Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
            <div className="relative h-64 w-full overflow-hidden rounded-lg sm:h-80 lg:h-96 animate-fade-in-up">
              <Image
                src="/ourMission.png"
                alt="Community membership and joining"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <Card className="animate-fade-in-up animation-delay-200">
              <CardHeader>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-3xl">Who Can Join</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg leading-8 text-muted-foreground">
                  The Regentonians' Benevolent Fund is open to all alumni of Sierra Leone Grammar School.
                  Whether you graduated recently or many years ago, you are welcome to join our community
                  of caring individuals committed to supporting one another.
                </p>
                <p className="text-lg leading-8 text-muted-foreground">
                  Membership is open to former students who share our values of care, unity, and
                  brotherhood. We believe that the bonds formed at Sierra Leone Grammar School create
                  a lifelong connection that extends beyond graduation.
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">
                      Open to all Sierra Leone Grammar School alumni
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">
                      Compulsory Contribution of £60 per annum
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <p className="text-muted-foreground">
                      Voluntary Contribution are also welcome
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Apply Section */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Join?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Complete our short membership application form to become part of the Regentonians&apos; Benevolent Fund community.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MembershipFormModal />
              <Button href="/contact" variant="outline" size="lg" className="transition-transform duration-200 hover:scale-105">
                Questions? Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}


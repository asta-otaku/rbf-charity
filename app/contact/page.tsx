import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Hero } from "@/components/hero";
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Hero
        title="Contact Us"
        description="Get in touch with the Regentonians Benevolent Fund"
        imageUrl="/flagbearer2.jpg"
        imageAlt="Contact us"
        imagePosition="center"
      >
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/donate" size="lg">
            Contribute Now
          </Button>
          <Button href="/join" variant="outline" size="lg">
            How to Join
          </Button>
        </div>
      </Hero>

      {/* Contact Information Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="animate-fade-in-up">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:admin@theregentoniansbenevolentfund.org"
                      className="text-primary hover:underline break-all"
                    >
                      admin@theregentoniansbenevolentfund.org
                    </a>
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-up animation-delay-200">
                <CardHeader>
                  <CardTitle className="text-xl">
                    Other Ways to Reach Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We're working on setting up additional contact methods
                    including social media links. For now, please use the
                    contact form or email address.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-muted animate-fade-in-up animation-delay-400 sm:col-span-2 lg:col-span-1">
                <CardContent className="pt-6">
                  <p className="text-sm text-muted-foreground">
                    <strong className="font-semibold text-foreground block mb-2">
                      Response Time:
                    </strong>
                    We aim to respond to all inquiries within 2-3 business
                    days. For urgent matters, please indicate this in your
                    message.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-muted py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-8 animate-fade-in-up">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <MessageSquare className="h-6 w-6 text-primary" />
              </div>
              <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Send Us a Message
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
            </div>
            <Card className="overflow-hidden animate-fade-in-up animation-delay-200">
              <CardContent className="p-0">
                <div className="w-full overflow-hidden">
                  <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSe9Mvd_nXAd6tiQIzznKIoJANUyoZ19_6_anUKOeRzOTTvJ_Q/viewform?embedded=true"
                    width="100%"
                    height="1517"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    className="min-h-[800px] w-full"
                    title="RBF Contact Form"
                  >
                    Loading…
                  </iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* We're Here to Help Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div className="relative h-64 w-full overflow-hidden rounded-lg sm:h-80 animate-fade-in-up">
                <Image
                  src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop"
                  alt="Contact and communication"
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="animate-fade-in-up animation-delay-200">
                <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                  We're Here to Help
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Have questions about joining, need support, or want to learn
                  more? Reach out to us and we'll get back to you as soon as
                  possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

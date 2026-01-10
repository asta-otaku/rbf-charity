import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Hero } from "@/components/hero";
import { Calendar, MapPin, Clock } from "lucide-react";

interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  imageUrl?: string;
}

// TODO: Uncomment when backend is ready
// async function getEvents(): Promise<Event[]> {
//   try {
//     // Import the model directly for server-side fetching
//     const connectDB = (await import("@/backend/db/connection")).default;
//     const Event = (await import("@/backend/models/Event")).default;

//     await connectDB();

//     // Only fetch active events - filter inactive ones at the database level
//     const events = await Event.find({ isActive: true })
//       .sort({ date: 1 }) // Sort by date ascending (upcoming first)
//       .select("-__v -isActive") // Exclude isActive field since we only get active ones
//       .lean();

//     // Convert MongoDB documents to plain objects
//     return events.map((event: any) => ({
//       _id: event._id.toString(),
//       title: event.title,
//       description: event.description,
//       date: event.date.toISOString(),
//       time: event.time,
//       location: event.location,
//       imageUrl: event.imageUrl || undefined,
//     }));
//   } catch (error) {
//     console.error("Error fetching events:", error);
//     return [];
//   }
// }

// Temporary: Dummy data for frontend-only mode
function getEvents(): Event[] {
  const now = new Date();
  const dummyEvents: Event[] = [
    {
      _id: "1",
      title: "Annual Reunion Dinner",
      description:
        "Join us for our annual reunion dinner celebrating our community and shared memories.",
      date: new Date(now.getFullYear(), now.getMonth() + 1, 15).toISOString(),
      time: "18:00",
      location: "London, UK",
      imageUrl:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
    },
    {
      _id: "2",
      title: "Charity Fundraising Gala",
      description:
        "An elegant evening of dining and entertainment to raise funds for our benevolent activities.",
      date: new Date(now.getFullYear(), now.getMonth() + 2, 20).toISOString(),
      time: "19:30",
      location: "Manchester, UK",
      imageUrl:
        "https://images.unsplash.com/photo-1478147427282-58a87a120781?w=800&h=600&fit=crop",
    },
    {
      _id: "3",
      title: "Community Support Workshop",
      description:
        "Learn about our support programs and how we help alumni in times of need.",
      date: new Date(now.getFullYear(), now.getMonth() + 1, 28).toISOString(),
      time: "14:00",
      location: "Birmingham, UK",
      imageUrl:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop",
    },
    {
      _id: "4",
      title: "Heritage Day Celebration",
      description:
        "Celebrate our shared heritage and the rich history of Sierra Leone Grammar School.",
      date: new Date(now.getFullYear(), now.getMonth() + 3, 10).toISOString(),
      time: "12:00",
      location: "Bristol, UK",
      imageUrl:
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop",
    },
    {
      _id: "5",
      title: "Networking Breakfast",
      description:
        "Start your day with meaningful connections and conversations with fellow Regentonians.",
      date: new Date(now.getFullYear(), now.getMonth() + 1, 8).toISOString(),
      time: "08:00",
      location: "Leeds, UK",
      imageUrl:
        "https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=800&h=600&fit=crop",
    },
    {
      _id: "6",
      title: "Scholarship Awards Ceremony",
      description:
        "Honoring outstanding students and celebrating educational achievements in our community.",
      date: new Date(now.getFullYear(), now.getMonth() + 4, 5).toISOString(),
      time: "16:00",
      location: "Liverpool, UK",
      imageUrl:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop",
    },
    {
      _id: "7",
      title: "Family Fun Day",
      description:
        "A day of activities, games, and entertainment for the whole family to enjoy together.",
      date: new Date(now.getFullYear(), now.getMonth() + 2, 12).toISOString(),
      time: "11:00",
      location: "Sheffield, UK",
      imageUrl:
        "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop",
    },
    {
      _id: "8",
      title: "Annual General Meeting",
      description:
        "Join us for our AGM to discuss the year's activities, finances, and future plans.",
      date: new Date(now.getFullYear(), now.getMonth() + 5, 1).toISOString(),
      time: "15:00",
      location: "Edinburgh, UK",
      imageUrl:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=600&fit=crop",
    },
    {
      _id: "9",
      title: "Cultural Heritage Exhibition",
      description:
        "Explore our rich cultural heritage through art, photographs, and historical artifacts.",
      date: new Date(now.getFullYear(), now.getMonth() + 3, 25).toISOString(),
      time: "10:00",
      location: "Glasgow, UK",
      imageUrl:
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    },
    {
      _id: "10",
      title: "Holiday Social Gathering",
      description:
        "End the year with a festive gathering, good food, and great company.",
      date: new Date(now.getFullYear(), 11, 20).toISOString(),
      time: "18:30",
      location: "Cardiff, UK",
      imageUrl:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
    },
    {
      _id: "11",
      title: "Annual Reunion Dinner",
      description:
        "Join us for our annual reunion dinner celebrating our community and shared memories.",
      date: new Date(now.getFullYear(), now.getMonth() + 1, 15).toISOString(),
      time: "18:00",
      location: "London, UK",
      imageUrl:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
    },
    {
      _id: "12",
      title: "Annual Reunion Dinner",
      description:
        "Join us for our annual reunion dinner celebrating our community and shared memories.",
      date: new Date(now.getFullYear(), now.getMonth() + 1, 15).toISOString(),
      time: "18:00",
      location: "London, UK",
      imageUrl:
        "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
    },
  ];

  // Sort by date ascending (upcoming first)
  return dummyEvents.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function EventsPage() {
  const events = getEvents();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <Hero
        title="Events"
        description="Stay connected with our community through events and gatherings"
        imageUrl="https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=1920&h=1080&fit=crop"
        imageAlt="Community events"
      />

      {/* Events Listing */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {events.length > 0 ? (
            <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {events.map((event, index) => {
                const delayClass =
                  index % 3 === 0
                    ? "animation-delay-200"
                    : index % 3 === 1
                      ? "animation-delay-400"
                      : "animation-delay-600";
                return (
                  <Card
                    key={event._id}
                    className={`group border-2 overflow-hidden animate-fade-in-up ${delayClass} transition-all duration-300 hover:shadow-lg flex flex-col`}
                  >
                    {event.imageUrl && (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={event.imageUrl}
                          alt={event.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <CardHeader className="flex-1">
                      <CardTitle className="text-xl sm:text-2xl line-clamp-2">
                        {event.title}
                      </CardTitle>
                      <CardDescription className="text-sm line-clamp-2 mt-2">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 text-primary shrink-0" />
                        <span className="font-medium truncate">
                          {formatDate(event.date)}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 text-primary shrink-0" />
                        <span className="truncate">{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4 text-primary shrink-0" />
                        <span className="truncate">{event.location}</span>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          ) : (
            <div className="mx-auto max-w-2xl">
              <Card className="bg-muted">
                <CardContent className="pt-6 text-center">
                  <p className="text-muted-foreground">
                    No events scheduled at the moment. Check back soon for
                    upcoming events!
                  </p>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Upcoming Events Note */}
          {events.length > 0 && (
            <div className="mx-auto mt-12 max-w-2xl text-center">
              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground">
                    More events will be announced throughout the year. Check
                    back regularly or contact us to be added to our mailing list
                    for event updates.
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

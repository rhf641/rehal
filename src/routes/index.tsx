import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "رِحال | اكتشف معالم العلا" },
      { name: "description", content: "رِحال: استكشف معالم العلا على الخريطة وتحدَّ نفسك بالألغاز." },
      { property: "og:title", content: "رِحال | اكتشف معالم العلا" },
      { property: "og:description", content: "استكشف معالم العلا على الخريطة وتحدَّ نفسك بالألغاز." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <iframe src="/rihal.html" title="رِحال" className="fixed inset-0 h-screen w-screen border-0" />;
}

import type { Metadata } from "next";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Card } from "../../components/ui/card";
import { ColorSwatch } from "../../components/ui/color-swatch";
import { SubscribeBar } from "../../components/patterns/subscribe-bar";

export const metadata: Metadata = {
  title: "Brand Components | Higher Level Accounting",
  description:
    "Higher Level Accounting brand components and design elements showcase.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ComponentsShowcase() {
  return (
    <div className="min-h-screen w-full bg-bg text-text">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        {/* header_intro */}
        <header className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Higher Level Accounting Brand Components
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">
            Brand colors, typography, and UI components for Higher Level
            Accounting. Built for consistency across all touchpoints.
          </p>
        </header>

        {/* color_palette_grid */}
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-6">Color palette</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            <ColorSwatch name="brand-deep" tokenClass="bg-brand-deep" />
            <ColorSwatch name="surface" tokenClass="bg-surface" />
            <ColorSwatch
              name="accent (mint)"
              tokenClass="bg-accent"
              textClass="text-white/90"
            />
            <ColorSwatch
              name="cream"
              tokenClass="bg-cream"
              textClass="text-black/80"
            />
            <ColorSwatch
              name="gray-200"
              tokenClass="bg-gray-200"
              textClass="text-black/70"
            />
            <ColorSwatch
              name="white"
              tokenClass="bg-white"
              textClass="text-black/70"
            />
          </div>
        </section>

        {/* typography_showcase */}
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-6">Typography</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-white/60 mb-1">Display</p>
              <p className="font-sans text-4xl sm:text-5xl">
                Elegant, modern display
              </p>
            </div>
            <div>
              <p className="text-sm text-white/60 mb-1">Body</p>
              <p className="font-sans text-base sm:text-lg text-white/85">
                Clean, readable body copy that pairs well with the display
                style.
              </p>
            </div>
          </div>
        </section>

        {/* buttons_examples */}
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-6">Buttons</h2>
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="solid" size="sm">
                Solid sm
              </Button>
              <Button variant="solid" size="md">
                Solid md
              </Button>
              <Button variant="solid" size="lg">
                Solid lg
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="soft" size="sm">
                Soft sm
              </Button>
              <Button variant="soft" size="md">
                Soft md
              </Button>
              <Button variant="soft" size="lg">
                Soft lg
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="ghost" size="sm">
                Ghost sm
              </Button>
              <Button variant="ghost" size="md">
                Ghost md
              </Button>
              <Button variant="ghost" size="lg">
                Ghost lg
              </Button>
            </div>
          </div>
        </section>

        {/* inputs_examples */}
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-6">Inputs</h2>
          <div className="space-y-4 max-w-2xl">
            <Input placeholder="Your email" />
            <Input
              inputSize="lg"
              placeholder="Email address"
              leftSlot={<MailIcon className="size-5 text-white/70" />}
            />
          </div>
        </section>

        {/* badges_examples */}
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-6">Badges</h2>
          <div className="flex flex-wrap gap-3">
            <Badge>New</Badge>
            <Badge>Premium</Badge>
            <Badge>Beta</Badge>
          </div>
        </section>

        {/* cards_examples */}
        <section className="mb-16">
          <h2 className="text-xl font-medium mb-6">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <h3 className="text-xl font-semibold">Card title</h3>
              <p className="mt-2 text-white/80">
                Rounded corners, subtle borders, and a soft elevated shadow.
              </p>
              <div className="mt-4">
                <Button variant="soft">Action</Button>
              </div>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold">Another card</h3>
              <p className="mt-2 text-white/80">
                Use cards to group related content in a breathable way.
              </p>
            </Card>
          </div>
        </section>

        {/* pattern_subscribe_bar_highlight */}
        <section>
          <h2 className="text-xl font-medium mb-6">Pattern: Subscribe Bar</h2>
          <div className="max-w-4xl">
            <SubscribeBar />
          </div>
        </section>
      </div>
    </div>
  );
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 7.75A2.75 2.75 0 0 1 5.75 5h12.5A2.75 2.75 0 0 1 21 7.75v8.5A2.75 2.75 0 0 1 18.25 19H5.75A2.75 2.75 0 0 1 3 16.25v-8.5Z"
        stroke="currentColor"
        strokeWidth={1.5}
      />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth={1.5} />
    </svg>
  );
}

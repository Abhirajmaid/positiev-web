import Button from "@/components/Button";
import Container from "@/components/Container";
import { Icon } from "@iconify/react";

export default function Home() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center overflow-hidden">
      {/* Background image layer */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-cover -z-20"
        style={{
          backgroundImage: "url('/positiev_bg_2.png')",
        }}
      />

      {/* Top nav / logo */}
      <header className="absolute top-6 left-0 right-0 pointer-events-none">
        <Container className="pointer-events-auto">
          <div className="flex items-center justify-between">
            <div className="text-center">
              <img
                src="/logo_2.png"
                alt="Positiev logo"
                className="h-10 md:h-12 object-contain"
              />
            </div>
            <div className="text-sm text-darkGray">
              <span>14 days left</span>
            </div>
          </div>
        </Container>
      </header>

      {/* Main content */}
      <main className="z-10 w-full">
        <Container>
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="text-center text-primary">
              <h2 className="text-5xl md:text-7xl font-bold tracking-wide uppercase leading-tight">
                Coming Soon
              </h2>
              <p className="mt-4 text-lg md:text-xl text-black max-w-2xl mx-auto">
                We are working hard to get this up and running
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <Button variant="primary" className="shadow-lg">
                  Notify Me
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </main>

      {/* Footer social links */}
      <footer className=" left-0 right-0">
        <Container>
          <div className="flex items-center justify-center space-x-6 text-sm text-darkGray">
            <a
              href="https://www.linkedin.com/company/positiev-mobility"
              aria-label="LinkedIn"
              className="text-black hover:text-primary transition-colors"
            >
              <Icon icon="mdi:linkedin" width="32" height="32" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-black hover:text-primary transition-colors"
            >
              <Icon icon="mdi:facebook" width="32" height="32" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-black hover:text-primary transition-colors"
            >
              <Icon icon="mdi:instagram" width="32" height="32" />
            </a>
          </div>
        </Container>
      </footer>
    </div>
  );
}

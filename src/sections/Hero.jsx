import { useMemo } from 'react';
import { Button } from "@/components/Button";
import { ArrowRight, Cat, Send, ChevronDown } from 'lucide-react';
import { MagicButton } from "@/assets/MagicButton.jsx";

const skills = [
  "React",
  "Javascript",
  "ES 6+",
  "Tailwind CSS",
  "PHP",
  "Figma",
  "AI assist",
  "Love",
  "Git",
  "Github Actions"
]

const generateRandomDots = () =>
  [...Array(30)].map(() => ({
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
  }));

export const Hero = () => {
  const dots = useMemo(() => generateRandomDots(), []);
  return <section className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src="/hero-bg.jpg"
        alt="Hero background"
        className="w-full h-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
    </div>

    {/* Green dots */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full opacity-60"
          style={{
            backgroundColor: "#20B25D",
            left: `${dot.left}%`,
            top: `${dot.top}%`,
            animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
            animationDelay: `${dot.delay}s`,
          }}
        />
      ))}
    </div>

    {/* Content */}
    <div className="container mx-auto px-6 pt-32 pb-20 relative z-9">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text content */}
        <div className="space-y-8">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Designer + Frontend Developer
            </span>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
              Lorem <span className="text-primary glow-text"> ipsum </span>
              <br />
              <span className="font-serif italic font-normal text-white">
                Lorem.
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, id nulla?
              Cupiditate dolores officia ducimus, et voluptatem perspiciatis quos dicta fugiat
              incidunt amet assumenda nisi atque doloremque asperiores quisquam recusandae!
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
            <Button size="lg">
              Contact Me <ArrowRight />
            </Button>
            <MagicButton />
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
            <span className="text-sm text-muted-foreground">Follow me: </span>
            {[
              { icon: Cat, href: "#" },
              { icon: Send, href: "#" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                {<social.icon className="w-5 h-5" />}
              </a>
            ))}
          </div>
        </div>
        {/* Right column - Profile image*/}
        <div className='relative animate-fade-in animation-delay-300'>
          {/* Profile image */}
          <div className='relative max-w-md mx-auto'>
            <div
              className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
            />
            <div className='relative glass rounded-3xl p-2 glow-border'>
              <img
                src='/profile-picture.jpg'
                alt='Tsiresy RAZAKARIASA'
                className='w-full aspext=[4/5] object-cover rounded-2xl'
              />
              {/* Floating badge */}
              <div className='absolute -bottom-4 -right-4 glass rounded-xl px-4 px-3 animate-float'>
                <div className='flex items-center gap-3'>
                  <div className='w-3 h-3 bg-green-500 rounded-full animate-pulse' />
                  <span className='text-sm font-medium'>Code with Love</span>
                </div>
              </div>
              {/* Stats badge */}
              <div className='absolute -top-10 -left-15 rounded-xl px-4 py-3 animate-float animate-delay-500'>
                <div className='text-2xl font-bold text-primary'>2+</div>
                <div className='text-xs text-muted-foreground'>Years Xp</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills sections */}
      <div className='mt-20 animate-fade-in animation-delay-600'>
        <p className='text-sm text-muted-foreground mb-6 text-center'>
          Technologies I work with:
        </p>
        <div className='relative overflow-hidden'>
          <div className='flex animate-marquee'>
            {[...skills, ...skills].map((skill, idx) =>
            (
              <div key={idx} className='flex-shrink-0 px-8 py-4'>
                <span className='text-xl font-semibold text-muted-foreground/50 
                hover:text-muted-foreground transition-colors cursor-crosshair'
                >
                  {skill}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>

    <div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
    >
      <a
        href="#about"
        className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
      >
        <span className="text-xs uppercase tracking-wider">Scroll</span>
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </a>
    </div>
  </section>
}


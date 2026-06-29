import { Heart } from "lucide-react";

// const highlights = [
//   {
//     icon: Code2,
//     title: "Code with Love",
//     description: "I write clean, efficient, and maintainable code that is easy to read and understand."
//   },
//   {
//     icon: Time,
//     title: "Time Management",
//     description: "I prioritize tasks effectively, ensuring that projects are completed on time and within budget."
//   },
//   {
//     icon: Users,
//     title: "Collaboration",
//     description: "I work well with others, contributing to a positive and productive team environment."
//   },
// ]




export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight animation-fade-in animation-delay-100 text-secondary-foreground">
            <Heart className="inline-block w-14 h-14 md:w-16 md:h-16 px-4 px-4"></Heart>
            Coding with Love, 
            <span className="fonr-serif italic font-normal text-white"> and transform your idea.</span>
          </h2>
        </div>
      </div>
    </section>
  );
};


import { Heart, Code2, Clock, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Code with Love",
    description: "I write clean, efficient, and maintainable code that is easy to read and understand."
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "I prioritize tasks effectively, ensuring that projects are completed on time and within budget."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "I work well with others, contributing to a positive and productive team environment."
  },
]




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

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animation-fade-in animation-delay-100 text-secondary-foreground">
              <Heart className="inline-block w-14 h-14 md:w-16 md:h-16 px-4 px-4"></Heart>
              Coding with Love,
              <span className="font-serif italic font-normal text-white"> and transform your idea.</span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sint commodi, aliquam sunt ducimus qui! Quod optio quas tenetur consequuntur alias inventore unde natus iste similique, tempora rem soluta aliquam.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sint commodi, aliquam sunt ducimus qui! Quod optio quas tenetur consequuntur alias inventore unde natus iste similique, tempora rem soluta aliquam.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore sint commodi, aliquam sunt ducimus qui! Quod optio quas tenetur consequuntur alias inventore unde natus iste similique, tempora rem soluta aliquam.</p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create beautiful and functional web experiences that leave a lasting impression.
                I am passionate about coding with love, and I strive to transform ideas into reality through clean and efficient code."
              </p>
            </div>

          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
            {highlights.map((item, idx) => (
              <div key={idx} className="glass p-6 rounded-2xl animate-fade-in hover:bg-secondary/10 transition-colors duration-200"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors duration-200">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


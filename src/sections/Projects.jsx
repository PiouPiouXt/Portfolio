import { ArrowUpRight,Cat } from "lucide-react";

const projects = [
  {
    title: "Electricity Bill Calculator",
    description: "A simple electricity bill calculator that calculates the bill based on the units consumed.",
    image: "/projects/fact_electricity.PNG",
    tags: ["React", "Css", "JavaScript"],
    link: "#",
    github: "#"
  },
  {
    title: "Simple e-commerce",
    description: "A simple e-commerce website built within my React tutorial.",
    image: "/projects/e_commerce.PNG",
    tags: ["React", "Css", "JavaScript"],
    link: "#",
    github: "#"
  }

];

export const Projects = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* BG glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Project that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent coding learning, front-end web from tutorial
            and inspiration.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}>
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-card 
                via-card/50 to-transparent 
                opacity-60"
                />

                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 duration-300">
                  <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <ArrowUpRight />
                  </a>
                  <a href="#">
                    <Cat />
                  </a>
                </div>


              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


import { Quote } from 'lucide-react';


const testimonials =
[
  {
    quote: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni inventore ratione, minima laboriosam",
    author: "ta mere",
    role: "hacker",
    avatar:"/public/profile-picture.jpg"
  },
] 

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-32 relative overflow-hidden"
    > 
      <div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className="text-center max-w-3xl 
        mx-auto mb-16"
        >
          <span
            className="text-secondary-foreground 
          text-sm font-medium tracking-wider 
          uppercase animate-fade-in"
          >
            What is Their Opinion?
          </span>
          <h2
            className="text-4xl md:text-5xl 
          font-bold mt-4 mb-6 animate-fade-in 
          animation-delay-100 text-secondary-foreground"
          >
            Positive words from{" "}
            <span
              className="font-serif italic 
            font-normal text-white"
            >
              people i worked with.
            </span>
          </h2>
        </div>

        {/* Testimonial Carousel */}
        <div className='max-w-4xl mx-auto'>
          <div className='relative'>
            {/* Main Testimonial */}
            <div className='glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animate-delay-200'> 
              <div className='absolute -top-4 left-9 w-12 h-12 rounded-full bg-primary flex items-center justify-center'>
                <Quote className='2-6 h-6 text-primary-foreground'/>
              </div>

              <blockquote className='text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4'>
                "{testimonials[0].quote}"
              </blockquote>

              <div className='flex items-center gap-4'>
                <img
                  src={testimonials[0].avatar} 
                  alt={testimonials[0].author}
                  className='w-14 h-14 rounded-full object-cover ring-2 ring-primary/20'
                />
                <div className='flex items-center gap-4'>
                  <div className='font-semibold'>
                    {testimonials[0].author}
                  </div>
                  <div className='text-sm text-muted-foreground'>
                    {testimonials[0].role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}


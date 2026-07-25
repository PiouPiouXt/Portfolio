import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { MagicButton } from "@/assets/MagicButton.jsx";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "tsiresyrazak26@gmail.com",
    href: "mailto:tsiresyrazak26@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+261389899778",
    href: "tel:+261389899779"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Antananarivo",
    href: "#"
  },

]


export const Contact = () => {
  // const [formData, setFormData] = useState ({
  //   name: "",
  //   email: "",
  //   message: ""
  // })

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // }
  return (
    <section
      id="testimonials"
      className="py-32 relative overflow-hidden">
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl ' />
        <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-6 relative z-9'>
        {/* Section header */}
        <div className='text-center max-w-3xl mx-auto mb-16'>
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Let's make{" "}
            <span className="font-serif italic font-normal text-white">
              your ideas real.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
          <div className='glass p-8 rounded-3xl border border-primary/30 animate-fade-in delay-300'>
            <form className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium mb-2'>Name</label>
                <input id='name' type='text'
                  required
                  placeholder='Your name...'
                  // value={formData.name}
                  // onChange={(e) => 
                  //   setFormData({ ...formData, name: e.target.value})
                  // }
                  className='w-full px-4 py-3 bg-surgace rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium mb-2'>Email</label>
                <input
                  required
                  placeholder='Your@gmail.com...'
                  // value={formData.email}
                  // onChange={(e) => 
                  //   setFormData({ ...formData, email: e.target.value})
                  // }
                  className='w-full px-4 py-3 bg-surgace rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-medium mb-2'>Message</label>
                <textarea
                  rows={5}
                  required
                  // value={formData.message}
                  // onChange={(e) => 
                  //   setFormData({ ...formData, message: e.target.value})
                  // }
                  placeholder='Your Message...'
                  className='w-full px-4 py-3 bg-surgace rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none'
                />
              </div>

              <MagicButton className="w-full flex justify-center gap-3" type='submit' size="lg">
                Send Message
                <Send />
              </MagicButton>

            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import logo from './Image May 12, 2026, 01_43_33 PM.png'
export default function UUSLimitedWebsite() {
  return (
   <div>
  <div className="inline-block px-4 py-2 rounded-full border border-green-500 text-green-400 text-sm mb-6">
    Smart Infrastructure • ICT Consulting • Digital Transformation
  </div>

  <div className="mb-8">
    <img
      src={logo}
      alt="UUS Limited Logo"
      className="w-72 md:w-[420px] drop-shadow-2xl"
    />
  </div>

  <p className="text-xl text-zinc-300 leading-relaxed mb-8">
    Building intelligent digital solutions for governments, cities,
    businesses, and communities through advanced ICT, GIS, IoT,
    and smart infrastructure systems.
  </p>

  <div className="flex flex-wrap gap-4">
    <a
      href="#services"
      className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-2xl font-semibold"
    >
      Explore Services
    </a>

    <a
      href="#contact"
      className="border border-zinc-600 hover:border-green-500 hover:text-green-400 transition px-6 py-3 rounded-2xl font-semibold"
    >
      Contact Us
    </a>
  </div>
</div>

          <div>
            <div className="bg-zinc-900/60 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
              <div className="space-y-6">
                <div>
                  <h3 className="text-green-400 text-lg font-semibold mb-2">Official Domain</h3>
                  <p className="text-2xl font-bold">www.uusltd-rw.com</p>
                </div>

                <div>
                  <h3 className="text-green-400 text-lg font-semibold mb-2">Core Expertise</h3>
                  <ul className="space-y-2 text-zinc-300">
                    <li>• Smart City Consulting</li>
                    <li>• GIS & Street Addressing Systems</li>
                    <li>• IoT Solutions & Integration</li>
                    <li>• Digital Transformation Projects</li>
                    <li>• ICT Infrastructure & Advisory</li>
                  </ul>
                </div>
              </div>
            </div>
         </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">About UUS Limited</h2>
            <p className="text-zinc-300 leading-relaxed mb-6 text-lg">
              UUS Limited is a Rwanda-focused technology and consulting company dedicated to delivering innovative ICT and smart infrastructure solutions. We help governments, institutions, and businesses modernize operations through digital transformation and intelligent systems.
            </p>

            <p className="text-zinc-300 leading-relaxed text-lg">
              Our mission is to create scalable and sustainable technology solutions that improve urban management, service delivery, operational efficiency, and data-driven decision-making.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-4xl font-bold text-green-400 mb-2">20+</h3>
              <p className="text-zinc-300">Years ICT Experience</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-4xl font-bold text-green-400 mb-2">IoT</h3>
              <p className="text-zinc-300">Smart Systems Expertise</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-4xl font-bold text-green-400 mb-2">GIS</h3>
              <p className="text-zinc-300">Spatial Intelligence Solutions</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-4xl font-bold text-green-400 mb-2">Smart</h3>
              <p className="text-zinc-300">City Infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Services</h2>
            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              We provide strategic consulting and advanced digital solutions for public and private sector organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Smart City Solutions',
                description: 'Planning and implementation of smart urban infrastructure and intelligent city systems.'
              },
              {
                title: 'GIS & Mapping',
                description: 'Advanced geospatial systems, street addressing, mapping, and spatial data management.'
              },
              {
                title: 'IoT Integration',
                description: 'Internet of Things solutions for monitoring, automation, and intelligent operations.'
              },
              {
                title: 'ICT Consulting',
                description: 'Technology advisory, digital strategy, and ICT project management services.'
              },
              {
                title: 'Digital Transformation',
                description: 'Helping organizations modernize systems, workflows, and service delivery.'
              },
              {
                title: 'Data & Infrastructure',
                description: 'Reliable data systems, infrastructure planning, and operational optimization.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-green-500 transition"
              >
                <h3 className="text-2xl font-semibold mb-4 text-green-400">
                  {service.title}
                </h3>
                <p className="text-zinc-300 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Featured Expertise</h2>
            <p className="text-zinc-400 text-lg">
              Delivering impactful technology-driven solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-black border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-green-400 mb-4">
                Kigali Street Addressing Project
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Large-scale smart city addressing initiative designed to improve urban management, navigation, emergency response, and service delivery using GIS and structured location systems.
              </p>
            </div>

            <div className="bg-black border border-zinc-800 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-green-400 mb-4">
                IoT & Smart Infrastructure
              </h3>
              <p className="text-zinc-300 leading-relaxed">
                Innovative IoT-based systems for smart monitoring, transportation, operational intelligence, and infrastructure modernization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 bg-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6">Contact UUS Limited</h2>

          <p className="text-zinc-400 text-lg mb-12">
            Ready to discuss your smart infrastructure, ICT, or digital transformation project?
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-green-400 font-semibold text-xl mb-3">Website</h3>
              <p className="text-zinc-300">www.uusltd-rw.com</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-green-400 font-semibold text-xl mb-3">Email</h3>
              <p className="text-zinc-300">info@uusltd-rw.com</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6">
              <h3 className="text-green-400 font-semibold text-xl mb-3">Location</h3>
              <p className="text-zinc-300">Kigali, Rwanda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-6 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <h3 className="text-xl font-bold">UUS Limited</h3>
            <p className="text-zinc-500 text-sm">
              Smart Infrastructure & ICT Solutions
            </p>
          </div>

          <p className="text-zinc-500 text-sm text-center md:text-right">
            © 2026 UUS Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

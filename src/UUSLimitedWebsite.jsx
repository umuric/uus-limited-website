import logo from './logo.png'

export default function UUSLimitedWebsite() {
  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <header className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <img src={logo} alt="UUS Limited" className="w-36 md:w-[210px] drop-shadow-2xl" />
          <h1 className="text-5xl font-bold text-green-500 mb-4">
            Smart Infrastructure • ICT Consulting • Digital Transformation
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Building intelligent digital solutions for governments, cities,
            businesses, and communities through advanced ICT, GIS, IoT,
            and smart infrastructure systems.
          </p>
          <div className="flex gap-4">
  <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })} className="bg-green-500 text-black px-8 py-3 rounded font-bold hover:bg-green-600">
    Explore Services
  </button>
          <div className="flex gap-4">
            <button className="bg-green-500 text-black px-8 py-3 rounded font-bold hover:bg-green-600">
              Explore Services
            </button>
            <button className="border-2 border-green-500 text-green-500 px-8 py-3 rounded font-bold hover:bg-green-500 hover:text-black">
              Contact Us
              </button>
          </div>
        </div>
      </header>

      {/* Quick Info */}
      <section className="py-12 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-green-500 mb-2">Official Domain</h3>
              <p className="text-gray-300">www.uusltd-rw.com</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-500 mb-4">Core Expertise</h3>
              <ul className="text-gray-300 space-y-2">
                <li>• Smart City Consulting</li>
                <li>• GIS & Street Addressing Systems</li>
                <li>• IoT Solutions & Integration</li>
                <li>• Digital Transformation Projects</li>
                <li>• ICT Infrastructure & Advisory</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-500 mb-8">About UUS Limited</h2>
          <p className="text-lg text-gray-300 mb-6">
            UUS Limited is a Rwanda-focused technology and consulting company dedicated to delivering innovative ICT and smart infrastructure solutions. We help governments, institutions, and businesses modernize operations through digital transformation and intelligent systems.
          </p>
          <p className="text-lg text-gray-300 mb-12">
            Our mission is to create scalable and sustainable technology solutions that improve urban management, service delivery, operational efficiency, and data-driven decision-making.
          </p>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <p className="text-3xl font-bold text-green-500 mb-2">20+</p>
              <p className="text-gray-300">Years ICT Experience</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <p className="text-3xl font-bold text-green-500 mb-2">IoT</p>
              <p className="text-gray-300">Smart Systems Expertise</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <p className="text-3xl font-bold text-green-500 mb-2">GIS</p>
              <p className="text-gray-300">Spatial Intelligence Solutions</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg border border-green-500">
              <p className="text-3xl font-bold text-green-500 mb-2">Smart</p>
              <p className="text-gray-300">City Infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-gray-900" id="services">>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-500 mb-4">Our Services</h2>
          <p className="text-lg text-gray-300 mb-12">
            We provide strategic consulting and advanced digital solutions for public and private sector organizations.
          </p>

          <div className="grid grid-cols-3 gap-8">
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
              <div key={index} className="bg-black p-6 rounded-lg border border-green-500 hover:border-green-400">
                <h3 className="text-xl font-bold text-green-500 mb-3">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-500 mb-4">Featured Expertise</h2>
          <p className="text-lg text-gray-300 mb-12">
            Delivering impactful technology-driven solutions.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg border border-green-500">
              <h3 className="text-2xl font-bold text-green-500 mb-4">Kigali Street Addressing Project</h3>
              <p className="text-gray-300">
                Large-scale smart city addressing initiative designed to improve urban management, navigation, emergency response, and service delivery using GIS and structured location systems.
              </p>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border border-green-500">
              <h3 className="text-2xl font-bold text-green-500 mb-4">IoT & Smart Infrastructure</h3>
              <p className="text-gray-300">
                Innovative IoT-based systems for smart monitoring, transportation, operational intelligence, and infrastructure modernization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-green-500 mb-8">Contact UUS Limited</h2>
          <p className="text-lg text-gray-300 mb-8">
            Ready to discuss your smart infrastructure, ICT, or digital transformation project?
          </p>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-green-500 mb-2">Website</h3>
              <p className="text-gray-300">www.uusltd-rw.com</p>
            </div>
            <div>
              <h3 className="font-bold text-green-500 mb-2">Email</h3>
              <p className="text-gray-300">info@uusltd-rw.com</p>
            </div>
            <div>
              <h3 className="font-bold text-green-500 mb-2">Location</h3>
              <p className="text-gray-300">Kigali, Rwanda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-green-500 mb-2">UUS Limited</h3>
            <p className="text-gray-400">Smart Infrastructure & ICT Solutions</p>
          </div>
          <p className="text-gray-400">© 2026 UUS Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

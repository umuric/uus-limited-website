import logo from './logo.png'
export default function UUSLimitedWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <img src={logo} alt="UUS Limited" className="h-16 mb-8" />
          <h1 className="text-5xl font-bold mb-4">
            Smart Infrastructure • ICT Consulting • Digital Transformation
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Building intelligent digital solutions for governments, cities,
            businesses, and communities through advanced ICT, GIS, IoT,
            and smart infrastructure systems.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100">
              Explore Services
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-600">
              Contact Us
            </button>
          </div>
        </div>
      </header>

      {/* Quick Info */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Official Domain</h3>
              <p className="text-blue-600">www.uusltd-rw.com</p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-4">Core Expertise</h3>
              <ul className="text-gray-700 space-y-2">
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
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">About UUS Limited</h2>
          <p className="text-lg text-gray-700 mb-6">
            UUS Limited is a Rwanda-focused technology and consulting company dedicated to delivering innovative ICT and smart infrastructure solutions. We help governments, institutions, and businesses modernize operations through digital transformation and intelligent systems.
          </p>
          <p className="text-lg text-gray-700 mb-12">
            Our mission is to create scalable and sustainable technology solutions that improve urban management, service delivery, operational efficiency, and data-driven decision-making.
          </p>

          <div className="grid grid-cols-4 gap-4">
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-3xl font-bold text-blue-600 mb-2">20+</p>
              <p className="text-gray-700">Years ICT Experience</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-3xl font-bold text-blue-600 mb-2">IoT</p>
              <p className="text-gray-700">Smart Systems Expertise</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-3xl font-bold text-blue-600 mb-2">GIS</p>
              <p className="text-gray-700">Spatial Intelligence Solutions</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <p className="text-3xl font-bold text-blue-600 mb-2">Smart</p>
              <p className="text-gray-700">City Infrastructure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Services</h2>
          <p className="text-lg text-gray-700 mb-12">
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
              <div key={index} className="bg-white p-6 rounded-lg shadow hover:shadow-lg">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-700">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">Featured Expertise</h2>
          <p className="text-lg text-gray-700 mb-12">
            Delivering impactful technology-driven solutions.
          </p>

          <div className="grid grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Kigali Street Addressing Project</h3>
              <p className="text-gray-700">
                Large-scale smart city addressing initiative designed to improve urban management, navigation, emergency response, and service delivery using GIS and structured location systems.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">IoT & Smart Infrastructure</h3>
              <p className="text-gray-700">
                Innovative IoT-based systems for smart monitoring, transportation, operational intelligence, and infrastructure modernization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact UUS Limited</h2>
          <p className="text-lg text-gray-700 mb-8">
            Ready to discuss your smart infrastructure, ICT, or digital transformation project?
          </p>

          <div className="grid grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Website</h3>
              <p className="text-blue-600">www.uusltd-rw.com</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-blue-600">info@uusltd-rw.com</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-700">Kigali, Rwanda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-2">UUS Limited</h3>
            <p className="text-gray-400">Smart Infrastructure & ICT Solutions</p>
          </div>
          <p className="text-gray-400">© 2026 UUS Limited. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

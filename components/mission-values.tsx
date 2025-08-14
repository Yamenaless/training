import { Heart, Target, Users, Award, Lightbulb, Shield } from "lucide-react"

export function MissionValues() {
  const values = [
    {
      icon: Heart,
      title: "Excellence",
      description: "We strive for excellence in every training program, ensuring the highest quality standards and measurable outcomes."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "Continuously evolving our methodologies and approaches to stay ahead of industry trends and best practices."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships with clients and fostering collaborative learning environments that drive success."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "Maintaining the highest ethical standards and building trust through transparent, honest relationships."
    },
    {
      icon: Lightbulb,
      title: "Growth",
      description: "Empowering individuals and organizations to achieve continuous improvement and sustainable development."
    },
    {
      icon: Shield,
      title: "Quality",
      description: "Delivering consistent, high-quality training experiences that exceed expectations and deliver lasting value."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#002677] mb-4">Our Mission & Values</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Our mission is to empower professionals and organizations worldwide with the knowledge, skills, 
            and confidence they need to excel in today's dynamic business environment. We believe in the 
            transformative power of education and its ability to create lasting positive change.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-[#002677] rounded-lg p-8 md:p-12 mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">Our Mission</h3>
          <p className="text-white/90 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed">
            "To deliver world-class professional training solutions that inspire growth, drive innovation, 
            and create sustainable value for individuals and organizations across the globe. We are committed 
            to excellence, continuous improvement, and making a meaningful difference in the professional 
            development landscape."
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#002677]/10 rounded-full">
                  <value.icon className="h-8 w-8 text-[#002677]" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#002677] mb-3">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-[#002677] mb-6">Our Vision</h3>
          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed">
            To be the global leader in professional development training, recognized for our innovative 
            approaches, exceptional quality, and commitment to creating lasting impact. We envision a world 
            where every professional has access to the knowledge and skills they need to achieve their full potential.
          </p>
        </div>
      </div>
    </section>
  )
}

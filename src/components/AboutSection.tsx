import { Award, BookOpen, Globe, Target } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm text-gray-500 mb-2">Who We Are</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About <span className="text-orange-500">IJDST</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              The International Journal for Development of Science and Technology (IJDST) is a 
              peer-reviewed multidisciplinary journal. Qualified reviewers from around the world 
              will peer-review every paper. The information should be delivered succinctly and clearly.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Accepted articles will be freely accessible online and indexed by Google Scholar globally. 
              Researchers and practitioners from the academic, business, and governmental sectors are 
              the target audience for this journal.
            </p>

            <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-800 font-medium cursor-pointer hover:bg-orange-200 transition-colors">
              <BookOpen className="w-4 h-4 mr-2" />
              Read More
            </div>
          </div>

          {/* Mission Box */}
          <div className="bg-orange-50 p-8 rounded-lg border-l-4 border-orange-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              Our Mission is to advance research by working to develop and maintain competence, 
              ethics and integrity and the highest professional standards in the specialty for 
              the benefit of the public. The Faculty seeks, through its activities, to bring 
              about an improvement in research of the public.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
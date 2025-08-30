import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Globe, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 rounded-full text-sm font-medium mb-8 text-blue-800">
            <Award className="w-4 h-4 mr-2" />
            Peer-Reviewed • Open Access • Multidisciplinary
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-800">
            International Journal for
            <span className="block text-blue-800">
              Development of Science
            </span>
            <span className="block text-blue-800">& Technology</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            The International Journal for Development of Science and Technology (IJDST) is a peer-reviewed multidisciplinary journal. 
            Qualified reviewers from around the world will peer-review every paper. Accepted articles will be freely accessible online 
            and indexed by Google Scholar globally.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-blue-800 hover:bg-blue-900 text-white font-semibold px-8 py-4 text-lg"
            >
              Submit Your Research
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-blue-800 text-blue-800 hover:bg-blue-50 font-semibold px-8 py-4 text-lg"
            >
              Browse Current Issue
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
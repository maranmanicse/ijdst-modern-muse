import { Button } from '@/components/ui/button';
import { ArrowRight, Award, Globe, Users } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section py-20 lg:py-32 text-white">
      {/* Animated Background Pattern */}
      <div className="hero-pattern"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8 border border-white/20">
            <Award className="w-4 h-4 mr-2" />
            Peer-Reviewed • Open Access • Multidisciplinary
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            International Journal for
            <span className="block bg-gradient-to-r from-secondary to-yellow-300 bg-clip-text text-transparent">
              Development of Science
            </span>
            <span className="block">& Technology</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Advancing research by fostering innovation, ethics, and integrity in science and technology 
            for the benefit of the global academic community.
          </p>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-secondary mb-2">500+</div>
              <div className="text-white/80">Published Articles</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-secondary mb-2">50+</div>
              <div className="text-white/80">Countries Reached</div>
            </div>
            <div className="text-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-3xl font-bold text-secondary mb-2">100+</div>
              <div className="text-white/80">Expert Reviewers</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <Button 
              size="lg" 
              className="academic-button bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-8 py-4 text-lg"
            >
              Submit Your Research
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="academic-button border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
            >
              Browse Current Issue
            </Button>
          </div>

          {/* Research Areas */}
          <div className="mt-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <p className="text-white/70 mb-6">Research Areas We Cover:</p>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                'Computer Science',
                'Engineering',
                'Medical Science',
                'Management',
                'Applied Sciences',
                'Technology Innovation',
                'Research Methodology',
                'Data Analytics'
              ].map((area, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-20 fill-background">
          <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
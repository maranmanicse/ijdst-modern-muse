import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Globe, 
  Award, 
  Users, 
  BookOpen, 
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach",
      description: "Researchers from 50+ countries trust IJDST for publishing their groundbreaking work."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Peer Reviewed",
      description: "Rigorous peer-review process ensuring the highest quality of published research."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Open Access",
      description: "Free access to all published articles, promoting global knowledge sharing."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Publication",
      description: "Efficient review process with quick turnaround times for accepted papers."
    }
  ];

  const disciplines = [
    "Computer Science & IT",
    "Engineering Sciences", 
    "Medical & Health Sciences",
    "Management Studies",
    "Applied Mathematics",
    "Data Science & Analytics",
    "Environmental Science",
    "Innovation & Technology"
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            About IJDST
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Advancing Global Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            The International Journal for Development of Science and Technology (IJDST) is a 
            peer-reviewed multidisciplinary journal committed to advancing research and innovation 
            across diverse scientific domains.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          
          {/* Left Content */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-semibold text-primary mb-6">Our Mission</h3>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              To advance research by working to develop and maintain competence, ethics and integrity 
              and the highest professional standards in the specialty for the benefit of the public. 
              The Faculty seeks, through its activities, to bring about an improvement in research of the public.
            </p>
            
            <div className="space-y-3 mb-8">
              {[
                "Qualified reviewers from around the world",
                "Rigorous peer-review for every paper",
                "Free online access globally indexed by Google Scholar",
                "Target audience: Academic, business, and government sectors"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>

            <Button className="academic-button bg-primary text-primary-foreground hover:bg-primary/90">
              Learn More About Our Standards
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 text-primary">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold text-primary mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Disciplines Section */}
        <div className="text-center animate-fade-in">
          <h3 className="text-2xl font-semibold text-primary mb-8">Research Disciplines We Support</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {disciplines.map((discipline, index) => (
              <Badge 
                key={index}
                variant="outline" 
                className="px-4 py-2 text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-pointer"
              >
                {discipline}
              </Badge>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-slide-up">
          <Card className="glass-card max-w-3xl mx-auto">
            <CardContent className="p-8">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-primary mb-4">Ready to Publish Your Research?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Join thousands of researchers who trust IJDST for publishing their innovative work. 
                Our streamlined submission process and expert review panel ensure your research reaches the global academic community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="academic-button bg-primary text-primary-foreground hover:bg-primary/90">
                  Submit Your Paper
                </Button>
                <Button variant="outline" size="lg" className="academic-button">
                  View Submission Guidelines
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
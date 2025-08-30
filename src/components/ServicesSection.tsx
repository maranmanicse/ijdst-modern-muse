import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Users, 
  Archive, 
  BookOpen, 
  Clock, 
  Shield,
  Search,
  Download,
  ArrowRight
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Current Issues",
      description: "Access the latest published research articles from leading scientists and researchers worldwide.",
      features: ["Latest research", "Peer-reviewed articles", "Multi-disciplinary content"],
      action: "Browse Current Issue",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      icon: <Archive className="w-8 h-8" />,
      title: "Archives",
      description: "Explore our comprehensive archive of published research spanning multiple years and disciplines.",
      features: ["Complete archives", "Advanced search", "Download access"],
      action: "Explore Archives", 
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Editorial Board",
      description: "Meet our distinguished editorial board comprising renowned experts from various scientific fields.",
      features: ["Expert reviewers", "Global representation", "Industry leaders"],
      action: "Meet Our Board",
      gradient: "from-green-500 to-green-600"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "For Authors",
      description: "Comprehensive resources and guidelines to help authors submit high-quality research papers.",
      features: ["Submission guidelines", "Review process", "Publication ethics"],
      action: "Author Guidelines",
      gradient: "from-orange-500 to-orange-600"
    }
  ];

  const quickLinks = [
    { 
      icon: <Search className="w-5 h-5" />, 
      title: "Article Search", 
      description: "Search through our database" 
    },
    { 
      icon: <Download className="w-5 h-5" />, 
      title: "Download Papers", 
      description: "Free access to all articles" 
    },
    { 
      icon: <Clock className="w-5 h-5" />, 
      title: "Review Status", 
      description: "Track your submission" 
    },
    { 
      icon: <Shield className="w-5 h-5" />, 
      title: "Ethics Guidelines", 
      description: "Research integrity standards" 
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Everything You Need for Research
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From submission to publication, we provide comprehensive support for researchers, 
            authors, and the global scientific community.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="glass-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 group animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-primary group-hover:text-primary/80 transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button className="w-full academic-button bg-primary text-primary-foreground hover:bg-primary/90 group-hover:shadow-glow">
                  {service.action}
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Access Links */}
        <div className="animate-slide-up">
          <h3 className="text-2xl font-semibold text-primary text-center mb-8">Quick Access</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickLinks.map((link, index) => (
              <Card key={index} className="glass-card hover:shadow-card transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {link.icon}
                  </div>
                  <h4 className="font-semibold text-primary mb-1 group-hover:text-primary/80 transition-colors">
                    {link.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">{link.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Special Issues Callout */}
        <div className="mt-16 animate-fade-in">
          <Card className="bg-gradient-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Special Issues & Conference Proceedings</h3>
              <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto leading-relaxed">
                IJDST regularly publishes special issues on emerging topics and conference proceedings 
                from leading international conferences in science and technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="secondary" size="lg" className="academic-button">
                  View Special Issues
                </Button>
                <Button variant="outline" size="lg" className="academic-button border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Submit Special Issue Proposal
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
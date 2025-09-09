import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, GraduationCap, Award, Users, Star } from 'lucide-react';

const EditorialBoard = () => {
  const editorInChief = {
    name: "Dr. Sarah Johnson",
    title: "Editor-in-Chief",
    affiliation: "Massachusetts Institute of Technology",
    country: "USA",
    email: "sarah.johnson@mit.edu",
    specialization: "Computer Science & Engineering",
    experience: "20+ years",
    image: "/placeholder.svg"
  };

  const associateEditors = [
    {
      name: "Prof. Michael Chen",
      title: "Associate Editor",
      affiliation: "Stanford University",
      country: "USA",
      email: "m.chen@stanford.edu",
      specialization: "Artificial Intelligence & Machine Learning",
      experience: "15+ years"
    },
    {
      name: "Dr. Elena Rodriguez",
      title: "Associate Editor", 
      affiliation: "University of Cambridge",
      country: "UK",
      email: "e.rodriguez@cam.ac.uk",
      specialization: "Biotechnology & Life Sciences",
      experience: "12+ years"
    },
    {
      name: "Prof. Rajesh Kumar",
      title: "Associate Editor",
      affiliation: "Indian Institute of Technology Delhi",
      country: "India", 
      email: "r.kumar@iitd.ac.in",
      specialization: "Materials Science & Engineering",
      experience: "18+ years"
    }
  ];

  const editorialMembers = [
    {
      name: "Dr. James Wilson",
      affiliation: "Harvard University",
      country: "USA",
      specialization: "Physics & Quantum Computing"
    },
    {
      name: "Prof. Lisa Zhang",
      affiliation: "University of Toronto", 
      country: "Canada",
      specialization: "Environmental Sciences"
    },
    {
      name: "Dr. Ahmed Hassan",
      affiliation: "American University of Cairo",
      country: "Egypt",
      specialization: "Chemical Engineering"
    },
    {
      name: "Prof. Anna Kowalski",
      affiliation: "Warsaw University of Technology",
      country: "Poland", 
      specialization: "Mechanical Engineering"
    },
    {
      name: "Dr. Hiroshi Tanaka",
      affiliation: "University of Tokyo",
      country: "Japan",
      specialization: "Electronics & Communications"
    },
    {
      name: "Prof. Maria Silva",
      affiliation: "University of São Paulo",
      country: "Brazil",
      specialization: "Medical Sciences & Healthcare"
    },
    {
      name: "Dr. Robert Brown",
      affiliation: "Oxford University",
      country: "UK",
      specialization: "Mathematics & Statistics"
    },
    {
      name: "Prof. Sophie Martin",
      affiliation: "École Polytechnique",
      country: "France",
      specialization: "Aerospace Engineering"
    }
  ];

  const advisoryBoard = [
    {
      name: "Prof. William Davis",
      affiliation: "California Institute of Technology",
      country: "USA",
      title: "Chairman, Advisory Board"
    },
    {
      name: "Dr. Katherine Lee",
      affiliation: "University of Melbourne", 
      country: "Australia",
      title: "Advisory Board Member"
    },
    {
      name: "Prof. Giuseppe Romano",
      affiliation: "University of Bologna",
      country: "Italy",
      title: "Advisory Board Member"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-hero text-white py-16">
        <div className="absolute inset-0 hero-pattern"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              Editorial Board
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto animate-slide-up">
              Meet our distinguished editorial team of renowned researchers and academics from leading institutions worldwide, committed to advancing scientific knowledge and maintaining the highest standards of scholarly publishing.
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Editor-in-Chief Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-8 h-8 text-secondary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Editor-in-Chief</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leading the journal's editorial direction and maintaining the highest standards of academic excellence
            </p>
          </div>

          <Card className="max-w-4xl mx-auto shadow-elegant hover:shadow-glow transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center">
                  <GraduationCap className="w-16 h-16 text-primary-foreground" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{editorInChief.name}</h3>
                  <Badge variant="secondary" className="mb-4">{editorInChief.title}</Badge>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-center md:justify-start text-muted-foreground">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      {editorInChief.affiliation}
                    </div>
                    <div className="flex items-center justify-center md:justify-start text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2" />
                      {editorInChief.country}
                    </div>
                    <div className="flex items-center justify-center md:justify-start text-muted-foreground">
                      <Mail className="w-4 h-4 mr-2" />
                      {editorInChief.email}
                    </div>
                    <div className="flex items-center justify-center md:justify-start text-muted-foreground">
                      <Award className="w-4 h-4 mr-2" />
                      {editorInChief.specialization}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Associate Editors Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-3xl font-bold text-foreground">Associate Editors</h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Expert researchers who oversee peer review processes and ensure quality in their specialized domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {associateEditors.map((editor, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                      <GraduationCap className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-1">{editor.name}</h3>
                    <Badge variant="outline" className="mb-3">{editor.title}</Badge>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <GraduationCap className="w-3 h-3 mr-2 flex-shrink-0" />
                      <span className="truncate">{editor.affiliation}</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-3 h-3 mr-2 flex-shrink-0" />
                      {editor.country}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Mail className="w-3 h-3 mr-2 flex-shrink-0" />
                      <span className="truncate">{editor.email}</span>
                    </div>
                    <div className="flex items-start text-muted-foreground">
                      <Award className="w-3 h-3 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-xs">{editor.specialization}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Editorial Board Members */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Editorial Board Members</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Distinguished academics and researchers contributing their expertise to maintain scholarly excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {editorialMembers.map((member, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-4">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-secondary rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                      <GraduationCap className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2 text-sm">{member.name}</h3>
                    
                    <div className="space-y-1 text-xs text-muted-foreground">
                      <div className="flex items-center justify-center">
                        <GraduationCap className="w-3 h-3 mr-1 flex-shrink-0" />
                        <span className="truncate">{member.affiliation}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <MapPin className="w-3 h-3 mr-1 flex-shrink-0" />
                        {member.country}
                      </div>
                      <div className="text-center mt-2">
                        <Badge variant="outline" className="text-xs">
                          {member.specialization}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Advisory Board */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Advisory Board</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Senior advisors providing strategic guidance and ensuring the journal's continued growth and impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {advisoryBoard.map((advisor, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform duration-300">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{advisor.name}</h3>
                    <Badge variant="secondary" className="mb-3">{advisor.title}</Badge>
                    
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 mr-2" />
                        <span className="truncate">{advisor.affiliation}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {advisor.country}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-primary text-primary-foreground rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Join Our Editorial Team</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            We are always looking for qualified researchers and academics to join our editorial board. 
            If you are interested in contributing to the advancement of science and technology through scholarly publishing, 
            we would love to hear from you.
          </p>
          <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
            Apply to Join Board
          </button>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default EditorialBoard;
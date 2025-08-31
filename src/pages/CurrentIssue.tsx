import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, Eye, FileText, Users } from "lucide-react";

const CurrentIssue = () => {
  const currentIssueData = {
    volume: "12",
    issue: "3",
    month: "March",
    year: "2024",
    coverDate: "March 2024",
    articles: [
      {
        id: 1,
        title: "Artificial Intelligence in Healthcare: A Comprehensive Review of Current Applications and Future Prospects",
        authors: ["Dr. Sarah Johnson", "Prof. Michael Chen", "Dr. Priya Sharma"],
        abstract: "This paper presents a comprehensive analysis of AI applications in healthcare, examining current implementations and future potential across various medical domains...",
        pages: "1-15",
        doi: "10.1234/ijdst.2024.001",
        keywords: ["Artificial Intelligence", "Healthcare", "Machine Learning", "Medical Diagnosis"],
        subject: "Computer Science"
      },
      {
        id: 2,
        title: "Sustainable Energy Solutions: A Study on Solar Panel Efficiency Enhancement Using Nanotechnology",
        authors: ["Dr. Ahmed Hassan", "Prof. Lisa Wang"],
        abstract: "This research investigates the application of nanotechnology to improve solar panel efficiency, presenting novel approaches to sustainable energy generation...",
        pages: "16-28",
        doi: "10.1234/ijdst.2024.002",
        keywords: ["Solar Energy", "Nanotechnology", "Renewable Energy", "Sustainability"],
        subject: "Engineering"
      },
      {
        id: 3,
        title: "Impact of Digital Transformation on Small and Medium Enterprises: A Cross-Sectional Analysis",
        authors: ["Dr. Emma Thompson", "Prof. David Martinez", "Dr. Rachel Kim"],
        abstract: "This study examines how digital transformation affects SMEs across different sectors, analyzing adoption patterns and performance outcomes...",
        pages: "29-42",
        doi: "10.1234/ijdst.2024.003",
        keywords: ["Digital Transformation", "SMEs", "Business Strategy", "Technology Adoption"],
        subject: "Management"
      },
      {
        id: 4,
        title: "Novel Approaches in Drug Discovery: Computational Methods for Accelerated Pharmaceutical Development",
        authors: ["Dr. Robert Singh", "Prof. Maria Gonzalez"],
        abstract: "This paper discusses innovative computational methods that accelerate drug discovery processes, reducing time and costs in pharmaceutical development...",
        pages: "43-58",
        doi: "10.1234/ijdst.2024.004",
        keywords: ["Drug Discovery", "Computational Biology", "Pharmaceutical", "Molecular Modeling"],
        subject: "Medical Science"
      },
      {
        id: 5,
        title: "Smart Cities and IoT Integration: Challenges and Opportunities in Urban Development",
        authors: ["Dr. Jennifer Lee", "Prof. Antonio Silva", "Dr. Yuki Tanaka"],
        abstract: "This research explores the integration of IoT technologies in smart city development, addressing implementation challenges and future opportunities...",
        pages: "59-72",
        doi: "10.1234/ijdst.2024.005",
        keywords: ["Smart Cities", "IoT", "Urban Development", "Technology Integration"],
        subject: "Technology"
      }
    ]
  };

  const getSubjectColor = (subject: string) => {
    const colors: { [key: string]: string } = {
      "Computer Science": "bg-blue-100 text-blue-800",
      "Engineering": "bg-green-100 text-green-800",
      "Management": "bg-purple-100 text-purple-800",
      "Medical Science": "bg-red-100 text-red-800",
      "Technology": "bg-orange-100 text-orange-800"
    };
    return colors[subject] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-primary mb-2">Current Issue</h1>
            <div className="flex items-center justify-center space-x-4 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>Volume {currentIssueData.volume}, Issue {currentIssueData.issue}</span>
              </div>
              <span>•</span>
              <span>{currentIssueData.coverDate}</span>
            </div>
          </div>

          {/* Issue Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <FileText className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">{currentIssueData.articles.length}</div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold text-primary">
                  {currentIssueData.articles.reduce((acc, article) => acc + article.authors.length, 0)}
                </div>
                <div className="text-sm text-muted-foreground">Authors</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">
                  {currentIssueData.articles[currentIssueData.articles.length - 1]?.pages.split('-')[1] || '72'}
                </div>
                <div className="text-sm text-muted-foreground">Pages</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">Open Access</div>
                <div className="text-sm text-muted-foreground">All Articles</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Articles List */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-primary mb-4">Published Articles</h2>
          
          {currentIssueData.articles.map((article, index) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow duration-200">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getSubjectColor(article.subject)}>
                        {article.subject}
                      </Badge>
                      <span className="text-sm text-muted-foreground">Pages {article.pages}</span>
                    </div>
                    <CardTitle className="text-lg font-semibold text-primary hover:text-primary/80 cursor-pointer">
                      {article.title}
                    </CardTitle>
                    <div className="text-sm text-muted-foreground mt-2">
                      <strong>Authors:</strong> {article.authors.join(", ")}
                    </div>
                    <div className="text-sm text-muted-foreground mt-1">
                      <strong>DOI:</strong> {article.doi}
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                    <Button variant="default" size="sm" className="flex items-center gap-2">
                      <Download className="w-4 h-4" />
                      PDF
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                  {article.abstract}
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="text-xs font-medium text-muted-foreground mr-2">Keywords:</span>
                  {article.keywords.map((keyword, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-muted rounded-lg p-8">
          <h3 className="text-xl font-semibold text-primary mb-4">Submit Your Research</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            IJDST welcomes original research contributions across all domains of science and technology. 
            Join our community of researchers and share your innovative work with the global academic community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-800 hover:bg-blue-900">
              Submit Manuscript
            </Button>
            <Button variant="outline" size="lg">
              View Submission Guidelines
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CurrentIssue;
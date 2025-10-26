import { useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Download, Eye, Share2, Calendar, FileText, Users, BookOpen } from "lucide-react";

const ArticleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // This would typically come from an API or context
  const article = {
    id: id,
    title: "Artificial Intelligence in Healthcare: A Comprehensive Review of Current Applications and Future Prospects",
    authors: [
      { name: "Dr. Sarah Johnson", affiliation: "Stanford University, USA" },
      { name: "Prof. Michael Chen", affiliation: "MIT, USA" },
      { name: "Dr. Priya Sharma", affiliation: "IIT Delhi, India" }
    ],
    country: "USA, India",
    abstract: "This paper presents a comprehensive analysis of AI applications in healthcare, examining current implementations and future potential across various medical domains. The study explores machine learning algorithms, deep learning techniques, and their impact on diagnostic accuracy, treatment planning, and patient outcomes. We conducted a systematic review of 150+ research papers published between 2020-2024, analyzing trends, challenges, and opportunities in AI-driven healthcare. Our findings indicate significant improvements in early disease detection, personalized treatment approaches, and operational efficiency. However, concerns regarding data privacy, algorithmic bias, and regulatory compliance remain critical challenges that require urgent attention from the research community and policymakers.",
    keywords: ["Artificial Intelligence", "Healthcare", "Machine Learning", "Medical Diagnosis", "Deep Learning", "Patient Care"],
    field: "Computer Science > Artificial Intelligence",
    volume: "12",
    issue: "3",
    pages: "1-15",
    publishedDate: "March 15, 2024",
    doi: "10.1234/ijdst.2024.001",
    issn: "2582-2160",
    subject: "Computer Science",
    citations: 45,
    views: 1234
  };

  const getSubjectColor = (subject: string) => {
    const colors: { [key: string]: string } = {
      "Computer Science": "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
      "Engineering": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
      "Management": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
      "Medical Science": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
      "Technology": "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200"
    };
    return colors[subject] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate(-1)}
          className="mb-6 hover:bg-accent"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Article Header */}
            <Card className="shadow-elegant">
              <CardContent className="p-6 space-y-4">
                <div className="flex flex-wrap gap-2">
                  <Badge className={getSubjectColor(article.subject)}>
                    {article.subject}
                  </Badge>
                  <Badge variant="outline">Open Access</Badge>
                  <Badge variant="outline">Peer Reviewed</Badge>
                </div>

                <h1 className="text-3xl font-heading font-bold text-foreground leading-tight">
                  {article.title}
                </h1>

                <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Published: {article.publishedDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Pages: {article.pages}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    <span>{article.views} views</span>
                  </div>
                </div>

                <Separator />

                {/* Authors */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Authors
                  </h3>
                  <div className="space-y-2">
                    {article.authors.map((author, idx) => (
                      <div key={idx} className="text-sm">
                        <p className="font-medium text-foreground">{author.name}</p>
                        <p className="text-muted-foreground">{author.affiliation}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Abstract */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Abstract
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {article.abstract}
                  </p>
                </div>

                <Separator />

                {/* Keywords */}
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Keywords</h3>
                  <div className="flex flex-wrap gap-2">
                    {article.keywords.map((keyword, idx) => (
                      <Badge key={idx} variant="secondary" className="text-sm">
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Separator />

                {/* Field */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground mb-1">Field</p>
                    <p className="font-medium text-foreground">{article.field}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground mb-1">Country</p>
                    <p className="font-medium text-foreground">{article.country}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <Card className="shadow-card">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-primary hover:bg-primary/90" size="lg">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline" className="flex-1" size="lg">
                    <Eye className="w-4 h-4 mr-2" />
                    View Online
                  </Button>
                  <Button variant="outline" size="lg">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Publication Details */}
            <Card className="shadow-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-foreground">Publication Details</h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-muted-foreground">E-ISSN</p>
                    <p className="font-mono font-medium text-foreground">{article.issn}</p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <p className="text-muted-foreground">DOI</p>
                    <p className="font-mono font-medium text-primary break-all">
                      {article.doi}
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <p className="text-muted-foreground">Published In</p>
                    <p className="font-medium text-foreground">
                      Volume {article.volume}, Issue {article.issue}
                    </p>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <p className="text-muted-foreground">Date</p>
                    <p className="font-medium text-foreground">{article.publishedDate}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Metrics */}
            <Card className="shadow-card">
              <CardContent className="p-6 space-y-4">
                <h3 className="font-semibold text-foreground">Article Metrics</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Views</span>
                    <span className="text-2xl font-bold text-primary">{article.views}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Citations</span>
                    <span className="text-2xl font-bold text-primary">{article.citations}</span>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Downloads</span>
                    <span className="text-2xl font-bold text-primary">842</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Related Actions */}
            <Card className="shadow-card bg-accent/50">
              <CardContent className="p-6 space-y-3">
                <h3 className="font-semibold text-foreground mb-4">More Options</h3>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  Cite this article
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  Export citation
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  Email to colleague
                </Button>
                <Button variant="outline" className="w-full justify-start" size="sm">
                  Report an issue
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Submit CTA */}
        <Card className="mt-12 bg-gradient-primary shadow-glow">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-heading font-bold text-primary-foreground mb-3">
              Submit Your Research
            </h3>
            <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Join our community of researchers. Share your innovative work with the global academic community.
            </p>
            <Button size="lg" variant="secondary">
              Submit Manuscript
            </Button>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default ArticleDetail;

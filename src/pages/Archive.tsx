import { useState } from "react";
import { Search, Calendar, Download, Filter, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

// Sample archive data
const archiveData = [
  {
    id: 1,
    volume: "Vol. 15",
    issue: "No. 2",
    year: 2024,
    month: "April",
    title: "Advances in Digital Signal Processing",
    articles: 12,
    pages: "pp. 1-156",
    downloads: 2847,
    status: "Published"
  },
  {
    id: 2,
    volume: "Vol. 15",
    issue: "No. 1", 
    year: 2024,
    month: "February",
    title: "Machine Learning Applications in Telecommunications",
    articles: 15,
    pages: "pp. 1-203",
    downloads: 3291,
    status: "Published"
  },
  {
    id: 3,
    volume: "Vol. 14",
    issue: "No. 6",
    year: 2023,
    month: "December", 
    title: "5G Network Optimization Techniques",
    articles: 10,
    pages: "pp. 1-134",
    downloads: 4156,
    status: "Published"
  },
  {
    id: 4,
    volume: "Vol. 14",
    issue: "No. 5",
    year: 2023,
    month: "October",
    title: "IoT Security and Privacy Challenges",
    articles: 13,
    pages: "pp. 1-178",
    downloads: 3782,
    status: "Published"
  },
  {
    id: 5,
    volume: "Vol. 14",
    issue: "No. 4",
    year: 2023,
    month: "August",
    title: "Artificial Intelligence in Network Management",
    articles: 11,
    pages: "pp. 1-145",
    downloads: 3945,
    status: "Published"
  },
  {
    id: 6,
    volume: "Vol. 14",
    issue: "No. 3",
    year: 2023,
    month: "June",
    title: "Quantum Computing and Communication Systems",
    articles: 9,
    pages: "pp. 1-112",
    downloads: 2634,
    status: "Published"
  }
];

const years = [...new Set(archiveData.map(item => item.year))].sort((a, b) => b - a);

const Archive = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState<string>("all");
  const [filteredData, setFilteredData] = useState(archiveData);

  const handleSearch = () => {
    let filtered = archiveData;
    
    if (searchTerm) {
      filtered = filtered.filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.volume.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.issue.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedYear !== "all") {
      filtered = filtered.filter(item => item.year.toString() === selectedYear);
    }
    
    setFilteredData(filtered);
  };

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedYear("all");
    setFilteredData(archiveData);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Archive Header */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Journal Archive
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our complete collection of published research articles, technical papers, and scientific contributions from past issues.
            </p>
          </div>
          
          {/* Search and Filter Controls */}
          <div className="bg-card rounded-xl p-6 shadow-sm border max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title, volume, or issue..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                  onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                />
              </div>
              
              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Filter by year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year.toString()}>
                      {year}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <div className="flex gap-2">
                <Button onClick={handleSearch} className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" onClick={resetFilters}>
                  Reset
                </Button>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Showing {filteredData.length} of {archiveData.length} issues
            </div>
          </div>
        </div>
      </section>

      {/* Archive Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6">
            {filteredData.map((issue) => (
              <Card key={issue.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{issue.title}</CardTitle>
                      <CardDescription className="text-base">
                        {issue.volume}, {issue.issue} - {issue.month} {issue.year}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">{issue.status}</Badge>
                      <Badge variant="outline">{issue.articles} Articles</Badge>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{issue.month} {issue.year}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Eye className="h-4 w-4" />
                      <span>{issue.downloads.toLocaleString()} views</span>
                    </div>
                    <div className="text-muted-foreground">
                      <span>{issue.articles} Articles</span>
                    </div>
                    <div className="text-muted-foreground">
                      <span>{issue.pages}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      View Issue
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Download className="h-4 w-4" />
                      Download PDF
                    </Button>
                    <Button variant="ghost">
                      Table of Contents
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredData.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📚</div>
              <h3 className="text-2xl font-semibold mb-2">No issues found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search criteria or filters.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Archive;
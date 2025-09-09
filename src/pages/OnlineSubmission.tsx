import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { FileText, Upload, CheckCircle, AlertCircle, User, Mail, Phone, Building } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

const OnlineSubmission = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Author Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    affiliation: '',
    department: '',
    country: '',
    orcidId: '',
    
    // Manuscript Information
    title: '',
    abstract: '',
    keywords: '',
    category: '',
    manuscriptType: '',
    
    // Co-authors
    coAuthors: [],
    
    // Files
    manuscriptFile: null,
    supplementaryFiles: [],
    
    // Declarations
    originalWork: false,
    ethicsApproval: false,
    fundingInfo: '',
    conflictOfInterest: ''
  });

  const { toast } = useToast();

  const categories = [
    'Computer Science & Engineering',
    'Mechanical Engineering',
    'Electrical Engineering',
    'Civil Engineering',
    'Chemical Engineering',
    'Biotechnology',
    'Medical Sciences',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Environmental Science',
    'Management Studies',
    'Other'
  ];

  const manuscriptTypes = [
    'Original Research Article',
    'Review Article',
    'Short Communication',
    'Case Study',
    'Technical Note',
    'Letter to Editor'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Submission Successful",
      description: "Your manuscript has been submitted successfully. You will receive a confirmation email shortly.",
    });
  };

  const steps = [
    { number: 1, title: 'Author Information', icon: User },
    { number: 2, title: 'Manuscript Details', icon: FileText },
    { number: 3, title: 'File Upload', icon: Upload },
    { number: 4, title: 'Review & Submit', icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
      <Navigation />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-primary mb-4">Online Manuscript Submission</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Submit your research manuscript to International Journal For Development Of Science & Technology (IJDST)
          </p>
          <Badge variant="outline" className="mt-4">
            ISSN: 2456-8503
          </Badge>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-between items-center mb-8 bg-card p-4 rounded-lg border">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = currentStep === step.number;
            const isCompleted = currentStep > step.number;
            
            return (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  isCompleted ? 'bg-primary text-primary-foreground border-primary' :
                  isActive ? 'bg-primary/10 text-primary border-primary' :
                  'bg-background text-muted-foreground border-border'
                }`}>
                  {isCompleted ? <CheckCircle className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                </div>
                <div className="ml-3 text-sm">
                  <div className={`font-medium ${isActive ? 'text-primary' : 'text-foreground'}`}>
                    Step {step.number}
                  </div>
                  <div className="text-muted-foreground">{step.title}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    isCompleted ? 'bg-primary' : 'bg-border'
                  }`} />
                )}
              </div>
            );
          })}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Step 1: Author Information */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Author Information
                </CardTitle>
                <CardDescription>
                  Please provide your personal and professional details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      required
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        className="pl-9"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="phone"
                        className="pl-9"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <Label htmlFor="affiliation">Institutional Affiliation *</Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="affiliation"
                      className="pl-9"
                      value={formData.affiliation}
                      onChange={(e) => setFormData({...formData, affiliation: e.target.value})}
                      placeholder="University/Institution name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="department">Department/Faculty</Label>
                    <Input
                      id="department"
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">Country *</Label>
                    <Input
                      id="country"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="orcidId">ORCID ID (Optional)</Label>
                  <Input
                    id="orcidId"
                    value={formData.orcidId}
                    onChange={(e) => setFormData({...formData, orcidId: e.target.value})}
                    placeholder="0000-0000-0000-0000"
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Manuscript Details */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Manuscript Details
                </CardTitle>
                <CardDescription>
                  Provide information about your research manuscript
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Manuscript Title *</Label>
                  <Textarea
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    placeholder="Enter the complete title of your manuscript"
                    className="min-h-[80px]"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="category">Research Category *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, category: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((category) => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="manuscriptType">Manuscript Type *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, manuscriptType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        {manuscriptTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="abstract">Abstract *</Label>
                  <Textarea
                    id="abstract"
                    value={formData.abstract}
                    onChange={(e) => setFormData({...formData, abstract: e.target.value})}
                    placeholder="Enter your manuscript abstract (max 300 words)"
                    className="min-h-[120px]"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Maximum 300 words
                  </p>
                </div>

                <div>
                  <Label htmlFor="keywords">Keywords *</Label>
                  <Input
                    id="keywords"
                    value={formData.keywords}
                    onChange={(e) => setFormData({...formData, keywords: e.target.value})}
                    placeholder="Enter 4-6 keywords separated by commas"
                    required
                  />
                  <p className="text-xs text-muted-foreground mt-1">
                    Enter 4-6 keywords separated by commas
                  </p>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: File Upload */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="w-5 h-5" />
                  File Upload
                </CardTitle>
                <CardDescription>
                  Upload your manuscript and supplementary files
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>File Requirements:</strong>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Manuscript: DOC, DOCX, or PDF format (max 10MB)</li>
                      <li>Figures/Tables: JPG, PNG, or PDF format (max 5MB each)</li>
                      <li>Supplementary files: Any format (max 10MB each)</li>
                    </ul>
                  </AlertDescription>
                </Alert>

                <div>
                  <Label htmlFor="manuscript">Main Manuscript File *</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Drag and drop your manuscript file here, or click to browse
                    </p>
                    <Input
                      id="manuscript"
                      type="file"
                      accept=".doc,.docx,.pdf"
                      className="hidden"
                      required
                    />
                    <Button type="button" variant="outline" className="mt-2">
                      Choose File
                    </Button>
                  </div>
                </div>

                <div>
                  <Label htmlFor="supplementary">Supplementary Files (Optional)</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Upload figures, tables, or other supplementary materials
                    </p>
                    <Input
                      id="supplementary"
                      type="file"
                      multiple
                      className="hidden"
                    />
                    <Button type="button" variant="outline" className="mt-2">
                      Choose Files
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Review & Submit */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Review & Submit
                </CardTitle>
                <CardDescription>
                  Review your submission and agree to the terms
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="originalWork"
                      checked={formData.originalWork}
                      onCheckedChange={(checked) => setFormData({...formData, originalWork: checked as boolean})}
                      required
                    />
                    <label htmlFor="originalWork" className="text-sm">
                      I confirm that this is original work and has not been published elsewhere *
                    </label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="ethicsApproval"
                      checked={formData.ethicsApproval}
                      onCheckedChange={(checked) => setFormData({...formData, ethicsApproval: checked as boolean})}
                    />
                    <label htmlFor="ethicsApproval" className="text-sm">
                      I confirm that ethical approval was obtained if required for this study
                    </label>
                  </div>
                </div>

                <div>
                  <Label htmlFor="fundingInfo">Funding Information</Label>
                  <Textarea
                    id="fundingInfo"
                    value={formData.fundingInfo}
                    onChange={(e) => setFormData({...formData, fundingInfo: e.target.value})}
                    placeholder="Please provide details of any funding received for this research"
                    className="min-h-[80px]"
                  />
                </div>

                <div>
                  <Label htmlFor="conflictOfInterest">Conflict of Interest Declaration</Label>
                  <Textarea
                    id="conflictOfInterest"
                    value={formData.conflictOfInterest}
                    onChange={(e) => setFormData({...formData, conflictOfInterest: e.target.value})}
                    placeholder="Please declare any conflicts of interest or state 'None'"
                    className="min-h-[80px]"
                  />
                </div>

                <Alert>
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>
                    By submitting this manuscript, you agree to the journal's terms and conditions, 
                    peer review process, and publication policies. You will receive an acknowledgment 
                    email within 24 hours.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
            >
              Previous
            </Button>
            
            {currentStep < 4 ? (
              <Button
                type="button"
                onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
              >
                Next
              </Button>
            ) : (
              <Button
                type="submit"
                disabled={!formData.originalWork}
              >
                Submit Manuscript
              </Button>
            )}
          </div>
        </form>
      </div>
      
      <Footer />
    </div>
  );
};

export default OnlineSubmission;
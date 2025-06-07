
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Printer, QrCode, Shield, Calendar, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Certificate = () => {
  const { toast } = useToast();

  const certificateData = {
    studentName: "John Doe",
    courseName: "Advanced React Development",
    completionDate: "December 15, 2024",
    instructor: "Sarah Johnson",
    certificateId: "BEAM-2024-12345",
    issueDate: new Date().toLocaleDateString()
  };

  const handleDownloadPDF = () => {
    toast({
      title: "Download Started",
      description: "Your certificate is being prepared for download.",
    });
  };

  const handlePrint = () => {
    window.print();
    toast({
      title: "Print Dialog",
      description: "Opening print dialog for your certificate.",
    });
  };

  const handleVerifyOnChain = () => {
    toast({
      title: "Blockchain Verification",
      description: "Initiating blockchain verification process...",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary p-6">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-josefin font-bold beam-gradient-text">
            Your Certificate
          </h1>
          <p className="text-muted-foreground text-lg">
            Congratulations on completing your course!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Certificate Preview */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Certificate Preview</CardTitle>
              <CardDescription>Your official course completion certificate</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-8 rounded-lg shadow-lg border-2 border-beam-primary/20">
                {/* Certificate Header */}
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 beam-gradient rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-josefin font-bold text-gray-800 mb-2">
                    Certificate of Completion
                  </h2>
                  <div className="w-24 h-1 bg-beam-primary mx-auto"></div>
                </div>

                {/* Certificate Body */}
                <div className="text-center space-y-6">
                  <p className="text-gray-600 text-lg">
                    This is to certify that
                  </p>
                  
                  <h3 className="text-4xl font-josefin font-bold text-gray-800 border-b-2 border-beam-primary/30 pb-2">
                    {certificateData.studentName}
                  </h3>
                  
                  <p className="text-gray-600 text-lg">
                    has successfully completed the course
                  </p>
                  
                  <h4 className="text-2xl font-semibold text-beam-primary">
                    {certificateData.courseName}
                  </h4>
                  
                  <div className="flex justify-center items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>Completed on {certificateData.completionDate}</span>
                  </div>
                </div>

                {/* Certificate Footer */}
                <div className="mt-12 flex justify-between items-end">
                  <div className="text-left">
                    <div className="border-t-2 border-gray-300 pt-2 w-48">
                      <p className="font-semibold text-gray-800">{certificateData.instructor}</p>
                      <p className="text-sm text-gray-600">Course Instructor</p>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="border-t-2 border-gray-300 pt-2 w-48">
                      <p className="font-semibold text-gray-800">Beam Education</p>
                      <p className="text-sm text-gray-600">Platform Authority</p>
                    </div>
                  </div>
                </div>

                {/* Certificate ID */}
                <div className="mt-8 text-center">
                  <p className="text-xs text-gray-500">
                    Certificate ID: {certificateData.certificateId}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Actions and Verification */}
          <div className="space-y-6">
            {/* Download and Print Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Download & Print</CardTitle>
                <CardDescription>Get your certificate in different formats</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button onClick={handleDownloadPDF} className="w-full beam-gradient">
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Button>
                <Button onClick={handlePrint} variant="outline" className="w-full">
                  <Printer className="mr-2 h-4 w-4" />
                  Print Certificate
                </Button>
              </CardContent>
            </Card>

            {/* QR Code Verification */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Verification</CardTitle>
                <CardDescription>QR code for instant verification</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center">
                  <div className="w-32 h-32 bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <QrCode className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                      <p className="text-xs text-gray-500">QR Code</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-center text-muted-foreground">
                  Scan to verify certificate authenticity
                </p>
              </CardContent>
            </Card>

            {/* Blockchain Verification */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Blockchain Verification</CardTitle>
                <CardDescription>Secure, immutable proof of completion</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-beam-primary/10 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8 text-beam-primary" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Store your certificate permanently on the blockchain
                  </p>
                  <Button onClick={handleVerifyOnChain} variant="outline" className="w-full">
                    <Shield className="mr-2 h-4 w-4" />
                    Verify on Chain
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Certificate Details */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Certificate Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Student:</span>
                  <span className="font-medium">{certificateData.studentName}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">Issued:</span>
                  <span className="font-medium">{certificateData.issueDate}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">ID:</span>
                  <span className="font-medium text-xs">{certificateData.certificateId}</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;

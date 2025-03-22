
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const DashboardContent = () => {
  return (
    <div className="flex-1 p-6 overflow-auto">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Recent Courses</CardTitle>
              <CardDescription>Your recently accessed courses</CardDescription>
            </CardHeader>
            <CardContent>
              <p>No courses have been accessed recently.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Timeline</CardTitle>
              <CardDescription>Upcoming events and deadlines</CardDescription>
            </CardHeader>
            <CardContent>
              <p>You have no upcoming events due.</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Study Progress</CardTitle>
              <CardDescription>Track your study statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <p>No study data available yet.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

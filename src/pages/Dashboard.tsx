
import { Sidebar, DashboardContent } from "@/components/dashboard";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <DashboardContent />
    </div>
  );
};

export default Dashboard;

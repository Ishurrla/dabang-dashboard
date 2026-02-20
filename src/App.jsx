import { DashboardLayout } from './components/layout/DashboardLayout';
import { TodaysSales } from './components/dashboard/TodaysSales';
import { VisitorInsights } from './components/dashboard/VisitorInsights';
import { TotalRevenue } from './components/dashboard/TotalRevenue';
import { CustomerSatisfaction } from './components/dashboard/CustomerSatisfaction';
import { TargetVsReality } from './components/dashboard/TargetVsReality';
import { TopProducts } from './components/dashboard/TopProducts';
import { SalesMapping } from './components/dashboard/SalesMapping';
import { VolumeVsService } from './components/dashboard/VolumeVsService';

export default function App() {
  return (
    <DashboardLayout>
      {/* Row 1: Today's Sales (wide) + Visitor Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-4">
        <div className="lg:col-span-3">
          <TodaysSales />
        </div>
        <div className="lg:col-span-2">
          <VisitorInsights />
        </div>
      </div>

      {/* Row 2: Total Revenue + Customer Satisfaction + Target vs Reality */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8 mb-4 items-stretch">
        <div className="lg:col-span-3 flex flex-col"><TotalRevenue /></div>
        <div className="lg:col-span-2 flex flex-col"><CustomerSatisfaction /></div>
        <div className="md:col-span-2 lg:col-span-2 flex flex-col">
          <TargetVsReality />
        </div>
      </div>

      {/* Row 3: Top Products + Sales Mapping + Volume vs Service */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-7">
        <div className="lg:col-span-3"><TopProducts /></div>
        <div className="lg:col-span-2 h-full"><SalesMapping /></div>
        <div className="md:col-span-2 lg:col-span-2 h-full">
          <VolumeVsService />
        </div>
      </div>
    </DashboardLayout>
  );
}

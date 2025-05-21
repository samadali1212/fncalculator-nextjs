
import { Link } from "react-router-dom";
import { MapPin, FolderOpen } from "lucide-react";
import { getProvinces, getCities, getUniqueCategories } from "../utils/jobUtils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const JobBrowseBySection = () => {
  const provinces = getProvinces();
  const majorCities = getCities().slice(0, 6); // Limit to top cities
  const categories = getUniqueCategories();
  
  return (
    <div className="space-y-6">
      <Card className="bg-transparent border border-gray-200/40 shadow-sm">
        <CardHeader className="pb-3 border-b border-gray-100">
          <CardTitle className="flex items-center gap-2 text-lg font-medium">
            <MapPin className="h-4 w-4 text-gray-500" /> Browse Jobs by Location
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4 space-y-4">
          <div>
            <h3 className="text-sm text-gray-500 mb-2">Provinces</h3>
            <div className="flex flex-wrap gap-1.5">
              {provinces.map(province => (
                <Link 
                  key={province}
                  to={`/jobs/province/${province.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Badge variant="outline" className="bg-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors">
                    {province}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-sm text-gray-500 mb-2">Major Cities</h3>
            <div className="flex flex-wrap gap-1.5">
              {majorCities.map(city => (
                <Link 
                  key={city}
                  to={`/jobs/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Badge variant="outline" className="bg-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors">
                    {city}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-transparent border border-gray-200/40 shadow-sm">
        <CardHeader className="pb-3 border-b border-gray-100">
          <CardTitle className="flex items-center gap-2 text-lg font-medium">
            <FolderOpen className="h-4 w-4 text-gray-500" /> Browse Jobs by Category
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-4">
          <div className="flex flex-wrap gap-1.5">
            {categories.map(category => (
              <Link 
                key={category}
                to={`/jobs/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Badge variant="outline" className="bg-transparent text-gray-600 hover:bg-gray-50 hover:text-gray-800 transition-colors">
                  {category}
                </Badge>
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobBrowseBySection;

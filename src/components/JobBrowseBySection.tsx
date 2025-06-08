
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
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" /> Browse Jobs by Location
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-medium mb-2">Provinces</h3>
            <div className="flex flex-wrap gap-2">
              {provinces.map(province => (
                <Link 
                  key={province}
                  to={`/jobs/province/${province.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Badge variant="outline" className="hover:bg-muted">
                    {province}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-medium mb-2">Major Cities</h3>
            <div className="flex flex-wrap gap-2">
              {majorCities.map(city => (
                <Link 
                  key={city}
                  to={`/jobs/city/${city.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  <Badge variant="outline" className="hover:bg-muted">
                    {city}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FolderOpen className="h-5 w-5" /> Browse Jobs by Category
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <Link 
                key={category}
                to={`/jobs/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <Badge variant="outline" className="hover:bg-muted">
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

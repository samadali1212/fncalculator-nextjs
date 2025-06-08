
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getUniqueCategories, getUniqueLocations } from "../utils/jobData";

const JobBrowseBySection = () => {
  const categories = getUniqueCategories();
  const locations = getUniqueLocations();

  return (
    <div className="grid md:grid-cols-2 gap-6 mb-8">
      <Card>
        <CardHeader>
          <CardTitle>Browse by Category</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {categories.slice(0, 8).map((category) => (
              <Link
                key={category}
                to={`/jobs/category/${category.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-blue-600 hover:underline"
              >
                {category}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Browse by Location</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            {locations.slice(0, 8).map((location) => (
              <Link
                key={location}
                to={`/jobs/city/${location.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-blue-600 hover:underline"
              >
                {location}
              </Link>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default JobBrowseBySection;

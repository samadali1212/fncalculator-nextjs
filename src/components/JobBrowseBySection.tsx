
import { Link } from "react-router-dom";
import { FolderOpen } from "lucide-react";
import { getUniqueCategories } from "../utils/jobUtils";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const JobBrowseBySection = () => {
  const categories = getUniqueCategories();
  
  return (
    <div className="space-y-8">
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

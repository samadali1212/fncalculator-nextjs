
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary?: string;
  slug: string;
}

interface JobListProps {
  jobs: Job[];
  isLoading?: boolean;
}

const JobList = ({ jobs, isLoading = false }: JobListProps) => {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(10)].map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {jobs.map((job, index) => (
        <motion.div
          key={job.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="group p-4 border border-gray-200 rounded-lg hover:shadow-sm transition-shadow"
        >
          <Link
            to={`/jobs/${job.slug}`}
            className="block"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors flex items-center">
                  {job.title}
                  <ArrowUpRight className="h-4 w-4 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {job.company} • {job.location}
                </p>
                {job.salary && (
                  <p className="text-sm text-green-600 mt-1 font-medium">
                    {job.salary}
                  </p>
                )}
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  );
};

export default JobList;

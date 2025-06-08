import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, Briefcase, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "../components/Header";
import SEO from "../components/SEO";
import AdSense from "../components/AdSense";
import { getUniqueCategories, getUniqueLocations, getJobsByCategory, getJobsByCity } from "../utils/jobUtils";
import { JobCategory } from "../utils/jobData";

const MainPage = () => {
  const cities = getUniqueLocations();
  const categories = getUniqueCategories();

  // Get job counts for each city and category
  const getCityJobCount = (city: string) => {
    return getJobsByCity(city).length;
  };
  const getCategoryJobCount = (category: string) => getJobsByCategory(category as JobCategory).length;

  const createCitySlug = (city: string) => city.toLowerCase().replace(/\s+/g, "-");
  const createCategorySlug = (category: string) => category.toLowerCase().replace(/\s+/g, "-");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-[#f6f6f0]"
    >
      <SEO 
        title="Browse Jobs by City and Category in Tanzania | Latest Vacancies"
        description="Find job opportunities across Tanzania by city and category. Browse latest vacancies in Dar es Salaam, Arusha, Mwanza and other cities. Search by Technology, Finance, Healthcare and more."
        canonicalUrl="/jobs-browse"
      />
      <Header />
      
      <main className="container mx-auto pt-24 px-4 md:px-6 pb-16 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Jobs in Tanzania</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover job opportunities across Tanzania's cities and industries. Browse by location or category to find your next career opportunity.
          </p>
        </div>

        {/* Top ad placement */}
        <div className="my-8">
          <AdSense slot="9889084223" format="horizontal" className="py-3" />
        </div>

        {/* Browse by Cities Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <MapPin className="h-6 w-6 text-blog-accent mr-2" />
            <h2 className="text-3xl font-bold">Browse Jobs by City</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cities.map((city, index) => {
              const jobCount = getCityJobCount(city);
              const citySlug = createCitySlug(city);
              
              return (
                <motion.div
                  key={city}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link to={`/jobs/city/${citySlug}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg group-hover:text-blog-accent transition-colors">
                          {city}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 text-sm">
                            {jobCount} job{jobCount !== 1 ? 's' : ''} available
                          </span>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blog-accent transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Middle ad placement */}
        <div className="my-8">
          <AdSense slot="9889084223" format="horizontal" className="py-3" />
        </div>

        {/* Browse by Categories Section */}
        <section>
          <div className="flex items-center mb-8">
            <Briefcase className="h-6 w-6 text-blog-accent mr-2" />
            <h2 className="text-3xl font-bold">Browse Jobs by Category</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const jobCount = getCategoryJobCount(category);
              const categorySlug = createCategorySlug(category);
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link to={`/jobs/category/${categorySlug}`}>
                    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg group-hover:text-blog-accent transition-colors">
                          {category}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600 text-sm">
                            {jobCount} job{jobCount !== 1 ? 's' : ''} available
                          </span>
                          <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blog-accent transition-colors" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Bottom ad placement */}
        <div className="mt-12 mb-4">
          <AdSense slot="9889084223" format="horizontal" className="py-3" />
        </div>

        {/* Call to Action Section */}
        <section className="text-center mt-16 py-12 bg-white rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h3>
          <p className="text-gray-600 mb-6">
            Browse all available job opportunities or use our search to find specific positions.
          </p>
          <Link 
            to="/jobs"
            className="inline-flex items-center bg-blog-accent text-white px-6 py-3 rounded-lg hover:bg-blog-accent/90 transition-colors"
          >
            Browse All Jobs <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </section>
      </main>

      <footer className="border-t border-gray-300 py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center text-[#828282] text-sm">
          <p>
            &copy; {new Date().getFullYear()} denilagari. All rights reserved.
          </p>
        </div>
      </footer>
    </motion.div>
  );
};

export default MainPage;

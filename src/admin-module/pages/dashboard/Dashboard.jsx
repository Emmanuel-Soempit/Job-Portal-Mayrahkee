import { Helmet } from "react-helmet";
import {
  FaArrowTrendDown,
  FaArrowTrendUp,
  FaPlus,
} from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { RiCalendarEventLine, RiFileUserFill } from "react-icons/ri";
import { generateDateRange } from "../../../utils/formmaters";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContex";
import { useNavigate } from "react-router-dom";
import { AdminRouteContext } from "../../../context/AdminRouteContext";
import DashboardCard from "../../components/dashboard/DashboardCards";
import { BsStopwatch } from "react-icons/bs";
import { TbCalendarClock } from "react-icons/tb";
import DashboardChart from "../../components/dashboard/DashboardChart";
import UseAdminManagement from "../../../hooks/useAdminManagement";

function Dashboard() {
  const { authDetails } = useContext(AuthContext);
  const { setSideBar } = useContext(AdminRouteContext);
const {getEmployers,getCandidates,getArtisans,getDomesticStaff } = UseAdminManagement()

  const [employersCount, setEmployersCount] = useState(0);
  const [candidatesCount, setCandidatesCount] = useState(0);
  const [artisansCount, setArtisansCount] = useState(0);
  const [domesticStaffCount, setDomesticStaffCount] = useState(0);
  const [jobLearningCount, setJobLearningCount] = useState(0);

  const navigate = useNavigate();
  const navigateToPage = (route, index) => {
    navigate(route);
    setSideBar(index);
  };

  useEffect(() => {
    (async () => {
      const employers = await getEmployers();
      setEmployersCount(employers.length);

      const candidates = await getCandidates();
      setCandidatesCount(candidates.length);

      const artisans = await getArtisans();
      setArtisansCount(artisans.length);

      const domesticStaff = await getDomesticStaff();
      setDomesticStaffCount(domesticStaff.length);

      const jobLearning = await getJobLearning();
      setJobLearningCount(jobLearning.length);
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>Dashboard | Dashboard</title>
      </Helmet>
      <div className="h-full p-6 w-full text-sm text-gray-800">
        <div className="text-sm">
          <div className="flex justify-between">
            <div className="">
              <h4 className="font-bold text-2xl mb-2  ">
                Welcome back, {authDetails?.user?.first_name}{" "}
                {authDetails?.user?.surname}
              </h4>
              <p>
                Here a summary of your recent activities {generateDateRange()}
              </p>
            </div>
            <div>
              <button className="border p-2 hidden md:flex items-center">
                {" "}
                {generateDateRange()}
                <RiCalendarEventLine className="ml-2 " size={15} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            <DashboardCard
              leftIcon={<BsStopwatch />}
              title={candidatesCount}
              subtitle="Corporate Candidates"
              smallText="2% Increase Ad-hoc staff at duty posts"
              smallTextIcon={<FaPlus />}
            />
            <DashboardCard
              leftIcon={<FiUsers />}
              title={employersCount}
              subtitle="Corporate Employers"
              smallText="2 new Ad-hoc staff added"
              smallTextIcon={<FaPlus />}
            />
            <DashboardCard
              leftIcon={<BsStopwatch />}
              title={artisansCount}
              subtitle="Artisans"
              smallText="-10% Less Duty Pst"
              smallTextIcon={<FaArrowTrendUp />}
            />
            <DashboardCard
              leftIcon={<TbCalendarClock />}
              title={domesticStaffCount}
              subtitle="Domestic Staff"
              smallText="+2% Increase Ad-hoc staff at duty posts"
              smallTextIcon={<FaArrowTrendUp />}
            />
            <DashboardCard
              leftIcon={<BsStopwatch />}
              title={jobLearningCount}
              subtitle="E-learning"
              smallText="+3% increase than yesterday"
              smallTextIcon={<FaArrowTrendDown />}
              smallTextIconColor="text-red-500"
            />
            <DashboardCard
              leftIcon={<BsStopwatch />}
              title="5000"
              subtitle="Job Listing"
              smallText="10% Generated"
              smallTextIcon={<FaArrowTrendUp />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
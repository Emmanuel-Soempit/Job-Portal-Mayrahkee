import { lazy, useContext, useEffect, useReducer, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import ApplicantReducer from "../reducers/ApplicantReducer";
import {
  applicantOptions,
  companyOptions,
  adminUtilOptions,
} from "../utils/constants";
import CompanyReducer from "../reducers/CompanyReducer";
import { AuthContext } from "../context/AuthContex";
import RedirectModal from "../components/RedirectModal";
import UpdateCompanyProfileModal from "../company-module/components/company-profile/UpdateCompanyProfileModal";
import { clear } from "idb-keyval";
import useCompanyProfile from "../hooks/useCompanyProfile";
import withSubscription from "../hocs/withSubscription";
import useSubscription from "../hooks/useSubscription";
import SubscriptionModal from "../components/subscription/SubscriptionModal";

//Util Component
const NavBar = lazy(() => import("../company-module/components/NavBar"));
const SideBar = lazy(() => import("../company-module/components/SideBar"));
const SideBarItem = lazy(() =>
  import("../company-module/components/SideBarItem")
);

//Route Pages
const Home = lazy(() => import("../company-module/pages/home/Home"));
const Messages = lazy(() =>
  import("../company-module/pages/messages/Messages")
);

const Applicants = lazy(() =>
  import("../company-module/pages/applicants/Applicants")
);

const SingleApplicant = lazy(() =>
  import("../company-module/pages/applicants/SingleApplicant")
);

const JobListing = lazy(() =>
  import("../company-module/pages/job-listing/JobListing")
);
const JobType = lazy(() =>
  import("../company-module/pages/job-listing/JobType")
);
const CompanyProfile = lazy(() =>
  import("../company-module/pages/company-profile/CompanyProfile")
);

const Schedule = lazy(() =>
  import("../company-module/pages/schedule/Schedule")
);

const JobPosting = lazy(() =>
  import("../company-module/pages/job-posting/JobPosting")
);

const Settings = lazy(() =>
  import("../company-module/pages/settings/Settings")
);

const NotFound = lazy(() => import("../company-module/pages/404"));

function useCompanyRoute() {
  const [state, dispatch] = useReducer(CompanyReducer, companyOptions[0]);
  const { authDetails } = useContext(AuthContext);
  const [redirectState, setRedirectState] = useState();

  // const [redirectState, setRedirectState] = useState();
  const navigate = useNavigate();
  const companyHookProps = useCompanyProfile()

  const navigateToProfile = (setIsOpen) => {
    const profile = companyOptions[3];
    navigate(profile.route);
    dispatch({ ...profile });
    setIsOpen(false);
  };

  useEffect(() => {

    const clearDb = async() => await clear()



    return () => clearDb()
  }, []);

  return (
    <>
    <SubscriptionModal redirectState={redirectState}/>
      <main className="h-screen w-screen relative flex">
        {/* Side bar takes up 20% of total width and 100% of height */}
        <SideBar authDetails={authDetails}>
          <ul className="flex flex-col gap-[10px]">
            {companyOptions.map((currentOption) => (
              <SideBarItem
                key={currentOption.type}
                data={currentOption}
                dispatch={dispatch}
                state={state}
              />
            ))}
          </ul>

          <ul className="flex flex-col gap-[10px]">
            {adminUtilOptions.map((currentOption) => (
              <SideBarItem
                key={currentOption.type}
                data={currentOption}
                dispatch={dispatch}
                state={state}
              />
            ))}
          </ul>
        </SideBar>

        {/* Routes and dashboard take up 80% of total width and 100% of height*/}
        <div className="w-[82%] relative flex divide-y-2 divide-secondaryColor bg-white flex-col h-full">
          <UpdateCompanyProfileModal
            isOpen={redirectState}
            setIsOpen={setRedirectState}
            onInit={true}
            companyHookProps={companyHookProps}
          />
          <NavBar state={state} />
          <div className="w-full  h-[92%] overflow-y-auto">
            <Routes>
              <Route index element={<Home />} />
              <Route path="*" element={<NotFound />} />

              <Route path="messages" element={<Messages />} />
              <Route path="job-posting" element={ withSubscription(JobPosting, 'Job Posting')} />

              <Route path="applicants/*">
                <Route index element={withSubscription(Applicants, 'Applicants')} />
                <Route path="detail/:id" element={withSubscription(SingleApplicant, 'Single Applicant')} />
              </Route>

              <Route path="company-profile" element={<CompanyProfile />} />

              <Route path="job-listing/*">
                <Route index element={withSubscription(JobListing, 'Job Listing')} />
                <Route path="type/:id" element={withSubscription(JobType, 'Job Type')} />
              </Route>

              <Route path="schedule" element={<Schedule />} />

              <Route path="settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
}

export default useCompanyRoute;

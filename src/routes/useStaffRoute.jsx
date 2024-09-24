import { lazy, useContext, useEffect, useReducer, useState } from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import {
  staffOptions,
  staffUtilOptions,

} from "../utils/constants";
import { AuthContext } from "../context/AuthContex";
import { clear } from "idb-keyval";
import useCompanyProfile from "../hooks/useCompanyProfile";
import StaffReducer from "../reducers/StaffReducer";
import { StaffRouteContextProvider } from "../context/StaffRouteContextt";



//Util Component
const NavBar = lazy(() => import("../staff-module/components/NavBar"));
const SideBar = lazy(() => import("../staff-module/components/SideBar"));
const SideBarItem = lazy(() =>
  import("../staff-module/components//SideBarItem")
);


//pages
const Home = lazy(() => import('../staff-module/pages/home/Home'))
const HelpCenter = lazy(() => import('../staff-module/pages/help-center/Help'))
const Settings = lazy(() => import('../staff-module/pages/settings/Settings'))


function useStaffRoute() {
  const [state, dispatch] = useReducer(StaffReducer, staffOptions[0]);
  const { authDetails } = useContext(AuthContext);
  const [redirectState, setRedirectState] = useState();
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const toogleIsOpen = () => setIsOpen(!isOpen);


  const setSideBar = (index) => {
    const page = staffOptions[index];
    dispatch({ ...page });
  };

  useEffect(() => {
    const clearDb = async () => await clear();

    return () => clearDb();
  }, []);

  return (
    <>
     {authDetails.token ? (
        <StaffRouteContextProvider setSideBar={setSideBar}>
          <main className="h-screen w-screen relative flex">
            {/* Side bar takes up 20% of total width and 100% of height */}

            <SideBar
              authDetails={authDetails}
              toogleIsOpen={toogleIsOpen}
              isMenuOpen={isOpen}
            >
              <ul className="flex flex-col gap-[10px]">
                {staffOptions.map((currentOption) => (
                  <SideBarItem
                    key={currentOption.type}
                    data={currentOption}
                    dispatch={dispatch}
                    state={state}
                  />
                ))}
              </ul>

              <ul className="flex flex-col gap-[10px]">
                {staffUtilOptions.map((currentOption) => (
                  <SideBarItem
                    key={currentOption.type}
                    data={currentOption}
                    dispatch={dispatch}
                  />
                ))}
              </ul>
            </SideBar>

            {/* Routes and dashboard take up 80% of total width and 100% of height*/}
            <div className="md:w-[82%] w-full relative flex divide-y-2 divide-secondaryColor bg-white flex-col h-full">
              <NavBar
                state={state}
                toogleIsOpen={toogleIsOpen}
                isMenuOpen={isOpen}
              />
              <div className="w-full  h-[92%] overflow-y-auto">
                <Routes>
                  <Route index element={<Home />} />
                  {/* <Route path="*" element={<NotFound />} /> */}
                  <Route path="settings" element={<Settings />} />
                  <Route path="help-center" element={<HelpCenter />} />
                </Routes>
              </div>
            </div>
          </main>
        </StaffRouteContextProvider>
      ) : (
        <Navigate to={"/"} replace />
      )}
    </>
  );
}

export default useStaffRoute;
//Applicant icons import
import homeIcon from "../assets/pngs/home-icon.png";
import homeIconActive from "../assets/pngs/home-icon-active.png";
import messageIcon from "../assets/pngs/message-icon.png";
import messageIconActive from "../assets/pngs/message-icon-active.png";
import documentIcon from "../assets/pngs/document-icon.png";
import documentIconActive from "../assets/pngs/document-icon-active.png";
import searchIcon from "../assets/pngs/search-icon.png";
import searchIconActive from "../assets/pngs/search-icon-active.png";
import companyIcon from "../assets/pngs/company-icon.png";
import companyIconActive from "../assets/pngs/company-icon-active.png";
import profileIcon from "../assets/pngs/profile-icon.png";
import profileIconActive from "../assets/pngs/profile-icon-active.png";
import profileIconResume from "../assets/pngs/doc-resume.png";

//Company icons import
import multipleProfilesIcon from "../assets/pngs/multiple-profiles-icon.png";
import clipboardIcon from "../assets/pngs/clipboard-icon.png";
import calanderIcon from "../assets/pngs/calander-icon.png";

//utils icons import
import settingsIcon from "../assets/pngs/settings-icon.png";
import settingsIconActive from "../assets/pngs/settings-icon-active.png";
import helpIcon from "../assets/pngs/help-icon.png";
//Registration Details
import Person from "../assets/pngs/person.png";
import PersonActive from "../assets/pngs/person-active.png";
import Message from "../assets/pngs/message.png";
import MessageActive from "../assets/pngs/message-active.png";
import PersonCaptured from "../assets/pngs/person-captured.png";
import PersonWithBoard from "../assets/pngs/person-with-board.png";
import Camera from "../assets/pngs/camera.png";
import verify from "../assets/pngs/approved.png";
import upload from "../assets/pngs/document-icon.png";

// Company Profile details
import fireIcon from "../assets/pngs/fire-icon.png";
import peopleIcon from "../assets/pngs/people-icon.png";
import locationIcon from "../assets/pngs/location-icon.png";
import companyIcon2 from "../assets/pngs/company-2-icon.png";

//Socials
import twitterIcon from "../assets/pngs/twitter-icon.png";
import facebookIcon from "../assets/pngs/facebook-icon.png";
import linkedinIcon from "../assets/pngs/linkedin-icon.png";
import mailIcon from "../assets/pngs/mail-icon.png";

//Tech Stack
import bubblesIcon from "../assets/pngs/bubbles-icon.png";
import loopIcon from "../assets/pngs/loop-icon.png";
import pathscriptIcon from "../assets/pngs/pathscript-icon.png";

export const applicantOptions = [
  {
    type: "DASHBOARD",
    title: "Dashboard",
    route: "/applicant",
    icon: homeIcon,
    iconActive: homeIconActive,
  },
  {
    type: "MESSAGES",
    title: "Messages",
    route: "/applicant/messages",
    icon: messageIcon,
    iconActive: messageIconActive,
  },
  {
    type: "FIND-JOB",
    title: "Find A Job",
    route: "/applicant/find-job",
    icon: searchIcon,
    iconActive: searchIconActive,
  },
  {
    type: "APPLICATIONS",
    title: "My Applications",
    route: "/applicant/applications",
    icon: documentIcon,
    iconActive: documentIconActive,
  },
  {
    type: "COMPANIES",
    title: "Browse Companies",
    route: "/applicant/browse-companies",
    icon: companyIcon,
    iconActive: companyIconActive,
  },
  {
    type: "PROFILE",
    title: "My Public Profile",
    route: "/applicant/public-profile",
    icon: profileIcon,
    iconActive: profileIconActive,
  },
  {
    type: "RESUME",
    title: "My Resume",
    route: "/applicant/my-resume",
    icon: profileIconResume,
    iconActive: profileIconActive,
  },
];

export const companyOptions = [
  {
    type: "DASHBOARD",
    title: "Dashboard",
    route: "/company",
    icon: homeIcon,
    iconActive: homeIconActive,
  },
  {
    type: "MESSAGES",
    title: "Messages",
    route: "/company/messages",
    icon: messageIcon,
    iconActive: messageIconActive,
  },
  {
    type: "APPLICANTS",
    title: "All Applicants",
    route: "/company/applicants",
    icon: multipleProfilesIcon,
    iconActive: documentIconActive,
  },
  {
    type: "COMPANY-PROFILE",
    title: "Company Profile",
    route: "/company/company-profile",
    icon: companyIcon,
    iconActive: companyIconActive,
  },
  {
    type: "JOB-LISTING",
    title: "Job Listing",
    route: "/company/job-listing",
    icon: clipboardIcon,
    iconActive: profileIconActive,
  },
  {
    type: "SCHEDULE",
    title: "My Schedule",
    route: "/company/schedule",
    icon: calanderIcon,
    iconActive: searchIconActive,
  },

];

export const utilOptions = [
  {
    type: "ARTISAN",
    title: "Artisan",
    route: "/applicant/artisan",
    icon: clipboardIcon,
    iconActive: profileIconActive,
  },
  {
    type: "STAFFS",
    title: "Domestic Staffs",
    route: "/applicant/domestic-staffs",
    icon: calanderIcon,
    iconActive: searchIconActive,
  },
  {
    type: "SETTINGS",
    title: "Settings",
    route: "/applicant/setting",
    icon: settingsIcon,
    iconActive: settingsIconActive,
  },
  {
    type: "HELP-CENTER",
    title: "Help Center",
    route: "/applicant/help-center",
    icon: helpIcon,
    iconActive: helpIcon,
  },
  {
    type: "LOG-OUT",
    title: "Log Out",
    route: "/",
    icon: helpIcon,
    iconActive: helpIcon,
  },
];

export const adminUtilOptions = [
  {
    type: "ARTISAN",
    title: "Artisan",
    route: "/company/artisan",
    icon: clipboardIcon,
    iconActive: profileIconActive,
  },
  {
    type: "STAFFS",
    title: "Domestic Staffs",
    route: "/company/domestic-staffs",
    icon: calanderIcon,
    iconActive: searchIconActive,
  },
  {
    type: "SETTINGS",
    title: "Settings",
    route: "/company/settings",
    icon: settingsIcon,
    iconActive: settingsIconActive,
  },
  {
    type: "HELP-CENTER",
    title: "Help Center",
    route: "/company/help-center",
    icon: helpIcon,
    iconActive: helpIcon,
  },
  {
    type: "LOG-OUT",
    title: "Log Out",
    route: "/",
    icon: helpIcon,
    iconActive: helpIcon,
  },
];

export const staffOptions = [
  {
    type: "Home",
    title: "Dashboard",
    route: "/staff",
    icon: homeIcon,
    iconActive: homeIconActive,
  },
  {
    type: "profile",
    title: "Profile",
    route: "/staff/profile",
    icon: homeIcon,
    iconActive: homeIconActive,
  },
  {
    type: "verifications",
    title: "Verifications",
    route: "/staff/verifications",
    icon: clipboardIcon,
    iconActive: profileIconActive,
  },
  {
    type: "resume",
    title: "Resume",
    route: "/staff/resume",
    icon: profileIconResume,
    iconActive: profileIconActive,
  },
];

export const staffUtilOptions = [
  {
    type: "SETTINGS",
    title: "Settings",
    route: "/staff/settings",
    icon: settingsIcon,
    iconActive: settingsIconActive,
  },
  {
    type: "HELP-CENTER",
    title: "Help Center",
    route: "/staff/help-center",
    icon: helpIcon,
    iconActive: helpIcon,
  },
  {
    type: "LOG-OUT",
    title: "Log Out",
    route: "/",
    icon: helpIcon,
    iconActive: helpIcon,
  },
];

export const adminOptions = [
  {
    type: "Home",
    title: "Dashboard",
    route: "/staff",
    icon: homeIcon,
    iconActive: homeIconActive,
  }
];

export const adminnUtilOptions = [
  {
    type: "SETTINGS",
    title: "Settings",
    route: "/staff/settings",
    icon: settingsIcon,
    iconActive: settingsIconActive,
  },
  {
    type: "HELP-CENTER",
    title: "Help Center",
    route: "/staff/help-center",
    icon: helpIcon,
    iconActive: helpIcon,
  },
  {
    type: "LOG-OUT",
    title: "Log Out",
    route: "/",
    icon: helpIcon,
    iconActive: helpIcon,
  },
];

export const registration_steps_keys = {
  artisan:{
  create_account: {
    title: "User Registration",
    desc: "Enter your name, email and password.",
    activeIcon: PersonActive,
    inactiveIcon: Person,
  },
  email_verification: {
    title: "Email Verification",
    desc: "Verify your email address",
    activeIcon: MessageActive,
    inactiveIcon: Message,
  },
  person_details: {
    title: "Profile Update",
    desc: "Provide profile Pictures and job title",
    activeIcon: PersonCaptured,
    inactiveIcon: PersonCaptured,
  },
  complete_verification: {
    title: "Complete Verifications",
    desc: "Verify your details",
    activeIcon: verify,
    inactiveIcon: verify,
  },
  upload_resume: {
    title: "Upload Resume",
    desc: "Back up your profile with a standard resume",
    activeIcon: Camera,
    inactiveIcon: Camera,
  },
},
candidate:{
  create_account: {
    title: "User Registration",
    desc: "Enter your name, email and password.",
    activeIcon: PersonActive,
    inactiveIcon: Person,
  },
  email_verification: {
    title: "Email Verification",
    desc: "Verify your email address",
    activeIcon: MessageActive,
    inactiveIcon: Message,
  },
  person_details: {
    title: "Profile Update",
    desc: "Provide profile Pictures and job title",
    activeIcon: PersonCaptured,
    inactiveIcon: PersonCaptured,
  },
  upload_resume: {
    title: "Upload CV",
    desc: "Back up your profile with a standard resume",
    activeIcon: upload,
    inactiveIcon: upload,
  },
  apply_for_job: {
    title: "Apply For Job",
    desc: "Get a suitable job to invest your skill",
    activeIcon: PersonWithBoard,
    inactiveIcon: PersonWithBoard,
  },
},
employer:{ create_account: {
  title: "User Registration",
  desc: "Enter your name, email and password.",
  activeIcon: PersonActive,
  inactiveIcon: Person,
},
email_verification: {
  title: "Email Verification",
  desc: "Verify your email address",
  activeIcon: MessageActive,
  inactiveIcon: Message,
},
person_details: {
  title: "Profile Update",
  desc: "Provide profile Pictures and job title",
  activeIcon: PersonCaptured,
  inactiveIcon: PersonCaptured,
},
subscribe_to_packages: {
  title: "Subscribe To Packages",
  desc: "choose a nice package",
  activeIcon: PersonWithBoard,
  inactiveIcon: PersonWithBoard,
},
post_jobs: {
  title: "Post Jobs",
  desc:"Post a job and get the best fit employee",
  activeIcon: Camera,
  inactiveIcon: Camera,
}
},
staff:{
  create_account: {
    title: "User Registration",
    desc: "Enter your name, email and password.",
    activeIcon: PersonActive,
    inactiveIcon: Person,
  },
  email_verification: {
    title: "Email Verification",
    desc: "Verify your email address",
    activeIcon: MessageActive,
    inactiveIcon: Message,
  },
  person_details: {
    title: "Profile Update",
    desc: "Provide profile Pictures and job title",
    activeIcon: PersonCaptured,
    inactiveIcon: PersonCaptured,
  },
  complete_verification: {
    title: "Complete Verifications",
    desc: "Verify your details",
    activeIcon: verify,
    inactiveIcon: verify,
  },
  upload_resume: {
    title: "Upload Resume",
    desc: "Back up your profile with a standard resume",
    activeIcon: upload,
    inactiveIcon: upload,
  }
}};

export const company_profile_attributes = [
  {
    id: 1,
    title: "Founded",
    icon: fireIcon,
    content: "Jusly 31, 2011",
  },
  {
    id: 2,
    title: "Employees",
    icon: peopleIcon,
    content: "4000+",
  },
  {
    id: 3,
    title: "Location",
    icon: locationIcon,
    content: "20 Countries",
  },
  {
    id: 4,
    title: "Industry",
    icon: companyIcon2,
    content: "Social Media & Non-Profit",
  },
];

export const company_socials = [
  {
    id: 1,
    name: "twitter.com/Nomad",
    icon: twitterIcon,
  },
  {
    id: 2,
    name: "facebook.com/NomadHQ",
    icon: facebookIcon,
  },
  {
    id: 3,
    name: "linkedin.com/company/nomad",
    icon: linkedinIcon,
  },
  {
    id: 1,
    name: "nomad@gmail.com",
    icon: mailIcon,
  },
];

export const company_stack_socials = [
  {
    id: 1,
    name: "Bubbles",
    icon: bubblesIcon,
  },
  {
    id: 2,
    name: "Loop 3",
    icon: loopIcon,
  },
  {
    id: 3,
    name: "Pathscript",
    icon: pathscriptIcon,
  },
];

export const stages = [
  {
    name: "in-review",
    stage: "passed",
  },
  {
    name: "shortlist",
    stage: "passed",
  },
  {
    name: "interview",
    stage: "current",
  },
  {
    name: "hired/declined",
    stage: null,
  },
];

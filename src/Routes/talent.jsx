import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Messages from "../Pages/Messages/Messages";
import Header from "../Components/TalentComponents/Header/Header";
import { Footer } from "../Components/SharedComponents/footer/Footer";
import SavedJobs from "../Pages/TalentPages/SavedJobs/SavedJobs";
import Proposals from "../Pages/TalentPages/Proposals/Proposals";
import Profile from "../Pages/TalentPages/Profile/Profile";
import MyStats from "../Pages/TalentPages/MyStats/MyStats";
import MyJobs from "../Pages/TalentPages/MyJobs/MyJobs";
import AllContracts from "../Pages/TalentPages/AllContracts/AllContracts";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Reports from "../Pages/TalentPages/Reports/MyReports/MyReports";
import OverviewReports from "../Pages/TalentPages/Reports/OverviewReports/OverviewReports";
import BillingByClients from "../Pages/TalentPages/Reports/billingbyclient/billingbyclients";
import ConnectsHistory from "../Pages/TalentPages/Reports/connectshistory/connectshistory";
import BuyConnects from "../Pages/TalentPages/Reports/BuyConnects/BuyConnects";
import HomeTalent from "../Pages/TalentPages/HomeTalent/HomeTalent";
import JobDetailsTalent from "../Pages/TalentPages/JobDetailsTalent/JobDetailsTalent";
import CreateProfile from "../Pages/TalentPages/CreateProfile/CreateProfile";
import Search from "../Pages/TalentPages/Search/Search";
import EmailVerified from "../Pages/EmailVerification/EmailVerified";
import SubmitProposal from "../Pages/Submit Proposal/SubmitProposal";
import ReviewProposalsCard from "../Components/ClientComponents/ReviewProposalsCard/ReviewProposalsCard";
import { SearchContextProvider } from "../Context/SearchContext";
import PleaseVerifiy from "../Pages/EmailVerification/PleaseVerifiy";
import JobAppliedDetails from "../Pages/TalentPages/JobAppliedDetails/JobAppliedDetails";
import Contract from "../Pages/TalentPages/Contract/Contract";
import Offers from "../Pages/TalentPages/Offers/Offers";
import Notifications from '../Pages/Notifications/Notifications';

export const Talent = () => {
    const [arr, setarr] = useState([]);
    const [itemSearchList, setitemSearchList] = useState("");
    const [searchList, setsearchList] = useState([]);
    const [switchJobs, setswitchJobs] = useState("")
    return (
        <>
            <SearchContextProvider
                value={{ arr, setarr, itemSearchList, setitemSearchList, searchList, setsearchList, switchJobs, setswitchJobs }}
            >
                <Header />
                <Routes>
                    <Route path={`${process.env.PUBLIC_URL}/create-profile`} element={<CreateProfile />} />
                    <Route path={`${process.env.PUBLIC_URL}/find-work`} element={<HomeTalent />} />
                    <Route path={`${process.env.PUBLIC_URL}/Search`} element={<Search />}>
                        <Route path={":searchValue"} element={<Search />} />
                    </Route>
                    <Route path={`${process.env.PUBLIC_URL}/job/`} element={<JobDetailsTalent />}>
                        <Route path={":id"} element={<JobDetailsTalent />} />
                    </Route>
                    <Route path={`${process.env.PUBLIC_URL}/job/apply/:id`} element={<SubmitProposal />} />
                    <Route path={`${process.env.PUBLIC_URL}/job/review-proposal/:id`} element={<ReviewProposalsCard />} />
                    <Route path={`${process.env.PUBLIC_URL}/job/applied/:id`} element={<JobAppliedDetails />} />
                    <Route path={`${process.env.PUBLIC_URL}/saved-jobs`} element={<SavedJobs />} />
                    <Route path={`${process.env.PUBLIC_URL}/proposals`} element={<Proposals />} />
                    <Route path={`${process.env.PUBLIC_URL}/profile/:id`} element={<Profile />} />
                    <Route path={`${process.env.PUBLIC_URL}/email-verification`} element={<EmailVerified />} />
                    <Route path={`${process.env.PUBLIC_URL}/sign-up/please-verify`} element={<PleaseVerifiy />} />
                    <Route path={`${process.env.PUBLIC_URL}/my-stats`} element={<MyStats />} />
                    <Route path={`${process.env.PUBLIC_URL}/my-jobs`} element={<MyJobs />} />
                    <Route path={`${process.env.PUBLIC_URL}/all-contract`} element={<AllContracts />} />
                    <Route path={`${process.env.PUBLIC_URL}/offers`} element={<Offers />} />
                    <Route path={`${process.env.PUBLIC_URL}/overview`} element={<OverviewReports />} />
                    <Route path={`${process.env.PUBLIC_URL}/my-reports`} element={<Reports />} />
                    <Route path={`${process.env.PUBLIC_URL}/life-time-billing`} element={<BillingByClients />} />
                    <Route path={`${process.env.PUBLIC_URL}/connects-history`} element={<ConnectsHistory />} />
                    <Route path={`${process.env.PUBLIC_URL}/buyconnects`} element={<BuyConnects />} />
                    <Route path={`${process.env.PUBLIC_URL}/messages`} element={<Messages />} />
                    <Route path={`${process.env.PUBLIC_URL}/contract`} element={<Contract />} />
                    <Route path={`${process.env.PUBLIC_URL}/notifications`} element={<Notifications />} />
                    <Route path="**" element={<PageNotFound />} />
                </Routes>

            </SearchContextProvider>
            <Footer />
        </>
    );
}

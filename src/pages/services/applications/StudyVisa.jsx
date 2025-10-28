import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const immigrationOptions = [
    { title: "Visitor Visa", link: "/services/visa-application/visitor-visa" },
    { title: "Medical Treatment Visa", link: "/services/visa-application/medical-treatment-visa" },
    { title: "Study Visa", link: "/services/visa-application/study-visa" },
    { title: "Work Visa", link: "/services/visa-application/work-visa" },
    { title: "Business Visa", link: "/services/visa-application/business-visa" },
    { title: "Relative Visa", link: "/services/visa-application/relative-visa" },
    { title: "Retirement Visa", link: "/services/visa-application/retirement-visa" },
    { title: "Volunteer Visa", link: "/services/visa-application/volunteer-visa" },
];

const StudyVisa = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="bg-white px-[80px] py-[40px]">
            <div className="flex justify-between items-center mb-[40px] border-b border-gray-200 pb-4">
                <div className="flex items-center flex-wrap gap-2 w-[70%]">
                    {immigrationOptions.map((item, index) => {
                        const isActive = location.pathname === item.link;
                        return (
                            <a
                                key={index}
                                href={item.link}
                                className={`border border-gray-200 rounded-xl text-sm px-3 py-1 transition-all duration-300 ${isActive
                                    ? "bg-[#fdb930] text-white border-[#fdb930]"
                                    : "text-gray-700 hover:bg-[#fdb930] hover:text-white"
                                    }`}
                            >
                                {item.title}
                            </a>
                        );
                    })}
                </div>
                <button onClick={() => navigate('eligibility-test')} className="bg-[#fdb930] px-4 py-1 text-white cursor-pointer rounded-sm text-sm hover:bg-[#002e5a] duration-300 transition-all">APPLY NOW</button>
            </div>
            <div className="bg-white pb-[40px]">
                <h1 className="text-3xl font-semibold text-[#002e5a] mb-4">Study Visa</h1>
                <div className="flex flex-col gap-4 mb-4">
                    <p className="text-gray-600">Visitors Visas are for international travellers (citizens of other countries) who have permanent residence outside South Africa and who wish to visit the country on a temporary 90 day Visitor’s Visa. A Visitor Visa is usually valid for 3 months unless the visa has been applied for on other grounds. The visa can be extended for a further 3 months, as long as the application is made 60 days prior to the expiry of the current Visitor Visa and as long as there are no restrictions. A long stay Visitor Visa allows a foreign national to remain in South Africa for a period exceeding 3 months, but not exceeding 3 years.There are two kinds of Visitors Visas:</p>
                    <ul className="list-decimal ml-6 text-gray-600">
                        <li>
                            The short term Visitor Visa which is valid up to 90 days
                        </li>
                        <li>
                            The long term Visitor Visa which is exceeding a period of 3 months but not exceeding 3 years.
                        </li>
                    </ul>
                    <p className="text-gray-600">SHORT TERM VISITOR VISA candidate can apply for a short term Visitor Visa to South Africa for:</p>
                    <ul className="text-gray-600">
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            Visit to family or friends and tourism purposes
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            Business purpose
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            Conferences
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            Medical Purpose
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            Sport Events
                        </li>
                    </ul>
                    <h1 className="text-gray-600">LONG TERM VISITOR VISA</h1>
                    <p className="text-gray-600">Long-stay Visitor Visas are a collection of many visa sub-categories.A candidate could qualify for a long-stay Visa if:</p>
                    <ul className="text-gray-600">
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            You have been accepted to teach at an international school;
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            You have been supported by your educational institution to take an academic sabbatical;
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            You are accompanying your spouse or life partner who holds or qualifies for a valid Work Visa, Study Visa, Business Visa, Retirement Visa, Relatives Visa, Treaty Visa or Crew Visa;
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            If you are accompanying child/children you would also qualify on the above ground;
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            Your job is involved in film or advertisement produced in South Africa, including, but not restricted to an actor, cameraman, hairstylist, makeup artist or sound and lighting crew;
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            A foreign news agency that is requesting a journalist to cover a story in South Africa;
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            Conducting research activities with proof of financial support;
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            If you are an artist who wishes to perform, write, paint and sculpt;
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            You are a tour leader or host of such tour;
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            You are the spouse or life partner of a South African citizen/permanent resident and have been offered a job, registered to study or has opened and conduct your own business;
                        </li>
                        <li className="flex gap-2 items-center">
                            <div className="w-2 h-2 rounded-full bg-gray-700"></div>
                            You, as parents, are both foreign nationals on Temporary Residency Visas and have had a child that was born in South Africa (please note that one cannot work on this Visa).
                        </li>
                    </ul>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <button onClick={() => navigate('eligibility-test')} className="bg-[#fdb930] px-8 py-2 text-white cursor-pointer rounded-sm text-sm hover:bg-[#002e5a] duration-300 transition-all">APPLY NOW</button>
                </div>
            </div>
        </div>
    );
};

export default StudyVisa;

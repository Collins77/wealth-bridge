import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); // 👈 current path
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const services = [
    {
      title: "Visa Application Services",
      link: "/services/visa-application",
      sub: [
        { name: "Visitor Visa", link: "/services/visa-application/visitor-visa" },
        { name: "Medical Treatment Visa", link: "/services/visa-application/medical-treatment-visa" },
        { name: "Study Visa", link: "/services/visa-application/study-visa" },
        { name: "Work Visa", link: "/services/visa-application/work-visa" },
        { name: "Business Visa", link: "/services/visa-application/business-visa" },
        { name: "Retirement Visa", link: "/services/visa-application/retirement-visa" },
        { name: "Relative Visa", link: "/services/visa-application/relative-visa" },
      ],
    },
    {
      title: "Support Services",
      link: "/services/support",
      sub: [
        { name: "Form Filling Assistance", link: "/services/support/form-filling" },
        { name: "Premium Lounge Service", link: "/services/support/premium-lounge" },
        { name: "SMS Alerts", link: "/services/support/sms-alerts" },
        { name: "Courier Service", link: "/services/support/courier" },
      ],
    },
    {
      title: "Information and Guidance",
      link: "/services/information",
      sub: [
        { name: "Visa Wizard", link: "/services/information/visa-wizard" },
        { name: "Frequently Asked Questions", link: "/services/information/faqs" },
        { name: "Visa Category Information", link: "/services/information/category-info" },
      ],
    },
    {
      title: "Agency Services",
      link: "/services/agency",
      sub: [
        { name: "CIBTvisas", link: "/services/agency/cibtvisas" },
        { name: "VFS Global", link: "/services/agency/vfs-global" },
      ],
    },
  ];

  // Helper to check active route
  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <nav className="w-full bg-white border-b border-gray-200 z-50 sticky top-0 left-0">
      <div className="flex items-center justify-between h-[70px] px-6 md:px-[60px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-[60px] h-[60px]" />
          <div className="flex flex-col">
            <h1 className="font-bold uppercase text-sm text-[#002e5a]">
              Wealth Bridge Advisory Limited
            </h1>
            <p className="text-gray-500 text-[12px]">Visa Agency</p>
          </div>
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-6 text-[#414c79] font-medium">
          {["HOME", "OUR COMPANY", "SERVICES", "RESOURCES", "CONTACT US"].map((item) => {
            const path =
              item === "HOME"
                ? "/"
                : item === "OUR COMPANY"
                ? "/about-us"
                : item === "SERVICES"
                ? "/services"
                : item === "RESOURCES"
                ? "/resources"
                : "/contact";

            return item === "SERVICES" ? (
              <li
                key={item}
                className="relative group cursor-pointer"
                onMouseEnter={() => handleDropdown("services")}
                onMouseLeave={() => handleDropdown(null)}
              >
                <div
                  className={`flex items-center gap-1 transition-all ${
                    isActive("/services") ? "text-[#002e5a]" : "hover:text-[#002e5a]"
                  }`}
                >
                  {item}
                  <ChevronDown size={16} />
                </div>

                {/* Dropdown */}
                <div className="absolute left-0 top-[35px] w-[250px] bg-white shadow-lg rounded-md border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
                  {services.map((service, i) => (
                    <div key={i} className="group/sub px-4 py-2 hover:bg-gray-50 relative">
                      <a
                        href={service.link}
                        className={`flex items-center justify-between text-sm font-semibold ${
                          isActive(service.link)
                            ? "text-[#fdb930]"
                            : "text-[#002e5a] hover:text-[#fdb930]"
                        }`}
                      >
                        {service.title}
                        <ChevronDown
                          size={14}
                          className="text-gray-500 group-hover/sub:rotate-180 transition-transform"
                        />
                      </a>

                      {/* Sub-dropdown */}
                      <div className="absolute left-[250px] top-0 w-[250px] bg-white shadow-lg rounded-md border border-gray-100 hidden group-hover/sub:block">
                        {service.sub.map((subItem, j) => (
                          <a
                            key={j}
                            href={subItem.link}
                            className={`block px-4 py-2 text-sm ${
                              isActive(subItem.link)
                                ? "text-[#fdb930]"
                                : "text-gray-700 hover:text-[#002e5a]"
                            }`}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom border highlight */}
                <div
                  className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#fdb930] transition-all ${
                    isActive("/services") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></div>
              </li>
            ) : (
              <li key={item} className="relative group">
                <a
                  href={path}
                  className={`transition-all ${
                    isActive(path)
                      ? "text-[#002e5a] font-semibold"
                      : "hover:text-[#002e5a]"
                  }`}
                >
                  {item}
                </a>
                <div
                  className={`absolute left-0 bottom-[-4px] h-[2px] bg-[#fdb930] transition-all ${
                    isActive(path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></div>
              </li>
            );
          })}
          <button
            onClick={() => navigate("eligibility-assesment")}
            className="bg-[#002e5a] px-3 py-1 text-white rounded-sm transition-all duration-300 hover:bg-transparent hover:text-[#002e5a] hover:border hover:border-[#002e5a] ml-4 cursor-pointer"
          >
            GET STARTED
          </button>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 flex flex-col items-start px-6 py-4 gap-3">
          <a
            href="/"
            className={`${isActive("/") ? "text-[#002e5a] font-semibold" : "hover:text-[#002e5a]"}`}
          >
            HOME
          </a>
          <a
            href="/about-us"
            className={`${isActive("/about-us") ? "text-[#002e5a] font-semibold" : "hover:text-[#002e5a]"}`}
          >
            OUR COMPANY
          </a>

          {/* Services Dropdown Mobile */}
          <div className="w-full">
            <button
              onClick={() => handleDropdown("mobileServices")}
              className="flex items-center justify-between w-full text-left hover:text-[#002e5a]"
            >
              SERVICES
              <ChevronDown
                size={18}
                className={`transition-transform ${
                  openDropdown === "mobileServices" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openDropdown === "mobileServices" && (
              <div className="pl-4 mt-2 flex flex-col gap-2">
                {services.map((service, i) => (
                  <div key={i}>
                    <a
                      href={service.link}
                      className={`font-semibold text-sm ${
                        isActive(service.link)
                          ? "text-[#fdb930]"
                          : "text-[#002e5a]"
                      }`}
                    >
                      {service.title}
                    </a>
                    <ul className="pl-4 mt-1 flex flex-col gap-1">
                      {service.sub.map((subItem, j) => (
                        <li key={j}>
                          <a
                            href={subItem.link}
                            className={`text-sm ${
                              isActive(subItem.link)
                                ? "text-[#fdb930]"
                                : "text-gray-700 hover:text-[#002e5a]"
                            }`}
                          >
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>

          <a
            href="/resources"
            className={`${isActive("/resources") ? "text-[#002e5a] font-semibold" : "hover:text-[#002e5a]"}`}
          >
            RESOURCES
          </a>
          <a
            href="/contact"
            className={`${isActive("/contact") ? "text-[#002e5a] font-semibold" : "hover:text-[#002e5a]"}`}
          >
            CONTACT US
          </a>
          <button
            onClick={() => {
              navigate("eligibility-assesment");
              setMobileMenuOpen(false);
            }}
            className="bg-[#002e5a] px-3 py-1 text-white rounded-sm transition-all duration-300 hover:bg-transparent hover:text-[#002e5a] hover:border hover:border-[#002e5a] mt-2"
          >
            GET STARTED
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

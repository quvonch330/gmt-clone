import React, { useState } from "react";
import { products } from "../../public/data";
import { FaChevronRight } from "react-icons/fa6";
import { useParams, useLocation, Link } from "react-router-dom";
import { Button, Breadcrumbs, Typography } from "@mui/material";
import { categories } from "../../public/data";
import { NavLink } from "react-router-dom";
import { Comprehensive } from "../components/Home/Comprehensive";
import { ProductsWrapper } from "../components/Home/ProductsWrapper";
import { Clients } from "../components/Home/Clients";
import { Brands } from "../components/Home/Brands";
import { About } from "../components/Home/About";
import { News } from "../components/Home/News";
import { Form } from "../components/Home/Form";
import { Footerhero } from "../components/Home/Footerhero";
import { Offers } from "../components/Home/Offers";
const Catalog = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);
  const project_1 = products.find((p) => p.id === 61);
  const project_2 = products.find((p) => p.id === 62);
  const project_3 = products.find((p) => p.id === 63);
  const project_4 = products.find((p) => p.id === 64);
  const project_5 = products.find((p) => p.id === 65);
  const project_6 = products.find((p) => p.id === 66);
  const project_7 = products.find((p) => p.id === 67);
  const project_8 = products.find((p) => p.id === 68);
  const project_9 = products.find((p) => p.id === 69);
  const project_10 = products.find((p) => p.id === 70);

  return (
    <div className="bg-color">
      <article className="bg-color pt-[20px]">
        <div className="max-w-[1440px] w-full mx-auto px-[65px]">
          <Breadcrumbs aria-label="breadcrumb" sx={{ margin: "20px 0px" }}>
            <Link to="/" className="text-decoration-none text-color-inherit">
              Home
            </Link>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join("/")}`;

              return last ? (
                <Typography color="textPrimary" key={to}>
                  {value}
                </Typography>
              ) : (
                <Link
                  to={to}
                  key={to}
                  className="text-decoration-none text-color-inherit"
                >
                  {value}
                </Link>
              );
            })}
          </Breadcrumbs>
          <div className="mt-[19px]  relative flex space-x-[10px] flex-row items-start justify-start leading-[normal] tracking-[normal]">
            <main className="flex-1 rounded-3xs flex flex-col items-start justify-start pt-[13px] pb-[15px] pr-[13px] pl-[19px] gap-[12px] text-left text-sm text-[#202020] font-l2 border-[1px] border-solid border-[#E5E2EE]">
              <div className="w-80 h-[595px] relative rounded-3xs box-border hidden border-[1px] border-solid border-[#E5E2EE]" />
              <div className="flex flex-row items-start justify-start pt-0 pb-[3px] pr-5 pl-0 text-base">
                <div className="relative leading-[140%] font-medium inline-block min-w-[104px] z-[1]">
                  Направления
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-2 pr-1.5 pl-0">
                <div className="h-px flex-1 relative bg-[#E5E2EE] z-[1]" />
              </div>
              <section className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[5px] gap-[12px] text-left text-sm text-[#202020] font-l2">
                {categories.map((category, index) => (
                  <NavLink
                    to={`/catalog/${category}`}
                    key={index}
                    className={` hover:text-[#088269] cursor-pointer duration-200 self-stretch flex flex-row items-start justify-between gap-[20px] z-[1]`}
                  >
                    <div className={`relative inline-block min-w-[83px]`}>
                      {category}
                    </div>
                    <p className={`text-[13px] duration-200`}>
                      <FaChevronRight />
                    </p>
                  </NavLink>
                ))}
              </section>
            </main>
            <section className="h-[1246px] max-w-[981px] w-full grid grid-cols-3 grid-rows-4 gap-[10px]">
              <NavLink
                to={`/product/${project_1.id}`}
                className="row-span-1 col-span-1 h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%] bg-white w-full flex justify-center items-center">
                  <img
                    src={project_1.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {project_1.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${project_2.id}`}
                className="row-span-1 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%]  bg-white w-full flex justify-center items-center">
                  <img
                    src={project_2.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {project_2.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${project_3.id}`}
                className="row-span-2 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[88%] bg-white w-full flex justify-center items-center">
                  <img
                    src={project_3.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {project_3.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${project_4.id}`}
                className="row-span-1 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%] bg-white w-full flex justify-center items-center">
                  <img
                    src={project_4.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {project_4.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${project_5.id}`}
                className="row-span-1 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%] bg-white w-full flex justify-center items-center">
                  <img
                    src={project_5.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {project_5.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${project_6.id}`}
                className="row-span-2 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[88%]  bg-white w-full flex justify-center items-center">
                  <img
                    src={project_6.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {project_6.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${project_7.id}`}
                className="row-span-1 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%]  bg-white w-full flex justify-center items-center">
                  <img
                    src={project_7.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {project_7.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${project_8.id}`}
                className="row-span-1 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%]  bg-white w-full flex justify-center items-center">
                  <img
                    src={project_8.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {project_8.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${project_9.id}`}
                className="row-span-1 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%]  bg-white w-full flex justify-center items-center">
                  <img
                    src={project_9.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {project_9.name}
                </div>
              </NavLink>
              <NavLink
                to={`/product/${project_10.id}`}
                className="row-span-1 col-span-1  h-auto rounded-[10px] cursor-pointer overflow-hidden border-[#E5E2EE] border"
              >
                <div className="h-[75%]  bg-white w-full flex justify-center items-center">
                  <img
                    src={project_10.img}
                    className="h-[90%] w-full object-contain"
                    alt=""
                  />
                </div>
                <div className="h-[84px]  border-t border-[#E5E2EE] pt-[25px] pl-[25px]">
                  {project_10.name}
                </div>
              </NavLink>
            </section>
          </div>
        </div>
      </article>
      <div className="mx-auto w-[1440px]">
        <Comprehensive />
      </div>
      <div className="mx-auto w-[1440px]">
        <Offers />
      </div>
      <ProductsWrapper />
      <Clients />
      <Brands />
      <About />
      <News />
      <div className="mx-auto w-[1440px]">
        <Form />
      </div>
      <Footerhero />
    </div>
  );
};

export default Catalog;

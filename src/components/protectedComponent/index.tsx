// @ts-nocheck
"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { DUMMY_DATA } from "../../../dummyData";

const ProtectedComponent = (props: any) => {
  const router = useRouter();
  const pathname = usePathname();
  const queries = useSearchParams();
  // behavior
  // check url
  // if there is data about eventcode and user email --> get data --> save all data to session storage
  // else check in session storage
  // else --> redirect to homepage
  useEffect(() => {
    // console.log(pathname, queries.get("eventcode"));
    if (!queries.get("eventcode") || !queries.get("guestemail")) {
      const storedData = JSON.parse(sessionStorage.getItem("allData"));
    //   console.log(storedData);
      if (!storedData?.eventcode || !storedData?.guestemail) {
        router.push("/");
      } else {
        // console.log("storedData", storedData);
      }
    } else {
      const findData = DUMMY_DATA[0];
    //   console.log("go here");
      sessionStorage.setItem(
        "allData",
        JSON.stringify({
          eventcode: queries.get("eventcode"),
          guestemail: queries.get("guestemail"),
          findData
        })
      );
    }
  }, [pathname, queries]);
  return <></>;
};

export default ProtectedComponent;

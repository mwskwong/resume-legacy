import { Dispatch, SetStateAction, useEffect, useMemo, useState, useTransition } from "react";

import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

type UseCourseCategory = (initialCourseCategory: string) => [string, Dispatch<SetStateAction<string>>]

const useCourseCategory: UseCourseCategory = initialCourseCategory => {
  const [, startTransition] = useTransition();
  const { search } = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const [courseCategory, setCourseCategory] = useState(searchParams.get("courseCategory") ?? initialCourseCategory);

  useEffect(() => {
    startTransition(() => {
      if (courseCategory === "All") {
        navigate(".", { replace: true });
      } else {
        searchParams.set("courseCategory", courseCategory);
        navigate(`?${searchParams}`, { replace: true });
      }
    });
  }, [courseCategory, searchParams]);

  return [courseCategory, setCourseCategory];
};

export default useCourseCategory;
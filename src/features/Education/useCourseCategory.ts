import { Dispatch, SetStateAction, useEffect, useMemo, useState, useTransition } from "react";

import { navigate } from "gatsby";
import { useLocation } from "@reach/router";

type UseCourseCategory = (initialValue: string) => [string, Dispatch<SetStateAction<string>>]

const useCourseCategory: UseCourseCategory = initialValue => {
  const [, startTransition] = useTransition();
  const { pathname, hash, search } = useLocation();
  const searchParams = useMemo(() => new URLSearchParams(search), [search]);
  const [courseCategory, setCourseCategory] = useState(searchParams.get("courseCategory") ?? initialValue);

  useEffect(() => {
    // TODO: This causes hydration errors.
    startTransition(() => {
      searchParams.set("courseCategory", courseCategory);
      navigate(`${pathname}?${searchParams.toString()}`, { replace: true });
    });
  }, [courseCategory, hash, pathname, searchParams]);

  return [courseCategory, setCourseCategory];
};

export default useCourseCategory;
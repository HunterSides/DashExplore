import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

const queryKey = useMemo(
  () => ["listings", category, location],
  [category, location]
);

const { data: listings, isLoading } = useQuery(queryKey, async () => {
  const response = await fetch("http://localhost:3000/api/listings");
  return response.json();
});

const { data: listings, isLoading } = useQuery(["listings"], async () => {
  const response = await fetch("http://localhost:3000/api/listings");
  return response.json();
});

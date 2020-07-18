import { useRouter } from "next/router";
import { useEffect } from "react";

export default () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/dashboard");
  });

  return null;
};

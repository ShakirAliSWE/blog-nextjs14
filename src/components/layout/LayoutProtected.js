import { UserContext } from "@/context/UserContext";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";

const LayoutProtected = ({ children }) => {
  const router = useRouter();
  const { authenticated } = useContext(UserContext);

  useEffect(() => {
    if (!authenticated) {
      router.push("../login");
    }
  }, [authenticated]);

  return children;
};

export default LayoutProtected;

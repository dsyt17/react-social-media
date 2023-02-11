import { Navigate } from "react-router-dom";

export default function useRedirect(condition: boolean, route: string) {
  if (condition) {
    <Navigate to={`/${route}`} />;
  }
}

import { Navigate } from "react-router-dom";

export default function useRedirect(condition, route) {
  if (condition) {
    <Navigate to={`/${route}`} />;
  }
}

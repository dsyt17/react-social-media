import React, { useEffect } from "react";

const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useDocumentTitle;

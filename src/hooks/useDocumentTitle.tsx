import { useLayoutEffect } from "react";

const useDocumentTitle = (title = "Três Brinde - Loja Online de Publicidade") => {
  useLayoutEffect(() => {
    document.title = title;
  }, [title]);
};

export default useDocumentTitle;

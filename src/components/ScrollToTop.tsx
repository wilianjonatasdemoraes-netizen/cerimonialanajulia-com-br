import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Rola para o topo ao trocar de rota (mantém âncoras #secao funcionando). */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;

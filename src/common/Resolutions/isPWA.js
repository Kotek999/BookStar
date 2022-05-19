const isPWA = () =>
    window &&
        window.matchMedia &&
        window.matchMedia("(display-mode: standalone)").matches
        ? true
        : false;
export default isPWA;
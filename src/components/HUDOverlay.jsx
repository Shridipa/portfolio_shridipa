import { motion } from "framer-motion";

const HUDOverlay = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
            <div className="magic-dust" />
        </div>
    );
};

export default HUDOverlay;

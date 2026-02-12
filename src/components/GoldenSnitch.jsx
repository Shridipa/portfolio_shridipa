

const GoldenSnitch = () => {
    return (
        <div
            className="absolute z-0 pointer-events-none"
            style={{ 
                right: "-5%", 
                top: "5%", 
                width: "600px", 
                height: "600px" 
            }}
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <img 
                    src="/src/assets/hogwarts_photo.png" 
                    alt="Hogwarts Crest" 
                    className="w-full h-full object-contain opacity-90 drop-shadow-[0_0_50px_rgba(212,175,55,0.4)] filter brightness-110 contrast-125"
                />
                {/* Radiant Aura */}
                <div className="absolute inset-0 bg-gryffindor-gold/10 blur-[100px] rounded-full scale-75 animate-pulse -z-10" />
            </div>
        </div>
    );
};

export default GoldenSnitch;

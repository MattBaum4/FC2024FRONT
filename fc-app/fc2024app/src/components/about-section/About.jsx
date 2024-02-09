import "./About.css";

const AboutSection = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-txt">
          <p>
            Experience <span id="preem">premium</span> automotive detailing
            delivered right to your driveway!
          </p>
          <p>Proudly serving Franklin Tennessee since 2019</p>
        </div>
      </div>
      <div className="dtl-container">
        <div className="complete-dtl-txt">
          <p>THE COMPLETE DETAIL</p>
        </div>
        </div>
        
        <div className="services-container">
        <div className="int-container">
          <div className="int-txt">
            <p className="int-ext-txt">Interior</p>
            <p>FULL VACUUM</p>
            <p>DASH AND CONSOLE</p>
            <p>ALL GLASS</p>
            <p>STEAM CLEAN</p>
            <p>CARPET SPOT TREATMENT</p>
            <p>ODOR ELIMINATION</p>
            <p>HEADLINER & SUNVISOR</p>
            <p>UV PROTECTION</p>
          </div>
        </div>

        <div className="ext-container">
            <div className="ext-txt">
                <p className="int-ext-txt">Exterior</p>
                <p>FOAM CANNON</p>
                <p>BUG & TAR REMOVAL</p>
                <p>IRON REMOVAL</p>
                <p>WHEELS</p>
                <p>TIRES</p>
                <p>DOOR JAMBS</p>
                <p>CLAY BAR</p>
                <p>WAX PROTECTANT</p>
            </div>
        </div>

        </div>
        
      
    </>
  );
};

export default AboutSection;

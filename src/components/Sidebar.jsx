import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

//import Avatar from "../img/eu.jpg";
//import Avatar from "../img/eu.jpeg";
import Avatar from "../img/eu1.png";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gleidson Queiroz" />
      <p className="title">FUTURO = &gt; FULL STACK DEVELOPER
</p>
      <SocialNetworkContainer />
      <InformationContainer />
      <a href="#" className="btn">
        Download currículo em PDF
      </a>
    </aside>
  );
};

export default Sidebar;

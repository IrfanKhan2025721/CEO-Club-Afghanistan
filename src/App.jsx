import { BrowserRouter, Routes, Route } from "react-router-dom";

// Home page components
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Home/HeroSection";
import TrustedBy from "./Components/Home/TrustedBy";
import Leadership from "./Components/Home/Leadership/Leadership";
import Counter from "./Components/Home/Counter";
import InspiringLeaders from "./Components/Home/InspiringLeaders/InspiringLeaders";
import JoinTeam from "./Components/Home/JoinTeam";

// About page components
import AboutHero from "./Components/AboutPage/AboutHero";
import WhoWeAre from "./Components/AboutPage/WhoWeAre";
import OurMission from "./Components/AboutPage/OurMission";
import Existance from "./Components/AboutPage/Existance";
import OurApproach from "./Components/AboutPage/OurApproach";
import LeaderShip from "./Components/AboutPage/Leadership/LeaderShip";
import JoinLeaderShip from "./Components/AboutPage/JoinLeaderShip";

// Members page components
import MembersHero from "./Components/MembersPage/MemberHero";
import ClubMember from "./Components/MembersPage/ClubMembers/ClubMember";
import DistinguishedMembers from "./Components/MembersPage/DistinguishedMembers";

// Events page components
import EventsHero from "./Components/EventPage/EventHero";
import OurStory from "./Components/EventPage/OurStory";
import Speaker from "./Components/EventPage/Ourspeakers/Speaker";
import UpcomingEvent from "./Components/EventPage/UpcomingEvents/UpcomingEvent";
import Map from "./Components/EventPage/Map";
import PastEvent from "./Components/EventPage/PastEvents/PastEvent";

// Contact page components
import ContactHero from "./Components/ContactPage/ContactHero";
import ContactForm from "./Components/ContactPage/Form";

// Join club page components
import JoinForm from "./Components/JoinClub/JoinClub";

// Footer
import Footer from "./Components/Footer/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <TrustedBy />
              <Leadership />
              <Counter />
              <InspiringLeaders />
              <JoinTeam />
            </>
          }
        />

        {/* About Page */}
        <Route
          path="/about"
          element={
            <>
              <AboutHero />
              <WhoWeAre />
              <OurMission />
              <Existance />
              <OurApproach />
              <LeaderShip />
              <JoinLeaderShip />
            </>
          }
        />

        {/* Members Page */}
        <Route
          path="/members"
          element={
            <>
              <MembersHero />
              <ClubMember />
              <DistinguishedMembers />
            </>
          }
        />

        {/* Events Page */}
        <Route
          path="/events"
          element={
            <>
              <EventsHero />
              <OurStory />
              <Speaker />
              <UpcomingEvent />
              <Map />
              <PastEvent />
            </>
          }
        />

        {/* Contact Page */}
        <Route
          path="/contact"
          element={
            <>
              <ContactHero />
              <ContactForm />
            </>
          }
        />

        {/* Join Club Page */}
        <Route path="/join-club" element={<JoinForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

import { Blog, Contact, Hero, Portfolio, Resume, Service, Skill, Testimonial } from "../utils/Router";

export const Home = () => {
  return (
    <>
      <Hero />
      <Service />
      <Portfolio />
      <Resume />
      <Skill />
      <Testimonial />
      <Blog />
      <Contact />
    </>
  );
};

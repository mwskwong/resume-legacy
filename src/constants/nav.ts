import { SectionId } from "types";

type Section = {
  id: SectionId,
  name: string
}

export const HOME: Section = { id: "home", name: "Home" };
export const ABOUT: Section = { id: "about", name: "About" };
export const WORK: Section = { id: "work", name: "Work" };
export const EDUCATION: Section = { id: "education", name: "Education" };
export const TESTIMONIAL: Section = { id: "testimonial", name: "Testimonial" };
export const CONTACT: Section = { id: "contact", name: "Contact" };

export default {
  HOME,
  ABOUT,
  TESTIMONIAL,
  WORK,
  EDUCATION,
  CONTACT
};
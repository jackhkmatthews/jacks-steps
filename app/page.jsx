import { Header } from "./header";
import { Carousel } from "./carousel";

const testimonials = [
  {
    content: `"Best steps I've ever seen." - Jack, London`,
    likes: 1,
    currentViewerHasLiked: false,
  },
  {
    content: `"Couldn't believe my eyes!" - Kjell, Sweden`,
    likes: 3,
    currentViewerHasLiked: false,
  },
  {
    content: `"Is he still banging on about those steps?" - Laura, London`,
    likes: 8,
    currentViewerHasLiked: false,
  },
];

export default function Homepage() {
  return (
    <div style={{ backgroundColor: "pink", padding: "0 1em 1em" }}>
      <Header title="Jack's Steps" />
      <Carousel title="Testimonials" slides={testimonials} />
    </div>
  );
}

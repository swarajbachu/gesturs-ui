import PopImage from "@/components/gesturs/link-image";

export default function PopImagesParagraph() {
  return (
    <div className="py-12 w-full grid place-content-center ">
      <p className="text-lg font-semibold text-muted-foreground max-w-3xl text-balance">
        Hi there! I&apos;m currently working on an exciting React project where
        I&apos;m using Framer Motion and{" "}
        <PopImage
          url="#"
          image={{
            alt: "tailwind css",
            src: "https://img.freepik.com/free-photo/html-css-collage-concept_23-2150061955.jpg",
          }}
          className="text-primary/90 group-hover:text-foreground"
        >
          Tailwind CSS
        </PopImage>{" "}
        to create stunning animations and{" "}
        <PopImage
          url="#"
          image={{
            alt: "sleek images",
            src: "https://images.unsplash.com/photo-1602576666092-bf6447a729fc",
          }}
          image2={{
            alt: "sleek images",
            src: "https://images.unsplash.com/photo-1558655146-d09347e92766",
          }}
          className="text-primary/90 group-hover:text-foreground"
        >
          Sleek UI Designs.
        </PopImage>{" "}
        Right now, I&apos;m focused on creating a reusable component that will
        display image that pops out when hovered
      </p>
    </div>
  );
}

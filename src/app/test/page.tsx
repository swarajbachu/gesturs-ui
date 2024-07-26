import PopImage from "@/components/gesturs/pop-image";

export default function PopImagesParagraph() {
  return (
    <div className="h-screen w-screen grid place-content-center ">
      <p className="text-lg font-semibold text-muted-foreground max-w-3xl text-balance">
        Hi there! I&apos;m currently working on an exciting React project where
        I&apos;m using Framer Motion and Tailwind CSS to create stunning
        animations and{" "}
        <PopImage
          url="#"
          image={{
            alt: "sleek images",
            src: "https://images.unsplash.com/photo-1602576666092-bf6447a729fc",
          }}
          image2={{
            alt: "sleek images",
            src: "https://images.unsplash.com/photo-1602576666092-bf6447a729fc",
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

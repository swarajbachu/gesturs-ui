// import  PopImage  from "@/components/gesturs/pop-image";


// export default function RevealImageList() {
//     const items = [
//       {
//         text: "Branding",
//         images:
//           {
//             src: "https://images.unsplash.com/photo-1512295767273-ac109ac3acfa?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//             alt: "Image 1",
//           },

//       },
//       {
//         text: "Web design",
//         images: 
//           {
//             src: "https://images.unsplash.com/photo-1587440871875-191322ee64b0?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//             alt: "Image 1",
//           },

//       },
//       {
//         text: "Illustration",
//         images: 
//           {
//             src: "https://images.unsplash.com/photo-1575995872537-3793d29d972c?w=200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
//             alt: "Image 1",
//           },

//       },
//     ];
  
//     return (
//       <div className="flex flex-col gap-1 rounded-sm bg-background px-8 py-4">
//         <h3 className="text-sm font-black uppercase text-muted-foreground">Our services</h3>
//         {items.map((item, index) => (
//           <PopImage key={index} text={item.text} image={item.images} />
//         ))}
//       </div>
//     );
//   }
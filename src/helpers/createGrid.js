import Image from "../components/Image";

export default function createGrid(input) {
  const images = input.map((image, index) => {
    if (image.links) {
      return (<Image 
        key={index}
        description={image.data[0].description}
        title={image.data[0].title}
        date={image.data[0].date_created}
        src={(image.links[0].href)} />);
    }
  });
  return images;
}
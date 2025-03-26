import Button from "@/app/components/Button";
import Image from "next/image";
import thumbImage from "@/public/images/nature-image.jpg";

const Mission = () => {
  return (
    <div>
      <div className="mt-10 space-y-2">
        <h1>This is Mission Page</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          ut facilis doloremque deserunt soluta minus reiciendis, exercitationem
          ab quae nostrum odio voluptatibus! Nesciunt ab possimus repudiandae!
          Accusamus consectetur magni repudiandae.
        </p>
      </div>

      <Image
        src={thumbImage}
        placeholder="blur"
        quality={40}
        alt="this is nature image"
      />

      <Button />
    </div>
  );
};

export default Mission;

export const metadata = {
  title: "Mission Page",
  description: "This is Mission Page",
};

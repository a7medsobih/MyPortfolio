import { useRef } from 'react';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const ProjectImage = ({ images, altText }) => {
    const imgRef = useRef(null);

    // Hover animation
    const handleMouseEnter = () => {
        const image = imgRef.current;
        if (!image) return;

        const scrollDistance = image.scrollHeight - image.parentElement.clientHeight;
        if (scrollDistance <= 0) return;

        image.style.transition = 'transform 3s ease-out';
        image.style.transform = `translateY(-${scrollDistance}px)`;
    };

    const handleMouseLeave = () => {
        const image = imgRef.current;
        if (!image) return;

        image.style.transition = 'transform 1.5s ease-out';
        image.style.transform = 'translateY(0)';
    };

    // OPEN GALLERY ON CLICK
    const openGallery = () => {
        Fancybox.show(
            images.map((src) => ({
                src,
                type: "image",
            }))
        );
    };
    return (
        <>
            <div
                className="relative w-full h-48 image-wrapper overflow-hidden cursor-pointer rounded-t-2xl "
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={openGallery}
            >
                <img
                    ref={imgRef}
                    src={images[0]} //// أول صورة تظهر في الكارت
                    alt={altText || "Project Thumbnail"}
                    loading="lazy"
                    className="absolute top-0 left-0 w-full h-auto object-top "
                />
            </div>

        </>
    )
}

export default ProjectImage
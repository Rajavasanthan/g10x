import blogOneImg from '../../public/images/blog-img1.jpg'
import blogTwoImg from '../../public/images/blog-img2.png'
import blogThreeImg from '../../public/images/blog-img3.png'
import blogFourImg from "../../public/images/blog-img4.png";

export function useBlogsData() {
    return [
        {
            id: 1,
            fileName: "the-ritual-of-startup-naming",
            title: "The ritual of startup naming",
            description: "In my one note, I literally do have 30+ ideas and have few dozen domains registered.",
            image: blogOneImg
        },
        {
            id: 2,
            fileName: "your-startup-is-not-about-the-idea-its-something",
            title: "Your Startup Is Not About the Idea…",
            description: "When we think about startups, we often obsess over the idea. We believe the magic",
            image: blogTwoImg
        },
        {
            id: 3,
            fileName: "beyond-the-hype-debunking-the-5-most-common-myths",
            title: "Beyond the Hype : Debunking...",
            description: "For any entrepreneur, the journey from a spark of an idea to a thriving business",
            image: blogThreeImg
        },
        {
            id: 4,
            fileName: "entrepreneurship-vs-startups-a-beginners-guide",
            title: "Entrepreneurship vs. Startups...",
            description: "When I started my company some of the meetups people asked me, yours is a startup",
            image: blogFourImg
        }
    ];
}

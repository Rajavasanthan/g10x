import blogOneImg from '../../public/images/blog-img1.jpg'
import menImg from "../../public/images/men-img.jpg";

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
            image: menImg
        },
        {
            id: 3,
            fileName: "breaking-barriers-arun-kumars-visionary-journey-visually-challenged-ml-expert",
            title: "Founder Playbooks",
            description: "Real stories, hard lessons, and proven methods from entrepreneurs who've been there.",
            image: menImg
        },
        {
            id: 4,
            fileName: "google-developers-student-club-organizes-tech-event-vit-chennai-campus",
            title: "Global Startup Trends",
            description: "Stay tuned to what's happening across ecosystems — from Silicon Valley to Singapore.",
            image: menImg
        }
    ];
}

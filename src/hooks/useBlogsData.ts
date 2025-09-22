import blogOneImg from '../../public/images/blog-img1.jpg'
import menImg from "../../public/images/men-img.jpg";

export function useBlogsData() {
    return [
        {
            id: 1,
            fileName: "the-ritual-of-startup-naming",
            title: "The ritual of startup naming",
            description: "In my one note, I literally do have 30+ ideas and have few dozen domains registered.",
            date: "21/09/2025",
            image: blogOneImg
        },
        {
            id: 2,
            fileName: "how-to-use-ai-in-your-daily-life",
            title: "Funding & Growth",
            description: "Explore how AI, quantum, and space tech are reshaping tomorrow's industries.",
            date: "13/04/2025",
            image: menImg
        },
        {
            id: 3,
            fileName: "breaking-barriers-arun-kumars-visionary-journey-visually-challenged-ml-expert",
            title: "Founder Playbooks",
            description: "Real stories, hard lessons, and proven methods from entrepreneurs who've been there.",
            date: "27/05/2023",
            image: menImg
        },
        {
            id: 4,
            fileName: "google-developers-student-club-organizes-tech-event-vit-chennai-campus",
            title: "Global Startup Trends",
            description: "Stay tuned to what's happening across ecosystems — from Silicon Valley to Singapore.",
            date: "08/03/2023",
            image: menImg
        }
    ];
}

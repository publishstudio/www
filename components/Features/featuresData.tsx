import { Feature } from "@/types/feature";
import { BsFillKanbanFill } from "react-icons/bs";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaRobot } from "react-icons/fa6";
import { GiBrainstorm } from "react-icons/gi";
import { LuImport } from "react-icons/lu";
import { MdPermMedia, MdWysiwyg } from "react-icons/md";
import { RiCalendarScheduleFill, RiChatVoiceFill } from "react-icons/ri";
import { TbBinaryTree2 } from "react-icons/tb";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <MdWysiwyg size={40} />,
    title: "Powerful WYSIWYG Editor",
    paragraph:
      "Experience seamless writing with our intuitive WYSIWYG editor. It's designed to let you focus on your content without distractions.",
  },
  {
    id: 2,
    icon: <TbBinaryTree2 size={40} />,
    title: "Publish to multiple platforms",
    paragraph:
      "Publish Studio seamlessly connects with Medium, Dev.to, Hashnode, WordPress, Blogger, and Ghost. Reach your audience on all their favorite platforms with a single click.",
  },
  {
    id: 3,
    icon: <BsFillKanbanFill size={40} />,
    title: "Content Planner",
    paragraph:
      "Stay organized with our built-in Kanban board. Plan, organize, and manage your content calendar with ease.",
  },
  {
    id: 4,
    icon: <GiBrainstorm size={40} />,
    title: "Brainstorm",
    paragraph:
      "Generate New Ideas Based on Your Past Content, Categories, and Topics.",
  },
  {
    id: 5,
    icon: <LuImport size={40} />,
    title: "Import Content",
    paragraph:
      "Import content from anywhere and organize it all in one central location. Publish Studio keeps your content library tidy and accessible.",
  },
  {
    id: 6,
    icon: <FaRobot size={40} />,
    title: "Generative AI",
    paragraph:
      "Writer's block? No problem! Our generative AI helps you brainstorm, craft compelling copy, and perfect your writing with ease.",
  },
  {
    id: 7,
    icon: <MdPermMedia size={40} />,
    title: "Integrated Media Tools",
    paragraph:
      "Publish Studio integrates with industry-leading media tools like Cloudinary, Imagekit, Pixels, and Unsplash. Find, manage, and insert stunning visuals directly within the platform - no switching back and forth required!",
  },
  {
    id: 8,
    icon: <RiCalendarScheduleFill size={40} />,
    title: "Schedule Posts",
    paragraph:
      "Plan your content calendar with ease. Schedule your posts to go live at the perfect time, and let Publish Studio take care of the rest.",
  },
  {
    id: 9,
    icon: <RiChatVoiceFill size={40} />,
    title: "Tone Analyzer",
    paragraph:
      "Ensure your message lands perfectly. Publish Studio's built-in tone analyzer helps you fine-tune your writing to resonate with your audience.",
  },
  {
    id: 10,
    icon: <FaMicrophoneAlt size={40} />,
    title: "Voice Typing",
    paragraph:
      "Let your voice do the typing. Our voice typing feature allows you to dictate your content, making writing faster and more convenient. Capture your ideas as they come, without missing a beat.",
  },
];
export default featuresData;

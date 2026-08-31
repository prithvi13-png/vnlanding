import { CloudIcon, CodeIcon, LayersIcon, PhoneIcon, SparkleIcon, WorkflowIcon } from "@/components/icons";
import type { ITService } from "@/types/itService";

export const itServices: ITService[] = [
  {
    id: "web-development",
    name: "Web Development",
    icon: CodeIcon,
    description: "Modern websites and scalable web applications.",
    hoverMotion: "shift-x",
  },
  {
    id: "mobile-apps",
    name: "Mobile App Development",
    icon: PhoneIcon,
    description: "Custom mobile applications for businesses and consumers.",
    hoverMotion: "tilt",
  },
  {
    id: "custom-software",
    name: "Custom Software Development",
    icon: LayersIcon,
    description: "Tailor-made software platforms based on business requirements.",
    hoverMotion: "shift-modules",
  },
  {
    id: "crm-erp",
    name: "CRM & ERP Solutions",
    icon: WorkflowIcon,
    description: "Business management systems, workflow automation, and operational platforms.",
    hoverMotion: "blocks",
  },
  {
    id: "ai-solutions",
    name: "Artificial Intelligence Solutions",
    icon: SparkleIcon,
    description: "AI-enabled applications and intelligent automation.",
    hoverMotion: "pulse",
  },
  {
    id: "cloud-digital",
    name: "Cloud & Digital Solutions",
    icon: CloudIcon,
    description: "Cloud platforms, digital transformation, and modern technology solutions.",
    hoverMotion: "float",
  },
];

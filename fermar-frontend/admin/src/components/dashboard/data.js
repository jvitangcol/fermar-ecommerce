// packages
import {
  GalleryVerticalEnd,
  LayoutDashboard,
  ShoppingBag,
  List,
} from "lucide-react";

export const data = {
  user: {
    name: "John Doe",
    email: "m@example.com",
    avatar: "/",
  },
  teams: [
    {
      name: "Fermar Dye Maker",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Products",
      url: "/dashboard/products",
      icon: ShoppingBag,
      items: [
        {
          title: "Products Page",
          url: "/dashboard/products/productId",
        },
        {
          title: "Create Product",
          url: "/dashboard/products/add-product",
        },
      ],
    },
    {
      title: "Orders",
      url: "/dashboard/orders",
      icon: List,
      items: [
        {
          title: "Order Details",
          url: "#",
        },
        {
          title: "Invoice",
          url: "#",
        },
      ],
    },
  ],
};

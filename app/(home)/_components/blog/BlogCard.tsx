import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { VscVerifiedFilled } from "react-icons/vsc";

import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SampleBlogCard = () => {
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/mrboxs.png" alt="mrboxs" />
            <AvatarFallback>mr</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-base font-medium">
              mrboxs <VscVerifiedFilled className="inline-flex" />
            </p>
            <span className="text-sm text-muted-foreground">4 hours ago</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-1">
        <CardTitle>Title</CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur
          quaerat voluptate vero ex tempore quis illo debitis aut aliquid hic.
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link
          href="/blog"
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "group"
          )}
        >
          Read more{" "}
          <ArrowRight className="ml-1 h-4 w-4 transition-all ease-in-out group-hover:translate-x-2" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default SampleBlogCard;

interface BlogItemProps {
  title: string;
  description: string;
  href: string;
  image: string;
  date: string;
  author: {
    name: string;
    image: string;
  };
}

export const BlogCard = ({
  title,
  description,
  href,
  image,
  date,
  author,
}: BlogItemProps) => {
  return (
    <Card>
      <CardHeader className="flex justify-between">
        <div className="flex items-center space-x-4">
          <Avatar>
            <AvatarImage src={author.image} alt={author.name} />
            <AvatarFallback>mr</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <p className="text-base font-medium">
              {author.name} <VscVerifiedFilled className="inline-flex" />
            </p>
            <span className="text-sm text-muted-foreground">{date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-1">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Link
          href={href}
          className={cn(
            buttonVariants({ variant: "ghost", size: "sm" }),
            "group"
          )}
        >
          Read more{" "}
          <ArrowRight className="ml-1 h-4 w-4 transition-all ease-in-out group-hover:translate-x-2" />
        </Link>
      </CardFooter>
    </Card>
  );
};
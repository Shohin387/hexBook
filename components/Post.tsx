"use client";

import UserAvatar from "@/components/UserAvatar";
import { cn, formatter } from "@/lib/utils";
import { Media } from "@/types/media.type";
import {
  BadgeCheckIcon,
  Heart,
  MessageSquare,
  MoreHorizontalIcon,
  SendToBackIcon,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useState } from "react";
import FullScreenImage from "./media/FullScreenImage";
import { MediaPreviews } from "./media/MediaPreview";

interface IPost {
  content: string;
  images?: Media[];
  createdAt: Date;
  author: {
    id: number;
    firstName: string;
    lastName: string;
  };
}

export default function Post({ content, images, createdAt, author }: IPost) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(1000); // для теста
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const handleImageClick = useCallback((url: string) => {
    setFullScreenImage(url);
  }, []);

  const handleLikeClick = () => {
    setIsLiked((prev) => !prev);
    setLikesCount((prev) => (isLiked ? prev - 1 : prev + 1));
  };
  const formattedDate = formatter.format(createdAt);

  return (
    <div className="w-full space-y-3 flex flex-col items-center p-4 bg-primary-theme rounded-md">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-x-3">
          <UserAvatar size={60} gradientBorder />
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2">
              <Link
                href={`/user/${author.id}`}
                className="flex items-center gap-x-2 hover:underline"
              >
                {author.firstName} {author.lastName}
              </Link>
              <BadgeCheckIcon size={20} className="fill-sky-600" />
            </div>
            <span className="text-sm text-muted-foreground">
              {formattedDate}
            </span>
          </div>
        </div>
        <div className="p-2 hover:bg-dark cursor-pointer rounded-full transition-colors">
          <MoreHorizontalIcon className="text-muted-foreground" />
        </div>
      </div>
      {!!images?.length && (
        <MediaPreviews
          attachments={images}
          onClick={() => {}}
          onImageClick={handleImageClick}
        />
      )}
      <p>{content}</p>
      <div className="mt-4 w-full flex items-center justify-between">
        <div className="flex items-center gap-x-6">
          <div
            className="flex items-center gap-x-2 cursor-pointer"
            onClick={handleLikeClick}
          >
            <Heart
              color={isLiked ? "red" : "#6f7376"}
              fill={isLiked ? "red" : "transparent"}
            />
            <span className={cn("text-[#6f7376]", isLiked && "text-red-500")}>
              {likesCount}
            </span>
          </div>
          <div className="flex items-center gap-x-2 cursor-pointer">
            <MessageSquare color="#6f7376" />
            <span className="text-[#6f7376]">1k</span>
          </div>
        </div>
        <SendToBackIcon color="#6f7376" className="cursor-pointer" />
      </div>
      {fullScreenImage && (
        <FullScreenImage
          url={fullScreenImage}
          onClose={() => setFullScreenImage(null)}
        />
      )}
    </div>
  );
}

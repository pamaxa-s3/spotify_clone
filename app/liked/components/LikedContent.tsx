"use client";

import { useEffect } from "react";

import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";

import { ISong } from "@/types";
import MediaItem from "@/components/MediaItem/MediaItem";
import LikeButton from "@/components/LikeButton/LikeButton";
import useOnPlay from "@/hooks/useOnPlay";

interface ILikedContentProps {
  songs: ISong[];
}

const LikedContet: React.FC<ILikedContentProps> = ({ songs }) => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  const onPlay = useOnPlay(songs);

  useEffect(() => {
    if (!isLoading && !user) return router.replace("/");
  }, [isLoading, user, router]);

  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No liked songs.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-2 w-full p-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-x-4 w-full">
          <div className="flex-1">
            <MediaItem data={song} onClick={(id: string) => onPlay(id)} />
          </div>
          <LikeButton songId={song.id} />
        </div>
      ))}
    </div>
  );
};

export default LikedContet;

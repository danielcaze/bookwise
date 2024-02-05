import dayjs from "dayjs";
import { getUserProfileInfoById } from "../app/(app)/profile/actions";
import Avatar from "./Avatar";
import { ProfileData } from "./ProfileData";

export async function ProfileInfo() {
  const profileInfo = await getUserProfileInfoById(
    "4383f783-6ce1-4f92-b1dd-7a7a693c4aef",
  );

  return (
    <div className="flex flex-col gap-8 border-l border-l-gray700 max-w-xs">
      <div className="flex flex-col gap-5 items-center">
        <Avatar avatarUrl={profileInfo?.user.avatar_url} variation="lg" />
        <div className="overflow-hidden text-center">
          <p className="truncate text-gray100  font-bold text-xl leading-short">
            {profileInfo?.user.name}
          </p>
          <span className="block truncate text-gray400 text-sm leading-base">
            {dayjs(profileInfo?.user.created_at).format("[membro desde ]YYYY")}
          </span>
        </div>
      </div>
      <div className="bg-gradient-horizontal rounded-full w-8 h-1 mx-auto"></div>
      {profileInfo && (
        <div className="flex flex-col gap-10 py-5 px-14">
          <ProfileData
            icon="BookOpen"
            title={profileInfo.pagesRead}
            subtitle="Páginas lidas"
          />
          <ProfileData
            icon="Books"
            title={profileInfo.booksReviewed}
            subtitle="Livros avaliados"
          />
          <ProfileData
            icon="UserList"
            title={profileInfo.authorsRead}
            subtitle="Autores lidos"
          />
          <ProfileData
            icon="BookmarkSimple"
            title={profileInfo.mostReadCategory.name}
            subtitle="Categoria mais lida"
          />
        </div>
      )}
    </div>
  );
}

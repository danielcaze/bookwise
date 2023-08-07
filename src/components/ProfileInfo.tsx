import Avatar from "./Avatar";
import { ProfileData } from "./ProfileData";

export function ProfileInfo() {
  return (
    <div className="flex flex-col gap-8 border-l border-l-gray700">
      <div className="flex flex-col gap-5 items-center">
        <Avatar avatarUrl="" variation="lg" />
        <div className="overflow-hidden text-center">
          <p className="truncate text-gray100  font-bold text-xl leading-short">
            Daniel Caze
          </p>
          <span className="block truncate text-gray400 text-sm leading-base">
            membro desde 2019
          </span>
        </div>
      </div>
      <div className="bg-gradient-horizontal rounded-full w-8 h-1 mx-auto"></div>
      <div className="flex flex-col gap-10 py-5 px-14">
        <ProfileData icon="BookOpen" title="3853" subtitle="Páginas lidas" />
        <ProfileData icon="Books" title="10" subtitle="Livros avaliados" />
        <ProfileData icon="UserList" title="8" subtitle="Autores lidos" />
        <ProfileData
          icon="BookmarkSimple"
          title="Computação"
          subtitle="Categoria mais lida"
        />
      </div>
    </div>
  );
}

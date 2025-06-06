import { HiBars3BottomLeft, HiOutlineChatBubbleLeft } from "react-icons/hi2";

import Avatar from "~/components/Avatar";
import Badge from "~/components/Badge";
import LabelIcon from "~/components/LabelIcon";
import { getAvatarUrl } from "~/utils/helpers";

const Card = ({
  title,
  labels,
  members,
  commentCount = 0,
  hasDescription = false,
}: {
  title: string;
  labels: { name: string; colourCode: string | null }[];
  members: {
    publicId: string;
    email: string;
    user: { name: string | null; email: string; image: string | null } | null;
  }[];
  commentCount?: number;
  hasDescription?: boolean;
}) => {
  return (
    <div className="flex flex-col rounded-md border border-light-200 bg-light-50 px-3 py-2 text-sm text-neutral-900 dark:border-dark-200 dark:bg-dark-200 dark:text-dark-1000 dark:hover:bg-dark-300">
      <span>{title}</span>
      {labels.length || members.length ? (
        <div className="mt-2 flex flex-col justify-end">
          <div className="space-x-0.5">
            {labels.map((label) => (
              <Badge
                value={label.name}
                iconLeft={<LabelIcon colourCode={label.colourCode} />}
              />
            ))}
          </div>
          <div className="mt-1 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              {hasDescription ? <HiBars3BottomLeft /> : null}
              {commentCount ? (
                <span className="flex items-center space-x-2 text-xs text-light-900 dark:text-dark-1000">
                  <HiOutlineChatBubbleLeft />
                  <span>{commentCount}</span>
                </span>
              ) : null}
            </div>
            <div className="isolate flex justify-end -space-x-1 overflow-hidden">
              {members.map(({ user, email }) => {
                const avatarUrl = user?.image
                  ? getAvatarUrl(user.image)
                  : undefined;

                return (
                  <Avatar
                    name={user?.name ?? ""}
                    email={user?.email ?? email}
                    imageUrl={avatarUrl}
                    size="sm"
                  />
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Card;

import { UserInfo } from "@/components/molecules/UserInfo";
import { Button } from "@/components/atoms/Button";

export const UserCard = ({
  user,
  onClick,
}: {
  user: {
    name: string;
    title: string;
    avatarUrl: string;
  };
  onClick: () => void;
}) => (
  <div className="p-4 border rounded-lg shadow-sm flex justify-between items-center">
    <UserInfo
      name={user.name}
      title={user.title}
      avatarUrl={user.avatarUrl}
    />
    <Button label="메시지" onClick={onClick} />
  </div>
);

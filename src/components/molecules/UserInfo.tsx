import { Avatar } from "@/components/atoms/Avatar";
import { Text } from "@/components/atoms/Text";

export const UserInfo = ({
  name,
  title,
  avatarUrl,
}: {
  name: string;
  title: string;
  avatarUrl: string;
}) => (
  <div className="flex items-center space-x-3">
    <Avatar src={avatarUrl} alt={name} />
    <div>
      <Text className="font-bold">{name}</Text>
      <Text className="text-sm text-gray-500">{title}</Text>
    </div>
  </div>
);

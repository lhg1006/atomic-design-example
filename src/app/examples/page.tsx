'use client';

import { UserCard } from "@/components/organisms/UserCard";
import { Header } from "@/components/organisms/Header";

export default function ExamplesPage() {
  const users = [
    {
      name: "김철수",
      title: "프론트엔드 개발자",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    },
    {
      name: "이영희",
      title: "UI/UX 디자이너",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jane",
    },
    {
      name: "박지성",
      title: "백엔드 개발자",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mike",
    },
  ];

  const handleSearch = (query: string) => {
    alert(`검색어: ${query}`);
  };

  const handleLogin = () => {
    alert('로그인 버튼이 클릭되었습니다!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onSearch={handleSearch} onLogin={handleLogin} />
      <main className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-8">컴포넌트 예제</h1>
        <div className="space-y-4">
          {users.map((user, index) => (
            <UserCard
              key={index}
              user={user}
              onClick={() => alert(`${user.name}님에게 메시지를 보냈습니다!`)}
            />
          ))}
        </div>
      </main>
    </div>
  );
} 
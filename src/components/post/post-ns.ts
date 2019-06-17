export namespace PostNS {

  export interface PostListProps {
    postsData: PostData[];
  }

  interface UserData { name: string; }

  export interface PostData {
    id: number;
    created_at: string;
    text: string;
    user: UserData;
  }

  export interface PostProps { data: PostData; }

  export interface DateProps {
    date: string;
  }
}

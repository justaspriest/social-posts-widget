export declare namespace Widget {

  export interface Props {
    feedURL: string;
    countOfPosts: number;
    refreshInterval: number;
  }

  export interface TitleProps { text: string; }
}

export declare namespace Post {

  export interface Props { data: Data; }

  export interface ListProps {
    postsData: Data[];
  }

  export interface Data extends PostData {
    userName: string;
  }

  interface PostData {
    id: number;
    created_at: string;
    text: string;
  }

  export interface DateProps {
    date: string;
  }
}

export declare namespace MassRelevance {

    export interface Feed extends Post.PostData {
      user: UserData;
    }

    interface UserData { name: string; }
}

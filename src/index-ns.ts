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

  export interface Data {
    id: number;
    created_at: string;
    text: string;
    userName: string;
  }

  export interface DateProps {
    date: string;
  }
}

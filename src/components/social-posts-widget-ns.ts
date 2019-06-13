import { PostNS } from "./post/post-ns";

export namespace SocialPostsWidgetNS {

    export interface IWidgetProps {
        feedURL: string;
        countOfPosts: number;
        refreshInterval: number;
    }

    export interface IPost {
        props: PostNS.IProps;
    }
}

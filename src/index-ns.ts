import { PostNS } from "./components/post/post-ns";

export declare namespace SocialPostsWidgetNS {

    export interface IWidgetProps {
        feedURL: string;
        countOfPosts: number;
        refreshInterval: number;
    }

    export interface IPost extends JSX.Element {
        props: PostNS.IProps;
    }
}

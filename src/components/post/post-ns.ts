export namespace PostNS {

    export interface PostListProps {
        postsData: IData[];
    }

    interface IDataUser { name: string; }

    export interface IData {
        id: number;
        created_at: string;
        text: string;
        user: IDataUser;
    }

    export interface IProps { data: IData; }

    export interface IDateProps {
        date: string;
    }
}

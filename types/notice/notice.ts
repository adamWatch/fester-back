export interface Notice{
    isVisible:boolean;
    noticeText:string;
    noticeColor:string;
}

export interface NoticeWithId extends Notice{
    id:string;
}

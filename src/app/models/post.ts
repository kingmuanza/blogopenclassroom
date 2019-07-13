export class Post {

    id: number;

    constructor(public title: string, public content: string, public loveIts: number, public createdAt: Date) {

        this.loveIts = 0;
        this.createdAt = new Date();
        this.id = new Date().getUTCMilliseconds() + Math.floor(Math.random() * 123456789);
    }

}

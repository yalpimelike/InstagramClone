export interface post {
 data : {
    id : number,
    title : string,
    description : string,
    photourl : string,
    likes : object,
    comments : Array<comment>
 }
}

export interface comment{
   text : string,
   userName : string
}